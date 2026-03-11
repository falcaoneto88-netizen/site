import React from 'react';
import { EditableText, EditableElement, EditableImage } from '../EditableWrappers';
import { motion } from 'framer-motion';

export const GenericHero = () => {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#050505]">
            {/* Background Decor */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-white/5 blur-[120px] rounded-full -translate-y-1/2 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
                        <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                        <EditableText id="hero_badge" defaultText="NOVA PLATAFORMA DISPONÍVEL" className="text-[10px] font-bold tracking-widest text-white/50" />
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6 tracking-tight">
                        <EditableText id="hero_title" defaultText="Transforme sua presença digital com elegância." />
                    </h1>

                    <p className="text-lg text-white/40 mb-10 max-w-lg leading-relaxed">
                        <EditableText id="hero_description" defaultText="Uma solução completa e minimalista desenvolvida para quem busca resultados extraordinários e design de alta performance." />
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <EditableElement id="hero_primary_cta">
                            <button className="bg-white text-black px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:scale-105 transition-all shadow-xl shadow-white/5">
                                <EditableText id="hero_cta_text" defaultText="Começar Agora" />
                            </button>
                        </EditableElement>

                        <EditableElement id="hero_secondary_cta">
                            <button className="px-8 py-4 rounded-2xl font-bold border border-white/10 text-white hover:bg-white/5 transition-all">
                                <EditableText id="hero_secondary_text" defaultText="Ver Demonstração" />
                            </button>
                        </EditableElement>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative"
                >
                    <div className="aspect-square rounded-[40px] overflow-hidden bg-neutral-900 border border-white/10 relative shadow-2xl">
                        <EditableImage
                            id="hero_main_image"
                            defaultSrc="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
                            alt="Hero Image"
                            className="w-full h-full object-cover"
                        />
                        {/* Glass Card Overlay */}
                        <div className="absolute bottom-6 left-6 right-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                            <EditableText id="hero_overlay_text" defaultText="+150% de aumento em conversão no primeiro mês." className="text-white text-sm font-medium" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
