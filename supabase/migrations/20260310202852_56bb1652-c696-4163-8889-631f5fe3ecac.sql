-- Fix RLS policies: change from RESTRICTIVE to PERMISSIVE

-- Drop existing restrictive policies on projects
DROP POLICY IF EXISTS "Users can view their own projects" ON public.projects;
DROP POLICY IF EXISTS "Users can create their own projects" ON public.projects;
DROP POLICY IF EXISTS "Users can update their own projects" ON public.projects;
DROP POLICY IF EXISTS "Users can delete their own projects" ON public.projects;

-- Recreate as PERMISSIVE
CREATE POLICY "Users can view their own projects" ON public.projects FOR SELECT TO authenticated USING (auth.uid() = user_id);
CREATE POLICY "Users can create their own projects" ON public.projects FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update their own projects" ON public.projects FOR UPDATE TO authenticated USING (auth.uid() = user_id);
CREATE POLICY "Users can delete their own projects" ON public.projects FOR DELETE TO authenticated USING (auth.uid() = user_id);

-- Drop existing restrictive policies on project_content
DROP POLICY IF EXISTS "Users can view their project content" ON public.project_content;
DROP POLICY IF EXISTS "Users can insert their project content" ON public.project_content;
DROP POLICY IF EXISTS "Users can update their project content" ON public.project_content;
DROP POLICY IF EXISTS "Users can delete their project content" ON public.project_content;

-- Recreate as PERMISSIVE
CREATE POLICY "Users can view their project content" ON public.project_content FOR SELECT TO authenticated USING (EXISTS (SELECT 1 FROM projects WHERE projects.id = project_content.project_id AND projects.user_id = auth.uid()));
CREATE POLICY "Users can insert their project content" ON public.project_content FOR INSERT TO authenticated WITH CHECK (EXISTS (SELECT 1 FROM projects WHERE projects.id = project_content.project_id AND projects.user_id = auth.uid()));
CREATE POLICY "Users can update their project content" ON public.project_content FOR UPDATE TO authenticated USING (EXISTS (SELECT 1 FROM projects WHERE projects.id = project_content.project_id AND projects.user_id = auth.uid()));
CREATE POLICY "Users can delete their project content" ON public.project_content FOR DELETE TO authenticated USING (EXISTS (SELECT 1 FROM projects WHERE projects.id = project_content.project_id AND projects.user_id = auth.uid()));