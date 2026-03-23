import React from 'react';
import { motion } from 'framer-motion';
import { EditableText, EditableImage } from '../EditableWrappers';

const extras = [
  { id: 'marcio_extra_1', img: '/assets/marcio-freitas/section_ref_07.png', text: 'Clínica de imagem própria para tomografias e radiografias' },
  { id: 'marcio_extra_2', img: '/assets/marcio-freitas/section_ref_09.png', text: 'Parceria com os melhores hotéis para estadia durante a recuperação' },
  { id: 'marcio_extra_3', img: '/assets/marcio-freitas/section_ref_10.png', text: 'Acompanhamento psicológico antes e após a cirurgia' },
  { id: 'marcio_extra_4', img: '/assets/marcio-freitas/section_ref_11.png', text: 'Transfer exclusivo com veículos e táxi aéreo' },
];

export const MarcioExtras = () => {
  return (
    <section className="relative py-20 md:py-28 bg-[#0d0a06] overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <div className="flex items-center gap-3 justify-center mb-6">
            <span className="inline-block w-8 h-[1px] bg-[#C9A96E]" />
            <span className="text-[11px] font-medium tracking-[0.3em] uppercase text-[#C9A96E]">
              <EditableText id="marcio_extras_tag" defaultText="Experiência Completa" />
            </span>
            <span className="inline-block w-8 h-[1px] bg-[#C9A96E]" />
          </div>
          <h2 className="text-2xl md:text-[36px] font-light leading-[1.15] text-white">
            <EditableText id="marcio_extras_title1" defaultText="Além de " />
            <span className="italic text-[#C9A96E]">
              <EditableText id="marcio_extras_title2" defaultText="tudo isso..." />
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {extras.map((item, i) => (
            <motion.div key={item.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className="relative overflow-hidden group border border-white/[0.06] hover:border-[#C9A96E]/20 transition-all" style={{ borderRadius: '10px' }}>
              <EditableImage id={`${item.id}_img`} defaultSrc={item.img} alt={item.text} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
