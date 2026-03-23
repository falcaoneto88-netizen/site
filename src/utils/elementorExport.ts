
import { supabase } from '@/integrations/supabase/client';
import { mapToElementor } from './elementorMapper';

export const generateElementorExport = async (projectId: string) => {
    try {
        console.log(`[Export] Iniciando exportação para o projeto: ${projectId}`);

        // 1. Buscar dados do projeto
        const { data: project, error: pError } = await supabase
            .from('projects')
            .select('*')
            .eq('slug', projectId)
            .single();

        if (pError || !project) throw new Error('Projeto não encontrado');

        // 2. Buscar conteúdo publicado
        const { data: contents, error: cError } = await supabase
            .from('project_content')
            .select('*')
            .eq('project_id', project.id);

        if (cError) throw cError;

        // Converter array de conteúdo para objeto flat
        const contentMap = contents.reduce((acc: any, item: any) => {
            acc[item.element_id] = item.content;
            return acc;
        }, {});

        // 3. Mapear para Elementor JSON
        const elementorJson = mapToElementor(project, contentMap);

        // 4. Transformar em Blob e disparar download
        const blob = new Blob([JSON.stringify(elementorJson, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `${project.slug}-elementor.json`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);

        console.log(`[Export] Exportação concluída com sucesso.`);
        return true;
    } catch (error) {
        console.error('[Export] Erro ao exportar:', error);
        alert('Erro ao exportar projeto. Verifique o console.');
        return false;
    }
};
