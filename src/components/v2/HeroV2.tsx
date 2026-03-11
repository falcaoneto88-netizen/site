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
    { id: 'badge', label: 'Badge', defaultColor: '#00BFA6', cssProperty: 'color' },
    { id: 'btnPrimary', label: 'Botão Principal', defaultColor: '#540247', cssProperty: 'backgroundColor' },
    { id: 'desc', label: 'Descrição', defaultColor: '#555555', cssProperty: 'color' },
];

export const HeroV2 = () => {
    return (
        <EditableSectionColors sectionId="heroV2" colors={HERO_COLORS}>
            {(colors) => (
                <section className="relative overflow-hidden" style={{ backgroundColor: colors.bg }}>
                    {/* ===== MOBILE LAYOUT ===== */}
                    <div className="md:hidden flex flex-col">
                        <div className="relative w-full aspect-square overflow-hidden">
                            <motion.div initial={{ opacity: 0, scale: 1.1 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.5, ease: "easeOut" }} className="w-full h-full">
                                <EditableImage id="hero_bg_v2_mobile" defaultSrc="/assets/real-photos/dra_hero_hq_v5.png" alt="Dra. especialista Oral Unic Feira de Santana" className="w-full h-full object-cover" />
                            </motion.div>
                            <div className="absolute bottom-0 left-0 right-0 h-32 z-20 pointer-events-none" style={{ background: `linear-gradient(to top, ${colors.fadeBottom}, transparent)` }} />
                        </div>
                        <div className="px-6 pt-6 pb-10 text-center">
                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="flex flex-col items-center">
                                <EditableElement id="hero_badge_el" label="Badge">
                                    <span className="inline-block px-4 py-1.5 mb-4 text-[10px] font-bold tracking-[0.2em] uppercase rounded-full" style={{ color: colors.badge, backgroundColor: `${colors.badge}1a` }}>
                                        <EditableText id="hero_badge_v2" defaultText="Viva a Experiência Premium" />
                                    </span>
                                </EditableElement>
                                <h1 className="text-2xl font-serif font-medium leading-[1.1] mb-4">
                                    <span style={{ color: colors.title }}><EditableText id="hero_title_1_v2" defaultText="Cuidado odontológico completo e " /></span>
                                    <span style={{ color: colors.titleAccent }} className="italic"><EditableText id="hero_title_2_v2" defaultText="especializado em cada detalhe." /></span>
                                </h1>
                                <div style={{ color: colors.desc }}>
                                    <EditableText id="hero_desc_v2" as="p" defaultText="Na Oral Unic, você encontra tecnologia, planejamento personalizado e uma equipe de especialistas para cuidar da sua saúde bucal, estética e bem-estar em um só lugar." className="text-xs mb-6 leading-relaxed font-light block" />
                                </div>
                                <EditableElement id="hero_ctas_el" label="Botões">
                                    <div className="flex flex-col gap-3 w-full">
                                        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary group" style={{ backgroundColor: colors.btnPrimary }}>
                                            <EditableText id="hero_cta_primary_v2" defaultText="Começar Transformação" />
                                            <ArrowRight className="ml-2 w-[1.1em] h-[1.1em] group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
                                        </a>
                                        <a href="#services" className="btn-outline"><EditableText id="hero_cta_secondary_v2" defaultText="Conhecer Especialidades" /></a>
                                    </div>
                                </EditableElement>
                            </motion.div>
                        </div>
                    </div>

                    {/* ===== DESKTOP LAYOUT ===== */}
                    <div className="hidden md:block min-h-[90vh]">
                        <div className="absolute inset-0 z-0">
                            <motion.div initial={{ opacity: 0, scale: 1.1 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.5, ease: "easeOut" }} className="relative w-full h-full">
                                <EditableImage id="hero_bg_v2" defaultSrc="/assets/real-photos/dra_hero_hq_v5.png" alt="Dra. especialista Oral Unic Feira de Santana" className="absolute right-0 top-0 h-full w-[65%] lg:w-[60%] max-w-[1100px] object-cover object-[80%_center]" />
                                <div className="absolute inset-y-0 z-10 backdrop-blur-[2px] pointer-events-none left-[35%] w-[16.25%] lg:left-[40%] lg:w-[15%]" style={{ background: `linear-gradient(to right, ${colors.fadeLateral}, ${colors.fadeLateral}99, transparent)` }} />
                                <div className="absolute bottom-0 left-0 right-0 h-32 z-20 backdrop-blur-[1px] pointer-events-none" style={{ background: `linear-gradient(to top, ${colors.fadeBottom}, transparent)` }} />
                                <div className="absolute inset-0 mix-blend-multiply z-0 pointer-events-none" style={{ backgroundColor: `${colors.bg}0d` }} />
                            </motion.div>
                        </div>
                        <div className="max-w-[1600px] mx-auto w-full px-6 relative z-30 pt-36 min-h-[90vh] flex items-center">
                            <div className="max-w-md lg:max-w-xl">
                                <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
                                    <EditableElement id="hero_badge_el" label="Badge">
                                        <span className="inline-block px-4 py-1.5 mb-6 text-[10px] font-bold tracking-[0.2em] uppercase rounded-full backdrop-blur-sm" style={{ color: colors.badge, backgroundColor: `${colors.badge}1a` }}>
                                            <EditableText id="hero_badge_v2" defaultText="Viva a Experiência Premium" />
                                        </span>
                                    </EditableElement>
                                    <h1 className="text-2xl md:text-[30px] font-serif font-medium leading-[1.1] mb-6">
                                        <span style={{ color: colors.title }}><EditableText id="hero_title_1_v2" defaultText="Cuidado odontológico completo e " /></span>
                                        <span style={{ color: colors.titleAccent }} className="italic"><EditableText id="hero_title_2_v2" defaultText="especializado em cada detalhe." /></span>
                                    </h1>
                                    <div style={{ color: colors.desc }}>
                                        <EditableText id="hero_desc_v2" as="p" defaultText="Na Oral Unic, você encontra tecnologia, planejamento personalizado e uma equipe de especialistas para cuidar da sua saúde bucal, estética e bem-estar em um só lugar." className="text-base mb-8 leading-relaxed max-w-sm font-light block" />
                                    </div>
                                    <EditableElement id="hero_ctas_el" label="Botões">
                                        <div className="flex flex-row gap-4 items-center">
                                            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary group" style={{ backgroundColor: colors.btnPrimary }}>
                                                <EditableText id="hero_cta_primary_v2" defaultText="Começar Transformação" />
                                                <ArrowRight className="ml-2 w-[1.1em] h-[1.1em] group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
                                            </a>
                                            <a href="#services" className="btn-outline"><EditableText id="hero_cta_secondary_v2" defaultText="Conhecer Especialidades" /></a>
                                        </div>
                                    </EditableElement>
                                    <EditableElement id="hero_minibadge_el" label="Mini Badge">
                                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }} className="mt-12 flex items-center gap-4 py-3 px-5 glass rounded-2xl border border-white/40 shadow-sm w-fit">
                                            <div className="w-8 h-8 rounded-full flex items-center justify-center text-white shadow-md" style={{ backgroundColor: colors.badge }}>
                                                <span className="font-bold text-xs italic">☆</span>
                                            </div>
                                            <div>
                                                <p className="font-bold text-[11px] text-foreground mb-0.5"><EditableText id="hero_badge_stat_v2" defaultText="98% Satisfação" /></p>
                                                <p className="text-[9px] text-foreground/50 tracking-wide"><EditableText id="hero_badge_label_v2" defaultText="Transformações Reais na Unidade" /></p>
                                            </div>
                                        </motion.div>
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
