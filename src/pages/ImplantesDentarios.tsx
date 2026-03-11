import React, { useEffect } from 'react';
import { NavbarV2 } from '../components/v2/NavbarV2';
import { FooterV2 } from '../components/v2/FooterV2';
import { ImplantHero } from '../components/implantes/ImplantHero';
import { FuturisticMarquee } from '../components/implantes/FuturisticMarquee';
import { ProblemAwareness } from '../components/implantes/ProblemAwareness';
import { WhatIsImplant } from '../components/implantes/WhatIsImplant';
import { SpecialistsDetail } from '../components/implantes/SpecialistsDetail';
import { ImplantProcedures } from '../components/implantes/ImplantProcedures';
import { ImplantBenefits } from '../components/implantes/ImplantBenefits';
import { ImplantTestimonials } from '../components/implantes/ImplantTestimonials';
import { ImplantCTA } from '../components/implantes/ImplantCTA';
import { ContactV2 } from '../components/v2/ContactV2';
import { FAQV2 } from '../components/v2/FAQV2';

import { MapSection } from '../components/MapSection';
import { EditorProvider } from '../context/EditorContext';
import { EditorToolbar } from '../components/EditorToolbar';
import { SectionFade } from '../components/SectionFade';

const ImplantesDentarios = () => {
    const slug = window.location.pathname.split('/projeto/')[1]?.split('/')[0] || 'oral-unic';
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <EditorProvider projectId={slug}>
            <div className="min-h-screen selection:bg-primary/10 selection:text-primary">
                <NavbarV2 />
                <main className="space-y-0 text-sm md:text-base">
                    {/* 1. Hero — layout imersivo */}
                    <ImplantHero />

                    {/* 2. Marquee */}
                    <FuturisticMarquee text="Implante Dentário -" velocity={30} />
                    <FuturisticMarquee text="Implante Dentário -" velocity={30} direction="right" />

                    {/* 3. O que é o implante — imagem + texto */}
                    <SectionFade topColor="#FDFCF8" bottomColor="#FDFCF8">
                        <WhatIsImplant />
                    </SectionFade>

                    {/* 4. Problema — seção roxa com texto central */}
                    <SectionFade topColor="hsl(var(--primary))" bottomColor="hsl(var(--primary))">
                        <ProblemAwareness />
                    </SectionFade>

                    {/* 5. Especialistas */}
                    <SpecialistsDetail />

                    {/* 6. Procedimentos — seção roxa com cards */}
                    <SectionFade topColor="hsl(var(--primary))" bottomColor="hsl(var(--primary))">
                        <ImplantProcedures />
                    </SectionFade>

                    {/* 7. Benefícios — layout imersivo tipo Hero */}
                    <ImplantBenefits />

                    {/* 8. Depoimentos */}
                    <ImplantTestimonials />

                    {/* 9. Marquee */}
                    <FuturisticMarquee text="Implante Dentário -" velocity={40} />
                    <FuturisticMarquee text="Implante Dentário -" velocity={40} direction="right" />

                    {/* 10. Contato (Formulário) */}
                    <SectionFade topColor="hsl(var(--primary))" bottomColor="hsl(var(--primary))">
                        <ContactV2 />
                    </SectionFade>

                    {/* 11. FAQ */}
                    <SectionFade topColor="hsl(var(--background))" bottomColor="hsl(var(--background))">
                        <FAQV2 />
                    </SectionFade>

                    {/* 12. CTA Final */}
                    <SectionFade topColor="hsl(var(--primary))" bottomColor="hsl(var(--primary))">
                        <ImplantCTA />
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

export default ImplantesDentarios;
