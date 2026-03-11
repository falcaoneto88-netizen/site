
-- Ensure anon can call the upsert function (it's SECURITY DEFINER so it's safe)
GRANT EXECUTE ON FUNCTION public.upsert_site_content(text, jsonb) TO anon;
GRANT EXECUTE ON FUNCTION public.upsert_site_content(text, jsonb) TO authenticated;
