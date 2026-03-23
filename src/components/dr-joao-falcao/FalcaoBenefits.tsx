import React, { useCallback, useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';
import { Images, Plus, Trash2, X, Upload, Loader2 } from 'lucide-react';
import { EditableText, EditableImage, EditableElement } from '../EditableWrappers';
import { useEditor } from '../../context/EditorContext';
import { supabase } from '../../integrations/supabase/client';

const DEFAULT_RESULTS = [
  { id: 'falcao_res_1', src: '/assets/real-photos/transformation_harmony_1.png', label: 'Harmonização Corporal' },
  { id: 'falcao_res_2', src: '/assets/real-photos/transformation_profile_1.jpg', label: 'Contorno e Projeção' },
  { id: 'falcao_res_3', src: '/assets/real-photos/transformation_smile_1.jpg', label: 'Resultado Natural' },
  { id: 'falcao_res_4', src: '/assets/real-photos/transformation_smile_2.jpg', label: 'Curvas Definidas' },
  { id: 'falcao_res_5', src: '/assets/real-photos/transformation_smile_3.jpg', label: 'Proporção Ideal' },
  { id: 'falcao_res_6', src: '/assets/real-photos/transformation_smile_4.png', label: 'Elegância e Confiança' },
];

const DEFAULT_RESULTS_2 = [
  { id: 'falcao_res2_1', src: '/assets/real-photos/transformation_smile_4.png', label: 'Resultado 1' },
  { id: 'falcao_res2_2', src: '/assets/real-photos/transformation_harmony_1.png', label: 'Resultado 2' },
  { id: 'falcao_res2_3', src: '/assets/real-photos/transformation_smile_2.jpg', label: 'Resultado 3' },
  { id: 'falcao_res2_4', src: '/assets/real-photos/transformation_profile_1.jpg', label: 'Resultado 4' },
  { id: 'falcao_res2_5', src: '/assets/real-photos/transformation_smile_3.jpg', label: 'Resultado 5' },
  { id: 'falcao_res2_6', src: '/assets/real-photos/transformation_smile_1.jpg', label: 'Resultado 6' },
];

const CAROUSEL_KEY = 'falcao_carousel_images';
const CAROUSEL_KEY_2 = 'falcao_carousel_images_2';

interface CarouselImage {
  id: string;
  src: string;
  label: string;
}


/* ── Carousel Manager Modal ── */
const CarouselManager: React.FC<{ open: boolean; onClose: () => void; carouselKey: string; defaults: CarouselImage[] }> = ({ open, onClose, carouselKey, defaults }) => {
  const { content, updateContent } = useEditor();
  const [uploading, setUploading] = useState<string | null>(null);

  const images: CarouselImage[] = (content[carouselKey] as CarouselImage[] | undefined) || defaults;

  const setImages = useCallback((next: CarouselImage[]) => {
    updateContent(carouselKey, next.length > 0 ? next : undefined);
  }, [updateContent, carouselKey]);

  const handleUpload = useCallback(async (file: File, index?: number) => {
    if (!file.type.startsWith('image/') || file.size > 10 * 1024 * 1024) {
      alert('Selecione uma imagem de até 10MB.');
      return;
    }
    const uploadId = index !== undefined ? `replace-${index}` : 'new';
    setUploading(uploadId);
    try {
      const ext = file.name.split('.').pop() || 'jpg';
      const fileName = `carousel_${Date.now()}_${Math.random().toString(36).slice(2, 6)}.${ext}`;
      const { error } = await supabase.storage.from('editor-images').upload(fileName, file, { upsert: true });
      if (error) { alert('Erro no upload.'); return; }
      const { data: urlData } = supabase.storage.from('editor-images').getPublicUrl(fileName);
      const url = urlData.publicUrl;

      if (index !== undefined) {
        const next = [...images];
        next[index] = { ...next[index], src: url };
        setImages(next);
      } else {
        setImages([...images, { id: `falcao_res_${Date.now()}`, src: url, label: 'Nova imagem' }]);
      }
    } catch { alert('Erro no upload.'); } finally { setUploading(null); }
  }, [images, setImages]);

  const removeImage = useCallback((index: number) => {
    const next = images.filter((_, i) => i !== index);
    setImages(next);
  }, [images, setImages]);

  if (!open) return null;

  return createPortal(
    <div
      style={{ position: 'fixed', inset: 0, zIndex: 2147483647, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      onClick={onClose}
    >
      <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.7)' }} />
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: 'relative', width: '90vw', maxWidth: 700, maxHeight: '80vh',
          backgroundColor: '#1a1a1a', border: '1px solid #333', borderRadius: 16,
          padding: 24, overflow: 'auto', color: '#fff',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
          <h3 style={{ fontSize: 18, fontWeight: 700 }}>Gerenciar Carrossel ({images.length} imagens)</h3>
          <button onClick={onClose} style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}>
            <X style={{ width: 20, height: 20 }} />
          </button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: 12 }}>
          {images.map((img, i) => (
            <div key={img.id + i} style={{ position: 'relative', aspectRatio: '3/4', borderRadius: 12, overflow: 'hidden', border: '1px solid #333' }}>
              <img src={img.src} alt={img.label} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', top: 4, right: 4, display: 'flex', gap: 4 }}>
                <label style={{
                  width: 28, height: 28, borderRadius: 8, backgroundColor: 'rgba(0,0,0,0.8)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
                  border: '1px solid #555',
                }}>
                  {uploading === `replace-${i}` ? (
                    <Loader2 style={{ width: 14, height: 14, animation: 'spin 1s linear infinite' }} />
                  ) : (
                    <Upload style={{ width: 14, height: 14 }} />
                  )}
                  <input type="file" accept="image/*" style={{ display: 'none' }}
                    onChange={(e) => e.target.files?.[0] && handleUpload(e.target.files[0], i)} />
                </label>
                <button
                  onClick={() => removeImage(i)}
                  style={{
                    width: 28, height: 28, borderRadius: 8, backgroundColor: 'rgba(220,38,38,0.9)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
                    border: 'none', color: '#fff',
                  }}
                >
                  <Trash2 style={{ width: 14, height: 14 }} />
                </button>
              </div>
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0, padding: '4px 8px',
                backgroundColor: 'rgba(0,0,0,0.7)', fontSize: 10, textAlign: 'center',
              }}>
                {i + 1}
              </div>
            </div>
          ))}

          {/* Add new button */}
          <label style={{
            aspectRatio: '3/4', borderRadius: 12, border: '2px dashed #555',
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', gap: 8, color: '#888', transition: 'border-color 0.2s',
          }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#C9A96E')}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#555')}
          >
            {uploading === 'new' ? (
              <Loader2 style={{ width: 24, height: 24, animation: 'spin 1s linear infinite' }} />
            ) : (
              <>
                <Plus style={{ width: 24, height: 24 }} />
                <span style={{ fontSize: 12 }}>Adicionar</span>
              </>
            )}
            <input type="file" accept="image/*" style={{ display: 'none' }}
              onChange={(e) => e.target.files?.[0] && handleUpload(e.target.files[0])} />
          </label>
        </div>

        <div style={{ marginTop: 16, display: 'flex', justifyContent: 'flex-end', gap: 8 }}>
          <button
            onClick={() => { setImages(defaults); }}
            style={{
              padding: '8px 16px', borderRadius: 8, border: '1px solid #555',
              backgroundColor: 'transparent', color: '#fff', fontSize: 13, cursor: 'pointer',
            }}
          >
            Resetar padrão
          </button>
          <button
            onClick={onClose}
            style={{
              padding: '8px 20px', borderRadius: 8, border: 'none',
              backgroundColor: '#7c3aed', color: '#fff', fontSize: 13, fontWeight: 600, cursor: 'pointer',
            }}
          >
            Fechar
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

const InteractiveCarousel: React.FC<{ images: CarouselImage[]; direction?: 'right' | 'left' }> = ({ images, direction = 'right' }) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isInteracting, setIsInteracting] = useState(false);
  const autoScrollRef = useRef<number | null>(null);
  const interactionTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const scrollSpeedRef = useRef(direction === 'left' ? -1 : 1);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);

  const allItems = [...images, ...images, ...images];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const step = () => {
      if (!isInteracting && track) {
        track.scrollLeft += scrollSpeedRef.current;
        const singleWidth = track.scrollWidth / 3;
        if (track.scrollLeft >= singleWidth * 2) {
          track.scrollLeft -= singleWidth;
        } else if (track.scrollLeft <= 0) {
          track.scrollLeft += singleWidth;
        }
      }
      autoScrollRef.current = requestAnimationFrame(step);
    };

    const singleWidth = track.scrollWidth / 3;
    track.scrollLeft = singleWidth;

    autoScrollRef.current = requestAnimationFrame(step);
    return () => {
      if (autoScrollRef.current) cancelAnimationFrame(autoScrollRef.current);
    };
  }, [isInteracting, images]);

  const pauseAutoScroll = useCallback(() => {
    setIsInteracting(true);
    if (interactionTimeoutRef.current) clearTimeout(interactionTimeoutRef.current);
    interactionTimeoutRef.current = setTimeout(() => {
      setIsInteracting(false);
    }, 3000);
  }, []);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    const track = trackRef.current;
    if (!track) return;
    isDraggingRef.current = true;
    startXRef.current = e.pageX - track.offsetLeft;
    scrollLeftRef.current = track.scrollLeft;
    pauseAutoScroll();
  }, [pauseAutoScroll]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDraggingRef.current || !trackRef.current) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    const walk = (x - startXRef.current) * 1.5;
    trackRef.current.scrollLeft = scrollLeftRef.current - walk;
  }, []);

  const handleMouseUp = useCallback(() => {
    isDraggingRef.current = false;
  }, []);

  return (
    <div
      ref={trackRef}
      className="flex gap-5 overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing select-none"
      style={{ WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onWheel={pauseAutoScroll}
      onTouchStart={pauseAutoScroll}
    >
      {allItems.map((item, index) => (
        <div
          key={`${item.id}-${index}`}
          className="flex-shrink-0 group"
        >
          <div className="relative rounded-2xl overflow-hidden bg-white/[0.02] border border-white/[0.06] group-hover:border-[#C9A96E]/20 transition-all duration-500">
            <img
              src={item.src}
              alt={item.label}
              className="h-[280px] sm:h-[350px] md:h-[420px] w-auto object-contain group-hover:scale-105 transition-transform duration-700 pointer-events-none"
              draggable={false}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export const FalcaoBenefits = () => {
  const { isEditMode, content } = useEditor();
  const [showManager, setShowManager] = useState(false);
  const [showManager2, setShowManager2] = useState(false);

  const images: CarouselImage[] = (content[CAROUSEL_KEY] as CarouselImage[] | undefined) || DEFAULT_RESULTS;
  const images2: CarouselImage[] = (content[CAROUSEL_KEY_2] as CarouselImage[] | undefined) || DEFAULT_RESULTS_2;

  return (
    <section className="relative pt-8 pb-4 md:pt-28 md:pb-6 bg-[#0A0A0A]">
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
        backgroundSize: '40px 40px',
      }} />

      <div className="relative z-10">
        <div className="max-w-[1600px] mx-auto px-6 mb-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <div className="flex items-center gap-3 justify-center mb-6">
              <span className="inline-block w-8 h-[1px] bg-[#C9A96E]" />
              <span className="text-[11px] font-medium tracking-[0.3em] uppercase text-[#C9A96E]">
                <EditableText id="falcao_res_tag" defaultText="Transformação Real" />
              </span>
              <span className="inline-block w-8 h-[1px] bg-[#C9A96E]" />
            </div>
            <h2 className="text-2xl md:text-[36px] font-light leading-[1.15] mb-8 text-white text-center">
              <EditableText id="falcao_res_title_1" defaultText="Resultados que falam " />
              <span className="font-serif italic text-[#C9A96E]">
                <EditableText id="falcao_res_title_accent" defaultText="por si só." />
              </span>
            </h2>
            <EditableText id="falcao_res_desc" as="p" className="text-sm md:text-lg text-white leading-relaxed font-light max-w-2xl mx-auto text-center block" defaultText="Os resultados da remodelação glútea vão além da aparência. A mudança impacta a forma como você se posiciona, se veste e se sente no próprio corpo." />
          </motion.div>
        </div>

        {/* Carousel Row 1 */}
        <div className="relative w-full overflow-hidden mb-4">
          {isEditMode && (
            <div className="absolute top-3 left-1/2 -translate-x-1/2 z-20">
              <button onClick={() => setShowManager(true)} style={{ backgroundColor: '#7c3aed', border: '2px solid #a78bfa', color: '#fff', fontSize: 12, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 6, padding: '8px 14px', borderRadius: 10, cursor: 'pointer', boxShadow: '0 4px 20px rgba(124,58,237,0.5)' }}>
                <Images style={{ width: 16, height: 16 }} />
                Gerenciar Linha 1 ({images.length})
              </button>
            </div>
          )}
          <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10 pointer-events-none" />
          <InteractiveCarousel images={images} direction="right" />
        </div>

        {/* Carousel Row 2 */}
        <div className="relative w-full overflow-hidden mb-8 md:mb-24">
          {isEditMode && (
            <div className="absolute top-3 left-1/2 -translate-x-1/2 z-20">
              <button onClick={() => setShowManager2(true)} style={{ backgroundColor: '#7c3aed', border: '2px solid #a78bfa', color: '#fff', fontSize: 12, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 6, padding: '8px 14px', borderRadius: 10, cursor: 'pointer', boxShadow: '0 4px 20px rgba(124,58,237,0.5)' }}>
                <Images style={{ width: 16, height: 16 }} />
                Gerenciar Linha 2 ({images2.length})
              </button>
            </div>
          )}
          <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10 pointer-events-none" />
          <InteractiveCarousel images={images2} direction="left" />
        </div>
      </div>

      <CarouselManager open={showManager} onClose={() => setShowManager(false)} carouselKey={CAROUSEL_KEY} defaults={DEFAULT_RESULTS} />
      <CarouselManager open={showManager2} onClose={() => setShowManager2(false)} carouselKey={CAROUSEL_KEY_2} defaults={DEFAULT_RESULTS_2} />
    </section>
  );
};
