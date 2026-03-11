-- Table to store editor content as key-value pairs
CREATE TABLE public.site_content (
  id TEXT PRIMARY KEY,
  value JSONB,
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.site_content ENABLE ROW LEVEL SECURITY;

-- Anyone can read (visitors see published content)
CREATE POLICY "Anyone can read site content"
  ON public.site_content FOR SELECT
  USING (true);

-- Only authenticated users can insert/update/delete (admin editors)
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

-- Function to upsert content
CREATE OR REPLACE FUNCTION public.upsert_site_content(p_id TEXT, p_value JSONB)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.site_content (id, value, updated_at)
  VALUES (p_id, p_value, now())
  ON CONFLICT (id) DO UPDATE SET value = p_value, updated_at = now();
END;
$$;