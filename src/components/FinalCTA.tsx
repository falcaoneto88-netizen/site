import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

import { EditableText } from './EditableWrappers';

export const FinalCTA = () => {
    return (
        <section className="py-16 relative overflow-hidden">
            {/* Background with focused lighting */}
            <div className="absolute inset-0 bg-primary shadow-inner" />
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1629909613654-28a306c47b59?q=80&w=2070')] opacity-10 bg-center bg-cover mix-blend-overlay" />

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto flex flex-col items-center"
                >
                    <h2 className="text-2xl md:text-[30px] font-serif text-white mb-8 leading-tight">
                        <EditableText id="final_cta_title" defaultText="Tenha agora o cuidado odontológico que você merece" />
                    </h2>
                    <EditableText
                        id="final_cta_desc"
                        as="p"
                        defaultText="Nossa equipe está pronta para te atender."
                        className="text-white/80 text-xl mb-12 font-light max-w-2xl mx-auto block"
                    />

                    <button className="btn-white !text-lg !px-12 !py-5 mx-auto">
                        <MessageCircle className="w-[1.2em] h-[1.2em]" strokeWidth={2.5} />
                        <EditableText id="final_cta_button" defaultText="Fale com um atendente" />
                    </button>
                </motion.div>
            </div>
        </section>
    );
};
