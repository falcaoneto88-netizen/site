import React from 'react';
import { motion } from 'framer-motion';
import { EditableText, EditableImage, EditableElement } from '../EditableWrappers';
import { EditableSectionColors, ColorDef } from '../EditableSectionColors';
import { LOGO_PATH } from '../../lib/constants';

const PROC_COLORS: ColorDef[] = [
    { id: 'bg', label: 'Fundo', defaultColor: '#540247', cssProperty: 'backgroundColor' },
    { id: 'title', label: 'Título', defaultColor: '#FFFFFF', cssProperty: 'color' },
    { id: 'cardTitle', label: 'Card Título', defaultColor: '#540247', cssProperty: 'color' },
];

const procedures = [
    { title: "Implante unitário para reposição de um dente", image: "/assets/implantes/proc_unitario.jpg", delay: 0 },
    { title: "Enxertos ósseos e levantamento de seio maxilar", image: "/assets/implantes/proc_enxerto.jpg", delay: 0.06 },
    { title: "Implantes com carga imediata, quando indicado", image: "/assets/implantes/proc_carga_imediata.jpg", delay: 0.12 },
    { title: "Implantes para próteses fixas tipo protocolo", image: "/assets/implantes/proc_protocolo.jpg", delay: 0.18 },
    { title: "Extrações de dentes inclusos, semi-inclusos ou impactados", image: "/assets/implantes/proc_extracao.jpg", delay: 0.24 }
];

export const ImplantProcedures = () => {
    return (
        <EditableSectionColors sectionId="implantProc" colors={PROC_COLORS}>
            {(colors) => (
                <section className="py-14 md:py-24 relative overflow-hidden" style={{ backgroundColor: colors.bg }}>
                    {/* Background image overlay */}
                    <div className="absolute inset-0 z-0">
                        <img src="/assets/real-photos/office_bg_cta.jpg" alt="" className="absolute inset-0 w-full h-full object-cover opacity-[0.06]" loading="lazy" />
                    </div>

                    <div className="absolute top-8 left-1/2 -translate-x-1/2 opacity-15 pointer-events-none z-[1]">
                        <img src={LOGO_PATH} alt="" className="w-14 md:w-20" />
                    </div>

                    <div className="container mx-auto px-4 md:px-6 relative z-10">
                        <EditableElement id="proc_header_el" label="Cabeçalho">
                            <div className="text-center max-w-4xl mx-auto mb-10 md:mb-16 px-4">
                                <h2 className="text-2xl md:text-[30px] font-serif leading-tight italic" style={{ color: colors.title }}>
                                    <EditableText id="proc_header" defaultText="Após avaliação clínica e exames, o tratamento pode envolver diferentes abordagens, como:" />
                                </h2>
                            </div>
                        </EditableElement>

                        <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 md:gap-5">
                            {procedures.map((proc, index) => {
                                const isLastOdd = procedures.length % 2 !== 0 && index === procedures.length - 1;
                                return (
                                    <div key={index} className={isLastOdd ? 'col-span-2 lg:col-span-1' : ''}>
                                    <EditableElement id={`proc_card_${index}_el`} label={proc.title.substring(0, 20)}>
                                        <motion.div
                                            initial={{ opacity: 0, y: 30 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: proc.delay, duration: 0.5 }}
                                            className={`group relative rounded-[1rem] md:rounded-[1.5rem] overflow-hidden shadow-lg ${isLastOdd ? 'aspect-[2/1] md:aspect-[3/5]' : 'aspect-[2/3] md:aspect-[3/5]'}`}
                                        >
                                            <EditableImage
                                                id={`proc_img_${index}`}
                                                defaultSrc={proc.image}
                                                alt={proc.title}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-accent/90 via-accent/40 to-transparent pointer-events-none" />
                                            <div className="absolute inset-0 flex items-end justify-center p-4 md:p-6 pointer-events-none">
                                                <h3 className="text-sm md:text-base font-serif font-bold leading-snug text-center select-all" style={{ color: colors.cardTitle }}>
                                                    <EditableText id={`proc_title_${index}`} defaultText={proc.title} />
                                                </h3>
                                            </div>
                                        </motion.div>
                                    </EditableElement>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>
            )}
        </EditableSectionColors>
    );
};
