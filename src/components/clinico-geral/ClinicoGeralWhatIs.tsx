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

export const ClinicoGeralWhatIs = () => {
    return (
        <EditableSectionColors sectionId="clinicoWhatIs" colors={WHAT_COLORS}>
            {(colors) => (
                <section className="py-14 md:py-24 relative overflow-hidden" style={{ backgroundColor: colors.bg }}>
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
                            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl">
                                <EditableImage id="clinico_what_img" defaultSrc="/assets/clinico-geral/what_is_clinico.jpg" alt="O que faz o Clínico Geral" className="w-full h-auto" />
                            </motion.div>
                            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}>
                                <EditableElement id="clinico_what_title_el" label="Título">
                                    <h2 className="text-2xl md:text-[30px] font-serif mb-6 md:mb-8 leading-tight">
                                        <span style={{ color: colors.title }}><EditableText id="clinico_what_title_1" defaultText="O que faz o " /></span>
                                        <span style={{ color: colors.titleAccent }} className="italic"><EditableText id="clinico_what_title_2" defaultText="Clínico Geral?" /></span>
                                    </h2>
                                </EditableElement>
                                <EditableElement id="clinico_what_content_el" label="Conteúdo">
                                    <div className="space-y-4 md:space-y-5 font-light leading-relaxed" style={{ color: colors.text }}>
                                        <EditableText id="clinico_what_p1" as="p" defaultText="O dentista clínico geral é responsável pelo diagnóstico, prevenção e tratamento inicial de diversas condições da saúde bucal." className="text-sm block font-medium text-foreground" />
                                        <EditableText id="clinico_what_p2" as="p" defaultText="Durante a consulta, são realizados exames clínicos e, quando necessário, exames de imagem para avaliar a saúde dos dentes, gengivas e estruturas da boca." className="text-sm block" />
                                        <EditableText id="clinico_what_p3" as="p" defaultText="A partir dessa avaliação, o profissional pode indicar tratamentos como restaurações, limpeza, orientações de higiene bucal e encaminhamento para especialidades quando necessário." className="text-sm block" />
                                        <EditableText id="clinico_what_p4" as="p" defaultText="Na Oral Unic, cada atendimento é conduzido com cuidado, planejamento e foco na prevenção." className="text-sm block font-medium text-foreground" />
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
