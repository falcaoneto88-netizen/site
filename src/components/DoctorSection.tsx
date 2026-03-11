import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Heart } from 'lucide-react';

import { EditableText, EditableImage } from './EditableWrappers';

export const DoctorSection = () => {
    return (
        <section id="about" className="relative py-20 md:py-24 bg-[#FDFCF8] overflow-hidden min-h-[60vh] flex items-center">
            {/* Background Layer (DNA Home) */}
            <div className="absolute inset-0 z-0">
                <motion.div
                    initial={{ opacity: 0, scale: 1.05 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="relative w-full h-full"
                >
                    <EditableImage
                        id="doctor_bg"
                        defaultSrc="/assets/real-photos/dr_real_waist_up.png"
                        alt="Dr. Felipe Real Background"
                        className="absolute right-0 top-0 h-full w-full md:w-[65%] lg:w-[60%] max-w-[1100px] object-cover object-[center_35%]"
                    />

                    {/* Lateral Fade (Left to Right) */}
                    <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#FDFCF8] via-[#FDFCF8] to-transparent w-full md:w-[85%] lg:w-[80%] z-10 backdrop-blur-[1px] pointer-events-none" />

                    {/* Bottom Fade */}
                    <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#FDFCF8] to-transparent z-20 pointer-events-none" />

                    {/* Subtle Overlay */}
                    <div className="absolute inset-0 bg-[#FDFCF8]/5 mix-blend-multiply z-0 pointer-events-none" />
                </motion.div>
            </div>

            <div className="max-w-[1600px] mx-auto w-full px-6 relative z-30">
                <div className="max-w-2xl">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h2 className="text-2xl md:text-[30px] font-serif font-medium leading-[1] mb-10 text-foreground">
                            <EditableText id="doctor_title_1" defaultText="Uma equipe completa para " />
                            <span className="text-primary italic">
                                <EditableText id="doctor_title_2" defaultText="cuidar de você" />
                            </span>
                        </h2>

                        <EditableText
                            id="doctor_quote"
                            as="p"
                            defaultText='A Oral Unic reúne profissionais altamente qualificados em clínica geral, ortodontia, implantodontia, prótese, periodontia, endodontia, dentística e harmonização orofacial. Cada caso é conduzido pelo especialista mais indicado para sua necessidade.'
                            className="text-lg md:text-xl text-foreground/70 mb-10 leading-relaxed italic block max-w-xl font-light"
                        />

                        <div className="space-y-8 mb-12">
                            <div className="flex gap-6 items-start">
                                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center text-primary backdrop-blur-sm">
                                    <BookOpen className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-foreground mb-1">
                                        <EditableText id="doctor_feat_1_title" defaultText="Formação de Excelência" />
                                    </h4>
                                    <EditableText
                                        id="doctor_feat_1_desc"
                                        as="p"
                                        defaultText="Especialista em Reabilitação Oral e Implantodontia Avançada pela USP."
                                        className="text-sm text-foreground/60 leading-relaxed block max-w-sm"
                                    />
                                </div>
                            </div>

                            <div className="flex gap-6 items-start">
                                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center text-primary backdrop-blur-sm">
                                    <Heart className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-foreground mb-1">
                                        <EditableText id="doctor_feat_2_title" defaultText="Humanismo Digital" />
                                    </h4>
                                    <EditableText
                                        id="doctor_feat_2_desc"
                                        as="p"
                                        defaultText="Tecnologia acompanhada de um olhar empático para cada detalhe da sua história."
                                        className="text-sm text-foreground/60 leading-relaxed block max-w-sm"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-6 pb-[50px]">
                            <button className="btn-primary group">
                                <EditableText id="doctor_cta_text" defaultText="Conhecer Nossa História" />
                                <Award className="ml-2 w-[1.1em] h-[1.1em] group-hover:rotate-12 transition-transform" strokeWidth={2.5} />
                            </button>

                            {/* Optional: Add badge info like Hero if needed later */}
                            <div className="flex items-center gap-3 py-2 px-4 glass rounded-full border border-white/40 shadow-sm w-fit">
                                <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center text-white text-[10px] font-bold">✓</div>
                                <EditableText id="doctor_badge_small" defaultText="Diretor Clínico Oral Unic" className="text-[10px] font-bold text-foreground/60 tracking-wider uppercase" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
