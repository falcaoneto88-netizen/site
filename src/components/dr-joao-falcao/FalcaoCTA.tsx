import React from 'react';
import { motion } from 'framer-motion';
import { WhatsAppIcon } from './WhatsAppIcon';
import { EditableText, EditableElement } from '../EditableWrappers';

export const FalcaoCTA = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-br from-[#C9A96E] via-[#D4B87A] to-[#B8954F]">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-[0.06]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, #0A0A0A 1px, transparent 0)',
        backgroundSize: '32px 32px',
      }} />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <h2 className="text-xl md:text-[28px] font-serif uppercase text-[#0A0A0A] mb-6 leading-snug tracking-wide">
            <EditableText id="falcao_cta_title_1" defaultText="Seu corpo merece mais do que promessas. " />
            <span className="italic">
              <EditableText id="falcao_cta_title_accent" defaultText="Merece resultado." />
            </span>
          </h2>

          <EditableText
            id="falcao_cta_text_3"
            as="p"
            className="text-[#0A0A0A]/70 text-sm md:text-base max-w-2xl mx-auto mb-10 font-light leading-relaxed block"
            defaultText="Dezenas de mulheres já transformaram o formato dos glúteos sem cirurgia com o Método Le Contour Premium. Agende sua avaliação e descubra o que é possível para o seu corpo."
          />

          <EditableElement id="falcao_cta_btn_el" label="Botão Principal">
            <a
              href="https://wa.me/351926991096?text=Ol%C3%A1%2C%20vim%20do%20Instagram%20e%20gostaria%20de%20agendar%20uma%20consulta%20com%20o%20Dr.%20Jo%C3%A3o%20Falc%C3%A3o."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-[#0A0A0A] hover:bg-[#1a1a1a] text-[#C9A96E] font-semibold px-10 py-4 rounded-full transition-all text-sm shadow-lg shadow-black/20"
            >
              <WhatsAppIcon className="w-5 h-5" />
              <EditableText id="falcao_cta_btn_text" defaultText="Quero agendar minha avaliação" />
            </a>
          </EditableElement>
        </motion.div>
      </div>
    </section>
  );
};
