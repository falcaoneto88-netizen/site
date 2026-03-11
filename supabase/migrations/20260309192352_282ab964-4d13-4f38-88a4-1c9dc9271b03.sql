
-- Drop all existing restrictive policies
DROP POLICY IF EXISTS "Auth delete site content" ON public.site_content;
DROP POLICY IF EXISTS "Auth insert site content" ON public.site_content;
DROP POLICY IF EXISTS "Auth update site content" ON public.site_content;
DROP POLICY IF EXISTS "Public read site content" ON public.site_content;

-- Recreate as PERMISSIVE
CREATE POLICY "Public read site content" ON public.site_content
AS PERMISSIVE FOR SELECT TO public USING (true);

CREATE POLICY "Auth insert site content" ON public.site_content
AS PERMISSIVE FOR INSERT TO authenticated WITH CHECK (true);

CREATE POLICY "Auth update site content" ON public.site_content
AS PERMISSIVE FOR UPDATE TO authenticated USING (true);

CREATE POLICY "Auth delete site content" ON public.site_content
AS PERMISSIVE FOR DELETE TO authenticated USING (true);
