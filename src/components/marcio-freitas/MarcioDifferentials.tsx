import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Building2, HeartHandshake, Stethoscope, MessageCircle } from 'lucide-react';
import { EditableText } from '../EditableWrappers';

const allCards = [
  { id: 'marcio_diff_1', icon: Shield, title: 'Dupla Formação', description: 'Medicina e Odontologia agregando conhecimentos da cirurgia plástica facial e da cirurgia bucomaxilofacial' },
  { id: 'marcio_diff_2', icon: Building2, title: 'Centro Cirúrgico Próprio', description: 'Qualificada equipe de anestesia e enfermagem com monitorização cardiorrespiratória' },
  { id: 'marcio_diff_3', icon: HeartHandshake, title: 'Acompanhamento Vitalício', description: 'Sem limite de revisões — estamos com você antes, durante e depois do procedimento' },
  { id: 'marcio_diff_4', icon: Stethoscope, title: 'Segurança Total', description: 'Todos os procedimentos realizados com monitorização e fundamentação científica' },
  { id: 'marcio_diff_5', icon: MessageCircle, title: 'Concierge 24h', description: 'Grupo de WhatsApp personalizado com toda a equipe para assistência em tempo real' },
];

export const MarcioDifferentials = () => {
  return (
    <section className="relative py-20 md:py-28 bg-[#0d0a06] overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C9A96E]/[0.04] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 text-center">
          <div className="flex items-center gap-3 justify-center mb-6">
            <span className="inline-block w-8 h-[1px] bg-[#C9A96E]" />
            <span className="text-[11px] font-medium tracking-[0.3em] uppercase text-[#C9A96E]">
              <EditableText id="marcio_diff_tag" defaultText="O Diferencial" />
            </span>
            <span className="inline-block w-8 h-[1px] bg-[#C9A96E]" />
          </div>
          <h2 className="text-2xl md:text-[36px] font-light leading-[1.15] mb-6 text-white">
            <EditableText id="marcio_diff_title1" defaultText="Nossos " />
            <span className="italic text-[#C9A96E]">
              <EditableText id="marcio_diff_title2" defaultText="Diferenciais." />
            </span>
          </h2>
          <EditableText id="marcio_diff_desc" as="p" className="text-sm md:text-base text-white/60 leading-relaxed font-light max-w-2xl mx-auto block"
            defaultText="Qualidade em todos os nossos procedimentos com mais de 10 mil cirurgias realizadas e mais de 20 anos de atuação." />
        </motion.div>

        {/* Items — open layout, no box borders */}
        <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-5 md:gap-8">
          {allCards.map((item, i) => (
            <motion.div key={item.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className="flex flex-row md:flex-col items-start md:items-center md:text-center gap-5 md:gap-0 group">
              <div className="w-14 h-14 rounded-2xl bg-[#C9A96E]/10 flex items-center justify-center flex-shrink-0 md:mb-5 group-hover:bg-[#C9A96E]/20 transition-all duration-500">
                <item.icon className="w-6 h-6 text-[#C9A96E]" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-base mb-2">
                  <EditableText id={`${item.id}_title`} defaultText={item.title} />
                </h3>
                <p className="text-white/45 text-sm leading-relaxed">
                  <EditableText id={`${item.id}_desc`} defaultText={item.description} />
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
