import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Clock, Eye, HeartPulse } from 'lucide-react';
import { EditableText, EditableElement } from '../EditableWrappers';
import { EditableSectionColors, ColorDef } from '../EditableSectionColors';

const PROBLEM_COLORS: ColorDef[] = [
    { id: 'bg', label: 'Fundo', defaultColor: '#540247', cssProperty: 'backgroundColor' },
    { id: 'text', label: 'Texto', defaultColor: '#FFFFFF', cssProperty: 'color' },
    { id: 'accent', label: 'Acento', defaultColor: '#D2A170', cssProperty: 'color' },
];

const consequences = [
    { icon: Clock, title: 'Sinais do envelhecimento', desc: 'Linhas de expressão e perda de volume alteram a aparência do rosto com o tempo.' },
    { icon: Eye, title: 'Assimetria facial', desc: 'Desproporções entre os elementos do rosto podem impactar a harmonia e a autoestima.' },
    { icon: Sparkles, title: 'Perda de contorno', desc: 'A diminuição de colágeno e gordura facial causa perda de definição nos contornos.' },
    { icon: HeartPulse, title: 'Impacto na autoestima', desc: 'Mudanças faciais podem afetar a confiança e o bem-estar emocional do paciente.' },
];

export const HarmonizacaoProblem = () => {
    return (
        <EditableSectionColors sectionId="harmoProblem" colors={PROBLEM_COLORS}>
            {(colors) => (
                <section className="py-14 md:py-24 relative overflow-hidden" style={{ backgroundColor: colors.bg }}>
                    <div className="absolute inset-0 opacity-[0.03]">
                        <img src="/assets/real-photos/office_bg_cta.jpg" alt="" className="w-full h-full object-cover" loading="lazy" />
                    </div>
                    <div className="container mx-auto px-6 md:px-8 relative z-10 max-w-6xl">
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-12 md:mb-14">
                            <div className="flex items-center justify-center gap-4 mb-8">
                                <div className="w-10 h-px" style={{ backgroundColor: `${colors.accent}60` }} />
                                <span className="text-[10px] md:text-xs font-sans font-medium tracking-[0.25em] uppercase" style={{ color: colors.accent }}>
                                    <EditableText id="harmo_problem_badge" defaultText="Você sabia?" />
                                </span>
                                <div className="w-10 h-px" style={{ backgroundColor: `${colors.accent}60` }} />
                            </div>
                            <EditableElement id="harmo_problem_headline_el" label="Título">
                                <h2 className="font-serif text-2xl md:text-[30px] font-light leading-[1.2] mb-4" style={{ color: colors.text }}>
                                    <EditableText id="harmo_problem_headline" defaultText="Mudanças faciais acontecem " />
                                    <span style={{ color: colors.accent }}><EditableText id="harmo_problem_headline2" defaultText="naturalmente com o tempo" /></span>
                                </h2>
                            </EditableElement>
                            <EditableElement id="harmo_problem_text_el" label="Subtexto">
                                <p className="text-sm font-sans font-light leading-[1.8] tracking-wide max-w-2xl mx-auto" style={{ color: `${colors.text}88` }}>
                                    <EditableText id="harmo_problem_main_text" defaultText="A harmonização orofacial reúne procedimentos estéticos que buscam melhorar a aparência facial de forma equilibrada, preservando a naturalidade e respeitando as características individuais de cada paciente." />
                                </p>
                            </EditableElement>
                        </motion.div>
                        <div className="hidden md:block relative">
                            <svg className="absolute top-[60px] left-0 w-full h-16 pointer-events-none" viewBox="0 0 1000 60" preserveAspectRatio="none" fill="none">
                                <motion.path d="M 0 30 C 125 0, 125 60, 250 30 C 375 0, 375 60, 500 30 C 625 0, 625 60, 750 30 C 875 0, 875 60, 1000 30" stroke={`${colors.accent}25`} strokeWidth="1.5" strokeDasharray="6 6" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 2, ease: 'easeInOut' }} />
                                <motion.path d="M 0 30 C 125 0, 125 60, 250 30 C 375 0, 375 60, 500 30 C 625 0, 625 60, 750 30 C 875 0, 875 60, 1000 30" stroke={colors.accent} strokeWidth="1.5" strokeOpacity="0.4" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 2.5, ease: 'easeInOut', delay: 0.3 }} />
                            </svg>
                            <div className="grid grid-cols-4 gap-6 relative z-10">
                                {consequences.map((item, i) => {
                                    const Icon = item.icon;
                                    const isTop = i % 2 === 0;
                                    return (
                                        <motion.div key={i} initial={{ opacity: 0, y: isTop ? -30 : 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.15, ease: 'easeOut' }} className={`flex flex-col items-center ${isTop ? '' : 'mt-20'}`}>
                                            <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 + i * 0.15, type: 'spring' }} className={`w-3 h-3 rounded-full flex-shrink-0 ${isTop ? 'order-2 mt-4 mb-4' : 'order-first mb-4'}`} style={{ backgroundColor: colors.accent, boxShadow: `0 0 16px ${colors.accent}50, 0 0 32px ${colors.accent}20` }} />
                                            <div className={`group rounded-2xl p-4 transition-all duration-500 hover:-translate-y-1 w-full ${isTop ? 'order-1' : 'order-2'}`} style={{ backgroundColor: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)', backdropFilter: 'blur(8px)' }}>
                                                <div className="w-11 h-11 rounded-full flex items-center justify-center mb-4 transition-transform duration-500 group-hover:scale-110" style={{ backgroundColor: `${colors.accent}15`, border: `1px solid ${colors.accent}25` }}>
                                                    <Icon className="w-5 h-5" style={{ color: colors.accent }} />
                                                </div>
                                                <div className="flex items-baseline gap-2 mb-2">
                                                    <span className="font-serif text-base opacity-30" style={{ color: colors.accent }}>0{i + 1}</span>
                                                    <h3 className="font-sans text-sm font-semibold tracking-wide" style={{ color: colors.text }}><EditableText id={`harmo_problem_cons_${i}`} defaultText={item.title} /></h3>
                                                </div>
                                                <p className="text-xs font-sans font-light leading-[1.8] tracking-wide" style={{ color: `${colors.text}77` }}><EditableText id={`harmo_problem_desc_${i}`} defaultText={item.desc} /></p>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>
                        <div className="md:hidden relative">
                            <svg className="absolute left-5 top-0 w-12 pointer-events-none" viewBox="0 0 50 1000" preserveAspectRatio="none" fill="none" style={{ height: '100%' }}>
                                <motion.path d="M 25 0 C 25 60, 10 80, 10 140 C 10 200, 40 220, 40 280 C 40 340, 10 360, 10 420 C 10 480, 40 500, 40 560 C 40 620, 25 640, 25 700 C 25 760, 10 780, 10 840 C 10 900, 25 920, 25 1000" stroke={`${colors.accent}25`} strokeWidth="1.5" strokeDasharray="5 5" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 2, ease: 'easeInOut' }} />
                                <motion.path d="M 25 0 C 25 60, 10 80, 10 140 C 10 200, 40 220, 40 280 C 40 340, 10 360, 10 420 C 10 480, 40 500, 40 560 C 40 620, 25 640, 25 700 C 25 760, 10 780, 10 840 C 10 900, 25 920, 25 1000" stroke={colors.accent} strokeWidth="1.5" strokeOpacity="0.4" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 2.5, ease: 'easeInOut', delay: 0.3 }} />
                            </svg>
                            <div className="space-y-10 pl-14 relative z-10">
                                {consequences.map((item, i) => {
                                    const Icon = item.icon;
                                    return (
                                        <motion.div key={i} initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-30px' }} transition={{ duration: 0.6, delay: 0.1 }} className="relative">
                                            <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.3, type: 'spring' }} className="absolute -left-[2.15rem] top-6 w-3 h-3 rounded-full" style={{ backgroundColor: colors.accent, boxShadow: `0 0 14px ${colors.accent}50` }} />
                                            <div className="group rounded-2xl p-5 transition-all duration-500" style={{ backgroundColor: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
                                                <div className="flex items-start gap-3">
                                                    <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: `${colors.accent}15`, border: `1px solid ${colors.accent}25` }}>
                                                        <Icon className="w-4 h-4" style={{ color: colors.accent }} />
                                                    </div>
                                                    <div>
                                                        <div className="flex items-baseline gap-2 mb-1">
                                                            <span className="font-serif text-sm opacity-30" style={{ color: colors.accent }}>0{i + 1}</span>
                                                            <h3 className="font-sans text-sm font-semibold tracking-wide" style={{ color: colors.text }}><EditableText id={`harmo_problem_cons_${i}`} defaultText={item.title} /></h3>
                                                        </div>
                                                        <p className="text-xs font-sans font-light leading-[1.7] tracking-wide" style={{ color: `${colors.text}77` }}><EditableText id={`harmo_problem_desc_${i}`} defaultText={item.desc} /></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </EditableSectionColors>
    );
};
