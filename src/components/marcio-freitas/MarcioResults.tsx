import React, { useCallback, useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';
import { Images, Plus, Trash2, X, Upload, Loader2 } from 'lucide-react';
import { EditableText } from '../EditableWrappers';
import { useEditor } from '../../context/EditorContext';
import { supabase } from '../../integrations/supabase/client';

const DEFAULT_RESULTS = [
  { id: 'marcio_res_1', src: '/assets/marcio-freitas/section_ref_03.png', label: 'Caso 1' },
  { id: 'marcio_res_2', src: '/assets/marcio-freitas/section_ref_03.png', label: 'Caso 2' },
  { id: 'marcio_res_3', src: '/assets/marcio-freitas/section_ref_03.png', label: 'Caso 3' },
];

const CAROUSEL_KEY = 'marcio_carousel_images';
interface CarouselImage { id: string; src: string; label: string; }

/* ── Carousel Manager ── */
const CarouselManager: React.FC<{ open: boolean; onClose: () => void }> = ({ open, onClose }) => {
  const { content, updateContent } = useEditor();
  const [uploading, setUploading] = useState<string | null>(null);
  const images: CarouselImage[] = (content[CAROUSEL_KEY] as CarouselImage[] | undefined) || DEFAULT_RESULTS;
  const setImages = useCallback((next: CarouselImage[]) => { updateContent(CAROUSEL_KEY, next.length > 0 ? next : undefined); }, [updateContent]);

  const handleUpload = useCallback(async (file: File, index?: number) => {
    if (!file.type.startsWith('image/') || file.size > 10 * 1024 * 1024) { alert('Imagem até 10MB.'); return; }
    setUploading(index !== undefined ? `r-${index}` : 'new');
    try {
      const fileName = `marcio_${Date.now()}_${Math.random().toString(36).slice(2, 6)}.${file.name.split('.').pop() || 'jpg'}`;
      const { error } = await supabase.storage.from('editor-images').upload(fileName, file, { upsert: true });
      if (error) { alert('Erro no upload.'); return; }
      const url = supabase.storage.from('editor-images').getPublicUrl(fileName).data.publicUrl;
      if (index !== undefined) { const n = [...images]; n[index] = { ...n[index], src: url }; setImages(n); }
      else setImages([...images, { id: `marcio_res_${Date.now()}`, src: url, label: 'Nova' }]);
    } catch { alert('Erro.'); } finally { setUploading(null); }
  }, [images, setImages]);

  if (!open) return null;
  return createPortal(
    <div style={{ position: 'fixed', inset: 0, zIndex: 2147483647, display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={onClose}>
      <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.7)' }} />
      <div onClick={e => e.stopPropagation()} style={{ position: 'relative', width: '90vw', maxWidth: 700, maxHeight: '80vh', backgroundColor: '#1a1a1a', border: '1px solid #333', borderRadius: 16, padding: 24, overflow: 'auto', color: '#fff' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
          <h3 style={{ fontSize: 18, fontWeight: 700 }}>Carrossel ({images.length})</h3>
          <button onClick={onClose} style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}><X style={{ width: 20, height: 20 }} /></button>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: 12 }}>
          {images.map((img, i) => (
            <div key={img.id + i} style={{ position: 'relative', aspectRatio: '3/4', borderRadius: 12, overflow: 'hidden', border: '1px solid #333' }}>
              <img src={img.src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', top: 4, right: 4, display: 'flex', gap: 4 }}>
                <label style={{ width: 28, height: 28, borderRadius: 8, backgroundColor: 'rgba(0,0,0,0.8)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', border: '1px solid #555' }}>
                  {uploading === `r-${i}` ? <Loader2 style={{ width: 14, height: 14, animation: 'spin 1s linear infinite' }} /> : <Upload style={{ width: 14, height: 14 }} />}
                  <input type="file" accept="image/*" style={{ display: 'none' }} onChange={e => e.target.files?.[0] && handleUpload(e.target.files[0], i)} />
                </label>
                <button onClick={() => setImages(images.filter((_, j) => j !== i))} style={{ width: 28, height: 28, borderRadius: 8, backgroundColor: 'rgba(220,38,38,0.9)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', border: 'none', color: '#fff' }}>
                  <Trash2 style={{ width: 14, height: 14 }} />
                </button>
              </div>
            </div>
          ))}
          <label style={{ aspectRatio: '3/4', borderRadius: 12, border: '2px dashed #555', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', gap: 8, color: '#888' }}>
            {uploading === 'new' ? <Loader2 style={{ width: 24, height: 24, animation: 'spin 1s linear infinite' }} /> : <><Plus style={{ width: 24, height: 24 }} /><span style={{ fontSize: 12 }}>Adicionar</span></>}
            <input type="file" accept="image/*" style={{ display: 'none' }} onChange={e => e.target.files?.[0] && handleUpload(e.target.files[0])} />
          </label>
        </div>
        <div style={{ marginTop: 16, display: 'flex', justifyContent: 'flex-end', gap: 8 }}>
          <button onClick={() => setImages(DEFAULT_RESULTS)} style={{ padding: '8px 16px', borderRadius: 8, border: '1px solid #555', background: 'transparent', color: '#fff', fontSize: 13, cursor: 'pointer' }}>Resetar</button>
          <button onClick={onClose} style={{ padding: '8px 20px', borderRadius: 8, border: 'none', background: '#7c3aed', color: '#fff', fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>Fechar</button>
        </div>
      </div>
    </div>, document.body
  );
};

/* ── Interactive Carousel ── */
const InteractiveCarousel: React.FC<{ images: CarouselImage[] }> = ({ images }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const rafRef = useRef<number | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const dragging = useRef(false);
  const startX = useRef(0);
  const scrollStart = useRef(0);
  const all = [...images, ...images, ...images];

  useEffect(() => {
    const el = ref.current; if (!el) return;
    const step = () => {
      if (!paused && el) {
        el.scrollLeft += 1;
        const w = el.scrollWidth / 3;
        if (el.scrollLeft >= w * 2) el.scrollLeft -= w;
        else if (el.scrollLeft <= 0) el.scrollLeft += w;
      }
      rafRef.current = requestAnimationFrame(step);
    };
    el.scrollLeft = el.scrollWidth / 3;
    rafRef.current = requestAnimationFrame(step);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [paused, images]);

  const pause = useCallback(() => {
    setPaused(true);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setPaused(false), 3000);
  }, []);

  return (
    <div ref={ref} className="flex gap-5 overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing select-none"
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      onMouseDown={e => { dragging.current = true; startX.current = e.pageX - (ref.current?.offsetLeft || 0); scrollStart.current = ref.current?.scrollLeft || 0; pause(); }}
      onMouseMove={e => { if (!dragging.current || !ref.current) return; e.preventDefault(); ref.current.scrollLeft = scrollStart.current - (e.pageX - ref.current.offsetLeft - startX.current) * 1.5; }}
      onMouseUp={() => { dragging.current = false; }}
      onMouseLeave={() => { dragging.current = false; }}
      onWheel={pause} onTouchStart={pause}>
      {all.map((item, i) => (
        <div key={`${item.id}-${i}`} className="flex-shrink-0 group">
          <div className="relative rounded-2xl overflow-hidden bg-white/[0.02] border border-white/[0.06] group-hover:border-[#C9A96E]/20 transition-all duration-500">
            <img src={item.src} alt={item.label} className="h-[280px] sm:h-[350px] md:h-[420px] w-auto object-contain group-hover:scale-105 transition-transform duration-700 pointer-events-none" draggable={false} />
          </div>
        </div>
      ))}
    </div>
  );
};

export const MarcioResults = () => {
  const { isEditMode, content } = useEditor();
  const [showMgr, setShowMgr] = useState(false);
  const images: CarouselImage[] = (content[CAROUSEL_KEY] as CarouselImage[] | undefined) || DEFAULT_RESULTS;

  return (
    <section className="relative pt-8 pb-4 md:pt-28 md:pb-6 bg-[#0d0a06]">
      <div className="relative z-10">
        {/* Header */}
        <div className="max-w-[1600px] mx-auto px-6 mb-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center gap-3 justify-center mb-6">
              <span className="inline-block w-8 h-[1px] bg-[#C9A96E]" />
              <span className="text-[11px] font-medium tracking-[0.3em] uppercase text-[#C9A96E]">
                <EditableText id="marcio_results_tag" defaultText="Transformação Real" />
              </span>
              <span className="inline-block w-8 h-[1px] bg-[#C9A96E]" />
            </div>

            <h2 className="text-2xl md:text-[36px] font-light leading-[1.15] mb-8 text-white text-center">
              <EditableText id="marcio_results_title1" defaultText="Resultados que falam " />
              <span className="italic text-[#C9A96E]">
                <EditableText id="marcio_results_title2" defaultText="por si só." />
              </span>
            </h2>

            <EditableText id="marcio_results_desc" as="p" className="text-sm md:text-lg text-white leading-relaxed font-light max-w-2xl mx-auto text-center block"
              defaultText="Cada caso é único — conheça algumas das transformações reais realizadas pelo Dr. Marcio Freitas." />
          </motion.div>
        </div>

        {/* Carousel */}
        <div className="relative w-full overflow-hidden mb-8 md:mb-24">
          {isEditMode && (
            <div className="absolute top-3 left-1/2 -translate-x-1/2 z-20">
              <button onClick={() => setShowMgr(true)} style={{ backgroundColor: '#7c3aed', border: '2px solid #a78bfa', color: '#fff', fontSize: 12, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 6, padding: '8px 14px', borderRadius: 10, cursor: 'pointer', boxShadow: '0 4px 20px rgba(124,58,237,0.5)' }}>
                <Images style={{ width: 16, height: 16 }} /> Gerenciar ({images.length})
              </button>
            </div>
          )}
          <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-[#0d0a06] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-[#0d0a06] to-transparent z-10 pointer-events-none" />
          <InteractiveCarousel images={images} />
        </div>
      </div>
      <CarouselManager open={showMgr} onClose={() => setShowMgr(false)} />
    </section>
  );
};
