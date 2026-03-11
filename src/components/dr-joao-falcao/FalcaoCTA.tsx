import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, Instagram, MapPin } from 'lucide-react';
import { EditableText, EditableElement } from '../EditableWrappers';

export const FalcaoCTA = () => {
  return (
    <section className="relative py-20 md:py-28 bg-[#0A0A0A] overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C9A96E]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="flex items-center gap-3 justify-center mb-6">
            <span className="inline-block w-8 h-[1px] bg-[#C9A96E]" />
            <span className="text-[11px] font-medium tracking-[0.3em] uppercase text-[#C9A96E]">
              <EditableText id="falcao_cta_tag" defaultText="O Próximo Passo" />
            </span>
            <span className="inline-block w-8 h-[1px] bg-[#C9A96E]" />
          </div>

          <h2 className="text-2xl md:text-[36px] font-light leading-[1.15] mb-8 text-white">
            <EditableText id="falcao_cta_title_1" defaultText="O próximo passo está " />
            <span className="font-serif italic text-[#C9A96E]">
              <EditableText id="falcao_cta_title_accent" defaultText="em suas mãos." />
            </span>
          </h2>

          <EditableText
            id="falcao_cta_text_1"
            as="p"
            className="text-white/50 text-sm md:text-base max-w-xl mx-auto mb-4 font-light leading-relaxed block"
            defaultText="Muitas mulheres passam anos imaginando como seria se sentir realmente confiantes com o próprio corpo."
          />
          <EditableText
            id="falcao_cta_text_2"
            as="p"
            className="text-white/50 text-sm md:text-base max-w-xl mx-auto mb-4 font-light leading-relaxed block"
            defaultText="Mas essa transformação começa com uma simples decisão:"
          />
          <p className="text-white/70 text-base md:text-lg max-w-xl mx-auto mb-10 font-serif italic">
            <EditableText id="falcao_cta_text_accent" defaultText="descobrir o que é possível para você." />
          </p>

          <EditableText
            id="falcao_cta_text_3"
            as="p"
            className="text-white/40 text-sm max-w-lg mx-auto mb-10 font-light leading-relaxed block"
            defaultText="Agende sua avaliação e converse diretamente com o Dr. João Falcão para entender como funciona a remodelação glútea."
          />

          <EditableElement id="falcao_cta_btn_el" label="Botão Principal">
            <a
              href="https://wa.me/5575999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#C9A96E] via-[#E8D5A3] to-[#C9A96E] text-[#0A0A0A] font-semibold px-8 py-4 rounded-full hover:shadow-lg hover:shadow-[#C9A96E]/25 transition-all text-sm uppercase tracking-wider"
            >
              <MessageCircle className="w-4 h-4" />
              <EditableText id="falcao_cta_btn_text" defaultText="Agendar Minha Avaliação" />
              <ArrowRight className="w-4 h-4" />
            </a>
          </EditableElement>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-white/30 text-xs mt-16">
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#C9A96E]" />
              <span>
                <EditableText id="falcao_cta_location" defaultText="Feira de Santana, BA" />
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Instagram className="w-3.5 h-3.5 text-[#C9A96E]" />
              <a href="https://www.instagram.com/drjoao.falcao" target="_blank" rel="noopener noreferrer" className="hover:text-white/60 transition">
                <EditableText id="falcao_cta_ig" defaultText="@drjoao.falcao" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
