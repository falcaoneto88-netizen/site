import React from 'react';
import { motion } from 'framer-motion';
import { CalendarCheck, User, Users, Stethoscope } from 'lucide-react';
import { EditableText } from '../EditableWrappers';

const steps = [
  { id: 'marcio_step_1', icon: CalendarCheck, title: 'Marcação', desc: 'O primeiro passo é marcar sua avaliação, que pode ser presencial ou on-line. Antes dessa avaliação, enviamos um questionário para que eu possa te conhecer um pouco mais.' },
  { id: 'marcio_step_2', icon: User, title: 'Consulta', desc: 'Momento da sua consulta. Faço uma análise facial completa para verificar proporções e analisar estruturas faciais que podem precisar de intervenções.' },
  { id: 'marcio_step_3', icon: Users, title: 'Orientação', desc: 'Minha psicóloga estará sempre ao seu lado e minha equipe criará um grupo exclusivo no WhatsApp para assistência completa antes, durante e após o procedimento.' },
  { id: 'marcio_step_4', icon: Stethoscope, title: 'A Cirurgia', desc: 'Buscamos resultados estéticos e ganhos funcionais — correções de desvios de septo e redução das carnes esponjosas. Seu nariz ficará mais bonito e funcional.' },
];

export const MarcioSteps = () => {
  return (
    <section className="relative py-20 md:py-28 bg-[#0d0a06] overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <div className="flex items-center gap-3 justify-center mb-6">
            <span className="inline-block w-8 h-[1px] bg-[#C9A96E]" />
            <span className="text-[11px] font-medium tracking-[0.3em] uppercase text-[#C9A96E]">
              <EditableText id="marcio_steps_tag" defaultText="Sua Jornada" />
            </span>
            <span className="inline-block w-8 h-[1px] bg-[#C9A96E]" />
          </div>
          <h2 className="text-2xl md:text-[36px] font-light leading-[1.15] text-white">
            <EditableText id="marcio_steps_t1" defaultText="Passo a Passo " />
            <span className="italic text-[#C9A96E]">
              <EditableText id="marcio_steps_t2" defaultText="ao Procedimento." />
            </span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#C9A96E]/40 via-[#C9A96E]/20 to-transparent" />

          {steps.map((step, i) => {
            const Icon = step.icon;
            const isLeft = i % 2 === 0;
            return (
              <motion.div key={step.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }}
                className={`relative flex items-start gap-6 mb-12 md:mb-16 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Node */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#C9A96E]/10 border border-[#C9A96E]/30 flex items-center justify-center z-10">
                  <Icon className="w-5 h-5 text-[#C9A96E]" />
                </div>

                {/* Content */}
                <div className={`ml-20 md:ml-0 md:w-[calc(50%-40px)] ${isLeft ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left md:ml-auto'}`}>
                  <span className="text-[#C9A96E] text-xs font-medium tracking-wider uppercase mb-2 block">0{i + 1}</span>
                  <h3 className="text-white text-lg font-semibold mb-2">
                    <EditableText id={`${step.id}_title`} defaultText={step.title} />
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed font-light">
                    <EditableText id={`${step.id}_desc`} defaultText={step.desc} />
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
