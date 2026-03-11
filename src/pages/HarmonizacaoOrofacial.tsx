import React, { useEffect } from 'react';
import { NavbarV2 } from '../components/v2/NavbarV2';
import { FooterV2 } from '../components/v2/FooterV2';
import { HarmonizacaoHero } from '../components/harmonizacao/HarmonizacaoHero';
import { FuturisticMarquee } from '../components/implantes/FuturisticMarquee';
import { HarmonizacaoWhatIs } from '../components/harmonizacao/HarmonizacaoWhatIs';
import { HarmonizacaoProblem } from '../components/harmonizacao/HarmonizacaoProblem';
import { HarmonizacaoSpecialists } from '../components/harmonizacao/HarmonizacaoSpecialists';
import { HarmonizacaoProcedures } from '../components/harmonizacao/HarmonizacaoProcedures';
import { HarmonizacaoBenefits } from '../components/harmonizacao/HarmonizacaoBenefits';
import { HarmonizacaoTestimonials } from '../components/harmonizacao/HarmonizacaoTestimonials';
import { HarmonizacaoCTA } from '../components/harmonizacao/HarmonizacaoCTA';
import { ContactV2 } from '../components/v2/ContactV2';
import { FAQV2 } from '../components/v2/FAQV2';
import { MapSection } from '../components/MapSection';
import { EditorProvider } from '../context/EditorContext';
import { EditorToolbar } from '../components/EditorToolbar';
import { SectionFade } from '../components/SectionFade';

const HarmonizacaoOrofacial = () => {
    const slug = window.location.pathname.split('/projeto/')[1]?.split('/')[0] || 'oral-unic';
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <EditorProvider projectId={slug}>
            <div className="min-h-screen selection:bg-primary/10 selection:text-primary">
                <NavbarV2 />
                <main className="space-y-0 text-sm md:text-base">
                    <HarmonizacaoHero />
                    <FuturisticMarquee text="Harmonização Orofacial -" velocity={30} />
                    <FuturisticMarquee text="Harmonização Orofacial -" velocity={30} direction="right" />
                    <SectionFade topColor="#FDFCF8" bottomColor="#FDFCF8"><HarmonizacaoWhatIs /></SectionFade>
                    <SectionFade topColor="hsl(var(--primary))" bottomColor="hsl(var(--primary))"><HarmonizacaoProblem /></SectionFade>
                    <HarmonizacaoSpecialists />
                    <SectionFade topColor="hsl(var(--primary))" bottomColor="hsl(var(--primary))"><HarmonizacaoProcedures /></SectionFade>
                    <HarmonizacaoBenefits />
                    <HarmonizacaoTestimonials />
                    <FuturisticMarquee text="Harmonização Orofacial -" velocity={40} />
                    <FuturisticMarquee text="Harmonização Orofacial -" velocity={40} direction="right" />
                    <SectionFade topColor="hsl(var(--primary))" bottomColor="hsl(var(--primary))"><ContactV2 /></SectionFade>
                    <SectionFade topColor="hsl(var(--background))" bottomColor="hsl(var(--background))"><FAQV2 /></SectionFade>
                    <SectionFade topColor="hsl(var(--primary))" bottomColor="hsl(var(--primary))"><HarmonizacaoCTA /></SectionFade>
                    <MapSection />
                </main>
                <FooterV2 />
                <EditorToolbar />
            </div>
        </EditorProvider>
    );
};

export default HarmonizacaoOrofacial;
