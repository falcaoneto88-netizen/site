import React from 'react';
import { motion } from 'framer-motion';
import { EditableText, EditableImage } from '../EditableWrappers';

export const FalcaoEvaluationAlt = () => {
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
              id="falcao_about_img_mobile"
              defaultSrc="/assets/dr-joao-falcao/dr_joao_dark.jpg"
              alt="Dr. João Falcão"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0F0F0F] to-transparent z-20 pointer-events-none" />
        </div>

        <div className="px-6 pt-6 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center"
          >

            <h2 className="text-2xl font-light leading-[1.15] mb-8 text-white">
              <EditableText id="falcao_bio_title_mobile_1" defaultText="Prazer, " />
              <span className="font-light tracking-wide text-[#C9A96E]">
                <EditableText id="falcao_bio_title_mobile_accent" defaultText="Dr. João Falcão" />
              </span>
            </h2>

            <EditableText
              id="falcao_bio_p1_mobile"
              as="p"
              className="text-sm text-white leading-relaxed mb-6 font-light block"
              defaultText="Especialista em harmonização corporal e emagrecimento, atuo com foco em proporção, naturalidade e equilíbrio — sempre guiado pela ciência aplicada e por uma leitura global do corpo, não por tendências passageiras."
            />

            <EditableText
              id="falcao_bio_p2_mobile"
              as="p"
              className="text-sm text-white leading-relaxed mb-6 font-light block"
              defaultText="Mais de 5.000 PROCEDIMENTOS me ensinaram que não existe fórmula pronta. Cada corpo carrega uma história, uma rotina e uma expectativa diferente — e nenhum resultado é realmente bom se não respeitar isso. Por trás de cada resultado, existe muita análise, planejamento e precisão."
            />

            <div className="my-6 border-l-2 border-[#C9A96E] pl-5 text-left">
              <p className="text-sm text-white leading-relaxed font-light">
                <EditableText id="falcao_bio_quote_mobile_1" defaultText="Criei um método chamado " />
                <span className="font-semibold text-[#C9A96E]">
                  <EditableText id="falcao_bio_quote_mobile_accent" defaultText="Le Contour Premium" />
                </span>
                <EditableText
                  id="falcao_bio_quote_mobile_2"
                  defaultText=" — a união entre técnica avançada e respeito à identidade corporal, onde as curvas conversam entre si, sem exageros, sem artificialidade."
                />
              </p>
            </div>

            <p className="text-sm text-white leading-relaxed font-light">
              <EditableText id="falcao_bio_teach_mobile_1" defaultText="Também escolhi ensinar, e ao longo dessa jornada já formei " />
              <span className="text-[#C9A96E] font-serif italic">
                <EditableText id="falcao_bio_teach_mobile_accent" defaultText="mais de 5.000 alunos" />
              </span>
              <EditableText id="falcao_bio_teach_mobile_2" defaultText=" — profissionais que hoje carregam técnica, consciência e ética no que entregam." />
            </p>
          </motion.div>
        </div>
      </div>

      {/* ===== DESKTOP — IMAGE LEFT, CONTENT RIGHT ===== */}
      <div className="hidden md:flex items-center relative min-h-[70vh] py-20 md:py-28">
        {/* Background image LEFT side */}
        <div className="absolute inset-0 z-0">
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="relative w-full h-full"
          >
            <div className="absolute left-0 top-0 bottom-0 w-[55%] lg:w-[50%] overflow-hidden">
              <EditableImage
                id="falcao_about_img_desktop"
                defaultSrc="/assets/dr-joao-falcao/dr_joao_dark.jpg"
                alt="Dr. João Falcão"
                className="absolute inset-0 w-full h-full object-cover object-[30%_center]"
              />
              <div
                className="absolute inset-y-0 right-0 w-[35%] z-10 pointer-events-none"
                style={{ background: 'linear-gradient(to left, #0F0F0F, #0F0F0F80, transparent)' }}
              />
            </div>
            <div
              className="absolute bottom-0 left-0 right-0 h-32 z-20 pointer-events-none"
              style={{ background: 'linear-gradient(to top, #0F0F0F, transparent)' }}
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

              <h2 className="text-2xl md:text-[36px] font-light leading-[1.15] mb-8 text-white">
                <EditableText id="falcao_bio_title_desktop_1" defaultText="Prazer, " />
                <span className="font-light tracking-wide text-[#C9A96E]">
                  <EditableText id="falcao_bio_title_desktop_accent" defaultText="Dr. João Falcão" />
                </span>
              </h2>

              <EditableText
                id="falcao_bio_p1_desktop"
                as="p"
                className="text-sm md:text-lg text-white leading-relaxed mb-6 font-light block"
                defaultText="Especialista em harmonização corporal e emagrecimento, atuo com foco em proporção, naturalidade e equilíbrio — sempre guiado pela ciência aplicada e por uma leitura global do corpo, não por tendências passageiras."
              />

              <EditableText
                id="falcao_bio_p2_desktop"
                as="p"
                className="text-sm md:text-lg text-white leading-relaxed mb-6 font-light block"
                defaultText="Mais de 5.000 PROCEDIMENTOS me ensinaram que não existe fórmula pronta. Cada corpo carrega uma história, uma rotina e uma expectativa diferente — e nenhum resultado é realmente bom se não respeitar isso. Por trás de cada resultado, existe muita análise, planejamento e precisão."
              />

              <div className="my-8 border-l-2 border-[#C9A96E] pl-5">
                <p className="text-sm md:text-lg text-white leading-relaxed font-light">
                  <EditableText id="falcao_bio_quote_desktop_1" defaultText="Criei um método chamado " />
                  <span className="font-semibold text-[#C9A96E]">
                    <EditableText id="falcao_bio_quote_desktop_accent" defaultText="Le Contour Premium" />
                  </span>
                  <EditableText
                    id="falcao_bio_quote_desktop_2"
                    defaultText=" — a união entre técnica avançada e respeito à identidade corporal, onde as curvas conversam entre si, sem exageros, sem artificialidade."
                  />
                </p>
              </div>

              <p className="text-sm md:text-lg text-white leading-relaxed font-light">
                <EditableText id="falcao_bio_teach_desktop_1" defaultText="Também escolhi ensinar, e ao longo dessa jornada já formei " />
                <span className="text-[#C9A96E] font-serif italic">
                  <EditableText id="falcao_bio_teach_desktop_accent" defaultText="mais de 5.000 alunos" />
                </span>
                <EditableText id="falcao_bio_teach_desktop_2" defaultText=" — profissionais que hoje carregam técnica, consciência e ética no que entregam." />
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
