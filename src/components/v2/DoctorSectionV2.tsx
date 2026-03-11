import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { EditableText, EditableImage, EditableElement } from '../EditableWrappers';
import { EditableSectionColors, ColorDef } from '../EditableSectionColors';
import { WHATSAPP_URL } from '../../lib/constants';

const DOCTOR_COLORS: ColorDef[] = [
    { id: 'bg', label: 'Fundo', defaultColor: '#540247', cssProperty: 'backgroundColor' },
    { id: 'fadeLateral', label: 'Fade Lateral', defaultColor: '#530348', cssProperty: 'backgroundColor' },
    { id: 'fadeBottom', label: 'Fade Inferior', defaultColor: '#fcfaf8', cssProperty: 'backgroundColor' },
    { id: 'title', label: 'Título', defaultColor: '#FFFFFF', cssProperty: 'color' },
    { id: 'titleAccent', label: 'Título Destaque', defaultColor: '#00BFA6', cssProperty: 'color' },
    { id: 'text', label: 'Texto', defaultColor: '#FFFFFFB3', cssProperty: 'color' },
    { id: 'btnBg', label: 'Botão', defaultColor: '#FFFFFF', cssProperty: 'backgroundColor' },
    { id: 'iconAccent', label: 'Ícones', defaultColor: '#00BFA6', cssProperty: 'color' },
];

export const DoctorSectionV2 = () => {
    return (
        <EditableSectionColors sectionId="doctorV2" colors={DOCTOR_COLORS}>
            {(colors) => (
                <section id="sobre-nos" className="relative overflow-hidden" style={{ backgroundColor: colors.bg }}>
                    {/* ===== MOBILE LAYOUT ===== */}
                    <div className="md:hidden flex flex-col">
                        <div className="relative w-full aspect-square overflow-hidden">
                            <motion.div initial={{ opacity: 0, scale: 1.05 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1.2, ease: "easeOut" }} className="w-full h-full">
                                <EditableImage id="doctor_bg_v2_mobile" defaultSrc="/assets/real-photos/dr_real_waist_up.png" alt="Dr. Felipe Real Background" className="w-full h-full object-cover" />
                            </motion.div>
                            <div className="absolute bottom-0 left-0 right-0 h-32 z-20 pointer-events-none" style={{ background: `linear-gradient(to top, ${colors.bg}, transparent)` }} />
                        </div>
                        <div className="px-6 pt-6 pb-10 text-center">
                            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: "easeOut" }} className="flex flex-col items-center">
                                <EditableElement id="doctor_title_el" label="Título">
                                    <h2 className="text-2xl font-serif font-medium leading-[1.1] mb-6">
                                        <span style={{ color: colors.title }}><EditableText id="doctor_title_1_v2" defaultText="Uma equipe completa para " /></span>
                                        <span style={{ color: colors.titleAccent }} className="italic"><EditableText id="doctor_title_2_v2" defaultText="cuidar de você" /></span>
                                    </h2>
                                </EditableElement>
                                <EditableElement id="doctor_quote_el" label="Descrição">
                                    <div style={{ color: colors.text }}>
                                        <EditableText id="doctor_quote_v2" as="p" defaultText="A Oral Unic reúne profissionais altamente qualificados em clínica geral, ortodontia, implantodontia, prótese, periodontia, endodontia, dentística e harmonização orofacial. Cada caso é conduzido pelo especialista mais indicado para sua necessidade." className="text-sm mb-8 leading-relaxed italic block font-light" />
                                    </div>
                                </EditableElement>
                                <EditableElement id="doctor_cta_el" label="Botão CTA">
                                    <div className="flex flex-col gap-4 items-center">
                                        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-white group" style={{ backgroundColor: colors.btnBg }}>
                                            <EditableText id="doctor_cta_text_v2" defaultText="Conhecer Nossa História" />
                                            <Award className="ml-2 w-[1.1em] h-[1.1em] group-hover:rotate-12 transition-transform" strokeWidth={2.5} />
                                        </a>
                                        <EditableElement id="doctor_badge_el" label="Badge Diretor">
                                            <div className="flex items-center gap-3 py-2 px-4 bg-white/10 backdrop-blur-md rounded-full border border-white/20 w-fit">
                                                <div className="w-6 h-6 rounded-full flex items-center justify-center text-white text-[10px] font-bold" style={{ backgroundColor: colors.iconAccent }}>✓</div>
                                                <EditableText id="doctor_badge_small_v2" defaultText="Diretor Clínico Oral Unic" className="text-[10px] font-bold text-white/60 tracking-wider uppercase" />
                                            </div>
                                        </EditableElement>
                                    </div>
                                </EditableElement>
                            </motion.div>
                        </div>
                    </div>

                    {/* ===== DESKTOP LAYOUT ===== */}
                    <div className="hidden md:flex items-center relative min-h-[60vh] py-20 md:py-24">
                        <div className="absolute inset-0 z-0">
                            <motion.div initial={{ opacity: 0, scale: 1.05 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1.2, ease: "easeOut" }} className="relative w-full h-full">
                                <div className="absolute right-0 top-0 bottom-0 w-[55%] lg:w-[50%] overflow-hidden">
                                    <EditableImage id="doctor_bg_v2" defaultSrc="/assets/real-photos/dr_real_waist_up.png" alt="Dr. Felipe Real Background" className="absolute inset-0 w-full h-full object-cover object-[70%_center]" />
                                    <div className="absolute inset-y-0 left-0 w-[35%] z-10 pointer-events-none" style={{ background: `linear-gradient(to right, ${colors.fadeLateral}, ${colors.fadeLateral}80, transparent)` }} />
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 h-32 z-20 pointer-events-none" style={{ background: `linear-gradient(to top, ${colors.fadeBottom}, transparent)` }} />
                            </motion.div>
                        </div>
                        <div className="max-w-[1600px] mx-auto w-full px-6 relative z-30">
                            <div className="max-w-lg lg:max-w-xl">
                                <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: "easeOut" }}>
                                    <EditableElement id="doctor_title_el" label="Título">
                                        <h2 className="text-2xl md:text-[30px] font-serif font-medium leading-[1] mb-10">
                                            <span style={{ color: colors.title }}><EditableText id="doctor_title_1_v2" defaultText="Uma equipe completa para " /></span>
                                            <span style={{ color: colors.titleAccent }} className="italic"><EditableText id="doctor_title_2_v2" defaultText="cuidar de você" /></span>
                                        </h2>
                                    </EditableElement>
                                    <EditableElement id="doctor_quote_el" label="Descrição">
                                        <EditableText id="doctor_quote_v2" as="p" defaultText="A Oral Unic reúne profissionais altamente qualificados em clínica geral, ortodontia, implantodontia, prótese, periodontia, endodontia, dentística e harmonização orofacial. Cada caso é conduzido pelo especialista mais indicado para sua necessidade." className="text-lg md:text-xl mb-10 leading-relaxed italic block max-w-xl font-light" />
                                    </EditableElement>
                                    <EditableElement id="doctor_cta_el" label="Botão CTA">
                                        <div className="flex flex-row gap-6">
                                            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-white group" style={{ backgroundColor: colors.btnBg }}>
                                                <EditableText id="doctor_cta_text_v2" defaultText="Conhecer Nossa História" />
                                                <Award className="ml-2 w-[1.1em] h-[1.1em] group-hover:rotate-12 transition-transform" strokeWidth={2.5} />
                                            </a>
                                            <EditableElement id="doctor_badge_el" label="Badge Diretor">
                                                <div className="flex items-center gap-3 py-2 px-4 bg-white/10 backdrop-blur-md rounded-full border border-white/20 w-fit">
                                                    <div className="w-6 h-6 rounded-full flex items-center justify-center text-white text-[10px] font-bold" style={{ backgroundColor: colors.iconAccent }}>✓</div>
                                                    <EditableText id="doctor_badge_small_v2" defaultText="Diretor Clínico Oral Unic" className="text-[10px] font-bold text-white/60 tracking-wider uppercase" />
                                                </div>
                                            </EditableElement>
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
