import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';

// Shared layouts
import { OralUnicLayout } from '../components/v2/OralUnicLayout';
import { FalcaoLayout } from '../components/dr-joao-falcao/FalcaoLayout';
import { MarcioLayout } from '../components/marcio-freitas/MarcioLayout';

import { EditorProvider, useEditor } from '../context/EditorContext';
import { EditorToolbar } from '../components/EditorToolbar';

import UniversalTemplate from '../templates/UniversalTemplate';

const HomePreview = () => {
    const { slug } = useParams();
    const [template, setTemplate] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProject = async () => {
            if (!slug) return;
            const { data } = await supabase
                .from('projects')
                .select('template')
                .eq('slug', slug)
                .maybeSingle();

            setTemplate(data?.template || 'oral-unic');
            setLoading(false);
        };
        fetchProject();
        window.scrollTo(0, 0);
    }, [slug]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[hsl(296,82%,6%)]">
                <div className="w-8 h-8 border-2 border-white/20 border-t-[hsl(174,68%,50%)] rounded-full animate-spin" />
            </div>
        );
    }

    const renderTemplate = () => {
        switch (template) {
            case 'oral-unic':
                return <OralUnicLayout />;
            case 'joao-falcao':
                return <FalcaoLayout />;
            case 'marcio-freitas':
                return <MarcioLayout />;
            case 'universal':
            default:
                return <UniversalTemplate />;
        }
    };

    return (
        <EditorProvider projectId={slug || 'oral-unic'}>
            <HomePreviewContent renderTemplate={renderTemplate} />
        </EditorProvider>
    );
};

const HomePreviewContent: React.FC<{ renderTemplate: () => React.ReactNode }> = ({ renderTemplate }) => {
    const { isLoaded } = useEditor();

    if (!isLoaded) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#0A0A0A]">
                <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin" />
            </div>
        );
    }

    return (
        <div className="min-h-screen selection:bg-primary/10 selection:text-primary">
            {renderTemplate()}
            <EditorToolbar />
        </div>
    );
};

export default HomePreview;
