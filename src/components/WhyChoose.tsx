import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, Heart, Sparkles } from 'lucide-react';

const features = [
    {
        title: "Tecnologia Avançada",
        description: "Equipamentos de última geração para diagnóstico preciso.",
        icon: Shield
    },
    {
        title: "Equipe Especializada",
        description: "Profissionais altamente qualificados em todas as áreas.",
        icon: Users
    },
    {
        title: "Atendimento Humanizado",
        description: "Cuidado personalizado que respeita suas necessidades.",
        icon: Heart
    },
    {
        title: "Resultados Surpreendentes",
        description: "Transformações reais que devolvem a confiança.",
        icon: Sparkles
    }
];

import { EditableText } from './EditableWrappers';

export const WhyChoose = () => {
    return (
        <section className="relative py-24 bg-[#FDFCF8] overflow-hidden">
            {/* Background Layer (DNA Oral Unic) */}
            <div className="absolute inset-0 z-0">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5 }}
                    className="relative w-full h-full"
                >
                    <img
                        src="/assets/real-photos/clinic_bg_why_choose.png"
                        alt="Background"
                        className="absolute inset-0 w-full h-full object-cover opacity-10"
                    />

                    {/* 100% Fades & Blur for Seamless Blending */}
                    <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-[#FDFCF8] via-[#FDFCF8]/80 to-transparent z-10 backdrop-blur-[2px]" />
                    <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#FDFCF8] via-[#FDFCF8]/80 to-transparent z-10 backdrop-blur-[2px]" />
                </motion.div>
            </div>

            <div className="container mx-auto px-6 text-center relative z-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-2xl md:text-[30px] font-serif text-foreground mb-6 leading-[1.1]">
                        <EditableText id="why_title_1" defaultText="Por que escolher a" /> <span className="text-primary italic"><EditableText id="why_title_2" defaultText="Oral Unic?" /></span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            whileHover={{ y: -8, scale: 1.02 }}
                            className="bg-primary/60 backdrop-blur-2xl p-10 rounded-[2.5rem] border border-white/30 flex flex-col items-center text-center group transition-all duration-500 hover:shadow-2xl hover:shadow-primary/30 shadow-lg ring-1 ring-white/10"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-8 group-hover:bg-white transition-all duration-500 shadow-sm">
                                <item.icon className="w-6 h-6 text-white group-hover:text-primary transition-colors" />
                            </div>
                            <h3 className="text-lg font-bold mb-4 text-white tracking-tight">
                                <EditableText id={`feature_${index}_title`} defaultText={item.title} />
                            </h3>
                            <EditableText
                                id={`feature_${index}_desc`}
                                as="p"
                                defaultText={item.description}
                                className="text-white/80 text-[13px] leading-relaxed block font-light"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section >
    );
};
