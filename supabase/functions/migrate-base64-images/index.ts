import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Fetch all site_content entries
    const { data: entries, error } = await supabase
      .from("site_content")
      .select("id, value");

    if (error) throw error;

    let migrated = 0;
    let deleted = 0;

    for (const entry of entries || []) {
      const value = entry.value;
      
      // Check if value is a base64 data URL
      if (typeof value === "string" && value.startsWith("data:image/")) {
        try {
          // Extract mime type and base64 data
          const matches = value.match(/^data:(image\/\w+);base64,(.+)$/);
          if (!matches) {
            console.log(`Skipping ${entry.id}: invalid base64 format`);
            continue;
          }

          const mimeType = matches[1];
          const base64Data = matches[2];
          const ext = mimeType.split("/")[1] || "png";
          const fileName = `migrated_${entry.id}_${Date.now()}.${ext}`;

          // Decode base64 to binary
          const binaryString = atob(base64Data);
          const bytes = new Uint8Array(binaryString.length);
          for (let i = 0; i < binaryString.length; i++) {
            bytes[i] = binaryString.charCodeAt(i);
          }

          // Upload to storage
          const { error: uploadError } = await supabase.storage
            .from("editor-images")
            .upload(fileName, bytes.buffer, {
              contentType: mimeType,
              upsert: true,
            });

          if (uploadError) {
            console.error(`Upload error for ${entry.id}:`, uploadError);
            continue;
          }

          // Get public URL
          const { data: urlData } = supabase.storage
            .from("editor-images")
            .getPublicUrl(fileName);

          // Update DB entry with URL instead of base64
          const { error: updateError } = await supabase
            .from("site_content")
            .update({ value: urlData.publicUrl, updated_at: new Date().toISOString() })
            .eq("id", entry.id);

          if (updateError) {
            console.error(`Update error for ${entry.id}:`, updateError);
            continue;
          }

          migrated++;
          console.log(`Migrated ${entry.id} → ${fileName}`);
        } catch (e) {
          console.error(`Error processing ${entry.id}:`, e);
        }
      }
    }

    return new Response(
      JSON.stringify({ success: true, migrated, deleted, total: entries?.length || 0 }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ error: String(err) }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
