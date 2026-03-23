import React from 'react';
import { motion } from 'framer-motion';
import { EditableText, EditableImage } from '../EditableWrappers';

const specializations = [
  'Otorrinolaringologia e Cirurgia Cérvico Facial',
  'Cirurgia Plástica da Face (Rinoplastia, Lifting Facial, Blefaroplastia, Otoplastia)',
  'Cirurgias Funcionais do Nariz (desvios de septo, tratamento cirúrgico das sinusites)',
  'Harmonização Facial (Toxina Botulínica, Ácido Hialurônico, Bioestímulo de Colágeno)',
  'Cirurgia Bucomaxilofacial (Cirurgia Ortognática, Mentoplastia, Bichectomia)',
  'Cirurgia Avançada de Implantes Dentários',
  'Cirurgia da ATM',
];

const formation = [
  'Universidade Estadual de Feira de Santana (UEFS) - Cirurgião-Dentista',
  'Escola Bahiana de Medicina e Saúde Pública - Médico',
  'Residência Médica em Otorrinolaringologia e Cirurgia Cérvico Facial',
  'Pós-Graduação em Cirurgia Bucomaxilofacial',
  'Membro da Associação Brasileira de Otorrinolaringologia',
  'Membro da Academia Brasileira de Cirurgia Bucomaxilofacial',
  'Participante dos maiores congressos de Rinoplastia e Cirurgia Estética Facial',
];

export const MarcioDoctor = () => {
  return (
    <section className="relative overflow-hidden bg-[#0d0a06]">
      {/* ===== MOBILE ===== */}
      <div className="md:hidden flex flex-col">
        <div className="relative w-full aspect-square overflow-hidden">
          <motion.div initial={{ opacity: 0, scale: 1.05 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1.2 }} className="w-full h-full">
            <EditableImage id="marcio_doctor_img_mobile" defaultSrc="/assets/marcio-freitas/section_ref_04.png" alt="Dr. Marcio Freitas" className="w-full h-full object-cover" />
          </motion.div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0d0a06] to-transparent z-20 pointer-events-none" />
        </div>

        <div className="px-6 pt-6 pb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col items-center text-center">
            <h2 className="text-2xl font-light leading-[1.15] mb-8 text-white">
              <EditableText id="marcio_doctor_hello" defaultText="Prazer, " />
              <span className="font-light tracking-wide text-[#C9A96E]">
                <EditableText id="marcio_doctor_name_accent" defaultText="Dr. Marcio Freitas" />
              </span>
            </h2>

            <EditableText id="marcio_doctor_bio1" as="p" className="text-sm text-white leading-relaxed mb-6 font-light block"
              defaultText="Médico e Cirurgião Dentista com mais de 20 anos de experiência, atuando nas áreas de Otorrinolaringologia, Cirurgia Cérvico Facial e Cirurgia Bucomaxilofacial. Formado pela Universidade Estadual de Feira de Santana e pela Escola Bahiana de Medicina e Saúde Pública." />

            <div className="my-6 border-l-2 border-[#C9A96E] pl-5 text-left">
              <p className="text-sm text-white leading-relaxed font-light">
                <EditableText id="marcio_doctor_quote" defaultText="Com mais de 10 mil cirurgias realizadas, minha missão é entregar o melhor resultado possível para cada paciente, com segurança, ciência e comprometimento." />
              </p>
            </div>

            <p className="text-sm text-white leading-relaxed font-light">
              <EditableText id="marcio_doctor_teach" defaultText="Participante frequente dos maiores cursos e congressos do mundo em Rinoplastia e Cirurgia Estética Facial, sempre buscando aprimoramento e excelência." />
            </p>
          </motion.div>
        </div>
      </div>

      {/* ===== DESKTOP — IMAGE LEFT, CONTENT RIGHT ===== */}
      <div className="hidden md:flex items-center relative min-h-[70vh] py-20 md:py-28">
        <div className="absolute inset-0 z-0">
          <motion.div initial={{ opacity: 0, scale: 1.05 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1.2 }} className="relative w-full h-full">
            <div className="absolute left-0 top-0 bottom-0 w-[55%] lg:w-[50%] overflow-hidden">
              <EditableImage id="marcio_doctor_img_desktop" defaultSrc="/assets/marcio-freitas/section_ref_04.png" alt="Dr. Marcio Freitas" className="absolute inset-0 w-full h-full object-cover object-[30%_center]" />
              <div className="absolute inset-y-0 right-0 w-[35%] z-10 pointer-events-none" style={{ background: 'linear-gradient(to left, #0d0a06, #0d0a0680, transparent)' }} />
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-32 z-20 pointer-events-none" style={{ background: 'linear-gradient(to top, #0d0a06, transparent)' }} />
          </motion.div>
        </div>

        <div className="max-w-[1600px] mx-auto w-full px-6 pr-[5%] xl:pr-[8%] relative z-30 flex justify-end">
          <div className="max-w-lg lg:max-w-xl">
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <h2 className="text-2xl md:text-[36px] font-light leading-[1.15] mb-8 text-white">
                <EditableText id="marcio_doctor_hello_desktop" defaultText="Prazer, " />
                <span className="font-light tracking-wide text-[#C9A96E]">
                  <EditableText id="marcio_doctor_name_desktop" defaultText="Dr. Marcio Freitas" />
                </span>
              </h2>

              <EditableText id="marcio_doctor_bio1_desktop" as="p" className="text-sm md:text-lg text-white leading-relaxed mb-6 font-light block"
                defaultText="Médico e Cirurgião Dentista com mais de 20 anos de experiência, atuando nas áreas de Otorrinolaringologia, Cirurgia Cérvico Facial e Cirurgia Bucomaxilofacial." />

              <div className="my-8 border-l-2 border-[#C9A96E] pl-5">
                <p className="text-sm md:text-lg text-white leading-relaxed font-light">
                  <EditableText id="marcio_doctor_quote_desktop" defaultText="Com mais de 10 mil cirurgias realizadas, minha missão é entregar o melhor resultado possível para cada paciente, com segurança, ciência e comprometimento." />
                </p>
              </div>

              <p className="text-sm md:text-lg text-white leading-relaxed font-light">
                <EditableText id="marcio_doctor_teach_desktop" defaultText="Formado pela Universidade Estadual de Feira de Santana e pela Escola Bahiana de Medicina e Saúde Pública, com Residência Médica em Otorrinolaringologia e Pós-Graduação em Cirurgia Bucomaxilofacial." />
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Marquee credential strips */}
      <div className="pb-16 md:pb-24 space-y-4 overflow-hidden">
        {/* Strip 1 — Especializações (left to right) */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0d0a06] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0d0a06] to-transparent z-10 pointer-events-none" />
          <div className="flex animate-marquee-scroll whitespace-nowrap">
            {[...specializations, ...specializations, ...specializations].map((item, i) => (
              <span key={i} className="inline-flex items-center gap-3 px-6 py-3 mx-2 rounded-full border border-white/[0.08] bg-white/[0.03] text-white/70 text-sm whitespace-nowrap flex-shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A96E] flex-shrink-0" />
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Strip 2 — Formação (right to left) */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0d0a06] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0d0a06] to-transparent z-10 pointer-events-none" />
          <div className="flex whitespace-nowrap" style={{ animation: 'marquee-scroll 35s linear infinite reverse' }}>
            {[...formation, ...formation, ...formation].map((item, i) => (
              <span key={i} className="inline-flex items-center gap-3 px-6 py-3 mx-2 rounded-full border border-[#C9A96E]/20 bg-[#C9A96E]/[0.04] text-white/70 text-sm whitespace-nowrap flex-shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A96E] flex-shrink-0" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
