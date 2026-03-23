import React from 'react';
import { FalcaoNavbar } from './FalcaoNavbar';
import { FalcaoHero } from './FalcaoHero';
import { FalcaoMethod } from './FalcaoMethod';
import { FalcaoProblem } from './FalcaoProblem';
import { FalcaoDoctor } from './FalcaoDoctor';
import { FalcaoBenefits } from './FalcaoBenefits';
import { FalcaoTestimonials } from './FalcaoTestimonials';
import { FalcaoEvaluation } from './FalcaoEvaluation';

import { FalcaoFAQ } from './FalcaoFAQ';
import { FalcaoCTA } from './FalcaoCTA';
import { FalcaoFooter } from './FalcaoFooter';
import { FalcaoMap } from './FalcaoMap';
import { FalcaoWhatsAppFloat } from './FalcaoWhatsAppFloat';
import { EditableSectionFade } from '../EditableSectionFade';

export const FalcaoLayout = () => {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <FalcaoNavbar />
      <main>
        <EditableSectionFade id="falcao_hero" defaultTopColor="#0A0A0A" defaultBottomColor="#0A0A0A">
          <FalcaoHero />
          </EditableSectionFade>
        <div id="metodo">
          <EditableSectionFade id="falcao_method" defaultTopColor="#0A0A0A" defaultBottomColor="#0A0A0A">
            <FalcaoMethod />
          </EditableSectionFade>
        </div>
        <div id="beneficios">
          <EditableSectionFade id="falcao_benefits" defaultTopColor="#0A0A0A" defaultBottomColor="#0A0A0A">
            <FalcaoBenefits />
          </EditableSectionFade>
        </div>
        <div id="problema">
          <EditableSectionFade id="falcao_problem" defaultTopColor="#0A0A0A" defaultBottomColor="#0A0A0A">
            <FalcaoProblem />
          </EditableSectionFade>
        </div>
        <div id="doutor">
          <EditableSectionFade id="falcao_doctor" defaultTopColor="#0A0A0A" defaultBottomColor="#0A0A0A">
            <FalcaoDoctor />
          </EditableSectionFade>
        </div>
        <div id="avaliacao">
          <EditableSectionFade id="falcao_eval" defaultTopColor="#0A0A0A" defaultBottomColor="#0A0A0A" hideTopFadeMobile>
            <FalcaoEvaluation />
          </EditableSectionFade>
        </div>
        <div id="faq">
          <EditableSectionFade id="falcao_faq" defaultTopColor="#0A0A0A" defaultBottomColor="#0A0A0A">
            <FalcaoFAQ />
          </EditableSectionFade>
        </div>
        <EditableSectionFade id="falcao_cta" defaultTopColor="#0A0A0A" defaultBottomColor="#0A0A0A">
          <FalcaoCTA />
        </EditableSectionFade>
        <FalcaoMap />
      </main>
      <FalcaoFooter />
      <FalcaoWhatsAppFloat />
    </div>
  );
};
