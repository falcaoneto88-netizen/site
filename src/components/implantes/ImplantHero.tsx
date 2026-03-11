import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { EditableText, EditableImage, EditableElement } from '../EditableWrappers';
import { EditableSectionColors, ColorDef } from '../EditableSectionColors';
import { WHATSAPP_URL } from '../../lib/constants';

const HERO_COLORS: ColorDef[] = [
    { id: 'bg', label: 'Fundo', defaultColor: '#ffffff', cssProperty: 'backgroundColor' },
    { id: 'fadeLateral', label: 'Fade Lateral', defaultColor: '#ffffff', cssProperty: 'backgroundColor' },
    { id: 'fadeBottom', label: 'Fade Inferior', defaultColor: '#ffffff', cssProperty: 'backgroundColor' },
    { id: 'title', label: 'Título', defaultColor: '#000000', cssProperty: 'color' },
    { id: 'titleAccent', label: 'Título Destaque', defaultColor: '#540247', cssProperty: 'color' },
    { id: 'btnPrimary', label: 'Botão Principal', defaultColor: '#540247', cssProperty: 'backgroundColor' },
    { id: 'desc', label: 'Descrição', defaultColor: '#555555', cssProperty: 'color' },
];

export const ImplantHero = () => {
    return (
        <EditableSectionColors sectionId="implantHero" colors={HERO_COLORS}>
            {(colors) => (
                <section className="relative overflow-hidden" style={{ backgroundColor: colors.bg }}>
                    {/* ===== MOBILE LAYOUT ===== */}
                    <div className="md:hidden flex flex-col">
                        <div className="relative w-full aspect-square overflow-hidden">
                            <motion.div initial={{ opacity: 0, scale: 1.1 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.5, ease: "easeOut" }} className="w-full h-full">
                                <EditableImage id="implant_hero_bg_mobile" defaultSrc="/assets/implantes/hero_implant.jpg" alt="Implantes Dentários Oral Unic" className="w-full h-full object-cover" />
                            </motion.div>
                            <div className="absolute bottom-0 left-0 right-0 h-32 z-20 pointer-events-none" style={{ background: `linear-gradient(to top, ${colors.fadeBottom}, transparent)` }} />
                        </div>
                        <div className="px-6 pt-6 pb-10">
                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
                                <h1 className="text-2xl md:text-[30px] font-serif font-medium leading-[1.1] mb-4">
                                    <span style={{ color: colors.title }}>
                                        <EditableText id="implant_hero_t1" defaultText="Implantes " />
                                    </span>
                                    <span style={{ color: colors.titleAccent }} className="italic">
                                        <EditableText id="implant_hero_t2" defaultText="dentários" />
                                    </span>
                                    <span style={{ color: colors.title }}>
                                        <EditableText id="implant_hero_t3" defaultText=" com planejamento, " />
                                    </span>
                                    <span style={{ color: colors.titleAccent }} className="italic">
                                        <EditableText id="implant_hero_t4" defaultText="segurança" />
                                    </span>
                                    <span style={{ color: colors.title }}>
                                        <EditableText id="implant_hero_t5" defaultText=" e resultado natural" />
                                    </span>
                                </h1>
                                <div style={{ color: colors.desc }}>
                                    <EditableText id="implant_hero_desc" as="p" defaultText="A perda de um ou mais dentes não precisa limitar sua mastigação, sua estética ou sua confiança. Na Oral Unic, realizamos tratamentos com implantes dentários de forma personalizada, com acompanhamento especializado em todas as etapas." className="text-sm mb-6 leading-relaxed font-light block" />
                                </div>
                                <EditableElement id="implant_hero_ctas_el" label="Botões">
                                    <div className="flex flex-col gap-3">
                                        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary group" style={{ backgroundColor: colors.btnPrimary }}>
                                            <EditableText id="implant_hero_cta" defaultText="Agende uma Consulta" />
                                            <ArrowRight className="ml-2 w-[1.1em] h-[1.1em] group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
                                        </a>
                                    </div>
                                </EditableElement>
                            </motion.div>
                        </div>
                    </div>

                    {/* ===== DESKTOP LAYOUT ===== */}
                    <div className="hidden md:block min-h-[90vh]">
                        <div className="absolute inset-0 z-0">
                            <motion.div initial={{ opacity: 0, scale: 1.1 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.5, ease: "easeOut" }} className="relative w-full h-full">
                                <EditableImage id="implant_hero_bg" defaultSrc="/assets/implantes/hero_implant.jpg" alt="Implantes Dentários Oral Unic" className="absolute right-0 top-0 h-full w-[65%] lg:w-[60%] max-w-[1100px] object-cover object-[80%_center]" />
                                <div className="absolute inset-y-0 z-10 backdrop-blur-[2px] pointer-events-none left-[35%] w-[16.25%] lg:left-[40%] lg:w-[15%]" style={{ background: `linear-gradient(to right, ${colors.fadeLateral}, ${colors.fadeLateral}99, transparent)` }} />
                                <div className="absolute bottom-0 left-0 right-0 h-32 z-20 backdrop-blur-[1px] pointer-events-none" style={{ background: `linear-gradient(to top, ${colors.fadeBottom}, transparent)` }} />
                            </motion.div>
                        </div>
                        <div className="max-w-[1600px] mx-auto w-full px-6 relative z-30 pt-36 min-h-[90vh] flex items-center">
                            <div className="max-w-md lg:max-w-xl">
                                <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
                                    <h1 className="text-[30px] font-serif font-medium leading-[1.1] mb-6">
                                        <span style={{ color: colors.title }}>
                                            <EditableText id="implant_hero_t1" defaultText="Implantes " />
                                        </span>
                                        <span style={{ color: colors.titleAccent }} className="italic">
                                            <EditableText id="implant_hero_t2" defaultText="dentários" />
                                        </span>
                                        <span style={{ color: colors.title }}>
                                            <EditableText id="implant_hero_t3" defaultText=" com planejamento, " />
                                        </span>
                                        <span style={{ color: colors.titleAccent }} className="italic">
                                            <EditableText id="implant_hero_t4" defaultText="segurança" />
                                        </span>
                                        <span style={{ color: colors.title }}>
                                            <EditableText id="implant_hero_t5" defaultText=" e resultado natural" />
                                        </span>
                                    </h1>
                                    <div style={{ color: colors.desc }}>
                                        <EditableText id="implant_hero_desc" as="p" defaultText="A perda de um ou mais dentes não precisa limitar sua mastigação, sua estética ou sua confiança. Na Oral Unic, realizamos tratamentos com implantes dentários de forma personalizada, com acompanhamento especializado em todas as etapas." className="text-sm mb-8 leading-relaxed max-w-sm font-light block" />
                                    </div>
                                    <EditableElement id="implant_hero_ctas_el" label="Botões">
                                        <div className="flex flex-row gap-4 items-center">
                                            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary group" style={{ backgroundColor: colors.btnPrimary }}>
                                                <EditableText id="implant_hero_cta" defaultText="Agende uma Consulta" />
                                                <ArrowRight className="ml-2 w-[1.1em] h-[1.1em] group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
                                            </a>
                                        </div>
                                    </EditableElement>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </EditableSectionColors>
    );
};
