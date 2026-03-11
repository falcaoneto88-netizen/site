import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Stethoscope, ClipboardList, Sparkles } from 'lucide-react';
import { EditableText, EditableElement } from './EditableWrappers';
import { WHATSAPP_URL } from '../lib/constants';

const steps = [
    { number: "01", title: "Agendamento", description: "Inicie sua jornada para o sorriso dos sonhos com um contato simples via WhatsApp.", icon: Calendar },
    { number: "02", title: "Avaliação", description: "Diagnóstico preciso com scanners 3D e tecnologia de análise facial avançada.", icon: Stethoscope },
    { number: "03", title: "Planejamento", description: "Design personalizado do seu sorriso, onde você participa de cada detalhe.", icon: ClipboardList },
    { number: "04", title: "Tratamento", description: "Execução impecável com máximo conforto e resultados que superam expectativas.", icon: Sparkles },
];

export const HowItWorks = () => {
    return (
        <section className="py-16 md:py-28 lg:py-36 relative overflow-hidden bg-[#FDFCF8]">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-primary/[0.03] rounded-full blur-[180px] pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center max-w-6xl mx-auto">
                    {/* Left — Header + CTA */}
                    <div>
                        <EditableElement id="how_header_el" label="Cabeçalho">
                            <div className="mb-10">
                                <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                                    <EditableText id="how_tag" defaultText="Sua Jornada" className="text-[10px] font-bold tracking-[0.5em] uppercase text-primary/40 mb-5 block" />
                                </motion.div>
                                <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-2xl md:text-[30px] font-serif text-foreground leading-[1.1] mb-4 md:mb-6">
                                    <EditableText id="how_title_1" defaultText="Como funciona nosso" />{' '}
                                    <span className="text-primary italic"><EditableText id="how_title_2" defaultText="atendimento" /></span>
                                </motion.h2>
                                <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                                    <EditableText id="how_subtitle" as="p" defaultText="Uma jornada cuidadosa, do primeiro contato ao resultado final. Cada etapa foi pensada para oferecer conforto, transparência e excelência." className="text-foreground/50 text-sm md:text-base leading-relaxed font-light block max-w-md mb-10" />
                                </motion.div>
                            </div>
                        </EditableElement>

                        <EditableElement id="how_footer_cta_el" label="CTA">
                            <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
                                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary group">
                                    <Calendar className="w-[1.1em] h-[1.1em]" />
                                    <EditableText id="how_footer_cta" defaultText="Agendar Minha Consulta" />
                                </a>
                            </motion.div>
                        </EditableElement>
                    </div>

                    {/* Right — Timeline */}
                    <div className="relative">
                        <div className="absolute left-8 top-0 bottom-0 w-[1px] z-0">
                            <motion.div initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true }} transition={{ duration: 1.8, ease: 'easeInOut' }} className="w-full h-full origin-top bg-gradient-to-b from-primary/10 via-primary/20 to-primary/5" />
                        </div>
                        <div className="space-y-10 md:space-y-14">
                            {steps.map((step, index) => (
                                <EditableElement key={index} id={`how_step_${index}_el`} label={`Step ${step.number}`}>
                                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.1 }} className="relative flex items-start gap-6 group">
                                        <div className="relative z-10 flex-shrink-0">
                                            <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.1 + 0.2, type: 'spring', stiffness: 250 }} className="w-16 h-16 rounded-[1.25rem] bg-white border border-primary/10 shadow-lg shadow-primary/5 flex items-center justify-center group-hover:border-primary/25 group-hover:shadow-primary/10 transition-all duration-500">
                                                <step.icon className="w-6 h-6 text-primary/70 group-hover:text-primary transition-colors duration-500" />
                                            </motion.div>
                                            <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary/10 text-primary text-[9px] font-bold flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-500">{step.number}</span>
                                        </div>
                                        <div className="flex-1 pt-2">
                                            <h3 className="text-lg font-serif font-medium text-foreground mb-2 group-hover:text-primary transition-colors duration-500">
                                                <EditableText id={`step_${index}_title`} defaultText={step.title} />
                                            </h3>
                                            <div className="w-8 h-[1.5px] bg-primary/15 mb-3 group-hover:w-14 group-hover:bg-primary/30 transition-all duration-500" />
                                            <EditableText id={`step_${index}_desc`} as="p" defaultText={step.description} className="text-foreground/50 text-sm leading-relaxed font-light block group-hover:text-foreground/70 transition-colors duration-500" />
                                        </div>
                                    </motion.div>
                                </EditableElement>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
