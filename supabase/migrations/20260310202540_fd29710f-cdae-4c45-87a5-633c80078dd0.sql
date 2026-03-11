-- Create projects table for multi-client site builder
CREATE TABLE public.projects (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  template TEXT NOT NULL DEFAULT 'oral-unic',
  settings JSONB NOT NULL DEFAULT '{}',
  status TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'published', 'archived')),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;

-- Users can only see their own projects
CREATE POLICY "Users can view their own projects"
  ON public.projects FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own projects"
  ON public.projects FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own projects"
  ON public.projects FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own projects"
  ON public.projects FOR DELETE
  USING (auth.uid() = user_id);

-- Timestamp trigger
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER update_projects_updated_at
  BEFORE UPDATE ON public.projects
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Project content table (per-project editable content)
CREATE TABLE public.project_content (
  id TEXT NOT NULL,
  project_id UUID NOT NULL REFERENCES public.projects(id) ON DELETE CASCADE,
  value JSONB,
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  PRIMARY KEY (id, project_id)
);

ALTER TABLE public.project_content ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their project content"
  ON public.project_content FOR SELECT
  USING (EXISTS (
    SELECT 1 FROM public.projects WHERE projects.id = project_content.project_id AND projects.user_id = auth.uid()
  ));

CREATE POLICY "Users can insert their project content"
  ON public.project_content FOR INSERT
  WITH CHECK (EXISTS (
    SELECT 1 FROM public.projects WHERE projects.id = project_content.project_id AND projects.user_id = auth.uid()
  ));

CREATE POLICY "Users can update their project content"
  ON public.project_content FOR UPDATE
  USING (EXISTS (
    SELECT 1 FROM public.projects WHERE projects.id = project_content.project_id AND projects.user_id = auth.uid()
  ));

CREATE POLICY "Users can delete their project content"
  ON public.project_content FOR DELETE
  USING (EXISTS (
    SELECT 1 FROM public.projects WHERE projects.id = project_content.project_id AND projects.user_id = auth.uid()
  ));

CREATE TRIGGER update_project_content_updated_at
  BEFORE UPDATE ON public.project_content
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();