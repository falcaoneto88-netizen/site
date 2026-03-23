import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardList, Building2, HeartHandshake, Brain } from 'lucide-react';
import { EditableText, EditableImage } from '../EditableWrappers';

const leftCards = [
  {
    id: 'falcao_diff_1',
    icon: ClipboardList,
    title: 'Planejamento detalhado',
    description: 'Cada paciente passa por uma análise completa do corpo para entender proporções, objetivos e expectativas.',
  },
  {
    id: 'falcao_diff_2',
    icon: Building2,
    title: 'Estrutura própria para procedimento',
    description: 'O atendimento acontece em sala de procedimento preparada, garantindo mais segurança e conforto durante todo o processo.',
  },
];

const rightCards = [
  {
    id: 'falcao_diff_3',
    icon: HeartHandshake,
    title: 'Acompanhamento no pós',
    description: 'Após o procedimento, você recebe orientações e acompanhamento contínuo para garantir uma recuperação adequada.',
  },
  {
    id: 'falcao_diff_4',
    icon: Brain,
    title: 'Resultados comprovados',
    description: 'Mais de 5.000 procedimentos realizados com resultados naturais, harmoniosos e proporcionais ao corpo de cada paciente.',
  },
];

const DiffCard = ({ item, index, delay }: { item: typeof leftCards[0]; index: number; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 md:px-6 md:py-4 hover:border-[#C9A96E]/20 transition-all group"
  >
    <div className="w-11 h-11 rounded-xl bg-[#C9A96E]/10 flex items-center justify-center mb-4 group-hover:bg-[#C9A96E]/20 transition">
      <item.icon className="w-5 h-5 text-[#C9A96E]" />
    </div>
    <h3 className="text-white font-semibold text-sm mb-2">
      <EditableText id={`${item.id}_title`} defaultText={item.title} />
    </h3>
    <p className="text-white text-xs leading-relaxed">
      <EditableText id={`${item.id}_desc`} defaultText={item.description} />
    </p>
  </motion.div>
);

export const FalcaoDoctor = () => {
  return (
    <section className="relative py-20 md:py-28 bg-[#0F0F0F] overflow-hidden">
      {/* Background image with fades */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <EditableImage
          id="falcao_diff_bg_img"
          defaultSrc="/assets/dr-joao-falcao/bg_remodelacao.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-[0.15]"
        />
        <div className="absolute top-0 left-0 right-0 h-40" style={{ background: 'linear-gradient(to bottom, #0F0F0F, transparent)' }} />
        <div className="absolute bottom-0 left-0 right-0 h-40" style={{ background: 'linear-gradient(to top, #0F0F0F, transparent)' }} />
      </div>

      <div className="max-w-[1600px] mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-14 text-center"
        >
          <div className="flex items-center gap-3 justify-center mb-6">
            <span className="inline-block w-8 h-[1px] bg-[#C9A96E]" />
            <span className="text-[11px] font-medium tracking-[0.3em] uppercase text-[#C9A96E]">
              <EditableText id="falcao_diff_tag" defaultText="O Diferencial" />
            </span>
            <span className="inline-block w-8 h-[1px] bg-[#C9A96E]" />
          </div>
          <h2 className="text-2xl md:text-[36px] font-light leading-[1.15] mb-6 text-white">
            <EditableText id="falcao_diff_title_1" defaultText="O Método " />
            <span className="font-serif italic text-[#C9A96E]">
              <EditableText id="falcao_diff_title_accent" defaultText="Le Contour Premium" />
            </span>
          </h2>
          <EditableText
            id="falcao_diff_desc"
            as="p"
            className="text-sm md:text-lg text-white leading-relaxed font-light max-w-2xl mx-auto block"
            defaultText="Criado pelo Dr. João Falcão, o método Le Contour Premium é referência mundial em remodelação glútea — com mais de +5.000 bumbuns transformados e +1.000 alunos formados em todo o mundo."
          />
        </motion.div>

        {/* Desktop: 3 columns | Mobile: logo top, then cards grid */}
        {/* Mobile layout */}
        <div className="md:hidden">
          <div className="flex justify-center items-center py-6 mb-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="relative"
            >
              <motion.div
                animate={{ scale: [1, 1.15, 1], opacity: [0.25, 0.45, 0.25] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-[-30%] rounded-full bg-[#C9A96E]/15 blur-[60px] pointer-events-none"
              />
              <motion.div
                animate={{ y: [0, -12, 0], rotateY: [0, 6, 0, -6, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                style={{ perspective: '800px', transformStyle: 'preserve-3d' }}
              >
                <img
                  src="/assets/dr-joao-falcao/logo_jf_gold.png"
                  alt="Logo Dr. João Falcão"
                  className="w-36 h-36 object-contain select-none"
                  style={{ filter: 'drop-shadow(0 15px 40px rgba(201,169,110,0.4)) brightness(1.1)' }}
                  draggable={false}
                />
              </motion.div>
            </motion.div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[...leftCards, ...rightCards].map((item, i) => (
              <DiffCard key={item.id} item={item} index={i} delay={i * 0.1} />
            ))}
          </div>
        </div>

        {/* Desktop layout */}
        <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] gap-12 items-center max-w-6xl mx-auto">
          {/* Left cards */}
          <div className="space-y-5 flex flex-col items-end">
            {leftCards.map((item, i) => (
              <DiffCard key={item.id} item={item} index={i} delay={i * 0.1} />
            ))}
          </div>

          {/* Center: floating 3D logo */}
          <div className="flex justify-center items-center py-8 md:py-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="relative"
            >
              {/* Glow */}
              <motion.div
                animate={{ scale: [1, 1.15, 1], opacity: [0.25, 0.45, 0.25] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-[-30%] rounded-full bg-[#C9A96E]/15 blur-[60px] pointer-events-none"
              />

              {/* Float */}
              <motion.div
                animate={{
                  y: [0, -12, 0],
                  rotateY: [0, 6, 0, -6, 0],
                }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                style={{ perspective: '800px', transformStyle: 'preserve-3d' }}
              >
                <img
                  src="/assets/dr-joao-falcao/logo_jf_gold.png"
                  alt="Logo Dr. João Falcão"
                  className="w-40 h-40 md:w-56 md:h-56 object-contain select-none"
                  style={{
                    filter: 'drop-shadow(0 15px 40px rgba(201,169,110,0.4)) drop-shadow(0 4px 12px rgba(201,169,110,0.25)) brightness(1.1)',
                  }}
                  draggable={false}
                />
              </motion.div>
            </motion.div>
          </div>

          {/* Right cards */}
          <div className="space-y-5 flex flex-col items-start">
            {rightCards.map((item, i) => (
              <DiffCard key={item.id} item={item} index={i} delay={0.2 + i * 0.1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
