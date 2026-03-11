import React, { useEffect } from 'react';
import { NavbarV2 } from '../components/v2/NavbarV2';
import { FooterV2 } from '../components/v2/FooterV2';
import { EndodontiaHero } from '../components/endodontia/EndodontiaHero';
import { FuturisticMarquee } from '../components/implantes/FuturisticMarquee';
import { EndodontiaWhatIs } from '../components/endodontia/EndodontiaWhatIs';
import { EndodontiaProblem } from '../components/endodontia/EndodontiaProblem';
import { EndodontiaSpecialists } from '../components/endodontia/EndodontiaSpecialists';
import { EndodontiaProcedures } from '../components/endodontia/EndodontiaProcedures';
import { EndodontiaBenefits } from '../components/endodontia/EndodontiaBenefits';
import { EndodontiaTestimonials } from '../components/endodontia/EndodontiaTestimonials';
import { EndodontiaCTA } from '../components/endodontia/EndodontiaCTA';
import { ContactV2 } from '../components/v2/ContactV2';
import { FAQV2 } from '../components/v2/FAQV2';
import { MapSection } from '../components/MapSection';
import { EditorProvider } from '../context/EditorContext';
import { EditorToolbar } from '../components/EditorToolbar';
import { SectionFade } from '../components/SectionFade';

const Endodontia = () => {
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
                    <EndodontiaHero />

                    {/* 2. Marquee */}
                    <FuturisticMarquee text="Endodontia -" velocity={30} />
                    <FuturisticMarquee text="Endodontia -" velocity={30} direction="right" />

                    {/* 3. O que é */}
                    <SectionFade topColor="#FDFCF8" bottomColor="#FDFCF8">
                        <EndodontiaWhatIs />
                    </SectionFade>

                    {/* 4. Problema */}
                    <SectionFade topColor="hsl(var(--primary))" bottomColor="hsl(var(--primary))">
                        <EndodontiaProblem />
                    </SectionFade>

                    {/* 5. Especialistas */}
                    <EndodontiaSpecialists />

                    {/* 6. Procedimentos */}
                    <SectionFade topColor="hsl(var(--primary))" bottomColor="hsl(var(--primary))">
                        <EndodontiaProcedures />
                    </SectionFade>

                    {/* 7. Benefícios */}
                    <EndodontiaBenefits />

                    {/* 8. Depoimentos */}
                    <EndodontiaTestimonials />

                    {/* 9. Marquee */}
                    <FuturisticMarquee text="Endodontia -" velocity={40} />
                    <FuturisticMarquee text="Endodontia -" velocity={40} direction="right" />

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
                        <EndodontiaCTA />
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

export default Endodontia;
