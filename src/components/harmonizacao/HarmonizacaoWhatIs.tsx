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

export const HarmonizacaoWhatIs = () => {
    return (
        <EditableSectionColors sectionId="harmoWhatIs" colors={WHAT_COLORS}>
            {(colors) => (
                <section className="py-14 md:py-24 relative overflow-hidden" style={{ backgroundColor: colors.bg }}>
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
                            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl">
                                <EditableImage id="harmo_what_img" defaultSrc="/assets/harmonizacao/what_is_harmo.jpg" alt="O que é Harmonização Orofacial" className="w-full h-auto" />
                            </motion.div>
                            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}>
                                <EditableElement id="harmo_what_title_el" label="Título">
                                    <h2 className="text-2xl md:text-[30px] font-serif mb-6 md:mb-8 leading-tight">
                                        <span style={{ color: colors.title }}><EditableText id="harmo_what_title_1" defaultText="O que é " /></span>
                                        <span style={{ color: colors.titleAccent }} className="italic"><EditableText id="harmo_what_title_2" defaultText="Harmonização Orofacial?" /></span>
                                    </h2>
                                </EditableElement>
                                <EditableElement id="harmo_what_content_el" label="Conteúdo">
                                    <div className="space-y-4 md:space-y-5 font-light leading-relaxed" style={{ color: colors.text }}>
                                        <EditableText id="harmo_what_p1" as="p" defaultText="A harmonização orofacial é um conjunto de procedimentos estéticos que têm como objetivo melhorar o equilíbrio e a harmonia entre os elementos do rosto." className="text-sm block font-medium text-foreground" />
                                        <EditableText id="harmo_what_p2" as="p" defaultText="Esses tratamentos podem atuar na suavização de linhas de expressão, reposição de volume, melhora da qualidade da pele e definição de contornos faciais." className="text-sm block" />
                                        <EditableText id="harmo_what_p3" as="p" defaultText="Na Oral Unic, cada procedimento é realizado após avaliação detalhada, considerando proporções faciais, características individuais e expectativas do paciente." className="text-sm block font-medium text-foreground" />
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
