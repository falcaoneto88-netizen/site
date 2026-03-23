import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { EditableText, EditableImage } from '../EditableWrappers';
import { Star, BadgeCheck } from 'lucide-react';

const imageSlots = [
  { id: 'falcao_artist_1', defaultSrc: '/assets/dr-joao-falcao/hero_bg.jpg' },
  { id: 'falcao_artist_2', defaultSrc: '/assets/dr-joao-falcao/hero_bg.jpg' },
  { id: 'falcao_artist_3', defaultSrc: '/assets/dr-joao-falcao/hero_bg.jpg' },
  { id: 'falcao_artist_4', defaultSrc: '/assets/dr-joao-falcao/hero_bg.jpg' },
  { id: 'falcao_artist_5', defaultSrc: '/assets/dr-joao-falcao/hero_bg.jpg' },
  { id: 'falcao_artist_6', defaultSrc: '/assets/dr-joao-falcao/hero_bg.jpg' },
];

const imageSlots2 = [
  { id: 'falcao_artist_7', defaultSrc: '/assets/dr-joao-falcao/hero_bg.jpg' },
  { id: 'falcao_artist_8', defaultSrc: '/assets/dr-joao-falcao/hero_bg.jpg' },
  { id: 'falcao_artist_9', defaultSrc: '/assets/dr-joao-falcao/hero_bg.jpg' },
  { id: 'falcao_artist_10', defaultSrc: '/assets/dr-joao-falcao/hero_bg.jpg' },
  { id: 'falcao_artist_11', defaultSrc: '/assets/dr-joao-falcao/hero_bg.jpg' },
  { id: 'falcao_artist_12', defaultSrc: '/assets/dr-joao-falcao/hero_bg.jpg' },
];

const tripled = [...imageSlots, ...imageSlots, ...imageSlots];
const tripled2 = [...imageSlots2, ...imageSlots2, ...imageSlots2];

interface CarouselRowProps {
  slots: typeof tripled;
  originalSlots: typeof imageSlots;
  direction: 'left' | 'right';
  idPrefix: string;
}

const CarouselRow = ({ slots, originalSlots, direction, idPrefix }: CarouselRowProps) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const animRef = useRef<number>(0);
  const scrollPos = useRef(0);
  const isDragging = useRef(false);
  const dragStart = useRef(0);
  const dragScroll = useRef(0);
  const resumeTimer = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const singleSetWidth = track.scrollWidth / 3;
    scrollPos.current = singleSetWidth;
    track.style.transform = `translateX(-${scrollPos.current}px)`;

    const speed = direction === 'right' ? 0.5 : -0.5;

    const animate = () => {
      if (!isPaused && !isDragging.current) {
        scrollPos.current += speed;
        if (scrollPos.current >= singleSetWidth * 2) {
          scrollPos.current -= singleSetWidth;
        }
        if (scrollPos.current < 0) {
          scrollPos.current += singleSetWidth;
        }
        track.style.transform = `translateX(-${scrollPos.current}px)`;
      }
      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);
  }, [isPaused, direction]);

  const handlePointerDown = (e: React.PointerEvent) => {
    isDragging.current = true;
    dragStart.current = e.clientX;
    dragScroll.current = scrollPos.current;
    clearTimeout(resumeTimer.current);
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current) return;
    const delta = dragStart.current - e.clientX;
    const track = trackRef.current;
    if (!track) return;
    const singleSetWidth = track.scrollWidth / 3;
    scrollPos.current = dragScroll.current + delta;
    if (scrollPos.current >= singleSetWidth * 2) scrollPos.current -= singleSetWidth;
    if (scrollPos.current < 0) scrollPos.current += singleSetWidth;
    track.style.transform = `translateX(-${scrollPos.current}px)`;
  };

  const handlePointerUp = () => {
    isDragging.current = false;
    resumeTimer.current = setTimeout(() => setIsPaused(false), 100);
  };

  return (
    <div
      className="relative w-full overflow-hidden cursor-grab active:cursor-grabbing"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => {
        if (!isDragging.current) setIsPaused(false);
      }}
    >
      <div className="absolute left-0 top-0 bottom-0 w-[10%] bg-gradient-to-r from-[#0A0A0A] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-[10%] bg-gradient-to-l from-[#0A0A0A] to-transparent z-10 pointer-events-none" />

      <div
        ref={trackRef}
        className="flex gap-4 will-change-transform select-none"
        style={{ width: 'max-content' }}
      >
        {slots.map((slot, i) => (
          <div
            key={`${idPrefix}_${slot.id}_${i}`}
            className="flex-shrink-0 rounded-xl overflow-hidden border border-white/[0.08] hover:border-[#C9A96E]/30 transition-all duration-500 h-[280px]"
          >
            <EditableImage
              id={slot.id}
              defaultSrc={slot.defaultSrc}
              alt={`Resultado ${(i % originalSlots.length) + 1}`}
              className="h-full w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export const FalcaoTestimonials = () => {
  return (
    <section className="relative py-20 md:py-28 bg-[#0A0A0A] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#C9A96E]/[0.03] rounded-full blur-[180px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-6"
        >
          <div className="flex items-center gap-3 justify-center mb-6">
            <span className="inline-block w-8 h-[1px] bg-[#C9A96E]" />
            <span className="text-[11px] font-medium tracking-[0.3em] uppercase text-[#C9A96E]">
              <EditableText id="falcao_test_tag" defaultText="Reconhecimento Nacional" />
            </span>
            <span className="inline-block w-8 h-[1px] bg-[#C9A96E]" />
          </div>
          <h2 className="text-2xl md:text-[40px] font-light leading-[1.15] text-white mb-4">
            <EditableText id="falcao_test_title_1" defaultText="Celebridades que " />
            <span className="font-serif italic text-[#C9A96E]">
              <EditableText id="falcao_test_title_accent" defaultText="confiam" />
            </span>
            <EditableText id="falcao_test_title_2" defaultText=" no método" />
          </h2>
          <p className="text-white/50 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            <EditableText
              id="falcao_test_subtitle"
              defaultText="Influenciadoras, artistas e personalidades já transformaram seus glúteos com o Método Le Contour Premium. A escolha de quem exige excelência e resultados reais."
            />
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center justify-center gap-6 mb-12"
        >
          <div className="flex items-center gap-2 text-[#C9A96E]/70">
            <BadgeCheck className="w-4 h-4" />
            <span className="text-[11px] tracking-wider uppercase">+5.000 procedimentos</span>
          </div>
          <div className="w-[1px] h-4 bg-white/10" />
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-[#C9A96E] text-[#C9A96E]" />
            ))}
          </div>
        </motion.div>
      </div>

      <div className="space-y-4">
        <CarouselRow slots={tripled} originalSlots={imageSlots} direction="right" idPrefix="row1" />
        <CarouselRow slots={tripled2} originalSlots={imageSlots2} direction="left" idPrefix="row2" />
      </div>
    </section>
  );
};