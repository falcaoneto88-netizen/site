import React, { useState, useRef, useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';
import { WhatsAppIcon } from './WhatsAppIcon';
import { EditableText, EditableImage, EditableElement } from '../EditableWrappers';
import { useEditor } from '../../context/EditorContext';

/* ── Before / After Slider ── */
const BeforeAfterSlider = ({ className = '' }: { className?: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [sliderPos, setSliderPos] = useState(50);
  const isDragging = useRef(false);
  const activePointerId = useRef<number | null>(null);
  const { content, isEditMode } = useEditor();

  const beforeSrc = (content['falcao_hero_before'] as string) || '/assets/dr-joao-falcao/hero_bg.jpg';
  const afterSrc = (content['falcao_hero_after'] as string) || '/assets/dr-joao-falcao/dr_joao_dark.jpg';

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPos((x / rect.width) * 100);
  }, []);

  const startDrag = useCallback((pointerId: number, clientX: number) => {
    activePointerId.current = pointerId;
    isDragging.current = true;
    updatePosition(clientX);
  }, [updatePosition]);

  const stopDrag = useCallback((pointerId?: number) => {
    if (pointerId !== undefined && activePointerId.current !== pointerId) return;
    isDragging.current = false;
    activePointerId.current = null;
  }, []);

  const handlePointerDown = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    e.preventDefault();
    e.currentTarget.setPointerCapture(e.pointerId);
    startDrag(e.pointerId, e.clientX);
  }, [startDrag]);

  const handlePointerEnd = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }
    stopDrag(e.pointerId);
  }, [stopDrag]);

  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      if (!isDragging.current) return;
      if (activePointerId.current !== null && e.pointerId !== activePointerId.current) return;
      updatePosition(e.clientX);
    };

    const handlePointerUp = (e: PointerEvent) => {
      stopDrag(e.pointerId);
    };

    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);
    window.addEventListener('pointercancel', handlePointerUp);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
      window.removeEventListener('pointercancel', handlePointerUp);
    };
  }, [stopDrag, updatePosition]);

  return (
    <div className={`relative ${className}`}>
      {/* Interactive slider area */}
      <div
        ref={containerRef}
        className="relative w-full h-full select-none touch-none cursor-ew-resize overflow-hidden"
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerEnd}
        onPointerCancel={handlePointerEnd}
      >
        {/* After (full) */}
        <img
          src={afterSrc}
          alt="Depois"
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none bg-[#0A0A0A]"
          draggable={false}
        />
        {/* Before (clipped) */}
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
        >
          <img
            src={beforeSrc}
            alt="Antes"
            className="absolute inset-0 w-full h-full object-cover object-center bg-[#0A0A0A]"
            draggable={false}
          />
        </div>

        {/* Lateral fades ON TOP of images */}
        <div className="absolute inset-y-0 left-0 w-[10%] z-[35] pointer-events-none" style={{ background: 'linear-gradient(to right, #0A0A0A, transparent)' }} />
        <div className="absolute inset-y-0 right-0 w-[10%] z-[35] pointer-events-none" style={{ background: 'linear-gradient(to left, #0A0A0A, transparent)' }} />
        <div className="absolute bottom-0 left-0 right-0 h-24 z-[35] pointer-events-none" style={{ background: 'linear-gradient(to top, #0A0A0A, transparent)' }} />

        {/* Labels inside image */}
        <div className="absolute left-[28%] top-[72%] -translate-y-1/2 z-20 px-3 py-1 rounded-md text-[10px] font-semibold uppercase tracking-widest text-white pointer-events-none"
          style={{ background: 'rgba(10,10,10,0.6)', backdropFilter: 'blur(8px)' }}>
          Antes
        </div>
        <div className="absolute right-[28%] top-[72%] -translate-y-1/2 z-20 px-3 py-1 rounded-md text-[10px] font-semibold uppercase tracking-widest text-[#E8D5A3] pointer-events-none"
          style={{ background: 'rgba(10,10,10,0.6)', backdropFilter: 'blur(8px)' }}>
          Depois
        </div>
        {/* Instruction text */}
        <div className="absolute left-1/2 -translate-x-1/2 top-[80%] z-20 px-4 py-1.5 rounded-full text-[9px] font-medium tracking-wider text-white/60 pointer-events-none whitespace-nowrap"
          style={{ background: 'rgba(10,10,10,0.5)', backdropFilter: 'blur(8px)' }}>
          Arraste para ver o antes e depois do caso
        </div>
        {/* Slider line */}
        <div
          className="absolute top-0 bottom-0 z-30 w-[2px] bg-[#C9A96E] pointer-events-none"
          style={{ left: `${sliderPos}%`, transform: 'translateX(-50%)' }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full border-2 border-[#C9A96E] bg-[#0A0A0A]/70 backdrop-blur-sm flex items-center justify-center shadow-lg shadow-black/40">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7 4L3 10L7 16" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M13 4L17 10L13 16" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Editor image pickers (only visible in edit mode, positioned outside slider interaction) */}
      {isEditMode && (
        <div className="absolute top-14 right-4 z-50 flex flex-col sm:flex-row items-end gap-3">
          <div className="relative">
            <EditableImage
              id="falcao_hero_before"
              defaultSrc="/assets/dr-joao-falcao/hero_bg.jpg"
              alt="Imagem Antes"
              className="w-16 h-16 rounded-lg object-cover border-2 border-white/30"
            />
            <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-[8px] font-bold text-white bg-black/60 px-2 py-0.5 rounded whitespace-nowrap">ANTES</span>
          </div>
          <div className="relative">
            <EditableImage
              id="falcao_hero_after"
              defaultSrc="/assets/dr-joao-falcao/dr_joao_dark.jpg"
              alt="Imagem Depois"
              className="w-16 h-16 rounded-lg object-cover border-2 border-[#C9A96E]/50"
            />
            <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-[8px] font-bold text-[#E8D5A3] bg-black/60 px-2 py-0.5 rounded whitespace-nowrap">DEPOIS</span>
          </div>
        </div>
      )}
    </div>
  );
};

/* ── Authority Badges ── */
const BADGES = [
  '+1.000 alunos em todo o mundo',
  '+5.000 bumbuns transformados',
  'Criador do Método Le Contour Premium',
];

const AuthorityBadges = ({ mobile = false }: { mobile?: boolean }) => (
  <div className={mobile
    ? "absolute right-2 bottom-4 z-30 flex flex-col gap-1.5 items-end"
    : "absolute right-8 bottom-24 z-10 flex flex-col gap-3 items-end"
  }>
    {BADGES.map((text, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, x: mobile ? 20 : 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: mobile ? 0.5 : 0.6, delay: (mobile ? 0.8 : 1) + i * (mobile ? 0.12 : 0.15), ease: 'easeOut' }}
        className={`px-${mobile ? 3 : 6} py-${mobile ? '1.5' : '2.5'} rounded-${mobile ? 'md' : 'lg'} text-${mobile ? '[9px]' : 'sm'} font-medium text-[#E8D5A3] tracking-wide`}
        style={{
          padding: mobile ? '6px 12px' : '10px 24px',
          borderRadius: mobile ? '6px' : '8px',
          fontSize: mobile ? '9px' : '14px',
          background: 'rgba(10, 10, 10, 0.55)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(201, 169, 110, 0.4)',
        }}
      >
        {text}
      </motion.div>
    ))}
  </div>
);

export const FalcaoHero = () => {
  const { content } = useEditor();
  const useSlider = content['falcao_hero_slider_enabled'] === true;

  return (
    <section className="relative overflow-hidden bg-[#0A0A0A] z-10">
      {/* ===== MOBILE LAYOUT ===== */}
      <div className="md:hidden flex flex-col">
        <div className="relative w-full aspect-square overflow-hidden">
          <motion.div
            initial={{ opacity: 0, scale: useSlider ? 1.05 : 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: useSlider ? 1.2 : 1.5, ease: 'easeOut' }}
            className="w-full h-full"
          >
            {useSlider ? (
              <BeforeAfterSlider className="w-full h-full" />
            ) : (
              <EditableImage
                id="falcao_hero_img_mobile"
                defaultSrc="/assets/dr-joao-falcao/dr_joao_dark.jpg"
                alt="Dr. João Falcão"
                className="w-full h-full object-cover object-top"
              />
            )}
          </motion.div>
          <div
            className="absolute bottom-0 left-0 right-0 h-32 z-40 pointer-events-none"
            style={{ background: 'linear-gradient(to top, #0A0A0A, transparent)' }}
          />
          {!useSlider && <AuthorityBadges mobile />}
        </div>

        {/* Content below */}
        <div className="px-6 pt-6 pb-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex flex-col items-center"
          >
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
              <EditableText id="falcao_hero_title_1" defaultText="O Método que Transforma o Formato dos Glúteos " />
              <span className="font-serif italic text-[#C9A96E]">
                <EditableText id="falcao_hero_title_accent" defaultText="Sem Cirurgia" />
              </span>
            </h1>

            <EditableText
              id="falcao_hero_desc_1"
              as="p"
              className="text-xs text-white mb-6 leading-relaxed font-light block"
              defaultText="Descubra como nosso método exclusivo já ajudou dezenas de mulheres a conquistar glúteos mais volumosos, firmes e harmoniosos."
            />

            <EditableElement id="falcao_hero_cta_el" label="Botão CTA">
              <a
                href="https://wa.me/351926991096?text=Ol%C3%A1%2C%20vim%20do%20Instagram%20e%20gostaria%20de%20agendar%20uma%20consulta%20com%20o%20Dr.%20Jo%C3%A3o%20Falc%C3%A3o."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#C9A96E] via-[#E8D5A3] to-[#C9A96E] text-[#0A0A0A] font-semibold px-7 py-3.5 rounded-full hover:shadow-lg hover:shadow-[#C9A96E]/25 transition-all text-sm uppercase tracking-wider w-full justify-center"
              >
                <EditableText id="falcao_hero_cta_text" defaultText="Quero saber mais" />
                <WhatsAppIcon className="w-4 h-4" />
              </a>
            </EditableElement>

            <div className="pb-[50px]" />
          </motion.div>
        </div>
      </div>

      {/* ===== DESKTOP LAYOUT ===== */}
      <div className="hidden md:block min-h-[90vh]">
        {/* Background - solid black */}
        <div className="absolute inset-0 z-0 bg-[#0A0A0A]" />

        {/* Right side: image or slider */}
        <div className="absolute right-[8%] top-0 h-full w-[38%] z-[1]">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="h-full w-full"
          >
            {useSlider ? (
              <BeforeAfterSlider className="w-full h-full" />
            ) : (
              <EditableImage
                id="falcao_hero_doctor_img"
                defaultSrc="/assets/dr-joao-falcao/dr_joao_dark.jpg"
                alt="Dr. João Falcão"
                className="h-full w-full object-cover object-top"
              />
            )}
          </motion.div>
          <div
            className="absolute inset-y-0 left-0 w-[40%] z-40 pointer-events-none"
            style={{ background: 'linear-gradient(to right, #0A0A0A, transparent)' }}
          />
          <div
            className="absolute bottom-0 left-0 right-0 h-40 z-40 pointer-events-none"
            style={{ background: 'linear-gradient(to top, #0A0A0A, transparent)' }}
          />
          {!useSlider && <AuthorityBadges />}
        </div>

        {/* Content left */}
        <div className="max-w-[1600px] mx-auto w-full px-6 pl-[5%] xl:pl-[8%] relative z-30 pt-36 min-h-[90vh] flex items-center pointer-events-none">
          <div className="max-w-md lg:max-w-xl pointer-events-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <EditableElement id="falcao_hero_tag_el_desktop" label="Tag de Marca">
                <div className="flex items-center gap-3 mb-8">
                  <span className="inline-block w-8 h-[1px] bg-[#C9A96E]" />
                  <span className="text-[11px] font-medium tracking-[0.3em] uppercase text-[#C9A96E]">
                    <EditableText id="falcao_hero_tag_desktop" defaultText="Remodelação Glútea" />
                  </span>
                </div>
              </EditableElement>

              <h1 className="text-3xl md:text-[42px] font-light leading-[1.1] mb-8 text-white">
                <EditableText id="falcao_hero_title_1_desktop" defaultText="O Método que Transforma o Formato dos Glúteos " />
                <span className="font-serif italic text-[#C9A96E]">
                  <EditableText id="falcao_hero_title_accent_desktop" defaultText="Sem Cirurgia" />
                </span>
              </h1>

              <EditableText
                id="falcao_hero_desc_1_desktop"
                as="p"
                className="text-sm md:text-base text-white mb-10 leading-relaxed max-w-lg font-light block"
                defaultText="Descubra como nosso método exclusivo já ajudou dezenas de mulheres a conquistar glúteos mais volumosos, firmes e harmoniosos."
              />

              <EditableElement id="falcao_hero_cta_el_desktop" label="Botão CTA">
                <a
                  href="https://wa.me/351926991096?text=Ol%C3%A1%2C%20vim%20do%20Instagram%20e%20gostaria%20de%20agendar%20uma%20consulta%20com%20o%20Dr.%20Jo%C3%A3o%20Falc%C3%A3o."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-[#C9A96E] via-[#E8D5A3] to-[#C9A96E] text-[#0A0A0A] font-semibold px-7 py-3.5 rounded-full hover:shadow-lg hover:shadow-[#C9A96E]/25 transition-all text-sm uppercase tracking-wider"
                >
                  <EditableText id="falcao_hero_cta_text_desktop" defaultText="Quero saber mais" />
                  <WhatsAppIcon className="w-4 h-4" />
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
