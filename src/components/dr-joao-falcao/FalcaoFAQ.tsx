import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { EditableText } from '../EditableWrappers';

const faqs = [
  {
    id: 'falcao_faq_1',
    question: 'A rinomodelação glútea dói?',
    answer: 'O procedimento é realizado com anestesia local, tornando-o praticamente indolor. Pode haver um leve desconforto nos primeiros dias, facilmente controlado com medicações simples.',
  },
  {
    id: 'falcao_faq_2',
    question: 'Quanto tempo dura o resultado?',
    answer: 'Os resultados duram em média de 18 a 24 meses, podendo variar de acordo com o metabolismo de cada paciente. É possível fazer manutenções periódicas para manter o resultado.',
  },
  {
    id: 'falcao_faq_3',
    question: 'Qual o tempo de recuperação?',
    answer: 'A recuperação é rápida. A maioria dos pacientes retorna às atividades normais em 24 a 48 horas. Atividades físicas intensas devem ser evitadas por 15 dias.',
  },
  {
    id: 'falcao_faq_4',
    question: 'O procedimento é seguro?',
    answer: 'Sim. Utilizamos ácido hialurônico de alta qualidade, um produto biocompatível que já é amplamente utilizado na medicina estética há décadas. O procedimento é realizado em ambiente clínico controlado.',
  },
  {
    id: 'falcao_faq_5',
    question: 'Quantas sessões são necessárias?',
    answer: 'Geralmente, uma sessão é suficiente para alcançar o resultado desejado. Em alguns casos, pode ser indicada uma sessão complementar após 30 dias para ajustes finos.',
  },
  {
    id: 'falcao_faq_6',
    question: 'Quem pode fazer o procedimento?',
    answer: 'A maioria das pessoas saudáveis pode realizar o procedimento. Na avaliação personalizada, verificamos contraindicações como gestação, alergias específicas ou condições de saúde que possam interferir.',
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

          <h2 className="text-2xl md:text-[30px] font-light leading-[1.15] text-white">
            <EditableText id="falcao_faq_title_1" defaultText="Perguntas " />
            <span className="font-serif italic text-[#C9A96E]">
              <EditableText id="falcao_faq_title_accent" defaultText="mais comuns" />
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
                    <p className="px-6 pb-5 text-white/40 text-sm leading-relaxed">
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
