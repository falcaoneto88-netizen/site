import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';

// Oral Unic Components (v2)
import { NavbarV2 } from '../components/v2/NavbarV2';
import { HeroV2 } from '../components/v2/HeroV2';
import { ServicesV2 } from '../components/v2/ServicesV2';
import { WhyChooseV2 } from '../components/v2/WhyChooseV2';
import { PatientResults } from '../components/PatientResults';
import { DoctorSectionV2 } from '../components/v2/DoctorSectionV2';
import { HowItWorks } from '../components/HowItWorks';
import { UnitGallery } from '../components/UnitGallery';
import { FAQV2 } from '../components/v2/FAQV2';
import { ContactV2 } from '../components/v2/ContactV2';
import { FooterV2 } from '../components/v2/FooterV2';

// Dr. João Falcão Components
import { FalcaoNavbar } from '../components/dr-joao-falcao/FalcaoNavbar';
import { FalcaoHero } from '../components/dr-joao-falcao/FalcaoHero';
import { FalcaoProblem } from '../components/dr-joao-falcao/FalcaoProblem';
import { FalcaoWhatIs } from '../components/dr-joao-falcao/FalcaoWhatIs';
import { FalcaoDoctor } from '../components/dr-joao-falcao/FalcaoDoctor';
import { FalcaoBenefits } from '../components/dr-joao-falcao/FalcaoBenefits';
import { FalcaoEvaluation } from '../components/dr-joao-falcao/FalcaoEvaluation';
import { FalcaoFAQ } from '../components/dr-joao-falcao/FalcaoFAQ';
import { FalcaoCTA } from '../components/dr-joao-falcao/FalcaoCTA';
import { FalcaoFooter } from '../components/dr-joao-falcao/FalcaoFooter';

import { MapSection } from '../components/MapSection';
import { EditorProvider } from '../context/EditorContext';
import { EditorToolbar } from '../components/EditorToolbar';
import { SectionFade } from '../components/SectionFade';

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
                return (
                    <>
                        <NavbarV2 />
                        <main className="space-y-0 text-sm md:text-base">
                            <HeroV2 />
                            <SectionFade topColor="#FDFCF8" bottomColor="#FDFCF8">
                                <ServicesV2 />
                            </SectionFade>
                            <SectionFade topColor="#FDFCF8" bottomColor="#FDFCF8">
                                <WhyChooseV2 />
                            </SectionFade>
                            <SectionFade topColor="#FDFCF8" bottomColor="#FDFCF8">
                                <PatientResults />
                            </SectionFade>
                            <DoctorSectionV2 />
                            <SectionFade topColor="#FDFCF8" bottomColor="#FDFCF8">
                                <HowItWorks />
                            </SectionFade>
                            <SectionFade topColor="#FDFCF8" bottomColor="#FDFCF8">
                                <UnitGallery />
                            </SectionFade>
                            <SectionFade topColor="hsl(var(--background))" bottomColor="hsl(var(--background))">
                                <FAQV2 />
                            </SectionFade>
                            <SectionFade topColor="hsl(var(--primary))" bottomColor="hsl(var(--primary))">
                                <ContactV2 />
                            </SectionFade>
                            <MapSection />
                        </main>
                        <FooterV2 />
                    </>
                );
            case 'joao-falcao':
                return (
                    <div className="bg-[#0A0A0A]">
                        <FalcaoNavbar />
                        <main>
                            <FalcaoHero />
                            <div id="problema">
                                <FalcaoProblem />
                            </div>
                            <div id="procedimento">
                                <FalcaoWhatIs />
                            </div>
                            <div id="doutor">
                                <FalcaoDoctor />
                            </div>
                            <div id="beneficios">
                                <FalcaoBenefits />
                            </div>
                            <div id="avaliacao">
                                <FalcaoEvaluation />
                            </div>
                            <div id="faq">
                                <FalcaoFAQ />
                            </div>
                            <FalcaoCTA />
                        </main>
                        <FalcaoFooter />
                    </div>
                );
            case 'universal':
            default:
                return <UniversalTemplate />;
        }
    };

    return (
        <EditorProvider projectId={slug || 'oral-unic'}>
            <div className="min-h-screen selection:bg-primary/10 selection:text-primary">
                {renderTemplate()}
                <EditorToolbar />
            </div>
        </EditorProvider>
    );
};

export default HomePreview;
