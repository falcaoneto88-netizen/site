import React, { useEffect } from 'react';
import { NavbarV2 } from '../components/v2/NavbarV2';
import { FooterV2 } from '../components/v2/FooterV2';
import { PeriodontiaHero } from '../components/periodontia/PeriodontiaHero';
import { FuturisticMarquee } from '../components/implantes/FuturisticMarquee';
import { PeriodontiaWhatIs } from '../components/periodontia/PeriodontiaWhatIs';
import { PeriodontiaProblem } from '../components/periodontia/PeriodontiaProblem';
import { PeriodontiaSpecialists } from '../components/periodontia/PeriodontiaSpecialists';
import { PeriodontiaProcedures } from '../components/periodontia/PeriodontiaProcedures';
import { PeriodontiaBenefits } from '../components/periodontia/PeriodontiaBenefits';
import { PeriodontiaTestimonials } from '../components/periodontia/PeriodontiaTestimonials';
import { PeriodontiaCTA } from '../components/periodontia/PeriodontiaCTA';
import { ContactV2 } from '../components/v2/ContactV2';
import { FAQV2 } from '../components/v2/FAQV2';
import { MapSection } from '../components/MapSection';
import { EditorProvider } from '../context/EditorContext';
import { EditorToolbar } from '../components/EditorToolbar';
import { SectionFade } from '../components/SectionFade';

const Periodontia = () => {
    const slug = window.location.pathname.split('/projeto/')[1]?.split('/')[0] || 'oral-unic';
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <EditorProvider projectId={slug}>
            <div className="min-h-screen selection:bg-primary/10 selection:text-primary">
                <NavbarV2 />
                <main className="space-y-0 text-sm md:text-base">
                    <PeriodontiaHero />
                    <FuturisticMarquee text="Periodontia -" velocity={30} />
                    <FuturisticMarquee text="Periodontia -" velocity={30} direction="right" />
                    <SectionFade topColor="#FDFCF8" bottomColor="#FDFCF8"><PeriodontiaWhatIs /></SectionFade>
                    <SectionFade topColor="hsl(var(--primary))" bottomColor="hsl(var(--primary))"><PeriodontiaProblem /></SectionFade>
                    <PeriodontiaSpecialists />
                    <SectionFade topColor="hsl(var(--primary))" bottomColor="hsl(var(--primary))"><PeriodontiaProcedures /></SectionFade>
                    <PeriodontiaBenefits />
                    <PeriodontiaTestimonials />
                    <FuturisticMarquee text="Periodontia -" velocity={40} />
                    <FuturisticMarquee text="Periodontia -" velocity={40} direction="right" />
                    <SectionFade topColor="hsl(var(--primary))" bottomColor="hsl(var(--primary))"><ContactV2 /></SectionFade>
                    <SectionFade topColor="hsl(var(--background))" bottomColor="hsl(var(--background))"><FAQV2 /></SectionFade>
                    <SectionFade topColor="hsl(var(--primary))" bottomColor="hsl(var(--primary))"><PeriodontiaCTA /></SectionFade>
                    <MapSection />
                </main>
                <FooterV2 />
                <EditorToolbar />
            </div>
        </EditorProvider>
    );
};

export default Periodontia;
