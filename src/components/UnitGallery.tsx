import React from 'react';
import { motion } from 'framer-motion';
import { EditableText, EditableImage, EditableElement } from './EditableWrappers';

const images = [
    { url: "/assets/real-photos/unit_1.png", title: "Recepção", description: "Ambiente acolhedor e luxuoso para sua chegada." },
    { url: "/assets/real-photos/unit_2.png", title: "Consultório", description: "Tecnologia e conforto em cada detalhe do atendimento." },
    { url: "/assets/real-photos/unit_3.png", title: "Sala de Espera", description: "Conforto premium enquanto preparamos sua transformação." }
];

export const UnitGallery = () => {
    return (
        <section className="py-14 md:py-20 bg-[#FDFCF8]">
            <div className="container mx-auto px-4 md:px-6 text-center">
                <EditableElement id="gallery_header_el" label="Cabeçalho">
                    <div>
                        <EditableText id="gallery_tag" defaultText="Nossa Unidade" className="text-[9px] font-bold tracking-[0.3em] uppercase text-primary/50 mb-3 block" />
                        <h2 className="text-2xl md:text-[30px] font-serif text-black mb-4 md:mb-6 leading-tight">
                            <EditableText id="gallery_title_1" defaultText="Conheça nosso" /> <span className="text-primary italic"><EditableText id="gallery_title_2" defaultText="espaço exclusivo" /></span>
                        </h2>
                        <EditableText
                            id="gallery_desc"
                            as="p"
                            defaultText="Uma infraestrutura de alto padrão projetada para oferecer o máximo conforto e a melhor experiência odontológica em Feira de Santana."
                            className="text-foreground/60 text-xs md:text-sm max-w-xl mx-auto mb-10 md:mb-16 font-light block"
                        />
                    </div>
                </EditableElement>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
                    {images.map((img, index) => (
                        <EditableElement key={index} id={`gallery_card_${index}_el`} label={img.title}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative h-[220px] md:h-[300px] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-xl"
                            >
                                <EditableImage
                                    id={`gallery_img_${index}`}
                                    defaultSrc={img.url}
                                    alt={img.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 text-left">
                                    <h4 className="text-white font-bold text-lg mb-1">
                                        <EditableText id={`gallery_img_${index}_title`} defaultText={img.title} />
                                    </h4>
                                    <EditableText id={`gallery_img_${index}_desc`} defaultText={img.description} className="text-white/70 text-xs block" />
                                </div>
                                <div className="absolute inset-0 border border-white/20 rounded-[2rem] pointer-events-none" />
                            </motion.div>
                        </EditableElement>
                    ))}
                </div>
            </div>
        </section>
    );
};
