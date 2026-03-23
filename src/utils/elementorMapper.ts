
// Utility to generate a unique ID for Elementor elements
const generateId = () => Math.random().toString(36).substr(2, 7);

export const mapToElementor = (projectData: any, content: any) => {
    const template = {
        title: projectData.name || 'Exported Template',
        type: 'page',
        version: '0.4',
        page_settings: {
            "post_title": projectData.name,
            "post_status": "publish"
        },
        content: [] as any[]
    };

    // 1. HERO SECTION
    template.content.push({
        id: generateId(),
        elType: 'section',
        settings: {
            background_background: 'classic',
            background_color: '#050505',
            padding: { unit: 'px', top: '100', bottom: '100', left: '0', right: '0', isLinked: false }
        },
        elements: [{
            id: generateId(),
            elType: 'column',
            elements: [
                {
                    id: generateId(),
                    elType: 'widget',
                    widgetType: 'heading',
                    settings: {
                        title: content.hero_title || 'Transforme sua presença digital',
                        size: 'xl',
                        header_size: 'h1',
                        align: 'center',
                        title_color: '#ffffff'
                    }
                },
                {
                    id: generateId(),
                    elType: 'widget',
                    widgetType: 'text-editor',
                    settings: {
                        editor: content.hero_description || 'Uma solução completa e minimalista desenvolvida para quem busca resultados extraordinários.',
                        align: 'center',
                        text_color: 'rgba(255,255,255,0.4)'
                    }
                },
                {
                    id: generateId(),
                    elType: 'widget',
                    widgetType: 'button',
                    settings: {
                        text: content.hero_cta_text || 'Começar Agora',
                        align: 'center',
                        background_color: '#ffffff',
                        border_radius: { unit: 'px', top: '12', right: '12', bottom: '12', left: '12', isLinked: true },
                        typography_typography: 'custom',
                        typography_font_weight: 'bold',
                        button_text_color: '#000000'
                    }
                }
            ]
        }]
    });

    // 2. FEATURES SECTION
    template.content.push({
        id: generateId(),
        elType: 'section',
        settings: {
            background_background: 'classic',
            background_color: '#050505',
            padding: { unit: 'px', top: '80', bottom: '80', left: '0', right: '0', isLinked: false }
        },
        elements: [{
            id: generateId(),
            elType: 'column',
            elements: [
                {
                    id: generateId(),
                    elType: 'widget',
                    widgetType: 'heading',
                    settings: {
                        title: content.features_title || 'Tudo o que você precisa para escalar',
                        align: 'center',
                        title_color: '#ffffff'
                    }
                },
                {
                    id: generateId(),
                    elType: 'widget',
                    widgetType: 'divider',
                    settings: { width: { unit: '%', size: 10 }, align: 'center', color: '#3b82f6' }
                }
            ]
        }]
    });

    // 3. CTA SECTION
    template.content.push({
        id: generateId(),
        elType: 'section',
        settings: {
            background_background: 'classic',
            background_color: '#0a0a0a',
            padding: { unit: 'px', top: '120', bottom: '120', left: '0', right: '0', isLinked: false }
        },
        elements: [{
            id: generateId(),
            elType: 'column',
            elements: [
                {
                    id: generateId(),
                    elType: 'widget',
                    widgetType: 'heading',
                    settings: {
                        title: content.cta_title || 'Pronto para o próximo nível?',
                        align: 'center',
                        title_color: '#ffffff',
                        size: 'xl'
                    }
                },
                {
                    id: generateId(),
                    elType: 'widget',
                    widgetType: 'button',
                    settings: {
                        text: content.cta_button_text || 'Agendar Reunião',
                        align: 'center',
                        background_color: '#ffffff',
                        button_text_color: '#000000',
                        typography_font_weight: 'bold'
                    }
                }
            ]
        }]
    });

    return template;
};
