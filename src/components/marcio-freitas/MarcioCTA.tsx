import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { EditableText, EditableElement } from '../EditableWrappers';
import { MARCIO_WHATSAPP_URL } from './marcioConstants';

export const MarcioCTA = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-br from-[#C9A96E] via-[#D4B87A] to-[#B8954F]">
      {/* Subtle texture */}
      <div className="absolute inset-0 opacity-[0.06]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, #0d0a06 1px, transparent 0)',
        backgroundSize: '32px 32px',
      }} />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col items-center">
          <h2 className="text-xl md:text-[28px] uppercase text-[#0d0a06] mb-6 leading-snug tracking-wide">
            <EditableText id="marcio_cta_title1" defaultText="Estamos Prontos Para Realizar " />
            <span className="italic">
              <EditableText id="marcio_cta_title2" defaultText="O Seu Sonho." />
            </span>
          </h2>

          <EditableText id="marcio_cta_desc" as="p" className="text-[#0d0a06]/70 text-sm md:text-base max-w-2xl mx-auto mb-10 font-light leading-relaxed block"
            defaultText="Agende sua avaliação e converse diretamente com o Dr. Marcio Freitas para entender como a rinoplastia pode transformar a sua vida. Nossa equipe está pronta para te atender." />

          <EditableElement id="marcio_cta_btn_el" label="CTA Final">
            <a href={MARCIO_WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-[#0d0a06] hover:bg-[#1a1a1a] text-[#C9A96E] font-semibold px-10 py-4 rounded-full transition-all text-sm shadow-lg shadow-black/20">
              <MessageCircle className="w-5 h-5" />
              <EditableText id="marcio_cta_btn_text" defaultText="Estou Preparado para a Minha Transformação" />
            </a>
          </EditableElement>
        </motion.div>
      </div>
    </section>
  );
};
