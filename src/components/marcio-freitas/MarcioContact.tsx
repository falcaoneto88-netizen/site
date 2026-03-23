import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { EditableText, EditableImage } from '../EditableWrappers';

export const MarcioContact = () => {
  const [name, setName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá, meu nome é ${name}. ${message}`.trim();
    window.open(`https://wa.me/5575998902525?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section className="relative overflow-hidden bg-[#0d0a06]">
      {/* ===== MOBILE ===== */}
      <div className="md:hidden flex flex-col">
        <div className="relative w-full aspect-square overflow-hidden">
          <motion.div initial={{ opacity: 0, scale: 1.05 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1.2 }} className="w-full h-full">
            <EditableImage id="marcio_contact_img_mobile" defaultSrc="/assets/marcio-freitas/section_ref_08.png" alt="Dr. Marcio" className="w-full h-full object-cover" />
          </motion.div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0d0a06] to-transparent z-20 pointer-events-none" />
        </div>

        <div className="px-6 pt-6 pb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col items-center text-center">
            <div className="flex items-center gap-3 mb-5">
              <span className="inline-block w-6 h-[1px] bg-[#C9A96E]" />
              <span className="text-[10px] font-medium tracking-[0.3em] uppercase text-[#C9A96E]">Contato</span>
              <span className="inline-block w-6 h-[1px] bg-[#C9A96E]" />
            </div>

            <h2 className="text-2xl font-light leading-[1.15] mb-4 text-white">
              <EditableText id="marcio_contact_t1" defaultText="Agende uma " />
              <span className="italic text-[#C9A96E]">
                <EditableText id="marcio_contact_t2" defaultText="Consulta." />
              </span>
            </h2>
            <p className="text-white/50 text-sm mb-8 leading-relaxed font-light">
              <EditableText id="marcio_contact_desc" defaultText="Venha fazer o seu agendamento! Basta preencher o formulário abaixo ou entrar em contato pelo WhatsApp." />
            </p>

            <form onSubmit={handleSubmit} className="space-y-3 w-full">
              <input type="text" placeholder="Nome" value={name} onChange={e => setName(e.target.value)}
                className="w-full px-4 py-3.5 bg-white/[0.06] border border-white/[0.08] text-white rounded-xl text-sm placeholder:text-white/30 outline-none focus:border-[#C9A96E]/40 transition" />
              <input type="text" placeholder="WhatsApp" value={whatsapp} onChange={e => setWhatsapp(e.target.value)}
                className="w-full px-4 py-3.5 bg-white/[0.06] border border-white/[0.08] text-white rounded-xl text-sm placeholder:text-white/30 outline-none focus:border-[#C9A96E]/40 transition" />
              <textarea placeholder="Sua mensagem" value={message} onChange={e => setMessage(e.target.value)} rows={4}
                className="w-full px-4 py-3.5 bg-white/[0.06] border border-white/[0.08] text-white rounded-xl text-sm placeholder:text-white/30 outline-none focus:border-[#C9A96E]/40 transition resize-none" />
              <button type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-[#C9A96E] via-[#E8D5A3] to-[#C9A96E] text-[#0d0a06] rounded-full font-semibold text-sm uppercase tracking-wider hover:shadow-lg hover:shadow-[#C9A96E]/25 transition-all">
                <EditableText id="marcio_contact_btn" defaultText="Enviar" />
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* ===== DESKTOP — IMAGE RIGHT, FORM LEFT ===== */}
      <div className="hidden md:flex items-center relative min-h-[70vh] py-20 md:py-28">
        <div className="absolute inset-0 z-0">
          <motion.div initial={{ opacity: 0, scale: 1.05 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1.2 }} className="relative w-full h-full">
            <div className="absolute right-0 top-0 bottom-0 w-[55%] lg:w-[50%] overflow-hidden">
              <EditableImage id="marcio_contact_img" defaultSrc="/assets/marcio-freitas/section_ref_08.png" alt="Dr. Marcio" className="absolute inset-0 w-full h-full object-cover object-[70%_center]" />
              <div className="absolute inset-y-0 left-0 w-[35%] z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, #0d0a06, #0d0a0680, transparent)' }} />
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-32 z-20 pointer-events-none" style={{ background: 'linear-gradient(to top, #0d0a06, transparent)' }} />
          </motion.div>
        </div>

        <div className="max-w-[1600px] mx-auto w-full px-6 pl-[5%] xl:pl-[8%] relative z-30">
          <div className="max-w-lg">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-block w-8 h-[1px] bg-[#C9A96E]" />
                <span className="text-[11px] font-medium tracking-[0.3em] uppercase text-[#C9A96E]">Contato</span>
              </div>

              <h2 className="text-2xl md:text-[36px] font-light leading-[1.15] mb-4 text-white">
                <EditableText id="marcio_contact_t1_desktop" defaultText="Agende uma " />
                <span className="italic text-[#C9A96E]">
                  <EditableText id="marcio_contact_t2_desktop" defaultText="Consulta." />
                </span>
              </h2>
              <p className="text-white/50 text-base mb-8 leading-relaxed font-light">
                <EditableText id="marcio_contact_desc_desktop" defaultText="Venha fazer o seu agendamento! Preencha o formulário abaixo ou entre em contato pelo WhatsApp." />
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input type="text" placeholder="Nome" value={name} onChange={e => setName(e.target.value)}
                  className="w-full px-5 py-4 bg-white/[0.06] border border-white/[0.08] text-white rounded-xl text-base placeholder:text-white/30 outline-none focus:border-[#C9A96E]/40 transition" />
                <input type="text" placeholder="WhatsApp" value={whatsapp} onChange={e => setWhatsapp(e.target.value)}
                  className="w-full px-5 py-4 bg-white/[0.06] border border-white/[0.08] text-white rounded-xl text-base placeholder:text-white/30 outline-none focus:border-[#C9A96E]/40 transition" />
                <textarea placeholder="Sua mensagem" value={message} onChange={e => setMessage(e.target.value)} rows={4}
                  className="w-full px-5 py-4 bg-white/[0.06] border border-white/[0.08] text-white rounded-xl text-base placeholder:text-white/30 outline-none focus:border-[#C9A96E]/40 transition resize-none" />
                <button type="submit"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#C9A96E] via-[#E8D5A3] to-[#C9A96E] text-[#0d0a06] rounded-full font-semibold text-sm uppercase tracking-wider hover:shadow-lg hover:shadow-[#C9A96E]/25 transition-all">
                  <EditableText id="marcio_contact_btn_desktop" defaultText="Enviar Mensagem" />
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
