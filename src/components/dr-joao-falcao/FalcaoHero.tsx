import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { EditableText, EditableImage, EditableElement } from '../EditableWrappers';

export const FalcaoHero = () => {
  return (
    <section className="relative overflow-hidden bg-[#0A0A0A]">
      {/* ===== MOBILE LAYOUT ===== */}
      <div className="md:hidden flex flex-col">
        {/* Image top */}
        <div className="relative w-full aspect-square overflow-hidden">
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            className="w-full h-full"
          >
            <EditableImage
              id="falcao_hero_img_mobile"
              defaultSrc="/assets/dr-joao-falcao/dr_joao_dark.jpg"
              alt="Dr. João Falcão"
              className="w-full h-full object-cover object-top"
            />
          </motion.div>
          <div
            className="absolute bottom-0 left-0 right-0 h-32 z-20 pointer-events-none"
            style={{ background: 'linear-gradient(to top, #0A0A0A, transparent)' }}
          />
        </div>

        {/* Content below */}
        <div className="px-6 pt-6 pb-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex flex-col items-center"
          >
            {/* Brand Tag */}
            <EditableElement id="falcao_hero_tag_el" label="Tag de Marca">
              <div className="flex items-center gap-3 mb-5">
                <span className="inline-block w-6 h-[1px] bg-[#C9A96E]" />
                <span className="text-[10px] font-medium tracking-[0.3em] uppercase text-[#C9A96E]">
                  <EditableText id="falcao_hero_tag" defaultText="Remodelação Glútea" />
                </span>
                <span className="inline-block w-6 h-[1px] bg-[#C9A96E]" />
              </div>
            </EditableElement>

            <h1 className="text-2xl font-light leading-[1.1] mb-5 text-white">
              <EditableText id="falcao_hero_title_1" defaultText="O bumbum que você gostaria de ver no espelho " />
              <span className="font-serif italic text-[#C9A96E]">
                <EditableText id="falcao_hero_title_accent" defaultText="pode estar mais próximo do que imagina." />
              </span>
            </h1>

            <EditableText
              id="falcao_hero_desc_1"
              as="p"
              className="text-xs text-white/50 mb-4 leading-relaxed font-light block"
              defaultText="A Remodelação Glútea realizada pelo Dr. João Falcão foi desenvolvida para mulheres que desejam melhorar o formato do corpo, valorizar as curvas naturais e recuperar a confiança com a própria imagem."
            />
            <EditableText
              id="falcao_hero_desc_2"
              as="p"
              className="text-xs text-white/50 mb-6 leading-relaxed font-light block"
              defaultText="Mais do que aumentar volume, o objetivo é esculpir o contorno do corpo de forma harmônica e natural, respeitando a anatomia individual de cada paciente."
            />

            <EditableElement id="falcao_hero_cta_el" label="Botão CTA">
              <a
                href="https://wa.me/5575999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#C9A96E] via-[#E8D5A3] to-[#C9A96E] text-[#0A0A0A] font-semibold px-7 py-3.5 rounded-full hover:shadow-lg hover:shadow-[#C9A96E]/25 transition-all text-sm uppercase tracking-wider w-full justify-center"
              >
                <EditableText id="falcao_hero_cta_text" defaultText="Quero Agendar Minha Avaliação" />
                <ArrowRight className="w-4 h-4" />
              </a>
            </EditableElement>

            {/* Stats */}
            <EditableElement id="falcao_hero_stats_el" label="Estatísticas">
              <div className="mt-8 flex items-center gap-6 justify-center">
                <div className="text-center">
                  <p className="text-xl font-bold text-[#C9A96E]">
                    <EditableText id="falcao_stat_1_val" defaultText="+2.000" />
                  </p>
                  <p className="text-[9px] text-white/30 tracking-wider uppercase mt-0.5">
                    <EditableText id="falcao_stat_1_label" defaultText="Procedimentos" />
                  </p>
                </div>
                <div className="w-[1px] h-7 bg-white/10" />
                <div className="text-center">
                  <p className="text-xl font-bold text-white">
                    <EditableText id="falcao_stat_2_val" defaultText="98%" />
                  </p>
                  <p className="text-[9px] text-white/30 tracking-wider uppercase mt-0.5">
                    <EditableText id="falcao_stat_2_label" defaultText="Satisfação" />
                  </p>
                </div>
                <div className="w-[1px] h-7 bg-white/10" />
                <div className="text-center">
                  <p className="text-xl font-bold text-white">
                    <EditableText id="falcao_stat_3_val" defaultText="0" />
                  </p>
                  <p className="text-[9px] text-white/30 tracking-wider uppercase mt-0.5">
                    <EditableText id="falcao_stat_3_label" defaultText="Cortes" />
                  </p>
                </div>
              </div>
            </EditableElement>
          </motion.div>
        </div>
      </div>

      {/* ===== DESKTOP LAYOUT ===== */}
      <div className="hidden md:block min-h-[90vh]">
        {/* Background image right */}
        <div className="absolute inset-0 z-0">
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            className="relative w-full h-full"
          >
            <EditableImage
              id="falcao_hero_bg_desktop"
              defaultSrc="/assets/dr-joao-falcao/hero_bg.jpg"
              alt=""
              className="absolute inset-0 w-full h-full object-cover opacity-40"
            />
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(to right, #0A0A0A, #0A0A0Acc, transparent)' }}
            />
          </motion.div>
        </div>

        {/* Doctor Image */}
        <div className="absolute right-0 top-0 h-full w-[55%] z-[1]">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="h-full w-full"
          >
            <EditableImage
              id="falcao_hero_doctor_img"
              defaultSrc="/assets/dr-joao-falcao/dr_joao_dark.jpg"
              alt="Dr. João Falcão"
              className="h-full w-full object-cover object-top"
            />
          </motion.div>
          <div
            className="absolute inset-y-0 left-0 w-[60%]"
            style={{ background: 'linear-gradient(to right, #0A0A0A, transparent)' }}
          />
          <div
            className="absolute bottom-0 left-0 right-0 h-40"
            style={{ background: 'linear-gradient(to top, #0A0A0A, transparent)' }}
          />
        </div>

        {/* Content left */}
        <div className="max-w-[1600px] mx-auto w-full px-6 relative z-30 pt-36 min-h-[90vh] flex items-center">
          <div className="max-w-md lg:max-w-xl">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              {/* Brand Tag */}
              <EditableElement id="falcao_hero_tag_el_desktop" label="Tag de Marca">
                <div className="flex items-center gap-3 mb-8">
                  <span className="inline-block w-8 h-[1px] bg-[#C9A96E]" />
                  <span className="text-[11px] font-medium tracking-[0.3em] uppercase text-[#C9A96E]">
                    <EditableText id="falcao_hero_tag_desktop" defaultText="Remodelação Glútea" />
                  </span>
                </div>
              </EditableElement>

              <h1 className="text-3xl md:text-[42px] font-light leading-[1.1] mb-8 text-white">
                <EditableText id="falcao_hero_title_1_desktop" defaultText="O bumbum que você gostaria de ver no espelho " />
                <span className="font-serif italic text-[#C9A96E]">
                  <EditableText id="falcao_hero_title_accent_desktop" defaultText="pode estar mais próximo do que imagina." />
                </span>
              </h1>

              <EditableText
                id="falcao_hero_desc_1_desktop"
                as="p"
                className="text-sm md:text-base text-white/50 mb-4 leading-relaxed max-w-lg font-light block"
                defaultText="A Remodelação Glútea realizada pelo Dr. João Falcão foi desenvolvida para mulheres que desejam melhorar o formato do corpo, valorizar as curvas naturais e recuperar a confiança com a própria imagem."
              />
              <EditableText
                id="falcao_hero_desc_2_desktop"
                as="p"
                className="text-sm md:text-base text-white/50 mb-10 leading-relaxed max-w-lg font-light block"
                defaultText="Mais do que aumentar volume, o objetivo é esculpir o contorno do corpo de forma harmônica e natural, respeitando a anatomia individual de cada paciente."
              />

              <EditableElement id="falcao_hero_cta_el_desktop" label="Botão CTA">
                <a
                  href="https://wa.me/5575999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-[#C9A96E] via-[#E8D5A3] to-[#C9A96E] text-[#0A0A0A] font-semibold px-7 py-3.5 rounded-full hover:shadow-lg hover:shadow-[#C9A96E]/25 transition-all text-sm uppercase tracking-wider"
                >
                  <EditableText id="falcao_hero_cta_text_desktop" defaultText="Quero Agendar Minha Avaliação" />
                  <ArrowRight className="w-4 h-4" />
                </a>
              </EditableElement>

              {/* Stats */}
              <EditableElement id="falcao_hero_stats_el_desktop" label="Estatísticas">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="mt-14 flex items-center gap-8"
                >
                  <div>
                    <p className="text-2xl font-bold text-[#C9A96E]">
                      <EditableText id="falcao_stat_1_val_desktop" defaultText="+2.000" />
                    </p>
                    <p className="text-[10px] text-white/30 tracking-wider uppercase mt-1">
                      <EditableText id="falcao_stat_1_label_desktop" defaultText="Procedimentos" />
                    </p>
                  </div>
                  <div className="w-[1px] h-8 bg-white/10" />
                  <div>
                    <p className="text-2xl font-bold text-white">
                      <EditableText id="falcao_stat_2_val_desktop" defaultText="98%" />
                    </p>
                    <p className="text-[10px] text-white/30 tracking-wider uppercase mt-1">
                      <EditableText id="falcao_stat_2_label_desktop" defaultText="Satisfação" />
                    </p>
                  </div>
                  <div className="w-[1px] h-8 bg-white/10" />
                  <div>
                    <p className="text-2xl font-bold text-white">
                      <EditableText id="falcao_stat_3_val_desktop" defaultText="0" />
                    </p>
                    <p className="text-[10px] text-white/30 tracking-wider uppercase mt-1">
                      <EditableText id="falcao_stat_3_label_desktop" defaultText="Cortes" />
                    </p>
                  </div>
                </motion.div>
              </EditableElement>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
