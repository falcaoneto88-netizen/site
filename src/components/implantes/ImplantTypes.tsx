import React from 'react';
import { motion } from 'framer-motion';
import { EditableText, EditableImage } from '../EditableWrappers';

export const ImplantTypes = () => {
    const types = [
        {
            title: "Abordagem Personalizada",
            desc: "Após avaliação clínica e exames, o tratamento pode envolver diferentes abordagens adaptadas ao seu caso.",
            delay: 0
        },
        {
            title: "Recuperação de Dentes",
            desc: "Recuperar muito mais do que um dente: melhora na mastigação e segurança ao falar e sorrir.",
            delay: 0.1
        },
        {
            title: "Solução Duradoura",
            desc: "Quando bem planejado, o implante se integra de forma natural ao sorriso oferecendo longevidade.",
            delay: 0.2
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-2xl md:text-[30px] font-serif mb-6 text-foreground">
                        <EditableText id="types_title_1" defaultText="Abordagens de " />
                        <span className="text-primary italic"><EditableText id="types_title_2" defaultText="Tratamento" /></span>
                    </h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="rounded-[2.5rem] overflow-hidden shadow-2xl border border-primary/5"
                    >
                        <EditableImage
                            id="types_illustration"
                            defaultSrc="/assets/implantes/implants_comparison.png"
                            alt="Comparação de Implantes"
                            className="w-full h-auto"
                        />
                    </motion.div>

                    <div className="space-y-8">
                        {types.map((type, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: type.delay }}
                                className="group glass p-8 rounded-3xl border border-white/40 hover:border-primary/20 transition-all duration-300"
                            >
                                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                                    <EditableText id={`type_title_${index}`} defaultText={type.title} />
                                </h3>
                                <EditableText
                                    id={`type_desc_${index}`}
                                    as="p"
                                    defaultText={type.desc}
                                    className="text-foreground/60 text-sm leading-relaxed block"
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
