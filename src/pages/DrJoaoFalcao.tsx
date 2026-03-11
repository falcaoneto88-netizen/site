import React, { useEffect } from 'react';
import { FalcaoNavbar } from '../components/dr-joao-falcao/FalcaoNavbar';
import { FalcaoHero } from '../components/dr-joao-falcao/FalcaoHero';
import { FalcaoProblem } from '../components/dr-joao-falcao/FalcaoProblem';
import { FalcaoWhatIs } from '../components/dr-joao-falcao/FalcaoWhatIs';
import { FalcaoDoctor } from '../components/dr-joao-falcao/FalcaoDoctor';
import { FalcaoBenefits } from '../components/dr-joao-falcao/FalcaoBenefits';
import { FalcaoEvaluation } from '../components/dr-joao-falcao/FalcaoEvaluation';
import { FalcaoFAQ } from '../components/dr-joao-falcao/FalcaoFAQ';
import { FalcaoCTA } from '../components/dr-joao-falcao/FalcaoCTA';
import { FalcaoFooter } from '../components/dr-joao-falcao/FalcaoFooter';
import { EditorProvider } from '../context/EditorContext';
import { EditorToolbar } from '../components/EditorToolbar';

const DrJoaoFalcao = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Remodelação Glútea | Dr. João Falcão';
  }, []);

  return (
    <EditorProvider projectId="dr-joao-falcao">
      <div className="min-h-screen bg-[#0A0A0A]">
        <FalcaoNavbar />
        <main>
          <FalcaoHero />
          <div id="problema">
            <FalcaoProblem />
          </div>
          <div id="procedimento">
            <FalcaoWhatIs />
          </div>
          <div id="doutor">
            <FalcaoDoctor />
          </div>
          <div id="beneficios">
            <FalcaoBenefits />
          </div>
          <div id="avaliacao">
            <FalcaoEvaluation />
          </div>
          <div id="faq">
            <FalcaoFAQ />
          </div>
          <FalcaoCTA />
        </main>
        <FalcaoFooter />
        <EditorToolbar />
      </div>
    </EditorProvider>
  );
};

export default DrJoaoFalcao;
