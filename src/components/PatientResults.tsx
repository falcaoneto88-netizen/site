import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Images, X, Upload, Star } from 'lucide-react';
import { createPortal } from 'react-dom';
import { EditableText, EditableImage, EditableElement } from './EditableWrappers';
import { useEditor } from '../context/EditorContext';

const results = [
    { title: "Harmonização Orofacial", subtitle: "Estética Premium", image: "/assets/real-photos/transformation_harmony_1.png", rating: 5 },
    { title: "Reabilitação Oral", subtitle: "Protocolo All-on-4", image: "/assets/real-photos/transformation_smile_1.jpg", rating: 5 },
    { title: "Perfil Harmônico", subtitle: "Equilíbrio Facial", image: "/assets/real-photos/transformation_profile_1.jpg", rating: 5 },
    { title: "Lentes de Contato", subtitle: "Transformação Total", image: "/assets/real-photos/transformation_smile_2.jpg", rating: 5 },
    { title: "Estética e Função", subtitle: "Sorriso Renovado", image: "/assets/real-photos/transformation_smile_3.jpg", rating: 5 },
    { title: "Protocolo Superior", subtitle: "Reabilitação Estética", image: "/assets/real-photos/transformation_smile_4.png", rating: 5 },
];

/* ── Popup de edição em massa das imagens do carrossel ── */
const CarouselImageEditor: React.FC<{ open: boolean; onClose: () => void }> = ({ open, onClose }) => {
    const { content, updateContent } = useEditor();

    const handleUpload = useCallback((index: number, e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;
        if (!file.type.startsWith('image/')) { alert('Selecione uma imagem.'); return; }
        if (file.size > 10 * 1024 * 1024) { alert('Máximo 10MB.'); return; }
        const reader = new FileReader();
        reader.onload = (ev) => updateContent(`result_${index}_img`, ev.target?.result as string);
        reader.readAsDataURL(file);
        e.target.value = '';
    }, [updateContent]);

    if (!open) return null;

    return createPortal(
        <div className="fixed inset-0 z-[2147483647] flex items-center justify-center bg-black/60 backdrop-blur-sm" onClick={onClose}>
            <div
                className="bg-background rounded-2xl shadow-2xl border border-border w-[95vw] max-w-4xl max-h-[85vh] overflow-auto p-6"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                        <Images className="w-5 h-5 text-primary" />
                        Editar Imagens do Carrossel
                    </h3>
                    <button onClick={onClose} className="w-8 h-8 rounded-lg hover:bg-muted flex items-center justify-center text-foreground">
                        <X className="w-4 h-4" />
                    </button>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {results.map((item, index) => {
                        const currentSrc = typeof content[`result_${index}_img`] === 'string'
                            ? (content[`result_${index}_img`] as string)
                            : item.image;

                        return (
                            <div key={index} className="relative group rounded-xl overflow-hidden border border-border aspect-[4/5] bg-muted">
                                <img src={currentSrc} alt={item.title} className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <label className="cursor-pointer flex flex-col items-center gap-2 text-white">
                                        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg">
                                            <Upload className="w-5 h-5" />
                                        </div>
                                        <span className="text-xs font-medium">Trocar imagem</span>
                                        <input type="file" accept="image/*" className="hidden" onChange={(e) => handleUpload(index, e)} />
                                    </label>
                                </div>
                                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                                    <p className="text-white/60 text-[9px] uppercase tracking-widest">{item.subtitle}</p>
                                    <p className="text-white text-sm font-medium">{item.title}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>,
        document.body
    );
};

/* ── Carrossel 3 itens (1 no mobile) – loop infinito ── */
export const PatientResults = () => {
    const [startIndex, setStartIndex] = useState(0);
    const { isEditMode } = useEditor();
    const [showImageEditor, setShowImageEditor] = useState(false);
    const [direction, setDirection] = useState(0);

    const total = results.length;
    const getIndex = (i: number) => ((i % total) + total) % total;

    const next = () => { setDirection(1); setStartIndex((prev) => getIndex(prev + 1)); };
    const prev = () => { setDirection(-1); setStartIndex((prev) => getIndex(prev - 1)); };

    // Visible items: 3 on desktop, 1 on mobile (handled via CSS)
    const visibleIndices = [0, 1, 2].map((offset) => getIndex(startIndex + offset));

    return (
        <section className="py-16 md:py-28 bg-background overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                {/* Header */}
                <EditableElement id="results_header_el" label="Cabeçalho">
                    <div className="text-center mb-12 md:mb-16">
                        <EditableText id="results_tag" defaultText="CASOS REAIS" className="text-[9px] md:text-[10px] font-bold tracking-[0.4em] uppercase text-primary/50 mb-3 md:mb-4 block" />
                        <h2 className="text-2xl md:text-[30px] font-serif text-foreground mb-4 leading-tight">
                            <EditableText id="results_title_1" defaultText="Veja casos de" />{' '}
                            <span className="text-primary italic">
                                <EditableText id="results_title_2" defaultText="Transformações" />
                            </span>{' '}
                            <EditableText id="results_title_3" defaultText="da nossa" />{' '}
                            <span className="text-primary italic">
                                <EditableText id="results_title_4" defaultText="Essência" />
                            </span>
                        </h2>
                        <EditableText
                            id="results_subtitle"
                            as="p"
                            defaultText="Resultados reais de pacientes que confiaram na nossa equipe"
                            className="text-xs md:text-base text-muted-foreground max-w-xl mx-auto block"
                        />
                    </div>
                </EditableElement>

                {/* Editor button */}
                {isEditMode && (
                    <div className="flex justify-center mb-6">
                        <button
                            onClick={() => setShowImageEditor(true)}
                            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-xs font-semibold shadow-lg hover:opacity-90 transition-opacity"
                        >
                            <Images className="w-4 h-4" />
                            Editar Imagens
                        </button>
                    </div>
                )}

                {/* Carousel with external arrows */}
                <div className="relative max-w-6xl mx-auto flex items-center gap-3 md:gap-5">
                    {/* Left arrow */}
                    <button
                        onClick={prev}
                        className="shrink-0 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/90 border border-border/50 shadow-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-center"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>

                    {/* Slides container */}
                    <div className="flex-1 overflow-hidden">
                        <AnimatePresence initial={false} custom={direction} mode="popLayout">
                            <motion.div
                                key={startIndex}
                                custom={direction}
                                variants={{
                                    enter: (d: number) => ({ x: d > 0 ? '100%' : '-100%', opacity: 0 }),
                                    center: { x: 0, opacity: 1 },
                                    exit: (d: number) => ({ x: d > 0 ? '-100%' : '100%', opacity: 0 }),
                                }}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{ duration: 0.4, ease: 'easeInOut' }}
                                className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5"
                            >
                                {visibleIndices.map((idx, pos) => {
                                    const item = results[idx];
                                    return (
                                        <div
                                            key={`${startIndex}-${pos}`}
                                            className={`relative aspect-square rounded-2xl overflow-hidden bg-muted ${pos > 0 ? 'hidden md:block' : ''}`}
                                        >
                                            <EditableImage
                                                id={`result_${idx}_img`}
                                                defaultSrc={item.image}
                                                alt={item.title}
                                                className="w-full h-full object-cover"
                                            />
                                            {/* Bottom gradient */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent" />
                                            {/* Info overlay */}
                                            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                                                <div className="flex items-center gap-1 mb-1.5">
                                                    {[...Array(item.rating)].map((_, i) => (
                                                        <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                                                    ))}
                                                </div>
                                                <EditableText
                                                    id={`result_${idx}_subtitle`}
                                                    defaultText={item.subtitle}
                                                    className="text-white/60 text-[9px] font-bold tracking-[0.2em] uppercase mb-0.5 block"
                                                />
                                                <h3 className="text-base md:text-lg font-serif text-white">
                                                    <EditableText id={`result_${idx}_title`} defaultText={item.title} />
                                                </h3>
                                            </div>
                                        </div>
                                    );
                                })}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Right arrow */}
                    <button
                        onClick={next}
                        className="shrink-0 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/90 border border-border/50 shadow-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-center"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>

                {/* Dot indicators */}
                <EditableElement id="results_dots_el" label="Indicadores">
                    <div className="flex justify-center gap-2 mt-8 md:mt-10">
                        {results.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => { setDirection(i > startIndex ? 1 : -1); setStartIndex(i); }}
                                className={`rounded-full transition-all duration-400 ${
                                    startIndex === i
                                        ? 'w-8 h-2 bg-primary'
                                        : 'w-2 h-2 bg-primary/15 hover:bg-primary/30'
                                }`}
                            />
                        ))}
                    </div>
                </EditableElement>
            </div>

            <CarouselImageEditor open={showImageEditor} onClose={() => setShowImageEditor(false)} />
        </section>
    );
};
