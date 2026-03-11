import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { EditableElement, EditableText } from '../EditableWrappers';
import { WHATSAPP_URL } from '../../lib/constants';

export const FinalCTAV2 = () => {
    return (
        <section className="py-14 md:py-20 relative overflow-hidden bg-primary">
            <div className="absolute inset-0 z-0">
                <img src="/assets/real-photos/office_bg_cta.jpg" alt="" className="absolute inset-0 w-full h-full object-cover opacity-[0.08]" loading="lazy" />
            </div>
            <div className="absolute inset-0 z-[1]">
                <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[150px]" />
                <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-white/5 rounded-full blur-[120px]" />
            </div>
            <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl mx-auto flex flex-col items-center">
                    <EditableElement id="finalcta_title_el" label="Título">
                        <h2 className="text-2xl md:text-[30px] font-serif text-white mb-6 md:mb-8 leading-tight">
                            <EditableText id="finalcta_title" defaultText="Tenha agora o cuidado odontológico que você merece" />
                        </h2>
                    </EditableElement>
                    <EditableElement id="finalcta_desc_el" label="Descrição">
                        <EditableText id="finalcta_desc" as="p" defaultText="Nossa equipe está pronta para te atender." className="text-white/80 text-base md:text-xl mb-8 md:mb-12 font-light max-w-2xl mx-auto block" />
                    </EditableElement>
                    <EditableElement id="finalcta_btn_el" label="Botão CTA">
                        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border-2 border-white text-white text-sm md:text-base px-8 md:px-10 py-3 md:py-4 rounded-full font-semibold hover:bg-white/10 transition-all">
                            <MessageCircle className="w-4 h-4 md:w-5 md:h-5 text-white" strokeWidth={2.5} />
                            <EditableText id="finalcta_btn_text" defaultText="Fale com um atendente" />
                        </a>
                    </EditableElement>
                </motion.div>
            </div>
        </section>
    );
};
