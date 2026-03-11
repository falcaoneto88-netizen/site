import React from 'react';
import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';
import { EditableText, EditableImage, EditableElement } from '../EditableWrappers';
import { EditableSectionColors, ColorDef } from '../EditableSectionColors';

const SPEC_COLORS: ColorDef[] = [
    { id: 'bg', label: 'Fundo', defaultColor: '#FDFCF8', cssProperty: 'backgroundColor' },
    { id: 'titleAccent', label: 'Título Destaque', defaultColor: '#00BFA6', cssProperty: 'color' },
    { id: 'text', label: 'Texto', defaultColor: '#555555', cssProperty: 'color' },
    { id: 'cardBg', label: 'Card Fundo', defaultColor: '#540247', cssProperty: 'backgroundColor' },
    { id: 'cardAccent', label: 'Card Accent', defaultColor: '#00BFA6', cssProperty: 'backgroundColor' },
];

export const PeriodontiaSpecialists = () => {
    return (
        <EditableSectionColors sectionId="perioSpecialists" colors={SPEC_COLORS}>
            {(colors) => (
                <section className="py-14 md:py-24 relative overflow-hidden" style={{ backgroundColor: colors.bg }}>
                    <div className="container mx-auto px-4 md:px-6">
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10 md:mb-16">
                            <EditableElement id="perio_spec_title_el" label="Título">
                                <h2 className="text-2xl md:text-[30px] font-serif mb-4 md:mb-6 leading-tight">
                                    <span style={{ color: colors.titleAccent }} className="italic"><EditableText id="perio_spec_title_1" defaultText="Conheça nossos profissionais" /></span>
                                </h2>
                            </EditableElement>
                            <EditableElement id="perio_spec_subtitle_el" label="Subtítulo">
                                <div style={{ color: colors.text }}>
                                    <EditableText id="perio_spec_subtitle" as="p" defaultText="O tratamento periodontal na Oral Unic é realizado por profissionais capacitados, preparados para diagnosticar e tratar alterações gengivais com cuidado e precisão." className="text-sm max-w-3xl mx-auto block" />
                                </div>
                            </EditableElement>
                        </motion.div>
                        <div className="max-w-lg mx-auto">
                            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="group rounded-2xl overflow-hidden border transition-shadow duration-500 hover:shadow-2xl" style={{ backgroundColor: colors.cardBg, borderColor: 'rgba(255,255,255,0.08)' }}>
                                <div className="flex flex-row h-full">
                                    <div className="relative w-[42%] flex-shrink-0 overflow-hidden">
                                        <EditableImage id="perio_spec_photo_0" defaultSrc="/assets/periodontia/dra_ellen.jpg" alt="Dra Ellen Ribeiro" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                        <div className="absolute inset-y-0 right-0 w-12 pointer-events-none" style={{ background: `linear-gradient(to right, transparent, ${colors.cardBg})` }} />
                                    </div>
                                    <div className="flex-1 p-5 md:p-6 flex flex-col justify-center min-h-[260px]">
                                        <EditableElement id="perio_spec_info_0_el" label="Dra Ellen Ribeiro">
                                            <h3 className="text-base md:text-lg font-serif font-bold text-white mb-1 leading-snug"><EditableText id="perio_spec_name_0" defaultText="Dra Ellen Ribeiro" /></h3>
                                            <p className="text-[11px] md:text-xs font-semibold mb-4 tracking-wide" style={{ color: colors.cardAccent }}><EditableText id="perio_spec_specialty_0" defaultText="Especialista em Periodontia" /></p>
                                            <p className="text-xs md:text-sm text-white/65 leading-[1.7] mb-5 font-light"><EditableText id="perio_spec_desc_0" defaultText="Cirurgiã-dentista com atuação em tratamentos periodontais como raspagem e alisamento radicular, cirurgias gengivais e procedimentos de reconstrução periodontal, com foco na recuperação da saúde gengival e preservação dos dentes naturais." /></p>
                                            <a href="https://www.instagram.com/dra.ellenribeiro" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 text-white text-xs font-medium hover:bg-white/10 transition-all w-fit">
                                                <Instagram className="w-3.5 h-3.5" />
                                                <EditableText id="perio_spec_ig_0" defaultText="Perfil no Instagram" />
                                            </a>
                                        </EditableElement>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>
            )}
        </EditableSectionColors>
    );
};