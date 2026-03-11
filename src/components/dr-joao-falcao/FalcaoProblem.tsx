import React from 'react';
import { motion } from 'framer-motion';
import { Check, Diamond } from 'lucide-react';
import { EditableText, EditableElement } from '../EditableWrappers';

const problems = [
  { id: 'falcao_prob_1', title: 'Glúteos sem projeção', desc: 'Falta de volume e contorno desejado' },
  { id: 'falcao_prob_2', title: 'Formato pouco definido', desc: 'Silhueta sem harmonia natural' },
  { id: 'falcao_prob_3', title: 'Perda de volume', desc: 'Alterações com o passar do tempo' },
  { id: 'falcao_prob_4', title: 'Gordura localizada', desc: 'Curvas escondidas e desproporcionais' },
];

const factors = [
  { id: 'falcao_factor_1', text: 'Genética' },
  { id: 'falcao_factor_2', text: 'Distribuição de gordura' },
  { id: 'falcao_factor_3', text: 'Estrutura corporal' },
  { id: 'falcao_factor_4', text: 'Alterações naturais do tempo' },
];

export const FalcaoProblem = () => {
  return (
    <section className="relative py-24 md:py-32 bg-[#0F0F0F] overflow-hidden">
      {/* Decorative diamond background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-[10%] w-px h-32 bg-gradient-to-b from-transparent via-[#C9A96E]/10 to-transparent" />
        <div className="absolute top-40 right-[15%] w-px h-24 bg-gradient-to-b from-transparent via-[#C9A96E]/8 to-transparent" />
        <div className="absolute bottom-20 left-[20%] w-px h-20 bg-gradient-to-b from-transparent via-[#C9A96E]/6 to-transparent" />
        <div className="absolute top-1/2 right-[8%]">
          <Diamond className="w-4 h-4 text-[#C9A96E]/[0.06] rotate-45" />
        </div>
        <div className="absolute top-[20%] left-[5%]">
          <Diamond className="w-3 h-3 text-[#C9A96E]/[0.05] rotate-12" />
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center gap-3 justify-center mb-8">
            <span className="inline-block w-10 h-[1px] bg-gradient-to-r from-transparent to-[#C9A96E]/60" />
            <Diamond className="w-3 h-3 text-[#C9A96E]/60" />
            <span className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#C9A96E]/80">
              <EditableText id="falcao_prob_tag" defaultText="Você Se Identifica?" />
            </span>
            <Diamond className="w-3 h-3 text-[#C9A96E]/60" />
            <span className="inline-block w-10 h-[1px] bg-gradient-to-l from-transparent to-[#C9A96E]/60" />
          </div>

          <h2 className="text-2xl md:text-[32px] font-light leading-[1.2] text-white">
            <EditableText id="falcao_prob_title_1" defaultText="Um incômodo que muitas mulheres sentem, " />
            <span className="font-serif italic text-[#C9A96E]">
              <EditableText id="falcao_prob_title_accent" defaultText="mas poucas falam." />
            </span>
          </h2>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left — Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            <EditableText
              id="falcao_prob_text_1"
              as="p"
              className="text-sm md:text-base text-white/50 leading-relaxed font-light block"
              defaultText="Talvez você já tenha passado por isso."
            />
            <EditableText
              id="falcao_prob_text_2"
              as="p"
              className="text-sm md:text-base text-white/50 leading-relaxed font-light block"
              defaultText="Experimentar uma roupa e pensar:"
            />

            {/* Quote block with diamond accent */}
            <div className="relative pl-8 py-4">
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#C9A96E]/50 via-[#C9A96E]/20 to-transparent" />
              <div className="absolute left-[-5px] top-4">
                <Diamond className="w-3 h-3 text-[#C9A96E] fill-[#C9A96E]" />
              </div>
              <p className="text-base md:text-lg text-white/75 leading-relaxed font-serif italic">
                <EditableText id="falcao_prob_quote" defaultText='"Não valorizou meu corpo como eu gostaria."' />
              </p>
            </div>

            <EditableText
              id="falcao_prob_text_3"
              as="p"
              className="text-sm md:text-base text-white/50 leading-relaxed font-light block"
              defaultText="Ou evitar certas peças porque sente que o formato do glúteo não acompanha a imagem que você gostaria de ver no espelho."
            />

            <EditableText
              id="falcao_prob_text_4"
              as="p"
              className="text-sm md:text-base text-white/50 leading-relaxed font-light block"
              defaultText="E mesmo com academia, dietas e treinos intensos, o resultado nem sempre aparece na proporção desejada."
            />

            {/* Factors */}
            <div className="pt-4">
              <p className="text-sm text-white/55 leading-relaxed mb-4 font-light">
                <EditableText id="falcao_factors_intro" defaultText="Isso acontece porque o formato do glúteo depende de:" />
              </p>
              <div className="grid grid-cols-2 gap-3">
                {factors.map((factor, index) => (
                  <motion.div
                    key={factor.id}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.07 }}
                    className="flex items-center gap-2.5"
                  >
                    <div className="w-5 h-5 rounded-full bg-[#C9A96E]/10 border border-[#C9A96E]/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-2.5 h-2.5 text-[#C9A96E]" />
                    </div>
                    <span className="text-white/55 text-sm">
                      <EditableText id={factor.id} defaultText={factor.text} />
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — Problem cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-4"
          >
            <p className="text-sm md:text-base text-white/60 leading-relaxed font-medium mb-6 lg:mb-8 text-center lg:text-left">
              <EditableText id="falcao_probs_intro" defaultText="Muitas mulheres convivem com:" />
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {problems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="group relative bg-white/[0.02] border border-white/[0.06] rounded-2xl px-6 py-5 hover:border-[#C9A96E]/20 hover:bg-[#C9A96E]/[0.03] transition-all duration-500"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg bg-[#C9A96E]/10 border border-[#C9A96E]/15 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-[#C9A96E]/15 transition-colors duration-500">
                      <Diamond className="w-3.5 h-3.5 text-[#C9A96E]/70 group-hover:text-[#C9A96E] transition-colors duration-500" />
                    </div>
                    <div>
                      <h4 className="text-white/80 text-sm font-medium mb-1 group-hover:text-white/90 transition-colors duration-500">
                        <EditableText id={`${item.id}_title`} defaultText={item.title} />
                      </h4>
                      <p className="text-white/35 text-xs font-light leading-relaxed">
                        <EditableText id={`${item.id}_desc`} defaultText={item.desc} />
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom statement */}
            <EditableElement id="falcao_prob_footer_el" label="Destaque de Rodapé">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="relative mt-8 p-6 rounded-2xl bg-gradient-to-br from-[#C9A96E]/[0.06] to-transparent border border-[#C9A96E]/10"
              >
                <Diamond className="w-4 h-4 text-[#C9A96E]/40 absolute top-4 right-4" />
                <p className="text-sm md:text-base text-white/55 leading-relaxed font-light">
                  <EditableText id="falcao_prob_footer_text_1" defaultText="Mas hoje já existem procedimentos capazes de reposicionar volumes e redesenhar o contorno corporal, criando um resultado muito mais " />
                  <span className="text-[#C9A96E] font-medium">
                    <EditableText id="falcao_prob_footer_text_accent" defaultText="harmônico" />
                  </span>
                  <EditableText id="falcao_prob_footer_text_2" defaultText="." />
                </p>
              </motion.div>
            </EditableElement>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
