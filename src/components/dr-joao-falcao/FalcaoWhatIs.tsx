import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { EditableText, EditableImage, EditableElement } from '../EditableWrappers';

const techniques = [
  { id: 'falcao_tech_1', text: 'Melhorar a projeção do glúteo' },
  { id: 'falcao_tech_2', text: 'Definir melhor o contorno corporal' },
  { id: 'falcao_tech_3', text: 'Criar formato mais arredondado' },
  { id: 'falcao_tech_4', text: 'Harmonizar cintura e quadril' },
];

export const FalcaoWhatIs = () => {
  return (
    <section className="relative py-20 md:py-28 bg-[#0A0A0A] overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#C9A96E]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-block w-8 h-[1px] bg-[#C9A96E]" />
              <span className="text-[11px] font-medium tracking-[0.3em] uppercase text-[#C9A96E]">
                <EditableText id="falcao_solution_tag" defaultText="A Solução" />
              </span>
            </div>

            <h2 className="text-2xl md:text-[30px] font-light leading-[1.15] mb-8 text-white">
              <EditableText id="falcao_solution_title_1" defaultText="Mais do que aumentar volume. " />
              <span className="font-serif italic text-[#C9A96E]">
                <EditableText id="falcao_solution_title_accent" defaultText="O objetivo é esculpir o corpo." />
              </span>
            </h2>

            <EditableText
              id="falcao_solution_desc_1"
              as="p"
              className="text-sm md:text-base text-white/50 leading-relaxed mb-6 max-w-lg font-light block"
              defaultText="A remodelação glútea é um procedimento pensado para valorizar o formato natural do seu corpo, criando curvas equilibradas e proporcionais."
            />
            <p className="text-sm md:text-base text-white/60 leading-relaxed mb-5 max-w-lg font-medium">
              <EditableText id="falcao_solution_intro" defaultText="O planejamento pode envolver técnicas que permitem:" />
            </p>

            <div className="space-y-3 mb-10">
              {techniques.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.08 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-[#C9A96E]/15 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-[#C9A96E]" />
                  </div>
                  <span className="text-white/60 text-sm">
                    <EditableText id={item.id} defaultText={item.text} />
                  </span>
                </motion.div>
              ))}
            </div>

            <EditableText
              id="falcao_solution_footer"
              as="p"
              className="text-sm md:text-base text-white/50 leading-relaxed max-w-lg font-light block"
              defaultText="Tudo é planejado com cuidado para que o resultado seja natural, elegante e proporcional ao seu corpo."
            />
          </motion.div>

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[3/4] max-w-md mx-auto">
              <EditableImage
                id="falcao_solution_img"
                defaultSrc="/assets/dr-joao-falcao/estetica_corporal.jpg"
                alt="Remodelação Glútea"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
