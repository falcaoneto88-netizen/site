
-- Allow public read of projects so landing pages can resolve template without auth
CREATE POLICY "Public can read projects"
ON public.projects FOR SELECT
TO anon
USING (true);
