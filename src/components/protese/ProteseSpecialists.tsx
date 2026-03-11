import React from 'react';
import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';
import { EditableText, EditableImage, EditableElement } from '../EditableWrappers';
import { EditableSectionColors, ColorDef } from '../EditableSectionColors';

const SPEC_COLORS: ColorDef[] = [
    { id: 'bg', label: 'Fundo', defaultColor: '#FDFCF8', cssProperty: 'backgroundColor' },
    { id: 'title', label: 'Título', defaultColor: '#000000', cssProperty: 'color' },
    { id: 'titleAccent', label: 'Título Destaque', defaultColor: '#00BFA6', cssProperty: 'color' },
    { id: 'text', label: 'Texto', defaultColor: '#555555', cssProperty: 'color' },
    { id: 'cardBg', label: 'Card Fundo', defaultColor: '#540247', cssProperty: 'backgroundColor' },
    { id: 'cardAccent', label: 'Card Accent', defaultColor: '#00BFA6', cssProperty: 'backgroundColor' },
];

const specialists = [
    {
        name: "Dr. David Almeida",
        specialty: "Especialista em Prótese Dentária",
        description: "Atua no planejamento e execução de próteses fixas, coroas, pontes e reabilitações complexas, com atenção à estética e à função mastigatória.",
        image: "/assets/protese/dr_david.jpg",
        instagram: "https://www.instagram.com/dr.davidalmeida",
    },
    {
        name: "Dra. Ellen Ribeiro",
        specialty: "Especialista em Prótese Dentária e Implantodontia",
        description: "Atua na reabilitação oral com próteses sobre dentes e implantes, integrando função, conforto e estética.",
        image: "/assets/implantes/dra_ellen.jpg",
        instagram: "https://www.instagram.com/dr.vecioribeiro",
    },
    {
        name: "Dr. João Lima",
        specialty: "Cirurgião-Dentista",
        description: "Atua em reabilitações protéticas e acompanhamento clínico, com foco em conforto, adaptação e saúde bucal.",
        image: "/assets/protese/dr_joao.jpg",
        instagram: "https://www.instagram.com/dr.joaolima",
    },
];

export const ProteseSpecialists = () => {
    return (
        <EditableSectionColors sectionId="proteseSpecialists" colors={SPEC_COLORS}>
            {(colors) => (
                <section className="py-14 md:py-24 relative overflow-hidden" style={{ backgroundColor: colors.bg }}>
                    <div className="container mx-auto px-4 md:px-6">
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10 md:mb-16">
                            <EditableElement id="protese_spec_title_el" label="Título">
                                <h2 className="text-2xl md:text-[30px] font-serif mb-4 md:mb-6 leading-tight">
                                    <span style={{ color: colors.titleAccent }} className="italic"><EditableText id="protese_spec_title_1" defaultText="Conheça nossos profissionais" /></span>
                                </h2>
                            </EditableElement>
                            <EditableElement id="protese_spec_subtitle_el" label="Subtítulo">
                                <div style={{ color: colors.text }}>
                                    <EditableText id="protese_spec_subtitle" as="p" defaultText="Os tratamentos com prótese dentária na Oral Unic são realizados por uma equipe multidisciplinar, com experiência em reabilitação oral e foco em resultados funcionais e estéticos." className="text-sm max-w-3xl mx-auto block" />
                                </div>
                            </EditableElement>
                        </motion.div>

                        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
                            {specialists.map((doc, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.15, duration: 0.6 }}
                                    className={`group rounded-2xl overflow-hidden border transition-shadow duration-500 hover:shadow-2xl ${specialists.length === 3 && index === 2 ? 'md:col-span-2 md:max-w-lg md:mx-auto' : ''}`}
                                    style={{ backgroundColor: colors.cardBg, borderColor: 'rgba(255,255,255,0.08)' }}
                                >
                                    <div className="flex flex-row h-full">
                                        <div className="relative w-[42%] flex-shrink-0 overflow-hidden">
                                            <EditableImage
                                                id={`protese_spec_photo_${index}`}
                                                defaultSrc={doc.image}
                                                alt={doc.name}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-y-0 right-0 w-12 pointer-events-none" style={{ background: `linear-gradient(to right, transparent, ${colors.cardBg})` }} />
                                        </div>
                                        <div className="flex-1 p-5 md:p-6 flex flex-col justify-center min-h-[260px]">
                                            <EditableElement id={`protese_spec_info_${index}_el`} label={doc.name}>
                                                <h3 className="text-base md:text-lg font-serif font-bold text-white mb-1 leading-snug"><EditableText id={`protese_spec_name_${index}`} defaultText={doc.name} /></h3>
                                                <p className="text-[11px] md:text-xs font-semibold mb-4 tracking-wide" style={{ color: colors.cardAccent }}><EditableText id={`protese_spec_specialty_${index}`} defaultText={doc.specialty} /></p>
                                                <p className="text-xs md:text-sm text-white/65 leading-[1.7] mb-5 font-light"><EditableText id={`protese_spec_desc_${index}`} defaultText={doc.description} /></p>
                                                <a href={doc.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 text-white text-xs font-medium hover:bg-white/10 transition-all w-fit">
                                                    <Instagram className="w-3.5 h-3.5" />
                                                    <EditableText id={`protese_spec_ig_${index}`} defaultText="Perfil no Instagram" />
                                                </a>
                                            </EditableElement>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </EditableSectionColors>
    );
};