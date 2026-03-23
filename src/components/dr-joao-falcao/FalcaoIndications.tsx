import React from 'react';
import { motion } from 'framer-motion';
import { Diamond } from 'lucide-react';
import { EditableText } from '../EditableWrappers';

const indications = [
  { id: 'falcao_ind_1', text: 'Melhorar o formato do glúteo' },
  { id: 'falcao_ind_2', text: 'Recuperar volume perdido com o tempo' },
  { id: 'falcao_ind_3', text: 'Criar curvas mais definidas' },
  { id: 'falcao_ind_4', text: 'Harmonizar cintura, quadril e bumbum' },
];

export const FalcaoIndications = () => {
  return (
    <section className="relative py-14 md:py-20 bg-[#0A0A0A]">
      <div className="max-w-[1600px] mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-3 justify-center mb-6">
            <span className="inline-block w-8 h-[1px] bg-[#C9A96E]" />
            <span className="text-[11px] font-medium tracking-[0.3em] uppercase text-[#C9A96E]">
              <EditableText id="falcao_ind_tag" defaultText="Indicações" />
            </span>
            <span className="inline-block w-8 h-[1px] bg-[#C9A96E]" />
          </div>

          <h2 className="text-2xl md:text-[36px] font-light leading-[1.15] mb-8 text-white">
            <EditableText id="falcao_ind_title_1" defaultText="Para quem a Remodelação Glútea " />
            <span className="font-serif italic text-[#C9A96E]">
              <EditableText id="falcao_ind_title_accent" defaultText="é indicada?" />
            </span>
          </h2>

          <EditableText
            id="falcao_ind_intro"
            as="p"
            className="text-sm md:text-lg text-white leading-relaxed mb-6 font-light max-w-2xl mx-auto block"
            defaultText="O procedimento pode ser ideal para mulheres que desejam:"
          />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-5xl mx-auto mb-10">
          {indications.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative bg-gradient-to-br from-[#C9A96E]/20 via-[#C9A96E]/10 to-[#C9A96E]/5 border border-[#C9A96E]/25 rounded-2xl px-5 py-4 flex items-center gap-3 group hover:border-[#C9A96E]/40 hover:from-[#C9A96E]/25 transition-all duration-500"
            >
              <Diamond className="w-4 h-4 text-[#C9A96E]/50 flex-shrink-0" />
              <span className="text-white text-sm font-light leading-relaxed text-left">
                <EditableText id={item.id} defaultText={item.text} />
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <EditableText
            id="falcao_ind_footer_1"
            as="p"
            className="text-sm md:text-lg text-white leading-relaxed mb-2 font-light max-w-2xl mx-auto block"
            defaultText="Especialmente para quem deseja um resultado natural, elegante e proporcional ao corpo."
          />
          <EditableText
            id="falcao_ind_footer_2"
            as="p"
            className="text-sm md:text-lg text-white leading-relaxed font-light max-w-2xl mx-auto block"
            defaultText="Cada caso é analisado individualmente para entender qual abordagem trará o melhor resultado."
          />
        </motion.div>
      </div>
    </section>
  );
};
