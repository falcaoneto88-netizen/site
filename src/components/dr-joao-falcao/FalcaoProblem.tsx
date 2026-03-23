import React from 'react';
import { motion } from 'framer-motion';
import { EditableText, EditableElement, EditableImage } from '../EditableWrappers';

const problems = [
  { id: 'falcao_prob_1', title: 'HIP DIPS', desc: 'Depressão natural na lateral do quadril, entre o osso do quadril e o início do glúteo.' },
  { id: 'falcao_prob_2', title: 'VOLUME', desc: 'Quantidade de preenchimento e tamanho do glúteo.' },
  { id: 'falcao_prob_3', title: 'CELULITE', desc: 'Alteração da pele causada pelo acúmulo de gordura e retenção de líquidos.' },
  { id: 'falcao_prob_4', title: 'PROJEÇÃO', desc: 'Quanto o glúteo se destaca para trás no perfil do corpo.' },
  { id: 'falcao_prob_5', title: 'FLACIDEZ', desc: 'Perda de firmeza nos tecidos do glúteo.' },
  { id: 'falcao_prob_6', title: 'DEFINIÇÃO DE CINTURA', desc: 'Transição entre cintura e quadril menos marcada.' },
];

const WHATSAPP_URL = 'https://wa.me/351000000000';

export const FalcaoProblem = () => {
  return (
    <section className="relative bg-[#0F0F0F] overflow-hidden py-16 md:py-24">
      <img
        src="/assets/dr-joao-falcao/bg_remodelacao.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-[0.06]"
      />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C9A96E]/[0.03] rounded-full blur-[200px]" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#C9A96E]/[0.02] rounded-full blur-[150px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Text content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-center lg:sticky lg:top-24"
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="inline-block w-10 h-[1px] bg-[#C9A96E]" />
              <span className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#C9A96E]">
                <EditableText id="falcao_prob_tag" defaultText="Você Se Identifica?" />
              </span>
            </div>

            <h2 className="text-2xl md:text-[36px] font-light leading-[1.12] mb-6 text-white">
              <EditableText id="falcao_prob_title_1" defaultText="Um incômodo que muitas mulheres sentem, " />
              <span className="font-serif italic text-[#C9A96E]">
                <EditableText id="falcao_prob_title_accent" defaultText="mas poucas falam." />
              </span>
            </h2>

            <div className="space-y-3 mb-6">
              <EditableText
                id="falcao_prob_text_1"
                as="p"
                className="text-sm md:text-base text-white/80 leading-relaxed font-light block"
                defaultText="Talvez você já tenha passado por isso. Experimentar uma roupa e pensar:"
              />
              <div className="relative pl-5 py-1.5">
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#C9A96E] via-[#C9A96E]/40 to-transparent" />
                <p className="text-base md:text-lg text-white leading-relaxed font-serif italic">
                  <EditableText id="falcao_prob_quote" defaultText='"Não valorizou meu corpo como eu gostaria."' />
                </p>
              </div>
              <EditableText
                id="falcao_prob_text_3"
                as="p"
                className="text-sm md:text-base text-white/80 leading-relaxed font-light block"
                defaultText="E mesmo com academia, dietas e treinos intensos, o resultado nem sempre aparece na proporção desejada."
              />
            </div>

            <EditableElement id="falcao_prob_footer_el" label="Destaque">
              <div className="relative p-4 rounded-xl bg-white/[0.04] backdrop-blur-md border border-white/[0.08]">
                <p className="text-sm md:text-base text-white leading-relaxed font-light">
                  <EditableText id="falcao_prob_footer_text_1" defaultText="Mas hoje já existem procedimentos capazes de reposicionar volumes e redesenhar o contorno corporal, criando um resultado muito mais " />
                  <span className="text-[#C9A96E] font-medium">
                    <EditableText id="falcao_prob_footer_text_accent" defaultText="harmônico" />
                  </span>
                  <EditableText id="falcao_prob_footer_text_2" defaultText="." />
                </p>
              </div>
            </EditableElement>
          </motion.div>

          {/* Right: 6 cards stacked in 2-col grid */}
          <div className="grid grid-cols-2 gap-3">
            {problems.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.05 + i * 0.06 }}
                className="group bg-white/[0.08] border border-white/[0.12] rounded-lg overflow-hidden hover:border-[#C9A96E]/30 hover:bg-white/[0.12] transition-all duration-500 flex flex-col shadow-lg shadow-black/20"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <EditableImage
                    id={`${item.id}_img`}
                    defaultSrc="/assets/dr-joao-falcao/hero_bg.jpg"
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="px-3 py-2 flex flex-col flex-1">
                  <h4 className="text-[11px] text-white font-semibold mb-0.5 tracking-wide">
                    <EditableText id={`${item.id}_title`} defaultText={item.title} />
                  </h4>
                  <p className="text-[10px] text-white/50 font-light leading-snug mb-2 flex-1">
                    <EditableText id={`${item.id}_desc`} defaultText={item.desc} />
                  </p>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full py-1.5 rounded-md border border-[#C9A96E]/30 text-[#C9A96E] text-[10px] font-medium tracking-wide hover:bg-[#C9A96E]/10 transition-all duration-300"
                  >
                    <EditableText id={`${item.id}_cta`} defaultText="Esse é o meu caso" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
