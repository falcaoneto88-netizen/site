import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { EditableText } from '../EditableWrappers';

const faqs = [
  { id: 'marcio_faq_1', question: 'Como é o pós operatório?', answer: 'O pós-operatório é tranquilo. A cirurgia é feita sem a utilização de talas e você pode respirar normalmente após o procedimento. A maioria dos pacientes retorna às atividades normais em poucos dias.' },
  { id: 'marcio_faq_2', question: 'O procedimento é demorado?', answer: 'A duração varia de acordo com a complexidade do caso, mas geralmente dura entre 1h30 a 3h. O procedimento pode ser por meio de anestesia local ou geral, a depender de cada caso.' },
  { id: 'marcio_faq_3', question: 'Como saber se preciso?', answer: 'Se você sente desconforto com a aparência do seu nariz ou tem dificuldades respiratórias, a avaliação com o Dr. Marcio vai esclarecer todas as possibilidades e indicações para o seu caso.' },
  { id: 'marcio_faq_4', question: 'Quais os riscos?', answer: 'A rinoplastia é um procedimento com baixos riscos de complicações quando realizada por um profissional qualificado. Todos os procedimentos são realizados com monitorização cardiorrespiratória em centro cirúrgico próprio.' },
  { id: 'marcio_faq_5', question: 'Qual a idade mínima para fazer?', answer: 'Geralmente a partir dos 16-17 anos, quando o desenvolvimento facial já está completo. Cada caso é avaliado individualmente na consulta.' },
];

export const MarcioFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative py-20 md:py-28 bg-[#0d0a06] overflow-hidden">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <div className="flex items-center gap-3 justify-center mb-6">
            <span className="inline-block w-8 h-[1px] bg-[#C9A96E]" />
            <span className="text-[11px] font-medium tracking-[0.3em] uppercase text-[#C9A96E]">
              <EditableText id="marcio_faq_tag" defaultText="Dúvidas" />
            </span>
            <span className="inline-block w-8 h-[1px] bg-[#C9A96E]" />
          </div>
          <h2 className="text-2xl md:text-[36px] font-light leading-[1.15] text-white">
            <EditableText id="marcio_faq_title1" defaultText="Perguntas " />
            <span className="italic text-[#C9A96E]">
              <EditableText id="marcio_faq_title2" defaultText="Frequentes." />
            </span>
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <motion.div key={faq.id} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }}
              className="bg-white/[0.03] border border-white/[0.06] rounded-2xl overflow-hidden hover:border-[#C9A96E]/20 transition-all">
              <button onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center gap-4 px-6 py-5 text-left">
                <span className="text-[#C9A96E] text-xs font-mono w-6 flex-shrink-0">0{index + 1}</span>
                <span className="text-white text-sm md:text-base font-medium flex-1">
                  <EditableText id={`${faq.id}_q`} defaultText={faq.question} />
                </span>
                <ChevronRight className={`w-4 h-4 text-[#C9A96E] flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-90' : ''}`} />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}>
                    <p className="px-6 pb-5 pl-16 text-white/50 text-sm leading-relaxed font-light">
                      <EditableText id={`${faq.id}_a`} defaultText={faq.answer} />
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
