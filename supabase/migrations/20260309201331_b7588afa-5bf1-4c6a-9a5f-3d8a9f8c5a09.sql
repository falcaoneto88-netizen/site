
-- Drop all existing restrictive policies
DROP POLICY IF EXISTS "Public read site content" ON public.site_content;
DROP POLICY IF EXISTS "Auth insert site content" ON public.site_content;
DROP POLICY IF EXISTS "Auth update site content" ON public.site_content;
DROP POLICY IF EXISTS "Auth delete site content" ON public.site_content;

-- Recreate as PERMISSIVE (default)
CREATE POLICY "public_read_site_content" ON public.site_content
  FOR SELECT TO public USING (true);

CREATE POLICY "auth_insert_site_content" ON public.site_content
  FOR INSERT TO authenticated WITH CHECK (true);

CREATE POLICY "auth_update_site_content" ON public.site_content
  FOR UPDATE TO authenticated USING (true);

CREATE POLICY "auth_delete_site_content" ON public.site_content
  FOR DELETE TO authenticated USING (true);

-- Ensure anon can execute the upsert function
GRANT EXECUTE ON FUNCTION public.upsert_site_content(text, jsonb) TO anon;
GRANT EXECUTE ON FUNCTION public.upsert_site_content(text, jsonb) TO authenticated;
