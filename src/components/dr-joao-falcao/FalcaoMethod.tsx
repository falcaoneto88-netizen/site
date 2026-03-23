import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { EditableText, EditableImage } from '../EditableWrappers';

const pillars = [
  { id: 'falcao_method_pillar_1', text: 'Estímulo e volumização' },
  { id: 'falcao_method_pillar_2', text: 'Melhora do contorno corporal' },
  { id: 'falcao_method_pillar_3', text: 'Harmonização da região glútea' },
];

export const FalcaoMethod = () => {
  return (
    <section className="relative overflow-hidden bg-[#0A0A0A]">
      {/* ===== MOBILE ===== */}
      <div className="md:hidden flex flex-col">
        <div className="relative w-full aspect-[4/5] overflow-hidden">
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="w-full h-full"
          >
            <EditableImage
              id="falcao_method_img_mobile"
              defaultSrc="/assets/dr-joao-falcao/dr_joao_gray.jpg"
              alt="Especialista"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0A0A] to-transparent z-20 pointer-events-none" />
        </div>

        <div className="px-6 pt-4 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="inline-block w-6 h-[1px] bg-[#C9A96E]" />
              <span className="text-[10px] font-medium tracking-[0.3em] uppercase text-[#C9A96E]">
                <EditableText id="falcao_method_tag" defaultText="O Método" />
              </span>
              <span className="inline-block w-6 h-[1px] bg-[#C9A96E]" />
            </div>

            <h2 className="text-2xl font-light leading-[1.15] mb-3 text-white">
              <EditableText id="falcao_method_title_1" defaultText="O Método " />
              <span className="font-serif italic text-[#C9A96E]">
                <EditableText id="falcao_method_title_accent" defaultText="Le Contour Premium" />
              </span>
            </h2>

            <h3 className="text-base font-medium text-white/80 mb-6">
              <EditableText id="falcao_method_subtitle" defaultText="O que é o Método?" />
            </h3>

            <EditableText
              id="falcao_method_desc_1"
              as="p"
              className="text-sm text-white/70 leading-relaxed mb-4 font-light block"
              defaultText="O método não cirúrgico foi desenvolvido para remodelar e valorizar os glúteos de forma estratégica, combinando técnicas modernas e protocolos personalizados para cada paciente."
            />

            <p className="text-sm text-white/70 leading-relaxed mb-6 font-light">
              <EditableText
                id="falcao_method_desc_2_prefix"
                defaultText="O procedimento utiliza "
              />
              <span className="text-[#C9A96E] font-medium">
                <EditableText
                  id="falcao_method_desc_2_highlight"
                  defaultText="ácido hialurônico ou bioestimuladores, substâncias biocompatíveis e seguras,"
                />
              </span>{' '}
              <EditableText
                id="falcao_method_desc_2_suffix"
                defaultText="relacionadas a componentes que o próprio organismo produz naturalmente."
              />
            </p>

            <p className="text-sm text-white/90 font-medium mb-4">
              <EditableText id="falcao_method_pillars_intro" defaultText="Ele atua em três pilares principais:" />
            </p>

            <div className="space-y-3 mb-6">
              {pillars.map((pillar, i) => (
                <motion.div
                  key={pillar.id}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-7 h-7 rounded-full bg-[#C9A96E]/15 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5 text-[#C9A96E]" />
                  </div>
                  <span className="text-sm text-white/80 font-light">
                    <EditableText id={pillar.id} defaultText={pillar.text} />
                  </span>
                </motion.div>
              ))}
            </div>

            <EditableText
              id="falcao_method_footer"
              as="p"
              className="text-sm text-white/60 leading-relaxed font-light italic block"
              defaultText="Cada protocolo é adaptado de acordo com o corpo e objetivo de cada paciente."
            />
          </motion.div>
        </div>
      </div>

      {/* ===== DESKTOP — IMAGE LEFT, CONTENT RIGHT ===== */}
      <div className="hidden md:flex items-center relative min-h-[70vh] py-20 md:py-28">
        {/* Image LEFT */}
        <div className="absolute inset-0 z-0">
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="relative w-full h-full"
          >
            <div className="absolute left-0 top-0 bottom-0 w-[50%] overflow-hidden">
              <EditableImage
                id="falcao_method_img_desktop"
                defaultSrc="/assets/dr-joao-falcao/dr_joao_gray.jpg"
                alt="Especialista"
                className="absolute inset-0 w-full h-full object-cover object-[30%_center]"
              />
              <div
                className="absolute inset-y-0 right-0 w-[40%] z-10 pointer-events-none"
                style={{ background: 'linear-gradient(to left, #0A0A0A, #0A0A0A80, transparent)' }}
              />
            </div>
            <div
              className="absolute bottom-0 left-0 right-0 h-32 z-20 pointer-events-none"
              style={{ background: 'linear-gradient(to top, #0A0A0A, transparent)' }}
            />
          </motion.div>
        </div>

        {/* Content RIGHT */}
        <div className="max-w-[1600px] mx-auto w-full px-6 pr-[5%] xl:pr-[8%] relative z-30 flex justify-end">
          <div className="max-w-lg lg:max-w-xl">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <div className="flex items-center gap-3 mb-8">
                <span className="inline-block w-8 h-[1px] bg-[#C9A96E]" />
                <span className="text-[11px] font-medium tracking-[0.3em] uppercase text-[#C9A96E]">
                  <EditableText id="falcao_method_tag_desktop" defaultText="O Método" />
                </span>
              </div>

              <h2 className="text-2xl md:text-[36px] font-light leading-[1.15] mb-4 text-white">
                <EditableText id="falcao_method_title_1_desktop" defaultText="O Método " />
                <span className="font-serif italic text-[#C9A96E]">
                  <EditableText id="falcao_method_title_accent_desktop" defaultText="Le Contour Premium" />
                </span>
              </h2>

              <h3 className="text-lg font-medium text-white/80 mb-8">
                <EditableText id="falcao_method_subtitle_desktop" defaultText="O que é o Método?" />
              </h3>

              <EditableText
                id="falcao_method_desc_1_desktop"
                as="p"
                className="text-sm md:text-base text-white/70 leading-relaxed mb-5 font-light block"
                defaultText="O método não cirúrgico foi desenvolvido para remodelar e valorizar os glúteos de forma estratégica, combinando técnicas modernas e protocolos personalizados para cada paciente."
              />

              <p className="text-sm md:text-base text-white/70 leading-relaxed mb-8 font-light">
                <EditableText
                  id="falcao_method_desc_2_prefix_desktop"
                  defaultText="O procedimento utiliza "
                />
                <span className="text-[#C9A96E] font-medium">
                  <EditableText
                    id="falcao_method_desc_2_highlight_desktop"
                    defaultText="ácido hialurônico ou bioestimuladores, substâncias biocompatíveis e seguras,"
                  />
                </span>{' '}
                <EditableText
                  id="falcao_method_desc_2_suffix_desktop"
                  defaultText="relacionadas a componentes que o próprio organismo produz naturalmente."
                />
              </p>

              <p className="text-sm md:text-base text-white/90 font-medium mb-5">
                <EditableText id="falcao_method_pillars_intro_desktop" defaultText="Ele atua em três pilares principais:" />
              </p>

              <div className="space-y-4 mb-8">
                {pillars.map((pillar, i) => (
                  <motion.div
                    key={pillar.id}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#C9A96E]/15 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-[#C9A96E]" />
                    </div>
                    <span className="text-sm md:text-base text-white/80 font-light">
                      <EditableText id={`${pillar.id}_desktop`} defaultText={pillar.text} />
                    </span>
                  </motion.div>
                ))}
              </div>

              <EditableText
                id="falcao_method_footer_desktop"
                as="p"
                className="text-sm md:text-base text-white/60 leading-relaxed font-light italic block"
                defaultText="Cada protocolo é adaptado de acordo com o corpo e objetivo de cada paciente."
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
