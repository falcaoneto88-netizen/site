import React, { useState, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { EditableText, EditableImage } from '../EditableWrappers';

const benefits = [
  { id: 'marcio_ben_1', text: 'Reduzir o tamanho do nariz' },
  { id: 'marcio_ben_2', text: 'Modelar o dorso nasal' },
  { id: 'marcio_ben_3', text: 'Arrebitar e definir a ponta' },
  { id: 'marcio_ben_4', text: 'Corrigir desvios de septo' },
];

const BeforeAfterSlider = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [sliderPos, setSliderPos] = useState(50);
  const isDragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPos((x / rect.width) * 100);
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => { isDragging.current = true; updatePosition(e.clientX); };
  const handleMouseMove = (e: React.MouseEvent) => { if (isDragging.current) updatePosition(e.clientX); };
  const handleMouseUp = () => { isDragging.current = false; };
  const handleTouchMove = (e: React.TouchEvent) => { updatePosition(e.touches[0].clientX); };

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden cursor-col-resize select-none border border-white/[0.08]"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchMove={handleTouchMove}
    >
      {/* After (full background) */}
      <EditableImage id="marcio_whatis_after" defaultSrc="/assets/marcio-freitas/section_ref_06.png" alt="Depois" className="absolute inset-0 w-full h-full object-cover" />

      {/* Before (clipped) */}
      <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}>
        <EditableImage id="marcio_whatis_before" defaultSrc="/assets/marcio-freitas/section_ref_05.png" alt="Antes" className="absolute inset-0 w-full h-full object-cover" />
      </div>

      {/* Labels */}
      <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm text-white text-[10px] uppercase tracking-widest px-3 py-1 rounded-full z-20">Antes</div>
      <div className="absolute top-4 right-4 bg-[#C9A96E]/80 backdrop-blur-sm text-[#0d0a06] text-[10px] uppercase tracking-widest px-3 py-1 rounded-full z-20">Depois</div>

      {/* Slider line + handle */}
      <div className="absolute top-0 bottom-0 z-30 pointer-events-none" style={{ left: `${sliderPos}%`, transform: 'translateX(-50%)' }}>
        <div className="w-[2px] h-full bg-white/80" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 shadow-lg flex items-center justify-center pointer-events-auto cursor-col-resize">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M5 3L2 8L5 13" stroke="#0d0a06" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M11 3L14 8L11 13" stroke="#0d0a06" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>
      </div>
    </div>
  );
};

export const MarcioWhatIs = () => {
  return (
    <section className="relative overflow-hidden bg-[#0d0a06]">
      {/* ===== MOBILE ===== */}
      <div className="md:hidden flex flex-col px-6 py-16">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col items-center text-center mb-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-block w-8 h-[1px] bg-[#C9A96E]" />
            <span className="text-[11px] font-medium tracking-[0.3em] uppercase text-[#C9A96E]">
              <EditableText id="marcio_whatis_tag" defaultText="O Procedimento" />
            </span>
            <span className="inline-block w-8 h-[1px] bg-[#C9A96E]" />
          </div>

          <h2 className="text-2xl font-light leading-[1.15] mb-6 text-white">
            <EditableText id="marcio_whatis_t1" defaultText="Desmistificando " />
            <span className="italic text-[#C9A96E]">
              <EditableText id="marcio_whatis_t2" defaultText="a Rinoplastia." />
            </span>
          </h2>

          <EditableText id="marcio_whatis_p1" as="p" className="text-sm text-white leading-relaxed mb-6 font-light block"
            defaultText="Já pensou em realizar o seu sonho de ter um nariz que te agrade, com uma cirurgia sem dores no pós-operatório, sem a utilização de talas, podendo respirar normalmente após a cirurgia?" />
        </motion.div>

        <BeforeAfterSlider />

        <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-10">
          <p className="text-sm text-white leading-relaxed mb-5 font-medium text-center">
            <EditableText id="marcio_whatis_intro" defaultText="A Rinoplastia permite:" />
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {benefits.map((item, i) => (
              <div key={item.id} className="flex items-start gap-3 bg-white/[0.02] border border-white/[0.05] rounded-xl px-4 py-3">
                <div className="w-5 h-5 rounded-full bg-[#C9A96E]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-[#C9A96E]" />
                </div>
                <span className="text-white text-sm"><EditableText id={`${item.id}_mobile`} defaultText={item.text} /></span>
              </div>
            ))}
          </div>

          <div className="relative p-5 rounded-2xl bg-white/[0.05] backdrop-blur-md border border-white/[0.1] mt-8">
            <EditableText id="marcio_whatis_footer" as="p" className="text-sm text-white leading-relaxed font-light block"
              defaultText="É um procedimento cirúrgico que tem como objetivo remodelar a estrutura nasal para melhorar a estética e função do nariz, fazendo com que ele se torne mais harmonioso com o restante do rosto." />
          </div>
        </motion.div>
      </div>

      {/* ===== DESKTOP — Content left, Before/After right ===== */}
      <div className="hidden md:flex items-center py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto w-full px-6 flex items-center gap-16 lg:gap-24">
          {/* Left — Content */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="flex-1 max-w-xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-block w-8 h-[1px] bg-[#C9A96E]" />
              <span className="text-[11px] font-medium tracking-[0.3em] uppercase text-[#C9A96E]">
                <EditableText id="marcio_whatis_tag_desktop" defaultText="O Procedimento" />
              </span>
            </div>

            <h2 className="text-2xl md:text-[36px] font-light leading-[1.15] mb-8 text-white">
              <EditableText id="marcio_whatis_t1_desktop" defaultText="Desmistificando " />
              <span className="italic text-[#C9A96E]">
                <EditableText id="marcio_whatis_t2_desktop" defaultText="a Rinoplastia." />
              </span>
            </h2>

            <EditableText id="marcio_whatis_p1_desktop" as="p" className="text-sm md:text-lg text-white leading-relaxed mb-6 font-light block"
              defaultText="Já pensou em realizar o seu sonho de ter um nariz que te agrade, com uma cirurgia sem dores no pós-operatório, sem a utilização de talas, podendo respirar normalmente após a cirurgia?" />

            <p className="text-sm md:text-lg text-white leading-relaxed mb-5 font-medium">
              <EditableText id="marcio_whatis_intro_desktop" defaultText="A Rinoplastia permite:" />
            </p>

            <div className="grid grid-cols-2 gap-4 mb-10">
              {benefits.map((item, i) => (
                <motion.div key={item.id} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                  className="flex items-start gap-3 bg-white/[0.02] border border-white/[0.05] rounded-xl px-5 py-4">
                  <div className="w-5 h-5 rounded-full bg-[#C9A96E]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-[#C9A96E]" />
                  </div>
                  <span className="text-white text-base"><EditableText id={item.id} defaultText={item.text} /></span>
                </motion.div>
              ))}
            </div>

            <p className="text-sm md:text-lg text-white leading-relaxed font-light">
              <EditableText id="marcio_whatis_footer_desktop" defaultText="É um procedimento cirúrgico que tem como objetivo remodelar a estrutura nasal para melhorar a estética e função do nariz, fazendo com que ele se torne mais harmonioso com o restante do rosto." />
            </p>
          </motion.div>

          {/* Right — Before/After slider */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.15 }}
            className="flex-shrink-0 w-[380px] lg:w-[440px]">
            <BeforeAfterSlider />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
