import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Shield, Zap, Smile, Activity, Heart, FlaskConical, Stethoscope, Play } from 'lucide-react';
import { EditableElement, EditableText, EditableImage } from '../EditableWrappers';

const specialties = [
    { title: "Implantes Dentários", description: "Tratamentos personalizados para a reposição de dentes, focados em devolver a mastigação e confiança.", icon: Shield, image: "/assets/services/implantes.jpg", link: "/implantes" },
    { title: "Ortodontia", description: "Correção de dentes desalinhados e problemas de mordida com aparelhos e alinhadores invisíveis.", icon: Zap, image: "/assets/services/ortodontia.jpg", link: "/ortodontia" },
    { title: "Endodontia", description: "Tratamento de canal com técnica e precisão para alívio da dor e preservação do dente.", icon: Activity, image: "/assets/services/endodontia.jpg", link: "/endodontia" },
    { title: "Próteses Dentárias", description: "Soluções para devolução da função dentária e estética com planejamento individualizado.", icon: Smile, image: "/assets/services/proteses.jpg", link: "/protese-dentaria" },
    { title: "Clínica Geral", description: "Cuidado odontológico completo e preventivo para manter sua saúde bucal em dia.", icon: Stethoscope, image: "/assets/services/clinica_geral.jpg", link: "/clinico-geral" },
    { title: "Periodontia", description: "Tratamentos focados na saúde da gengiva e na preservação da base do seu sorriso.", icon: Heart, image: "/assets/services/periodontia.jpg", link: "/periodontia" },
    { title: "Facetas em Resina", description: "Melhoria estética rápida e natural para transformar a harmonia do seu sorriso.", icon: Sparkles, image: "/assets/services/facetas.jpg", link: "/facetas-resina" },
    { title: "Harmonização Orofacial", description: "Procedimentos que buscam o equilíbrio facial e realçam sua beleza natural.", icon: FlaskConical, image: "/assets/services/harmonizacao.jpg", link: "/harmonizacao" }
];

export const ServicesV2 = () => {
    return (
        <section id="services" className="py-14 md:py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <EditableElement id="services_header_el" label="Cabeçalho">
                    <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
                        <EditableText id="services_tag" defaultText="Nossas Especialidades" className="text-[9px] md:text-[10px] font-bold tracking-[0.4em] uppercase text-muted-foreground mb-3 md:mb-4 block" />
                        <h2 className="text-2xl md:text-[30px] font-serif mb-4 md:mb-6 text-black leading-tight">
                            <EditableText id="services_title_1" defaultText="Especialidades" /> <span className="text-primary italic"><EditableText id="services_title_2" defaultText="Exclusivas" /></span>
                        </h2>
                        <EditableText
                            id="services_desc"
                            as="p"
                            defaultText="Combinamos técnicas minimamente invasivas com materiais de alto padrão para entregar resultados previsíveis e extraordinários."
                            className="text-muted-foreground text-sm md:text-base block"
                        />
                    </div>
                </EditableElement>

                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
                    {specialties.map((item, index) => (
                        <EditableElement key={index} id={`service_card_${index}_el`} label={item.title}>
                            <motion.a
                                href={item.link}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.06, duration: 0.5 }}
                                className="group relative block aspect-[3/4] rounded-[1rem] md:rounded-[1.5rem] overflow-hidden shadow-lg cursor-pointer"
                            >
                                <EditableImage
                                    id={`service_${index}_img`}
                                    defaultSrc={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-accent/80 via-accent/20 to-transparent pointer-events-none" />

                                <div className="absolute bottom-0 left-0 right-0 p-3 md:p-5 flex items-end justify-between pointer-events-none">
                                    <h3 className="text-sm md:text-xl lg:text-2xl font-serif text-primary font-bold leading-tight max-w-[70%]">
                                        <EditableText id={`service_${index}_title`} defaultText={item.title} />
                                    </h3>
                                    <div className="flex-shrink-0 w-8 h-8 md:w-12 md:h-12 bg-primary rounded-lg md:rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                        <Play className="w-3 h-3 md:w-5 md:h-5 text-accent fill-accent ml-0.5" />
                                    </div>
                                </div>
                            </motion.a>
                        </EditableElement>
                    ))}
                </div>
            </div>
        </section>
    );
};