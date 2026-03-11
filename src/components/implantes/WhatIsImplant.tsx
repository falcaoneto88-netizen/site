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

export const WhatIsImplant = () => {
    return (
        <EditableSectionColors sectionId="whatIsImplant" colors={WHAT_COLORS}>
            {(colors) => (
                <section className="py-14 md:py-24 relative overflow-hidden" style={{ backgroundColor: colors.bg }}>
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
                            {/* Image */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="relative rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl"
                            >
                                <EditableImage id="what_implant_img" defaultSrc="/assets/implantes/what_is_implant.jpg" alt="O que é o Implante Dentário" className="w-full h-auto" />
                            </motion.div>

                            {/* Content */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <EditableElement id="what_title_el" label="Título">
                                    <h2 className="text-2xl md:text-[30px] font-serif mb-6 md:mb-8 leading-tight">
                                        <span style={{ color: colors.title }}><EditableText id="what_title_1" defaultText="O que é o " /></span>
                                        <span style={{ color: colors.titleAccent }} className="italic"><EditableText id="what_title_2" defaultText="Implante Dentário?" /></span>
                                    </h2>
                                </EditableElement>

                                <EditableElement id="what_content_el" label="Conteúdo">
                                    <div className="space-y-4 md:space-y-5 font-light leading-relaxed" style={{ color: colors.text }}>
                                        <EditableText id="what_p1" as="p" defaultText="O implante dentário é uma estrutura de titânio que substitui a raiz do dente perdido." className="text-sm block font-medium text-foreground" />
                                        <EditableText id="what_p2" as="p" defaultText="Ele é integrado ao osso e serve de base para a colocação de uma prótese fixa, devolvendo função, estética e estabilidade muito próximas ao dente natural." className="text-sm block" />
                                        <EditableText id="what_p3" as="p" defaultText="Diferente de soluções provisórias, o implante preserva a estrutura óssea e evita desgastes desnecessários em dentes saudáveis. Por isso, hoje ele é considerado a alternativa mais moderna e duradoura para a reposição dentária." className="text-sm block" />
                                        <EditableText id="what_p4" as="p" defaultText="Na Oral Unic, o tratamento começa sempre com diagnóstico preciso, exames de imagem e um planejamento individualizado — sem decisões genéricas." className="text-sm block font-medium text-foreground" />
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
