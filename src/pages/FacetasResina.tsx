import React, { useEffect } from 'react';
import { NavbarV2 } from '../components/v2/NavbarV2';
import { FooterV2 } from '../components/v2/FooterV2';
import { FacetasHero } from '../components/facetas/FacetasHero';
import { FuturisticMarquee } from '../components/implantes/FuturisticMarquee';
import { FacetasWhatIs } from '../components/facetas/FacetasWhatIs';
import { FacetasProblem } from '../components/facetas/FacetasProblem';
import { FacetasProcedures } from '../components/facetas/FacetasProcedures';
import { FacetasBenefits } from '../components/facetas/FacetasBenefits';
import { FacetasTestimonials } from '../components/facetas/FacetasTestimonials';
import { FacetasCTA } from '../components/facetas/FacetasCTA';
import { ContactV2 } from '../components/v2/ContactV2';
import { FAQV2 } from '../components/v2/FAQV2';
import { MapSection } from '../components/MapSection';
import { EditorProvider } from '../context/EditorContext';
import { EditorToolbar } from '../components/EditorToolbar';
import { SectionFade } from '../components/SectionFade';

const FacetasResina = () => {
    const slug = window.location.pathname.split('/projeto/')[1]?.split('/')[0] || 'oral-unic';
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <EditorProvider projectId={slug}>
            <div className="min-h-screen selection:bg-primary/10 selection:text-primary">
                <NavbarV2 />
                <main className="space-y-0 text-sm md:text-base">
                    <FacetasHero />
                    <FuturisticMarquee text="Facetas em resina -" velocity={30} />
                    <FuturisticMarquee text="Facetas em resina -" velocity={30} direction="right" />
                    <SectionFade topColor="#FDFCF8" bottomColor="#FDFCF8"><FacetasWhatIs /></SectionFade>
                    <SectionFade topColor="hsl(var(--primary))" bottomColor="hsl(var(--primary))"><FacetasProblem /></SectionFade>
                    <SectionFade topColor="hsl(var(--primary))" bottomColor="hsl(var(--primary))"><FacetasProcedures /></SectionFade>
                    <FacetasBenefits />
                    <FacetasTestimonials />
                    <FuturisticMarquee text="Facetas em resina -" velocity={40} />
                    <FuturisticMarquee text="Facetas em resina -" velocity={40} direction="right" />
                    <SectionFade topColor="hsl(var(--primary))" bottomColor="hsl(var(--primary))"><ContactV2 /></SectionFade>
                    <SectionFade topColor="hsl(var(--background))" bottomColor="hsl(var(--background))"><FAQV2 /></SectionFade>
                    <SectionFade topColor="hsl(var(--primary))" bottomColor="hsl(var(--primary))"><FacetasCTA /></SectionFade>
                    <MapSection />
                </main>
                <FooterV2 />
                <EditorToolbar />
            </div>
        </EditorProvider>
    );
};

export default FacetasResina;
