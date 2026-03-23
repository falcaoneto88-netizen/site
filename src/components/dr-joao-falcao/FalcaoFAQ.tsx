import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { EditableText } from '../EditableWrappers';

const faqs = [
  {
    id: 'falcao_faq_1',
    question: 'O método é seguro?',
    answer: 'Sim. Ele é realizado com protocolos seguros e avaliados por profissionais.',
  },
  {
    id: 'falcao_faq_2',
    question: 'Quanto tempo dura?',
    answer: 'Os resultados costumam durar até 18 meses, dependendo do metabolismo e das características individuais de cada paciente. É possível realizar manutenções periódicas quando desejar para preservar e manter o resultado.',
  },
  {
    id: 'falcao_faq_3',
    question: 'Quantas sessões são necessárias?',
    answer: 'Cada corpo é único. Durante a avaliação, analisamos fatores como: estrutura corporal, volume desejado, qualidade da pele e proporção glútea. Com base nisso, definimos um plano personalizado para atingir o melhor resultado possível.',
  },
  {
    id: 'falcao_faq_4',
    question: 'O resultado é imediato?',
    answer: 'Sim. A paciente já consegue visualizar melhora no formato e no volume dos glúteos imediatamente após o procedimento.',
  },
  {
    id: 'falcao_faq_5',
    question: 'Existe tempo de recuperação?',
    answer: 'Não. O procedimento foi desenvolvido para não exigir afastamento das atividades diárias. A maioria das pacientes retorna à rotina no mesmo dia, seguindo apenas algumas orientações simples para otimizar o resultado.',
  },
];

export const FalcaoFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative py-20 md:py-28 bg-[#0F0F0F]">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="flex items-center gap-3 justify-center mb-6">
            <span className="inline-block w-8 h-[1px] bg-[#C9A96E]" />
            <span className="text-[11px] font-medium tracking-[0.3em] uppercase text-[#C9A96E]">
              <EditableText id="falcao_faq_tag" defaultText="Dúvidas Frequentes" />
            </span>
            <span className="inline-block w-8 h-[1px] bg-[#C9A96E]" />
          </div>

          <h2 className="text-2xl md:text-[36px] font-light leading-[1.15] text-white">
            <EditableText id="falcao_faq_title_1" defaultText="Perguntas " />
            <span className="font-serif italic text-[#C9A96E]">
              <EditableText id="falcao_faq_title_accent" defaultText="Frequentes" />
            </span>
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="bg-white/[0.02] border border-white/[0.06] rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >
                <span className="text-white text-sm font-medium pr-4">
                  <EditableText id={`${faq.id}_question`} defaultText={faq.question} />
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-[#C9A96E] flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''
                    }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="px-6 pb-5 text-white text-sm leading-relaxed">
                      <EditableText id={`${faq.id}_answer`} defaultText={faq.answer} />
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
