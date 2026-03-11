import React from 'react';
import { motion } from 'framer-motion';
import { Check, Diamond } from 'lucide-react';
import { EditableText, EditableImage, EditableElement } from '../EditableWrappers';

const results = [
  { id: 'falcao_res_1', src: '/assets/real-photos/transformation_harmony_1.png', label: 'Harmonização Corporal' },
  { id: 'falcao_res_2', src: '/assets/real-photos/transformation_profile_1.jpg', label: 'Contorno e Projeção' },
  { id: 'falcao_res_3', src: '/assets/real-photos/transformation_smile_1.jpg', label: 'Resultado Natural' },
  { id: 'falcao_res_4', src: '/assets/real-photos/transformation_smile_2.jpg', label: 'Curvas Definidas' },
  { id: 'falcao_res_5', src: '/assets/real-photos/transformation_smile_3.jpg', label: 'Proporção Ideal' },
  { id: 'falcao_res_6', src: '/assets/real-photos/transformation_smile_4.png', label: 'Elegância e Confiança' },
];

const indications = [
  { id: 'falcao_ind_1', text: 'Melhorar o formato do glúteo' },
  { id: 'falcao_ind_2', text: 'Recuperar volume perdido com o tempo' },
  { id: 'falcao_ind_3', text: 'Criar curvas mais definidas' },
  { id: 'falcao_ind_4', text: 'Harmonizar cintura, quadril e bumbum' },
];

export const FalcaoBenefits = () => {
  return (
    <section className="relative py-20 md:py-28 bg-[#0A0A0A]">
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
        backgroundSize: '40px 40px',
      }} />

      <div className="relative z-10">
        {/* Results Header */}
        <div className="max-w-[1600px] mx-auto px-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-block w-8 h-[1px] bg-[#C9A96E]" />
              <span className="text-[11px] font-medium tracking-[0.3em] uppercase text-[#C9A96E]">
                <EditableText id="falcao_res_tag" defaultText="Transformação Real" />
              </span>
            </div>

            <h2 className="text-2xl md:text-[30px] font-light leading-[1.15] mb-8 text-white">
              <EditableText id="falcao_res_title_1" defaultText="Resultados que falam " />
              <span className="font-serif italic text-[#C9A96E]">
                <EditableText id="falcao_res_title_accent" defaultText="por si só." />
              </span>
            </h2>

            <EditableText
              id="falcao_res_desc"
              as="p"
              className="text-sm md:text-base text-white/50 leading-relaxed font-light max-w-2xl block"
              defaultText="Os resultados da remodelação glútea vão além da aparência. A mudança impacta a forma como você se posiciona, se veste e se sente no próprio corpo."
            />
          </motion.div>
        </div>

        {/* Infinite Marquee Carousel */}
        <div className="relative w-full overflow-hidden mb-24">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10 pointer-events-none" />

          {/* Scrolling track */}
          <div className="flex animate-marquee-scroll gap-5 w-max">
            {[...results, ...results].map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className="flex-shrink-0 w-[260px] sm:w-[300px] md:w-[340px] group"
              >
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-white/[0.02] border border-white/[0.06] group-hover:border-[#C9A96E]/20 transition-all duration-500">
                  <EditableImage
                    id={item.id}
                    defaultSrc={item.src}
                    alt={item.label}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 6 — Indications */}
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

            <h2 className="text-2xl md:text-[30px] font-light leading-[1.15] mb-8 text-white">
              <EditableText id="falcao_ind_title_1" defaultText="Para quem a Remodelação Glútea " />
              <span className="font-serif italic text-[#C9A96E]">
                <EditableText id="falcao_ind_title_accent" defaultText="é indicada?" />
              </span>
            </h2>

            <EditableText
              id="falcao_ind_intro"
              as="p"
              className="text-sm md:text-base text-white/50 leading-relaxed mb-6 font-light max-w-2xl mx-auto block"
              defaultText="O procedimento pode ser ideal para mulheres que desejam:"
            />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto mb-10">
            {indications.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative bg-gradient-to-br from-[#C9A96E]/20 via-[#C9A96E]/10 to-[#C9A96E]/5 border border-[#C9A96E]/25 rounded-2xl px-5 py-6 text-center group hover:border-[#C9A96E]/40 hover:from-[#C9A96E]/25 transition-all duration-500"
              >
                <Diamond className="absolute top-3 right-3 w-4 h-4 text-[#C9A96E]/40 group-hover:text-[#C9A96E]/70 transition-colors duration-500" />
                <span className="text-white/80 text-sm font-light leading-relaxed">
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
              className="text-sm md:text-base text-white/50 leading-relaxed mb-2 font-light max-w-2xl mx-auto block"
              defaultText="Especialmente para quem deseja um resultado natural, elegante e proporcional ao corpo."
            />
            <EditableText
              id="falcao_ind_footer_2"
              as="p"
              className="text-sm md:text-base text-white/50 leading-relaxed font-light max-w-2xl mx-auto block"
              defaultText="Cada caso é analisado individualmente para entender qual abordagem trará o melhor resultado."
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
