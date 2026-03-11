import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { EditableElement, EditableText } from '../EditableWrappers';
import { WHATSAPP_DISPLAY } from '../../lib/constants';

const faqData = [
    { question: "Quais especialidades a Oral Unic atende?", answer: "Contamos com uma equipe multidisciplinar que atende em clínica geral, ortodontia (aparelhos e alinhadores invisíveis), implantodontia, prótese dentária, periodontia, endodontia (canal), dentística (restaurações estéticas) e harmonização orofacial. Cada caso é avaliado pelo especialista mais indicado." },
    { question: "Preciso de encaminhamento para agendar?", answer: `Não é necessário nenhum encaminhamento. Você pode agendar sua avaliação diretamente pelo nosso WhatsApp ${WHATSAPP_DISPLAY} ou pelo telefone fixo. Nosso atendimento é ágil e a primeira consulta inclui avaliação completa com planejamento personalizado.` },
    { question: "A clínica aceita convênios ou planos dentais?", answer: "Trabalhamos com sistema de reembolso assistido — nossa equipe administrativa ajuda você a solicitar o reembolso junto ao seu plano de saúde. Também oferecemos condições facilitadas de pagamento, com parcelamento em até 12x no cartão para tratamentos particulares." },
    { question: "Qual o horário de funcionamento?", answer: "Funcionamos de Segunda a Sexta-feira, das 08h às 18h. Para emergências ou casos urgentes, entre em contato pelo WhatsApp que direcionaremos o atendimento o mais rápido possível." },
    { question: "Como funciona o tratamento com implantes dentários?", answer: "O processo começa com uma avaliação detalhada utilizando tomografia 3D para planejamento cirúrgico digital. A cirurgia é minimamente invasiva, com anestesia local e sedação opcional. O tempo de osseointegração varia de 3 a 6 meses, e em muitos casos é possível sair da cirurgia já com dentes provisórios (carga imediata)." },
    { question: "A primeira consulta tem custo?", answer: "A avaliação inicial é realizada com todo o cuidado e profissionalismo que você merece. Entre em contato pelo WhatsApp para saber as condições atuais e agendar seu horário sem compromisso." }
];

export const FAQV2 = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    return (
        <section className="py-14 md:py-24 bg-background">
            <div className="container mx-auto px-4 md:px-6 max-w-2xl">
                <EditableElement id="faq_header_el" label="Cabeçalho">
                    <div className="text-center mb-10 md:mb-14">
                        <EditableText id="faq_tag" defaultText="Dúvidas Frequentes" className="text-[9px] md:text-[10px] font-bold tracking-[0.4em] uppercase text-muted-foreground mb-3 md:mb-4 block" />
                        <h2 className="text-2xl md:text-[30px] font-serif text-black leading-tight">
                            <EditableText id="faq_title_1" defaultText="Vamos" /> <span className="text-primary italic"><EditableText id="faq_title_2" defaultText="conversar?" /></span>
                        </h2>
                    </div>
                </EditableElement>

                <div className="divide-y divide-border">
                    {faqData.map((item, index) => (
                        <EditableElement key={index} id={`faq_item_${index}_el`} label={`Pergunta ${index + 1}`}>
                            <div className="overflow-hidden">
                                <button
                                    onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                    className="w-full flex items-center justify-between py-5 px-4 text-left transition-all duration-300 rounded-xl hover:bg-primary/5 group"
                                >
                                    <div className="flex items-center gap-4">
                                        <span className={`text-[10px] font-mono transition-colors ${activeIndex === index ? 'text-primary' : 'text-muted-foreground'}`}>0{index + 1}</span>
                                        <span className={`text-sm font-medium transition-colors ${activeIndex === index ? 'text-primary' : 'text-foreground'}`}>
                                            <EditableText id={`faq_${index}_q`} defaultText={item.question} />
                                        </span>
                                    </div>
                                    {activeIndex === index
                                        ? <Minus className="w-4 h-4 text-primary flex-shrink-0" strokeWidth={2.5} />
                                        : <Plus className="w-4 h-4 text-muted-foreground flex-shrink-0" strokeWidth={2.5} />
                                    }
                                </button>
                                <AnimatePresence>
                                    {activeIndex === index && (
                                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}>
                                            <div className="pb-6 pl-12 pr-8 text-muted-foreground leading-relaxed text-[13px]">
                                                <EditableText id={`faq_${index}_a`} defaultText={item.answer} />
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </EditableElement>
                    ))}
                </div>
            </div>
        </section>
    );
};
