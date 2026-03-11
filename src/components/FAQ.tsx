import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqData = [
    {
        question: "Quais especialidades a Oral Unic atende?",
        answer: "Atendemos clínica geral, ortodontia, implantodontia, prótese, periodontia, endodontia, dentística e harmonização orofacial."
    },
    {
        question: "Preciso de encaminhamento para agendar?",
        answer: "Não. Você pode agendar sua avaliação diretamente pelo nosso WhatsApp ou telefone."
    },
    {
        question: "A clínica aceita convênios?",
        answer: "Trabalhamos com sistema de reembolso e condições facilitadas para tratamentos particulares de alto padrão."
    },
    {
        question: "Qual o horário de funcionamento?",
        answer: "Funcionamos de Segunda a Sexta, das 08h às 18h."
    },
    {
        question: "Como chego à clínica?",
        answer: "Estamos localizados na R. Osvaldo Cruz, 295 - Centro, Feira de Santana - BA."
    }
];

import { EditableText } from './EditableWrappers';

export const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-6 max-w-2xl">
                <div className="text-center mb-12">
                    <h2 className="text-2xl md:text-[30px] font-serif text-foreground leading-tight">
                        <EditableText id="faq_title" defaultText="Vamos" /> <span className="text-primary italic"><EditableText id="faq_title_italic" defaultText="conversar?" /></span>
                    </h2>
                </div>

                <div className="divide-y divide-primary/5">
                    {faqData.map((item, index) => (
                        <div key={index} className="overflow-hidden">
                            <button
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                className="w-full flex items-center justify-between py-4 px-4 text-left transition-all duration-300 rounded-[10px] hover:bg-primary/5 group"
                                style={{
                                    backgroundImage: 'linear-gradient(-45deg, transparent, rgba(112, 45, 98, 0.02), transparent, rgba(112, 45, 98, 0.05))',
                                    backgroundSize: '200% 200%',
                                    animation: 'gradient-move 5s ease infinite'
                                }}
                            >
                                <div className="flex items-center gap-4">
                                    <span className={`text-[10px] font-mono transition-colors ${activeIndex === index ? 'text-primary' : 'text-foreground/20'}`}>0{index + 1}</span>
                                    <span className={`text-sm font-medium transition-colors ${activeIndex === index ? 'text-primary' : 'text-foreground'}`}>
                                        <EditableText id={`faq_${index}_q`} defaultText={item.question} />
                                    </span>
                                </div>
                                {activeIndex === index ? <Minus className="w-4 h-4 text-primary" strokeWidth={2.5} /> : <Plus className="w-4 h-4 text-foreground/20" strokeWidth={2.5} />}
                            </button>

                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="pb-6 pr-8 text-foreground/60 leading-relaxed text-[13px]">
                                            <EditableText id={`faq_${index}_a`} defaultText={item.answer} />
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section >
    );
};
