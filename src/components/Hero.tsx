import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { EditableText, EditableImage } from './EditableWrappers';

export const Hero = () => {
    return (
        <section className="relative h-[85vh] md:h-[90vh] flex items-center overflow-hidden bg-[#FDFCF8]">
            {/* Immersive Background Image */}
            <div className="absolute inset-0 z-0">
                <motion.div
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="relative w-full h-full"
                >
                    <EditableImage
                        id="hero_bg"
                        defaultSrc="/assets/real-photos/dra_hero_hq_v5.png"
                        alt="Background Dra"
                        className="absolute right-0 top-0 h-full w-full md:w-[65%] lg:w-[60%] max-w-[1100px] object-cover object-[80%_center]"
                    />

                    {/* Lateral Fade (Left to Right) with subtle blur */}
                    <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#FDFCF8] via-[#FDFCF8] to-transparent w-full md:w-[85%] lg:w-[80%] z-10 backdrop-blur-[2px] pointer-events-none" />

                    {/* Bottom Fade (To blend sections) with smooth blur */}
                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#FDFCF8] to-transparent z-20 backdrop-blur-[1px] pointer-events-none" />

                    {/* Subtle Overlay for image clarity */}
                    <div className="absolute inset-0 bg-[#FDFCF8]/5 mix-blend-multiply z-0 pointer-events-none" />
                </motion.div>
            </div>

            <div className="max-w-[1600px] mx-auto w-full px-6 relative z-30 pt-28 md:pt-36">
                <div className="max-w-2xl">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <span className="inline-block px-4 py-1.5 mb-6 text-[10px] font-bold tracking-[0.2em] uppercase text-accent bg-accent/10 rounded-full backdrop-blur-sm">
                            <EditableText id="hero_badge" defaultText="Viva a Experiência Premium" />
                        </span>
                        <h1 className="text-2xl md:text-[30px] font-serif font-medium leading-[1.1] mb-6 text-foreground">
                            <EditableText id="hero_title_1" defaultText="Cuidado odontológico completo e " />
                            <EditableText id="hero_title_2" defaultText="especializado em cada detalhe." className="text-primary italic" />
                        </h1>
                        <EditableText
                            id="hero_desc"
                            as="p"
                            defaultText="Na Oral Unic, você encontra tecnologia, planejamento personalizado e uma equipe de especialistas para cuidar da sua saúde bucal, estética e bem-estar em um só lugar."
                            className="text-sm md:text-base text-foreground/70 mb-8 leading-relaxed max-w-sm font-light block"
                        />

                        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                            <button className="btn-primary group">
                                <EditableText id="hero_cta_primary" defaultText="Começar Transformação" />
                                <ArrowRight className="ml-2 w-[1.1em] h-[1.1em] group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
                            </button>
                            <button className="btn-outline">
                                <EditableText id="hero_cta_secondary" defaultText="Conhecer Especialidades" />
                            </button>
                        </div>

                        {/* Mini Badge (formerly on card) */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1 }}
                            className="mt-12 flex items-center gap-4 py-3 px-5 glass rounded-2xl border border-white/40 shadow-sm w-fit"
                        >
                            <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white shadow-md">
                                <span className="font-bold text-xs italic">☆</span>
                            </div>
                            <div>
                                <p className="font-bold text-[11px] text-foreground mb-0.5"><EditableText id="hero_badge_stat" defaultText="98% Satisfação" /></p>
                                <p className="text-[9px] text-foreground/50 tracking-wide"><EditableText id="hero_badge_label" defaultText="Transformações Reais na Unidade" /></p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
