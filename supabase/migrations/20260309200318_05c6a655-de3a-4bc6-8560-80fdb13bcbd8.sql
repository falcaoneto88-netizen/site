
-- Drop all existing RESTRICTIVE policies
DROP POLICY IF EXISTS "Public read site content" ON public.site_content;
DROP POLICY IF EXISTS "Auth insert site content" ON public.site_content;
DROP POLICY IF EXISTS "Auth update site content" ON public.site_content;
DROP POLICY IF EXISTS "Auth delete site content" ON public.site_content;

-- Recreate as PERMISSIVE (default)
CREATE POLICY "Public read site content" ON public.site_content
FOR SELECT TO public USING (true);

CREATE POLICY "Auth insert site content" ON public.site_content
FOR INSERT TO authenticated WITH CHECK (true);

CREATE POLICY "Auth update site content" ON public.site_content
FOR UPDATE TO authenticated USING (true);

CREATE POLICY "Auth delete site content" ON public.site_content
FOR DELETE TO authenticated USING (true);

-- Also grant anon explicit permissions for RPC function
GRANT USAGE ON SCHEMA public TO anon;
GRANT EXECUTE ON FUNCTION public.upsert_site_content TO anon;
GRANT SELECT ON public.site_content TO anon;
