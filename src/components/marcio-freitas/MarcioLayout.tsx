import React from 'react';
import { MarcioNavbar } from './MarcioNavbar';
import { MarcioHero } from './MarcioHero';
import { MarcioExpertise } from './MarcioExpertise';
import { MarcioResults } from './MarcioResults';
import { MarcioDoctor } from './MarcioDoctor';
import { MarcioWhatIs } from './MarcioWhatIs';
import { MarcioDifferentials } from './MarcioDifferentials';
import { MarcioExtras } from './MarcioExtras';
import { MarcioContact } from './MarcioContact';
import { MarcioFAQ } from './MarcioFAQ';
import { MarcioSteps } from './MarcioSteps';
import { MarcioCTA } from './MarcioCTA';
import { MarcioMap } from './MarcioMap';
import { MarcioFooter } from './MarcioFooter';
import { EditableSectionFade } from '../EditableSectionFade';

export const MarcioLayout = () => {
  return (
    <div className="min-h-screen bg-[#0d0a06] font-prata">
      <MarcioNavbar />
      <main>
        <EditableSectionFade id="marcio_hero" defaultTopColor="#0d0a06" defaultBottomColor="#0d0a06">
          <MarcioHero />
        </EditableSectionFade>
        <EditableSectionFade id="marcio_expertise" defaultTopColor="#0d0a06" defaultBottomColor="#0d0a06">
          <MarcioExpertise />
        </EditableSectionFade>
        <div id="resultados">
          <EditableSectionFade id="marcio_results" defaultTopColor="#0d0a06" defaultBottomColor="#0d0a06">
            <MarcioResults />
          </EditableSectionFade>
        </div>
        <div id="medico">
          <EditableSectionFade id="marcio_doctor" defaultTopColor="#0d0a06" defaultBottomColor="#0d0a06">
            <MarcioDoctor />
          </EditableSectionFade>
        </div>
        <div id="procedimento">
          <EditableSectionFade id="marcio_whatis" defaultTopColor="#0d0a06" defaultBottomColor="#0d0a06" hideTopFadeMobile>
            <MarcioWhatIs />
          </EditableSectionFade>
        </div>
        <EditableSectionFade id="marcio_steps" defaultTopColor="#0d0a06" defaultBottomColor="#0d0a06">
          <MarcioSteps />
        </EditableSectionFade>
        <div id="diferenciais">
          <EditableSectionFade id="marcio_diff" defaultTopColor="#0d0a06" defaultBottomColor="#0d0a06">
            <MarcioDifferentials />
          </EditableSectionFade>
        </div>
        <EditableSectionFade id="marcio_extras" defaultTopColor="#0d0a06" defaultBottomColor="#0d0a06">
          <MarcioExtras />
        </EditableSectionFade>
        <EditableSectionFade id="marcio_contact" defaultTopColor="#0d0a06" defaultBottomColor="#0d0a06">
          <MarcioContact />
        </EditableSectionFade>
        <div id="faq">
          <EditableSectionFade id="marcio_faq" defaultTopColor="#0d0a06" defaultBottomColor="#0d0a06">
            <MarcioFAQ />
          </EditableSectionFade>
        </div>
        <EditableSectionFade id="marcio_cta" defaultTopColor="#0d0a06" defaultBottomColor="#0d0a06">
          <MarcioCTA />
        </EditableSectionFade>
        <MarcioMap />
      </main>
      <MarcioFooter />
    </div>
  );
};
