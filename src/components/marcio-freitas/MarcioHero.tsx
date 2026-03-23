import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { EditableText, EditableImage, EditableElement } from '../EditableWrappers';
import { MARCIO_WHATSAPP_URL } from './marcioConstants';

export const MarcioHero = () => {
  return (
    <section className="relative overflow-hidden bg-[#0d0a06] z-10">
      {/* ===== MOBILE ===== */}
      <div className="md:hidden flex flex-col">
        {/* Full-bleed image */}
        <div className="relative w-full aspect-square overflow-hidden">
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            className="w-full h-full"
          >
            <EditableImage id="marcio_hero_model" defaultSrc="/assets/marcio-freitas/section_ref_01.png" alt="Dr. Marcio Freitas" className="w-full h-full object-cover object-top" />
          </motion.div>
          <div className="absolute bottom-0 left-0 right-0 h-32 z-20 pointer-events-none" style={{ background: 'linear-gradient(to top, #0d0a06, transparent)' }} />

          {/* Authority badges */}
          <div className="absolute right-2 bottom-4 z-30 flex flex-col gap-1.5 items-end">
            {['+20 anos de experiência', '+10.592 cirurgias realizadas', 'Médico e Cirurgião Dentista'].map((text, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + i * 0.12 }}
                className="px-3 py-1.5 rounded-md text-[9px] font-medium text-[#E8D5A3] tracking-wide"
                style={{ background: 'rgba(13,10,6,0.55)', backdropFilter: 'blur(12px)', border: '1px solid rgba(201,169,110,0.4)' }}>
                {text}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="px-6 pt-6 pb-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="flex flex-col items-center">
            <EditableElement id="marcio_hero_tag_el" label="Tag">
              <div className="flex items-center gap-3 mb-5">
                <span className="inline-block w-6 h-[1px] bg-[#C9A96E]" />
                <span className="text-[10px] font-medium tracking-[0.3em] uppercase text-[#C9A96E]">
                  <EditableText id="marcio_hero_tag" defaultText="Rinoplastia" />
                </span>
                <span className="inline-block w-6 h-[1px] bg-[#C9A96E]" />
              </div>
            </EditableElement>

            <h1 className="text-2xl font-light leading-[1.1] mb-5 text-white">
              <EditableText id="marcio_hero_title" defaultText="Já se sentiu mal em fotos " />
              <span className="italic text-[#C9A96E]">
                <EditableText id="marcio_hero_title_accent" defaultText="por causa do seu nariz?" />
              </span>
            </h1>

            <EditableText id="marcio_hero_p1" as="p" className="text-xs text-white mb-4 leading-relaxed font-light block"
              defaultText="O nariz é o centro do rosto, e qualquer detalhe ganha destaque, afetando como você se vê e sente." />
            <EditableText id="marcio_hero_p2" as="p" className="text-xs text-white mb-6 leading-relaxed font-light block"
              defaultText="A rinoplastia pode transformar essa percepção, melhorando tanto a estética quanto a função nasal." />

            <EditableElement id="marcio_hero_cta_el" label="CTA Hero">
              <a href={MARCIO_WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#C9A96E] via-[#E8D5A3] to-[#C9A96E] text-[#0d0a06] font-semibold px-7 py-3.5 rounded-full hover:shadow-lg hover:shadow-[#C9A96E]/25 transition-all text-sm uppercase tracking-wider w-full justify-center">
                <EditableText id="marcio_hero_cta_text" defaultText="Desejo Mudar a Estética do Meu Nariz" />
                <ArrowRight className="w-4 h-4" />
              </a>
            </EditableElement>

            <div className="pb-[50px]" />
          </motion.div>
        </div>
      </div>

      {/* ===== DESKTOP ===== */}
      <div className="hidden md:block min-h-[90vh]">
        {/* Right image */}
        <div className="absolute right-0 top-0 h-full w-[55%] z-[1]">
          <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1.2 }} className="h-full w-full">
            <EditableImage id="marcio_hero_model_desktop" defaultSrc="/assets/marcio-freitas/section_ref_01.png" alt="Dr. Marcio Freitas" className="h-full w-full object-cover object-top" />
          </motion.div>
          <div className="absolute inset-y-0 left-0 w-[60%]" style={{ background: 'linear-gradient(to right, #0d0a06, transparent)' }} />
          <div className="absolute bottom-0 left-0 right-0 h-40" style={{ background: 'linear-gradient(to top, #0d0a06, transparent)' }} />

          {/* Authority badges desktop */}
          <div className="absolute right-8 bottom-24 z-10 flex flex-col gap-3 items-end">
            {['+20 anos de experiência', '+10.592 cirurgias realizadas', 'Médico e Cirurgião Dentista'].map((text, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1 + i * 0.15 }}
                className="px-6 py-2.5 rounded-lg text-sm font-medium text-[#E8D5A3] tracking-wide"
                style={{ background: 'rgba(13,10,6,0.55)', backdropFilter: 'blur(12px)', border: '1px solid rgba(201,169,110,0.4)' }}>
                {text}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Left content */}
        <div className="max-w-[1600px] mx-auto w-full px-6 pl-[5%] xl:pl-[8%] relative z-30 pt-36 min-h-[90vh] flex items-center">
          <div className="max-w-md lg:max-w-xl">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <EditableElement id="marcio_hero_tag_el_desktop" label="Tag">
                <div className="flex items-center gap-3 mb-8">
                  <span className="inline-block w-8 h-[1px] bg-[#C9A96E]" />
                  <span className="text-[11px] font-medium tracking-[0.3em] uppercase text-[#C9A96E]">
                    <EditableText id="marcio_hero_tag_desktop" defaultText="Rinoplastia" />
                  </span>
                </div>
              </EditableElement>

              <h1 className="text-3xl md:text-[42px] font-light leading-[1.1] mb-8 text-white">
                <EditableText id="marcio_hero_title_desktop" defaultText="Já se sentiu mal em fotos " />
                <span className="italic text-[#C9A96E]">
                  <EditableText id="marcio_hero_title_accent_desktop" defaultText="por causa do seu nariz?" />
                </span>
              </h1>

              <EditableText id="marcio_hero_p1_desktop" as="p" className="text-sm md:text-base text-white mb-4 leading-relaxed max-w-lg font-light block"
                defaultText="O nariz é o centro do rosto, e qualquer detalhe ganha destaque, afetando como você se vê e sente." />
              <EditableText id="marcio_hero_p2_desktop" as="p" className="text-sm md:text-base text-white mb-4 leading-relaxed max-w-lg font-light block"
                defaultText="A rinoplastia pode transformar essa percepção, melhorando tanto a estética quanto a função nasal." />
              <p className="text-sm md:text-base text-white mb-10 leading-relaxed max-w-lg font-semibold">
                <EditableText id="marcio_hero_p3_desktop" defaultText="Ninguém merece ter que se esconder, clique e recupere a sua autoconfiança!" />
              </p>

              <EditableElement id="marcio_hero_cta_el_desktop" label="CTA Hero">
                <a href={MARCIO_WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-[#C9A96E] via-[#E8D5A3] to-[#C9A96E] text-[#0d0a06] font-semibold px-7 py-3.5 rounded-full hover:shadow-lg hover:shadow-[#C9A96E]/25 transition-all text-sm uppercase tracking-wider">
                  <EditableText id="marcio_hero_cta_text_desktop" defaultText="Desejo Mudar a Estética do Meu Nariz" />
                  <ArrowRight className="w-4 h-4" />
                </a>
              </EditableElement>

              <div className="pb-[50px]" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
