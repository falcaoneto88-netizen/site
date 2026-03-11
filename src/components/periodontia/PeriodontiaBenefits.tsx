import React from 'react';
import { motion } from 'framer-motion';
import { EditableText, EditableImage, EditableElement } from '../EditableWrappers';
import { EditableSectionColors, ColorDef } from '../EditableSectionColors';
import { LOGO_PATH } from '../../lib/constants';

const BEN_COLORS: ColorDef[] = [
    { id: 'bg', label: 'Fundo', defaultColor: '#FDFCF8', cssProperty: 'backgroundColor' },
    { id: 'fadeLateral', label: 'Fade Lateral', defaultColor: '#FDFCF8', cssProperty: 'backgroundColor' },
    { id: 'fadeBottom', label: 'Fade Inferior', defaultColor: '#FDFCF8', cssProperty: 'backgroundColor' },
    { id: 'title', label: 'Título', defaultColor: '#000000', cssProperty: 'color' },
    { id: 'titleAccent', label: 'Título Destaque', defaultColor: '#540247', cssProperty: 'color' },
    { id: 'text', label: 'Texto', defaultColor: '#555555', cssProperty: 'color' },
];

export const PeriodontiaBenefits = () => {
    return (
        <EditableSectionColors sectionId="perioBenefits" colors={BEN_COLORS}>
            {(colors) => (
                <section className="relative overflow-hidden" style={{ backgroundColor: colors.bg }}>
                    <div className="md:hidden flex flex-col">
                        <div className="relative w-full aspect-square overflow-hidden">
                            <motion.div initial={{ opacity: 0, scale: 1.05 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1.2, ease: "easeOut" }} className="w-full h-full">
                                <EditableImage id="perio_benefits_img_mobile" defaultSrc="/assets/periodontia/benefits_smile.jpg" alt="Benefícios do tratamento periodontal" className="w-full h-full object-cover" />
                            </motion.div>
                            <div className="absolute bottom-0 left-0 right-0 h-32 z-20 pointer-events-none" style={{ background: `linear-gradient(to top, ${colors.fadeBottom}, transparent)` }} />
                        </div>
                        <div className="px-6 pt-6 pb-10">
                            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: "easeOut" }}>
                                <img src={LOGO_PATH} alt="Oral Unic" className="w-12 mb-4 opacity-80" />
                                <h2 className="text-2xl md:text-[30px] font-serif font-medium leading-[1.1] mb-4">
                                    <span style={{ color: colors.titleAccent }} className="italic"><EditableText id="perio_benefits_title_1" defaultText="Benefícios " /></span>
                                    <span style={{ color: colors.title }}><EditableText id="perio_benefits_title_2" defaultText="do tratamento periodontal" /></span>
                                </h2>
                                <div style={{ color: colors.text }} className="space-y-3">
                                    <EditableText id="perio_benefits_p1" as="p" defaultText="O tratamento periodontal tem como objetivo controlar inflamações, eliminar infecções gengivais e restaurar a saúde dos tecidos que sustentam os dentes." className="text-sm leading-relaxed font-light block" />
                                    <EditableText id="perio_benefits_p2" as="p" defaultText="Além de preservar os dentes naturais, o tratamento adequado pode reduzir sangramentos, melhorar o aspecto da gengiva e contribuir para a saúde bucal de forma geral." className="text-sm leading-relaxed font-light block" />
                                    <EditableText id="perio_benefits_p3" as="p" defaultText="Com diagnóstico precoce e acompanhamento profissional, é possível manter gengivas saudáveis e prevenir complicações futuras." className="text-sm leading-relaxed font-light block" />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                    <div className="hidden md:block min-h-[70vh]">
                        <div className="absolute inset-0 z-0">
                            <motion.div initial={{ opacity: 0, scale: 1.05 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1.2, ease: "easeOut" }} className="relative w-full h-full">
                                <EditableImage id="perio_benefits_img" defaultSrc="/assets/periodontia/benefits_smile.jpg" alt="Benefícios do tratamento periodontal" className="absolute right-0 top-0 h-full w-[65%] lg:w-[60%] max-w-[1100px] object-cover object-[80%_center]" />
                                <div className="absolute inset-y-0 z-10 backdrop-blur-[2px] pointer-events-none left-[35%] w-[16.25%] lg:left-[40%] lg:w-[15%]" style={{ background: `linear-gradient(to right, ${colors.fadeLateral}, ${colors.fadeLateral}99, transparent)` }} />
                                <div className="absolute bottom-0 left-0 right-0 h-32 z-20 backdrop-blur-[1px] pointer-events-none" style={{ background: `linear-gradient(to top, ${colors.fadeBottom}, transparent)` }} />
                            </motion.div>
                        </div>
                        <div className="max-w-[1600px] mx-auto w-full px-6 relative z-30 py-20 md:py-28 flex items-center min-h-[70vh]">
                            <div className="max-w-md lg:max-w-lg">
                                <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: "easeOut" }}>
                                    <img src={LOGO_PATH} alt="Oral Unic" className="w-14 mb-6 opacity-80" />
                                    <h2 className="text-[30px] font-serif font-medium leading-[1.1] mb-6">
                                        <span style={{ color: colors.titleAccent }} className="italic"><EditableText id="perio_benefits_title_1" defaultText="Benefícios " /></span>
                                        <span style={{ color: colors.title }}><EditableText id="perio_benefits_title_2" defaultText="do tratamento periodontal" /></span>
                                    </h2>
                                    <div style={{ color: colors.text }} className="space-y-4">
                                        <EditableText id="perio_benefits_p1" as="p" defaultText="O tratamento periodontal tem como objetivo controlar inflamações, eliminar infecções gengivais e restaurar a saúde dos tecidos que sustentam os dentes." className="text-sm leading-relaxed font-light block" />
                                        <EditableText id="perio_benefits_p2" as="p" defaultText="Além de preservar os dentes naturais, o tratamento adequado pode reduzir sangramentos, melhorar o aspecto da gengiva e contribuir para a saúde bucal de forma geral." className="text-sm leading-relaxed font-light block" />
                                        <EditableText id="perio_benefits_p3" as="p" defaultText="Com diagnóstico precoce e acompanhamento profissional, é possível manter gengivas saudáveis e prevenir complicações futuras." className="text-sm leading-relaxed font-light block" />
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </EditableSectionColors>
    );
};
