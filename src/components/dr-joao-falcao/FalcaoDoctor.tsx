import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardList, Building2, HeartHandshake, Brain, Instagram } from 'lucide-react';
import { EditableText, EditableImage, EditableElement } from '../EditableWrappers';

const differentials = [
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
  {
    id: 'falcao_diff_3',
    icon: HeartHandshake,
    title: 'Acompanhamento no pós-procedimento',
    description: 'Após o procedimento, você recebe orientações e acompanhamento contínuo para garantir uma recuperação adequada.',
  },
  {
    id: 'falcao_diff_4',
    icon: Brain,
    title: 'Suporte psicológico',
    description: 'Acompanhamento psicológico antes e depois do procedimento, para que cada paciente se sinta segura e preparada para essa transformação.',
  },
];

export const FalcaoDoctor = () => {
  return (
    <section className="relative py-20 md:py-28 bg-[#0F0F0F] overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C9A96E]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-6">
        {/* Header — Centered */}
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
          <h2 className="text-2xl md:text-[30px] font-light leading-[1.15] mb-6 text-white">
            <EditableText id="falcao_diff_title_1" defaultText="O Método do " />
            <span className="font-serif italic text-[#C9A96E]">
              <EditableText id="falcao_diff_title_accent" defaultText="Dr. João Falcão" />
            </span>
          </h2>
          <EditableText
            id="falcao_diff_desc"
            as="p"
            className="text-sm md:text-base text-white/50 leading-relaxed font-light max-w-2xl mx-auto block"
            defaultText="A experiência com o Dr. João Falcão vai muito além do procedimento. Ela envolve cuidado, planejamento e acompanhamento real da paciente."
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-stretch">
          {/* Differentials Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {differentials.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 hover:border-[#C9A96E]/20 transition-all group"
              >
                <div className="w-11 h-11 rounded-xl bg-[#C9A96E]/10 flex items-center justify-center mb-4 group-hover:bg-[#C9A96E]/20 transition">
                  <item.icon className="w-5 h-5 text-[#C9A96E]" />
                </div>
                <h3 className="text-white font-semibold text-sm mb-2">
                  <EditableText id={`${item.id}_title`} defaultText={item.title} />
                </h3>
                <p className="text-white/40 text-xs leading-relaxed">
                  <EditableText id={`${item.id}_desc`} defaultText={item.description} />
                </p>
              </motion.div>
            ))}
          </div>

          {/* Doctor Image + Quote — stretches to match cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex flex-col"
          >
            <div className="relative rounded-3xl overflow-hidden flex-1 min-h-[300px]">
              <EditableImage
                id="falcao_doctor_img"
                defaultSrc="/assets/dr-joao-falcao/dr_joao_gray.jpg"
                alt="Dr. João Falcão"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0F0F0F] to-transparent" />
            </div>

            {/* Quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="bg-[#0A0A0A] border border-[#C9A96E]/20 rounded-2xl px-6 py-5 text-center mt-5"
            >
              <p className="text-white/70 text-sm font-serif italic leading-relaxed mb-2">
                <EditableText id="falcao_doctor_quote" defaultText='"Eu gostaria que você se enxergasse com os meus olhos."' />
              </p>
              <p className="text-[#C9A96E] text-xs font-medium">
                — <EditableText id="falcao_doctor_name" defaultText="Dr. João Falcão" />
              </p>
              <EditableElement id="falcao_doctor_ig_el" label="Link Instagram">
                <a
                  href="https://www.instagram.com/drjoao.falcao"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#C9A96E] hover:text-[#D4B87A] transition text-xs mt-3"
                >
                  <Instagram className="w-3.5 h-3.5" />
                  @drjoao.falcao
                </a>
              </EditableElement>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
