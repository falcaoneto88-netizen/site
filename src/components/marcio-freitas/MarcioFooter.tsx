import React from 'react';
import { Phone, Clock, MapPin, Instagram } from 'lucide-react';
import { EditableText } from '../EditableWrappers';
import { MARCIO_PHONE, MARCIO_PHONE_TEL, MARCIO_INSTAGRAM, MARCIO_YOUTUBE } from './marcioConstants';

export const MarcioFooter = () => {
  return (
    <footer className="bg-[#0d0a06] border-t border-white/[0.06]">
      <div className="max-w-[1600px] mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start">
            <img src="/assets/marcio-freitas/logo_marcio.webp" alt="Marcio Freitas" className="h-14 object-contain mb-4" />
            <p className="text-white/30 text-xs leading-relaxed text-center md:text-left">
              <EditableText id="marcio_footer_desc" defaultText="Médico e Cirurgião Dentista especializado em Rinoplastia e Cirurgia Estética Facial." />
            </p>
          </div>

          {/* Hours */}
          <div className="text-center md:text-left">
            <h4 className="text-white font-semibold text-sm mb-4"><EditableText id="marcio_footer_hours_title" defaultText="Horários" /></h4>
            <div className="flex items-start gap-2 justify-center md:justify-start text-white/40 text-sm">
              <Clock className="w-4 h-4 text-[#C9A96E] flex-shrink-0 mt-0.5" />
              <div>
                <EditableText id="marcio_footer_hours1" defaultText="seg a sex - 07:00 às 19:00" /><br />
                <EditableText id="marcio_footer_hours2" defaultText="sábado - 07:00 às 12:00" />
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="text-center md:text-left">
            <h4 className="text-white font-semibold text-sm mb-4"><EditableText id="marcio_footer_contact_title" defaultText="Contato" /></h4>
            <div className="space-y-2.5 text-white/40 text-sm">
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <Phone className="w-4 h-4 text-[#C9A96E] flex-shrink-0" />
                <a href={MARCIO_PHONE_TEL} className="hover:text-white transition"><EditableText id="marcio_footer_phone" defaultText={MARCIO_PHONE} /></a>
              </div>
              <div className="flex items-start gap-2 justify-center md:justify-start">
                <MapPin className="w-4 h-4 text-[#C9A96E] flex-shrink-0 mt-0.5" />
                <span><EditableText id="marcio_footer_addr" defaultText="R. Cachoeira, 143 - Kalilândia, Feira de Santana" /></span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div className="text-center md:text-left">
            <h4 className="text-white font-semibold text-sm mb-4"><EditableText id="marcio_footer_social_title" defaultText="Redes Sociais" /></h4>
            <div className="flex gap-3 justify-center md:justify-start">
              <a href={MARCIO_INSTAGRAM} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-[#C9A96E] hover:border-[#C9A96E]/30 transition">
                <Instagram className="w-4 h-4" />
              </a>
              <a href={MARCIO_YOUTUBE} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-[#C9A96E] hover:border-[#C9A96E]/30 transition">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/[0.04] py-4 text-center">
        <p className="text-white/20 text-xs">Dr. Marcio Freitas © {new Date().getFullYear()} Todos os direitos reservados</p>
      </div>
    </footer>
  );
};
