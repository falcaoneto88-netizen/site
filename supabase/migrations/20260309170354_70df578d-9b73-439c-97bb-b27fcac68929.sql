
DROP POLICY IF EXISTS "Anyone can read site content" ON public.site_content;
DROP POLICY IF EXISTS "Authenticated users can delete site content" ON public.site_content;
DROP POLICY IF EXISTS "Authenticated users can insert site content" ON public.site_content;
DROP POLICY IF EXISTS "Authenticated users can update site content" ON public.site_content;

CREATE POLICY "Public read site content" ON public.site_content AS PERMISSIVE FOR SELECT TO public USING (true);
CREATE POLICY "Auth insert site content" ON public.site_content AS PERMISSIVE FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Auth update site content" ON public.site_content AS PERMISSIVE FOR UPDATE TO authenticated USING (true);
CREATE POLICY "Auth delete site content" ON public.site_content AS PERMISSIVE FOR DELETE TO authenticated USING (true);
