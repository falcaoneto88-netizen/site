import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { EditableText, EditableImage } from '../EditableWrappers';

const steps = [
  { id: 'falcao_eval_step_1', text: 'Entender as possibilidades para o seu caso' },
  { id: 'falcao_eval_step_2', text: 'Tirar dúvidas sobre o procedimento' },
  { id: 'falcao_eval_step_3', text: 'Conhecer o planejamento personalizado' },
  { id: 'falcao_eval_step_4', text: 'Receber orientações completas sobre todo o processo' },
];

export const FalcaoEvaluation = () => {
  return (
    <section className="relative overflow-hidden bg-[#0F0F0F]">
      {/* ===== MOBILE ===== */}
      <div className="md:hidden flex flex-col">
        <div className="relative w-full aspect-square overflow-hidden">
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="w-full h-full"
          >
            <EditableImage
              id="falcao_eval_img_mobile"
              defaultSrc="/assets/dr-joao-falcao/dr_joao_dark.jpg"
              alt="Dr. João Falcão"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0F0F0F] to-transparent z-20 pointer-events-none" />
        </div>

        <div className="px-6 pt-6 pb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-block w-8 h-[1px] bg-[#C9A96E]" />
              <span className="text-[11px] font-medium tracking-[0.3em] uppercase text-[#C9A96E]">
                <EditableText id="falcao_eval_tag_mobile" defaultText="Como Funciona" />
              </span>
              <span className="inline-block w-8 h-[1px] bg-[#C9A96E]" />
            </div>

            <h2 className="text-2xl font-light leading-[1.15] mb-8 text-white">
              <EditableText id="falcao_eval_title_mobile_1" defaultText="Como funciona a " />
              <span className="font-serif italic text-[#C9A96E]">
                <EditableText id="falcao_eval_title_mobile_accent" defaultText="avaliação?" />
              </span>
            </h2>

            <EditableText
              id="falcao_eval_desc_mobile"
              as="p"
              className="text-sm text-white/50 leading-relaxed mb-8 font-light block"
              defaultText="O primeiro passo é uma consulta de avaliação com o Dr. João Falcão. Durante esse encontro você poderá:"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 w-full">
              {steps.map((step, index) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="flex items-start gap-3 bg-white/[0.02] border border-white/[0.05] rounded-xl px-5 py-4 text-left"
                >
                  <div className="w-5 h-5 rounded-full bg-[#C9A96E]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-[#C9A96E]" />
                  </div>
                  <span className="text-white/60 text-sm">
                    <EditableText id={`${step.id}_mobile`} defaultText={step.text} />
                  </span>
                </motion.div>
              ))}
            </div>

            <p className="text-sm text-white/50 leading-relaxed font-light">
              <EditableText id="falcao_eval_footer_mobile_1" defaultText="É nesse momento que começamos a desenhar a " />
              <span className="text-[#C9A96E] font-serif italic">
                <EditableText id="falcao_eval_footer_mobile_accent" defaultText="transformação que você deseja" />
              </span>
              <EditableText id="falcao_eval_footer_mobile_2" defaultText="." />
            </p>
          </motion.div>
        </div>
      </div>

      {/* ===== DESKTOP ===== */}
      <div className="hidden md:flex items-center relative min-h-[60vh] py-20 md:py-28">
        {/* Background image right side with fade */}
        <div className="absolute inset-0 z-0">
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="relative w-full h-full"
          >
            <div className="absolute right-0 top-0 bottom-0 w-[55%] lg:w-[50%] overflow-hidden">
              <EditableImage
                id="falcao_eval_img_desktop"
                defaultSrc="/assets/dr-joao-falcao/dr_joao_dark.jpg"
                alt="Dr. João Falcão"
                className="absolute inset-0 w-full h-full object-cover object-[70%_center]"
              />
              {/* Lateral fade */}
              <div
                className="absolute inset-y-0 left-0 w-[35%] z-10 pointer-events-none"
                style={{ background: 'linear-gradient(to right, #0F0F0F, #0F0F0F80, transparent)' }}
              />
            </div>
            {/* Bottom fade */}
            <div
              className="absolute bottom-0 left-0 right-0 h-32 z-20 pointer-events-none"
              style={{ background: 'linear-gradient(to top, #0F0F0F, transparent)' }}
            />
          </motion.div>
        </div>

        {/* Content left */}
        <div className="max-w-[1600px] mx-auto w-full px-6 relative z-30">
          <div className="max-w-lg lg:max-w-xl">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-block w-8 h-[1px] bg-[#C9A96E]" />
                <span className="text-[11px] font-medium tracking-[0.3em] uppercase text-[#C9A96E]">
                  <EditableText id="falcao_eval_tag_desktop" defaultText="Como Funciona" />
                </span>
              </div>

              <h2 className="text-2xl md:text-[30px] font-light leading-[1.15] mb-8 text-white">
                <EditableText id="falcao_eval_title_desktop_1" defaultText="Como funciona a " />
                <span className="font-serif italic text-[#C9A96E]">
                  <EditableText id="falcao_eval_title_desktop_accent" defaultText="avaliação?" />
                </span>
              </h2>

              <EditableText
                id="falcao_eval_desc_desktop"
                as="p"
                className="text-sm md:text-base text-white/50 leading-relaxed mb-8 font-light max-w-lg block"
                defaultText="O primeiro passo é uma consulta de avaliação com o Dr. João Falcão. Durante esse encontro você poderá:"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {steps.map((step, index) => (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    className="flex items-start gap-3 bg-white/[0.02] border border-white/[0.05] rounded-xl px-5 py-4"
                  >
                    <div className="w-5 h-5 rounded-full bg-[#C9A96E]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-[#C9A96E]" />
                    </div>
                    <span className="text-white/60 text-sm">
                      <EditableText id={`${step.id}_desktop`} defaultText={step.text} />
                    </span>
                  </motion.div>
                ))}
              </div>

              <p className="text-sm md:text-base text-white/50 leading-relaxed font-light">
                <EditableText id="falcao_eval_footer_desktop_1" defaultText="É nesse momento que começamos a desenhar a " />
                <span className="text-[#C9A96E] font-serif italic">
                  <EditableText id="falcao_eval_footer_desktop_accent" defaultText="transformação que você deseja" />
                </span>
                <EditableText id="falcao_eval_footer_desktop_2" defaultText="." />
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
