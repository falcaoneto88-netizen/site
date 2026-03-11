import React, { useEffect } from 'react';
import { NavbarV2 } from '../components/v2/NavbarV2';
import { FooterV2 } from '../components/v2/FooterV2';
import { OrtodontiaHero } from '../components/ortodontia/OrtodontiaHero';
import { FuturisticMarquee } from '../components/implantes/FuturisticMarquee';
import { OrtodontiaWhatIs } from '../components/ortodontia/OrtodontiaWhatIs';
import { OrtodontiaProblem } from '../components/ortodontia/OrtodontiaProblem';
import { OrtodontiaSpecialists } from '../components/ortodontia/OrtodontiaSpecialists';
import { OrtodontiaProcedures } from '../components/ortodontia/OrtodontiaProcedures';
import { OrtodontiaBenefits } from '../components/ortodontia/OrtodontiaBenefits';
import { OrtodontiaTestimonials } from '../components/ortodontia/OrtodontiaTestimonials';
import { OrtodontiaCTA } from '../components/ortodontia/OrtodontiaCTA';
import { ContactV2 } from '../components/v2/ContactV2';
import { FAQV2 } from '../components/v2/FAQV2';
import { MapSection } from '../components/MapSection';
import { EditorProvider } from '../context/EditorContext';
import { EditorToolbar } from '../components/EditorToolbar';
import { SectionFade } from '../components/SectionFade';

const Ortodontia = () => {
    const slug = window.location.pathname.split('/projeto/')[1]?.split('/')[0] || 'oral-unic';
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <EditorProvider projectId={slug}>
            <div className="min-h-screen selection:bg-primary/10 selection:text-primary">
                <NavbarV2 />
                <main className="space-y-0 text-sm md:text-base">
                    {/* 1. Hero */}
                    <OrtodontiaHero />

                    {/* 2. Marquee */}
                    <FuturisticMarquee text="Ortodontia -" velocity={30} />
                    <FuturisticMarquee text="Ortodontia -" velocity={30} direction="right" />

                    {/* 3. O que é */}
                    <SectionFade topColor="#FDFCF8" bottomColor="#FDFCF8">
                        <OrtodontiaWhatIs />
                    </SectionFade>

                    {/* 4. Problema */}
                    <SectionFade topColor="hsl(var(--primary))" bottomColor="hsl(var(--primary))">
                        <OrtodontiaProblem />
                    </SectionFade>

                    {/* 5. Especialistas */}
                    <OrtodontiaSpecialists />

                    {/* 6. Procedimentos */}
                    <SectionFade topColor="hsl(var(--primary))" bottomColor="hsl(var(--primary))">
                        <OrtodontiaProcedures />
                    </SectionFade>

                    {/* 7. Benefícios */}
                    <OrtodontiaBenefits />

                    {/* 8. Depoimentos */}
                    <OrtodontiaTestimonials />

                    {/* 9. Marquee */}
                    <FuturisticMarquee text="Ortodontia -" velocity={40} />
                    <FuturisticMarquee text="Ortodontia -" velocity={40} direction="right" />

                    {/* 10. Contato */}
                    <SectionFade topColor="hsl(var(--primary))" bottomColor="hsl(var(--primary))">
                        <ContactV2 />
                    </SectionFade>

                    {/* 11. FAQ */}
                    <SectionFade topColor="hsl(var(--background))" bottomColor="hsl(var(--background))">
                        <FAQV2 />
                    </SectionFade>

                    {/* 12. CTA Final */}
                    <SectionFade topColor="hsl(var(--primary))" bottomColor="hsl(var(--primary))">
                        <OrtodontiaCTA />
                    </SectionFade>

                    {/* 13. Mapa */}
                    <MapSection />
                </main>
                <FooterV2 />
                <EditorToolbar />
            </div>
        </EditorProvider>
    );
};

export default Ortodontia;
