import React from 'react';
import { motion } from 'framer-motion';
import { EditableText } from '../EditableWrappers';

export const MarcioExpertise = () => {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-[#0d0a06]">
      {/* Top gold line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A96E]/40 to-transparent" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6">
        {/* Single unified glass box containing everything */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden border border-white/[0.10] shadow-[0_8px_48px_rgba(0,0,0,0.5)]"
          style={{ background: 'linear-gradient(160deg, rgba(255,255,255,0.06) 0%, rgba(201,169,110,0.03) 50%, rgba(255,255,255,0.02) 100%)' }}>
          {/* Gold gradient border on top */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-[#C9A96E]/60 via-[#C9A96E]/30 to-transparent" />

          <div className="flex flex-col md:flex-row items-stretch">
            {/* Text/Stats side */}
            <div className="flex-1 p-8 md:p-12 lg:p-16 flex flex-col justify-center backdrop-blur-xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-block w-8 h-[1px] bg-[#C9A96E]" />
                <span className="text-[11px] font-medium tracking-[0.3em] uppercase text-[#C9A96E]">
                  <EditableText id="marcio_expertise_tag" defaultText="Experiência Comprovada" />
                </span>
              </div>

              <h2 className="text-2xl md:text-[36px] font-light leading-[1.15] mb-6 text-white">
                <EditableText id="marcio_expertise_title1" defaultText="Qualidade e " />
                <span className="italic text-[#C9A96E]">
                  <EditableText id="marcio_expertise_title2" defaultText="Expertise." />
                </span>
              </h2>

              <p className="text-white/60 text-sm md:text-base leading-relaxed mb-8 max-w-lg font-light">
                <EditableText id="marcio_expertise_desc" defaultText="Mais de duas décadas dedicadas à rinoplastia e rinomodelação, com milhares de procedimentos realizados com excelência e segurança." />
              </p>

              <div className="flex flex-col sm:flex-row gap-10 sm:gap-16">
                <div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-[#C9A96E] text-lg">+</span>
                    <span className="text-5xl md:text-[72px] font-bold text-[#C9A96E] leading-none">20</span>
                  </div>
                  <p className="text-white/50 text-sm mt-3 max-w-[180px] font-light">
                    <EditableText id="marcio_expertise_stat1" defaultText="anos de atuação na estética facial" />
                  </p>
                </div>
                <div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-[#C9A96E] text-lg">+</span>
                    <span className="text-5xl md:text-[72px] font-bold text-[#C9A96E] leading-none">10k</span>
                  </div>
                  <p className="text-white/50 text-sm mt-3 max-w-[200px] font-light">
                    <EditableText id="marcio_expertise_stat2" defaultText="cirurgias realizadas com sucesso" />
                  </p>
                </div>
              </div>
            </div>

            {/* Video side — inside the same glass box */}
            <div className="flex-shrink-0 w-full md:w-[340px] lg:w-[380px] relative">
              <div className="relative w-full h-full min-h-[400px] md:min-h-0">
                <img src="/assets/marcio-freitas/section_ref_02.png" alt="Vídeo" className="w-full h-full object-cover" />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                  <div className="w-16 h-16 rounded-full border-2 border-white/50 flex items-center justify-center hover:bg-white/10 transition cursor-pointer backdrop-blur-sm">
                    <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom gold line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A96E]/40 to-transparent" />
    </section>
  );
};
