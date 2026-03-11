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

export const OrtodontiaWhatIs = () => {
    return (
        <EditableSectionColors sectionId="ortodontiaWhatIs" colors={WHAT_COLORS}>
            {(colors) => (
                <section className="py-14 md:py-24 relative overflow-hidden" style={{ backgroundColor: colors.bg }}>
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="relative rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl"
                            >
                                <EditableImage id="orto_what_img" defaultSrc="/assets/ortodontia/what_is_ortodontia.jpg" alt="O que é o Tratamento Ortodôntico" className="w-full h-auto" />
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <EditableElement id="orto_what_title_el" label="Título">
                                    <h2 className="text-2xl md:text-[30px] font-serif mb-6 md:mb-8 leading-tight">
                                        <span style={{ color: colors.title }}><EditableText id="orto_what_t1" defaultText="O que é o " /></span>
                                        <span style={{ color: colors.titleAccent }} className="italic"><EditableText id="orto_what_t2" defaultText="Tratamento Ortodôntico?" /></span>
                                    </h2>
                                </EditableElement>

                                <EditableElement id="orto_what_content_el" label="Conteúdo">
                                    <div className="space-y-4 md:space-y-5 font-light leading-relaxed" style={{ color: colors.text }}>
                                        <EditableText id="orto_what_p1" as="p" defaultText="A ortodontia é a especialidade responsável por corrigir o posicionamento dos dentes e da mordida, promovendo equilíbrio entre função, estética e saúde bucal." className="text-sm block font-medium text-foreground" />
                                        <EditableText id="orto_what_p2" as="p" defaultText="Por meio de diferentes tipos de aparelhos e técnicas, o tratamento busca alinhar os dentes de forma progressiva, respeitando a biologia do paciente e proporcionando resultados previsíveis e duradouros." className="text-sm block" />
                                        <EditableText id="orto_what_p3" as="p" defaultText="Na Oral Unic, o tratamento ortodôntico começa sempre com diagnóstico completo, análise facial, exames e planejamento detalhado — sem abordagens padronizadas." className="text-sm block font-medium text-foreground" />
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
