import React, { useEffect } from 'react';
import { NavbarV2 } from '../components/v2/NavbarV2';
import { FooterV2 } from '../components/v2/FooterV2';
import { ProteseHero } from '../components/protese/ProteseHero';
import { FuturisticMarquee } from '../components/implantes/FuturisticMarquee';
import { ProteseWhatIs } from '../components/protese/ProteseWhatIs';
import { ProteseProblem } from '../components/protese/ProteseProblem';
import { ProteseSpecialists } from '../components/protese/ProteseSpecialists';
import { ProteseProcedures } from '../components/protese/ProteseProcedures';
import { ProteseBenefits } from '../components/protese/ProteseBenefits';
import { ProteseTestimonials } from '../components/protese/ProteseTestimonials';
import { ProteseCTA } from '../components/protese/ProteseCTA';
import { ContactV2 } from '../components/v2/ContactV2';
import { FAQV2 } from '../components/v2/FAQV2';
import { MapSection } from '../components/MapSection';
import { EditorProvider } from '../context/EditorContext';
import { EditorToolbar } from '../components/EditorToolbar';
import { SectionFade } from '../components/SectionFade';

const ProteseDentaria = () => {
    const slug = window.location.pathname.split('/projeto/')[1]?.split('/')[0] || 'oral-unic';
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <EditorProvider projectId={slug}>
            <div className="min-h-screen selection:bg-primary/10 selection:text-primary">
                <NavbarV2 />
                <main className="space-y-0 text-sm md:text-base">
                    <ProteseHero />
                    <FuturisticMarquee text="Prótese Dentária -" velocity={30} />
                    <FuturisticMarquee text="Prótese Dentária -" velocity={30} direction="right" />
                    <SectionFade topColor="#FDFCF8" bottomColor="#FDFCF8"><ProteseWhatIs /></SectionFade>
                    <SectionFade topColor="hsl(var(--primary))" bottomColor="hsl(var(--primary))"><ProteseProblem /></SectionFade>
                    <ProteseSpecialists />
                    <SectionFade topColor="hsl(var(--primary))" bottomColor="hsl(var(--primary))"><ProteseProcedures /></SectionFade>
                    <ProteseBenefits />
                    <ProteseTestimonials />
                    <FuturisticMarquee text="Prótese Dentária -" velocity={40} />
                    <FuturisticMarquee text="Prótese Dentária -" velocity={40} direction="right" />
                    <SectionFade topColor="hsl(var(--primary))" bottomColor="hsl(var(--primary))"><ContactV2 /></SectionFade>
                    <SectionFade topColor="hsl(var(--background))" bottomColor="hsl(var(--background))"><FAQV2 /></SectionFade>
                    <SectionFade topColor="hsl(var(--primary))" bottomColor="hsl(var(--primary))"><ProteseCTA /></SectionFade>
                    <MapSection />
                </main>
                <FooterV2 />
                <EditorToolbar />
            </div>
        </EditorProvider>
    );
};

export default ProteseDentaria;
