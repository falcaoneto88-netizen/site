-- Create storage bucket for editor images
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES ('editor-images', 'editor-images', true, 10485760, ARRAY['image/png', 'image/jpeg', 'image/webp', 'image/gif', 'image/svg+xml'])
ON CONFLICT (id) DO NOTHING;

-- Allow public read access
CREATE POLICY "Public read access for editor images"
ON storage.objects FOR SELECT
USING (bucket_id = 'editor-images');

-- Allow anonymous uploads (editor needs this)
CREATE POLICY "Allow anonymous uploads to editor images"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'editor-images');

-- Allow anonymous updates
CREATE POLICY "Allow anonymous updates to editor images"  
ON storage.objects FOR UPDATE
USING (bucket_id = 'editor-images');

-- Allow anonymous deletes
CREATE POLICY "Allow anonymous deletes from editor images"
ON storage.objects FOR DELETE
USING (bucket_id = 'editor-images');