-- Drop all restrictive policies
DROP POLICY "Anyone can read site content" ON public.site_content;
DROP POLICY "Authenticated users can insert site content" ON public.site_content;
DROP POLICY "Authenticated users can update site content" ON public.site_content;
DROP POLICY "Authenticated users can delete site content" ON public.site_content;

-- Recreate as PERMISSIVE (default)
CREATE POLICY "Anyone can read site content"
  ON public.site_content FOR SELECT
  USING (true);

CREATE POLICY "Authenticated users can insert site content"
  ON public.site_content FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update site content"
  ON public.site_content FOR UPDATE
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can delete site content"
  ON public.site_content FOR DELETE
  TO authenticated
  USING (true);