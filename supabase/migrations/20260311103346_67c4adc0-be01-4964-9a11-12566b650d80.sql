
-- Allow public read of project_content so landing pages can load content without auth
CREATE POLICY "Public can read project content"
ON public.project_content FOR SELECT
TO anon
USING (true);
