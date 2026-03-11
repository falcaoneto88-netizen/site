import React from 'react';
import { motion } from 'framer-motion';
import { EditableText, EditableImage, EditableElement } from '../EditableWrappers';
import { EditableSectionColors, ColorDef } from '../EditableSectionColors';

const WHAT_COLORS: ColorDef[] = [
    { id: 'bg', label: 'Fundo', defaultColor: '#FDFCF8', cssProperty: 'backgroundColor' },
    { id: 'title', label: 'Título', defaultColor: '#000000', cssProperty: 'color' },
    { id: 'titleAccent', label: 'Título Destaque', defaultColor: '#540247', cssProperty: 'color' },
    { id: 'text', label: 'Texto', defaultColor: '#555555', cssProperty: 'color' },
];

export const PeriodontiaWhatIs = () => {
    return (
        <EditableSectionColors sectionId="perioWhatIs" colors={WHAT_COLORS}>
            {(colors) => (
                <section className="py-14 md:py-24 relative overflow-hidden" style={{ backgroundColor: colors.bg }}>
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
                            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl">
                                <EditableImage id="perio_what_img" defaultSrc="/assets/periodontia/what_is_periodontia.jpg" alt="O que é Periodontia" className="w-full h-auto" />
                            </motion.div>
                            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}>
                                <EditableElement id="perio_what_title_el" label="Título">
                                    <h2 className="text-2xl md:text-[30px] font-serif mb-6 md:mb-8 leading-tight">
                                        <span style={{ color: colors.title }}><EditableText id="perio_what_title_1" defaultText="O que é " /></span>
                                        <span style={{ color: colors.titleAccent }} className="italic"><EditableText id="perio_what_title_2" defaultText="Periodontia?" /></span>
                                    </h2>
                                </EditableElement>
                                <EditableElement id="perio_what_content_el" label="Conteúdo">
                                    <div className="space-y-4 md:space-y-5 font-light leading-relaxed" style={{ color: colors.text }}>
                                        <EditableText id="perio_what_p1" as="p" defaultText="A periodontia é a especialidade da odontologia responsável pela prevenção, diagnóstico e tratamento das doenças que afetam a gengiva e os tecidos que sustentam os dentes." className="text-sm block font-medium text-foreground" />
                                        <EditableText id="perio_what_p2" as="p" defaultText="Entre as condições mais comuns estão a gengivite e a periodontite, que podem causar inflamação, sangramento e, em casos mais avançados, perda de suporte dentário." className="text-sm block" />
                                        <EditableText id="perio_what_p3" as="p" defaultText="Na Oral Unic, o tratamento periodontal é realizado com planejamento individualizado, utilizando técnicas adequadas para controlar a doença e restabelecer a saúde gengival." className="text-sm block font-medium text-foreground" />
                                    </div>
                                </EditableElement>
                            </motion.div>
                        </div>
                    </div>
                </section>
            )}
        </EditableSectionColors>
    );
};
