
-- Remove all existing policies
DROP POLICY IF EXISTS "public_read_site_content" ON public.site_content;
DROP POLICY IF EXISTS "auth_insert_site_content" ON public.site_content;
DROP POLICY IF EXISTS "auth_update_site_content" ON public.site_content;
DROP POLICY IF EXISTS "auth_delete_site_content" ON public.site_content;

-- Allow everything for everyone
CREATE POLICY "allow_all_select" ON public.site_content FOR SELECT TO public USING (true);
CREATE POLICY "allow_all_insert" ON public.site_content FOR INSERT TO public WITH CHECK (true);
CREATE POLICY "allow_all_update" ON public.site_content FOR UPDATE TO public USING (true);
CREATE POLICY "allow_all_delete" ON public.site_content FOR DELETE TO public USING (true);

-- Ensure anon role can use the upsert function
GRANT EXECUTE ON FUNCTION public.upsert_site_content(text, jsonb) TO anon;
