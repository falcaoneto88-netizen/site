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

export const FacetasWhatIs = () => {
    return (
        <EditableSectionColors sectionId="facetasWhatIs" colors={WHAT_COLORS}>
            {(colors) => (
                <section className="py-14 md:py-24 relative overflow-hidden" style={{ backgroundColor: colors.bg }}>
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
                            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl">
                                <EditableImage id="facetas_what_img" defaultSrc="/assets/facetas/what_is_facetas.jpg" alt="O que são facetas em resina" className="w-full h-auto" />
                            </motion.div>
                            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}>
                                <EditableElement id="facetas_what_title_el" label="Título">
                                    <h2 className="text-2xl md:text-[30px] font-serif mb-6 md:mb-8 leading-tight">
                                        <span style={{ color: colors.title }}><EditableText id="facetas_what_title_1" defaultText="O que são " /></span>
                                        <span style={{ color: colors.titleAccent }} className="italic"><EditableText id="facetas_what_title_2" defaultText="facetas em resina?" /></span>
                                    </h2>
                                </EditableElement>
                                <EditableElement id="facetas_what_content_el" label="Conteúdo">
                                    <div className="space-y-4 md:space-y-5 font-light leading-relaxed" style={{ color: colors.text }}>
                                        <EditableText id="facetas_what_p1" as="p" defaultText="As facetas em resina composta são camadas finas de material estético aplicadas diretamente sobre a superfície dos dentes para melhorar sua aparência." className="text-sm block font-medium text-foreground" />
                                        <EditableText id="facetas_what_p2" as="p" defaultText="Esse procedimento permite corrigir manchas, desgastes, pequenas fraturas, espaçamentos entre os dentes e irregularidades no formato dental." className="text-sm block" />
                                        <EditableText id="facetas_what_p3" as="p" defaultText="Na Oral Unic, cada tratamento é planejado de forma individualizada, considerando proporções faciais, formato dos dentes e expectativa do paciente, buscando um resultado natural e harmonioso." className="text-sm block font-medium text-foreground" />
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
