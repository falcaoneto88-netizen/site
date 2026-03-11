import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, Heart, Sparkles } from 'lucide-react';
import { EditableSectionColors, ColorDef } from '../EditableSectionColors';
import { EditableElement, EditableText } from '../EditableWrappers';

const features = [
    { title: "Tecnologia Avançada", description: "Equipamentos de última geração para diagnóstico preciso.", icon: Shield },
    { title: "Equipe Especializada", description: "Profissionais altamente qualificados em todas as áreas.", icon: Users },
    { title: "Atendimento Humanizado", description: "Cuidado personalizado que respeita suas necessidades.", icon: Heart },
    { title: "Resultados Surpreendentes", description: "Transformações reais que devolvem a confiança.", icon: Sparkles }
];

const WHY_COLORS: ColorDef[] = [
    { id: 'bg', label: 'Fundo Seção', defaultColor: '#FDFCF8', cssProperty: 'backgroundColor' },
    { id: 'title', label: 'Título', defaultColor: '#000000', cssProperty: 'color' },
    { id: 'titleAccent', label: 'Título Destaque', defaultColor: '#6B21A8', cssProperty: 'color' },
    { id: 'cardBg', label: 'Card Fundo', defaultColor: '#6B21A8', cssProperty: 'backgroundColor' },
    { id: 'cardText', label: 'Card Texto', defaultColor: '#FFFFFF', cssProperty: 'color' },
    { id: 'cardIcon', label: 'Card Ícone', defaultColor: '#FFFFFF', cssProperty: 'color' },
];

export const WhyChooseV2 = () => {
    return (
        <EditableSectionColors sectionId="whyChooseV2" colors={WHY_COLORS}>
            {(colors) => (
                <section className="relative py-16 md:py-24 overflow-hidden" style={{ backgroundColor: colors.bg }}>
                    <div className="absolute inset-0 z-0">
                        <img src="/assets/real-photos/clinic_bg_why_choose.png" alt="" className="absolute inset-0 w-full h-full object-cover opacity-10" loading="lazy" />
                        <div className="absolute top-0 left-0 right-0 h-48 z-10" style={{ background: `linear-gradient(to bottom, ${colors.bg}, ${colors.bg}cc, transparent)` }} />
                        <div className="absolute bottom-0 left-0 right-0 h-48 z-10" style={{ background: `linear-gradient(to top, ${colors.bg}, ${colors.bg}cc, transparent)` }} />
                    </div>

                    <div className="container mx-auto px-4 md:px-6 text-center relative z-20">
                        <EditableElement id="why_header_el" label="Cabeçalho">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="mb-10 md:mb-16"
                            >
                                <h2 className="text-2xl md:text-[30px] font-serif mb-6 leading-[1.1]">
                                    <span style={{ color: colors.title }}><EditableText id="why_v2_title_1" defaultText="Por que escolher a" /> </span>
                                    <span style={{ color: colors.titleAccent }} className="italic"><EditableText id="why_v2_title_2" defaultText="Oral Unic?" /></span>
                                </h2>
                            </motion.div>
                        </EditableElement>

                        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
                            {features.map((item, index) => (
                                <EditableElement key={index} id={`why_card_${index}_el`} label={item.title}>
                                    <motion.div
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1, duration: 0.6 }}
                                        whileHover={{ y: -8, scale: 1.02 }}
                                        className="backdrop-blur-xl p-5 md:p-10 rounded-[1.5rem] md:rounded-[2.5rem] border border-white/20 flex flex-col items-center text-center group transition-all duration-500 hover:shadow-2xl"
                                        style={{ backgroundColor: `${colors.cardBg}cc` }}
                                    >
                                        <EditableElement id={`why_icon_${index}_el`} label="Ícone">
                                            <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-white/10 flex items-center justify-center mb-4 md:mb-8 group-hover:bg-white transition-all duration-500 shadow-sm">
                                                <item.icon className="w-4 h-4 md:w-6 md:h-6 group-hover:text-primary transition-colors" style={{ color: colors.cardIcon }} />
                                            </div>
                                        </EditableElement>
                                        <h3 className="text-xs md:text-lg font-bold mb-2 md:mb-4 tracking-tight" style={{ color: colors.cardText }}><EditableText id={`why_v2_card_${index}_title`} defaultText={item.title} /></h3>
                                        <span className="text-[10px] md:text-[13px] leading-relaxed font-light hidden md:block" style={{ color: `${colors.cardText}cc` }}><EditableText id={`why_v2_card_${index}_desc`} defaultText={item.description} /></span>
                                    </motion.div>
                                </EditableElement>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </EditableSectionColors>
    );
};
