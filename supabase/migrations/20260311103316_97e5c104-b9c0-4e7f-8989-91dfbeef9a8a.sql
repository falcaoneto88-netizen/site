
-- Create storage bucket for editor images
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES ('editor-images', 'editor-images', true, 10485760, ARRAY['image/jpeg', 'image/png', 'image/gif', 'image/webp', 'image/svg+xml'])
ON CONFLICT (id) DO NOTHING;

-- Allow anyone to upload to editor-images bucket
CREATE POLICY "Allow public upload to editor-images"
ON storage.objects FOR INSERT
TO anon, authenticated
WITH CHECK (bucket_id = 'editor-images');

-- Allow anyone to read from editor-images bucket
CREATE POLICY "Allow public read from editor-images"
ON storage.objects FOR SELECT
TO anon, authenticated
USING (bucket_id = 'editor-images');

-- Allow anyone to update in editor-images bucket
CREATE POLICY "Allow public update in editor-images"
ON storage.objects FOR UPDATE
TO anon, authenticated
USING (bucket_id = 'editor-images');
