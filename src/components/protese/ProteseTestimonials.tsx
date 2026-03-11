import React from 'react';
import { motion } from 'framer-motion';
import { Star, ExternalLink } from 'lucide-react';
import { EditableText, EditableElement } from '../EditableWrappers';
import { EditableSectionColors, ColorDef } from '../EditableSectionColors';
import { WHATSAPP_URL } from '../../lib/constants';

const TEST_COLORS: ColorDef[] = [
    { id: 'bg', label: 'Fundo', defaultColor: '#FDFCF8', cssProperty: 'backgroundColor' },
    { id: 'titleAccent', label: 'Título Destaque', defaultColor: '#540247', cssProperty: 'color' },
    { id: 'btnBg', label: 'Botão', defaultColor: '#540247', cssProperty: 'backgroundColor' },
    { id: 'glassBg', label: 'Glass Fundo', defaultColor: 'rgba(84,2,71,0.06)', cssProperty: 'backgroundColor' },
    { id: 'glassBorder', label: 'Glass Borda', defaultColor: 'rgba(84,2,71,0.15)', cssProperty: 'borderColor' },
];

const testimonials = [
    { name: "David Almeida", text: "Experiência muito satisfatória. A maravilha do atendimento começa na recepção que é ótima. As meninas do tour são bastante atenciosas e o cafezinho é o melhor que já tomei. Enfim, minha estadia na Oralunic foi muito boa, voltei a sorrir...", date: "2 semanas atrás" },
    { name: "Dani Menezes", text: "Clínica top com atendimento de excelência. Tô muito satisfeita com o clareamento que fiz. Não posso deixar de mencionar a minha felicidade em relação ao atendimento, em especial da colaboradora Maria Luísa. Muito cuidadosa e atenciosa. Show! 👏👏", date: "1 mês atrás" },
    { name: "Thay Araújo", text: "Tive uma ótima experiência ao realizar meu clareamento na clínica e aproveito para elogiar Maria Amélia, fui bem recepcionada! Sem dúvidas, indico a Oral Unic para todossss! Estão de parabéns!!!!!", date: "3 semanas atrás" },
];

const GOOGLE_REVIEW_URL = "https://search.google.com/local/reviews?placeid=ChIJExample";

const GoogleIcon = () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
);

export const ProteseTestimonials = () => {
    return (
        <EditableSectionColors sectionId="proteseTestimonials" colors={TEST_COLORS}>
            {(colors) => (
                <section className="py-14 md:py-24 relative overflow-hidden" style={{ backgroundColor: colors.bg }}>
                    <div className="absolute inset-0 z-0">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-[0.04]" style={{ background: `radial-gradient(circle, ${colors.titleAccent} 0%, transparent 70%)` }} />
                    </div>
                    <div className="container mx-auto px-4 md:px-6 relative z-10">
                        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 md:mb-16 gap-6">
                            <div>
                                <EditableElement id="protese_test_tag_el" label="Tag">
                                    <EditableText id="protese_test_tag" defaultText="AVALIAÇÕES DO GOOGLE" className="text-[9px] md:text-[10px] font-bold tracking-[0.4em] uppercase text-primary/50 mb-3 block" />
                                </EditableElement>
                                <EditableElement id="protese_test_title_el" label="Título">
                                    <h2 className="text-2xl md:text-[30px] font-serif leading-tight">
                                        <span style={{ color: colors.titleAccent }} className="italic"><EditableText id="protese_test_title" defaultText="O que nossos pacientes dizem" /></span>
                                    </h2>
                                </EditableElement>
                                <div className="flex items-center gap-3 mt-4">
                                    <GoogleIcon />
                                    <div className="flex items-center gap-1.5">
                                        <span className="text-lg font-bold text-foreground"><EditableText id="protese_test_rating" defaultText="4.9" /></span>
                                        <div className="flex gap-0.5">{[...Array(5)].map((_, i) => (<Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />))}</div>
                                        <span className="text-xs text-muted-foreground ml-1"><EditableText id="protese_test_count" defaultText="+500 avaliações" /></span>
                                    </div>
                                </div>
                            </div>
                            <EditableElement id="protese_test_cta_el" label="Botão">
                                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary group shrink-0" style={{ backgroundColor: colors.btnBg }}><EditableText id="protese_test_cta" defaultText="Agende uma Consulta" /></a>
                            </EditableElement>
                        </div>
                        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
                            {testimonials.map((item, index) => (
                                <motion.div key={index} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.12, duration: 0.6, ease: 'easeOut' }} className="group relative rounded-2xl md:rounded-3xl p-6 md:p-8 backdrop-blur-xl border transition-all duration-500 hover:shadow-2xl hover:-translate-y-1" style={{ backgroundColor: colors.glassBg, borderColor: colors.glassBorder, boxShadow: '0 4px 30px rgba(84,2,71,0.04)' }}>
                                    <div className="absolute inset-0 rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ boxShadow: `inset 0 0 0 1.5px ${colors.titleAccent}30, 0 0 40px ${colors.titleAccent}08` }} />
                                    <div className="flex items-start justify-between mb-4 relative z-10">
                                        <div>
                                            <EditableText id={`protese_test_name_${index}`} defaultText={item.name} className="font-bold text-foreground text-sm md:text-base block" />
                                            <EditableText id={`protese_test_date_${index}`} defaultText={item.date} className="text-[10px] text-muted-foreground" />
                                        </div>
                                        <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0 border border-border/50"><GoogleIcon /></div>
                                    </div>
                                    <div className="flex gap-0.5 mb-4 relative z-10">{[...Array(5)].map((_, i) => (<Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />))}</div>
                                    <EditableText id={`protese_test_text_${index}`} as="p" defaultText={item.text} className="text-xs md:text-sm text-muted-foreground leading-relaxed block relative z-10" />
                                </motion.div>
                            ))}
                        </div>
                        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5, duration: 0.5 }} className="flex justify-center mt-10 md:mt-14">
                            <a href={GOOGLE_REVIEW_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group">
                                <GoogleIcon /><span><EditableText id="protese_test_google_link" defaultText="Ver todas as avaliações no Google" /></span><ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                            </a>
                        </motion.div>
                    </div>
                </section>
            )}
        </EditableSectionColors>
    );
};
