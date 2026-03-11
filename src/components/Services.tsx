import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Shield, Zap, Smile, Activity, Heart, FlaskConical, Stethoscope } from 'lucide-react';

const specialties = [
    {
        title: "Implantes Dentários",
        description: "Tratamentos personalizados para a reposição de dentes, focados em devolver a mastigação e confiança.",
        icon: Shield,
        image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2000&auto=format&fit=crop"
    },
    {
        title: "Ortodontia",
        description: "Correção de dentes desalinhados e problemas de mordida com aparelhos e alinhadores invisíveis.",
        icon: Zap,
        image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2070&auto=format&fit=crop"
    },
    {
        title: "Endodontia",
        description: "Tratamento de canal com técnica e precisão para alívio da dor e preservação do dente.",
        icon: Activity,
        image: "https://images.unsplash.com/photo-1512138411135-23bc47384a2c?q=80&w=2070&auto=format&fit=crop"
    },
    {
        title: "Próteses Dentárias",
        description: "Soluções para devolução da função dentária e estética com planejamento individualizado.",
        icon: Smile,
        image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=2070&auto=format&fit=crop"
    },
    {
        title: "Clínica Geral",
        description: "Cuidado odontológico completo e preventivo para manter sua saúde bucal em dia.",
        icon: Stethoscope,
        image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop"
    },
    {
        title: "Periodontia",
        description: "Tratamentos focados na saúde da gengiva e na preservação da base do seu sorriso.",
        icon: Heart,
        image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=2070&auto=format&fit=crop"
    },
    {
        title: "Facetas em Resina",
        description: "Melhoria estética rápida e natural para transformar a harmonia do seu sorriso.",
        icon: Sparkles,
        image: "https://images.unsplash.com/photo-1594412090504-ae4cc30e0604?q=80&w=2070&auto=format&fit=crop"
    },
    {
        title: "Harmonização Orofacial",
        description: "Procedimentos que buscam o equilíbrio facial e realçam sua beleza natural.",
        icon: FlaskConical,
        image: "https://images.unsplash.com/photo-1516549221187-df7051fdfc79?q=80&w=2070&auto=format&fit=crop"
    }
];

import { EditableText, EditableImage } from './EditableWrappers';

export const Services = () => {
    return (
        <section id="services" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-2xl md:text-[30px] font-serif mb-6 text-foreground leading-tight">
                        <EditableText id="services_title_1" defaultText="Especialidades" /> <span className="text-primary italic"><EditableText id="services_title_2" defaultText="Exclusivas" /></span>
                    </h2>
                    <EditableText
                        id="services_desc"
                        as="p"
                        defaultText="Combinamos técnicas minimamente invasivas com materiais de alto padrão para entregar resultados previsíveis e extraordinários."
                        className="text-foreground/60 text-base block"
                    />
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {specialties.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative h-[450px] rounded-[2rem] overflow-hidden shadow-xl cursor-pointer"
                            onClick={() => {
                                if (item.title === "Implantes Dentários") window.location.href = "/implantes";
                            }}
                        >
                            <EditableImage
                                id={`service_${index}_img`}
                                defaultSrc={item.image}
                                alt={item.title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />

                            <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                <div className="w-10 h-10 glass-dark rounded-xl flex items-center justify-center mb-4 text-white">
                                    <item.icon className="w-5 h-5" />
                                </div>
                                <h3 className="text-xl font-serif text-white mb-2">
                                    <EditableText id={`service_${index}_title`} defaultText={item.title} />
                                </h3>
                                <EditableText
                                    id={`service_${index}_desc`}
                                    as="p"
                                    defaultText={item.description}
                                    className="text-white/70 text-xs leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 block"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section >
    );
};
