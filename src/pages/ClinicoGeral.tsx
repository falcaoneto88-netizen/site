import React, { useEffect } from 'react';
import { NavbarV2 } from '../components/v2/NavbarV2';
import { FooterV2 } from '../components/v2/FooterV2';
import { ClinicoGeralHero } from '../components/clinico-geral/ClinicoGeralHero';
import { FuturisticMarquee } from '../components/implantes/FuturisticMarquee';
import { ClinicoGeralWhatIs } from '../components/clinico-geral/ClinicoGeralWhatIs';
import { ClinicoGeralProblem } from '../components/clinico-geral/ClinicoGeralProblem';
import { ClinicoGeralSpecialists } from '../components/clinico-geral/ClinicoGeralSpecialists';
import { ClinicoGeralProcedures } from '../components/clinico-geral/ClinicoGeralProcedures';
import { ClinicoGeralBenefits } from '../components/clinico-geral/ClinicoGeralBenefits';
import { ClinicoGeralTestimonials } from '../components/clinico-geral/ClinicoGeralTestimonials';
import { ClinicoGeralCTA } from '../components/clinico-geral/ClinicoGeralCTA';
import { ContactV2 } from '../components/v2/ContactV2';
import { FAQV2 } from '../components/v2/FAQV2';
import { MapSection } from '../components/MapSection';
import { EditorProvider } from '../context/EditorContext';
import { EditorToolbar } from '../components/EditorToolbar';
import { SectionFade } from '../components/SectionFade';

const ClinicoGeral = () => {
    const slug = window.location.pathname.split('/projeto/')[1]?.split('/')[0] || 'oral-unic';
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <EditorProvider projectId={slug}>
            <div className="min-h-screen selection:bg-primary/10 selection:text-primary">
                <NavbarV2 />
                <main className="space-y-0 text-sm md:text-base">
                    <ClinicoGeralHero />
                    <FuturisticMarquee text="Clínico Geral -" velocity={30} />
                    <FuturisticMarquee text="Clínico Geral -" velocity={30} direction="right" />
                    <SectionFade topColor="#FDFCF8" bottomColor="#FDFCF8"><ClinicoGeralWhatIs /></SectionFade>
                    <SectionFade topColor="hsl(var(--primary))" bottomColor="hsl(var(--primary))"><ClinicoGeralProblem /></SectionFade>
                    <ClinicoGeralSpecialists />
                    <SectionFade topColor="hsl(var(--primary))" bottomColor="hsl(var(--primary))"><ClinicoGeralProcedures /></SectionFade>
                    <ClinicoGeralBenefits />
                    <ClinicoGeralTestimonials />
                    <FuturisticMarquee text="Clínico Geral -" velocity={40} />
                    <FuturisticMarquee text="Clínico Geral -" velocity={40} direction="right" />
                    <SectionFade topColor="hsl(var(--primary))" bottomColor="hsl(var(--primary))"><ContactV2 /></SectionFade>
                    <SectionFade topColor="hsl(var(--background))" bottomColor="hsl(var(--background))"><FAQV2 /></SectionFade>
                    <SectionFade topColor="hsl(var(--primary))" bottomColor="hsl(var(--primary))"><ClinicoGeralCTA /></SectionFade>
                    <MapSection />
                </main>
                <FooterV2 />
                <EditorToolbar />
            </div>
        </EditorProvider>
    );
};

export default ClinicoGeral;
