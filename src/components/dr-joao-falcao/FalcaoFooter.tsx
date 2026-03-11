import React from 'react';
import { Phone, Clock, MapPin, Instagram } from 'lucide-react';
import { EditableText, EditableImage, EditableElement } from '../EditableWrappers';

export const FalcaoFooter = () => {
  return (
    <footer className="bg-[#050505] text-white pt-20 pb-10">
      <div className="max-w-[1600px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Col */}
          <div className="space-y-6">
            <EditableElement id="falcao_footer_brand_el" label="Logo e Marca">
              <div className="flex items-center gap-3">
                <EditableImage
                  id="falcao_footer_logo"
                  defaultSrc="/assets/dr-joao-falcao/logo_jf.png"
                  alt="JF"
                  className="h-10 w-auto"
                />
                <div>
                  <p className="text-white text-sm font-semibold leading-tight">
                    <EditableText id="falcao_footer_title" defaultText="Dr. João Falcão" />
                  </p>
                  <p className="text-white/30 text-[9px] tracking-wider uppercase">
                    <EditableText id="falcao_footer_subtitle" defaultText="Body Aesthetics" />
                  </p>
                </div>
              </div>
            </EditableElement>
            <EditableText
              id="falcao_footer_desc"
              as="p"
              className="text-white/50 text-sm leading-relaxed max-w-xs block"
              defaultText="Especialista em remodelação glútea e estética corporal avançada."
            />
          </div>

          {/* Opening Hours */}
          <div className="space-y-6">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/40">
              <EditableText id="falcao_footer_hours_tag" defaultText="Funcionamento" />
            </p>
            <div className="space-y-3">
              <p className="font-semibold text-sm">
                <EditableText id="falcao_footer_days" defaultText="Segunda a Sexta" />
              </p>
              <div className="flex items-center gap-3 text-white/60 text-sm">
                <Clock className="w-4 h-4 text-[#C9A96E]" />
                <span>
                  <EditableText id="falcao_footer_hours" defaultText="8h às 18h" />
                </span>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/40">
              <EditableText id="falcao_footer_contact_tag" defaultText="Contato" />
            </p>
            <div className="space-y-4">
              <EditableElement id="falcao_footer_tel_el" label="Telefone">
                <a href="tel:+5575999999999" className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-[10px] border border-white/10 flex items-center justify-center group-hover:bg-[#C9A96E] transition-all">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium">
                    <EditableText id="falcao_footer_tel" defaultText="(75) 99999-9999" />
                  </span>
                </a>
              </EditableElement>
            </div>
          </div>

          {/* Location & Social */}
          <div className="space-y-6">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/40">
              <EditableText id="falcao_footer_loc_tag" defaultText="Localização" />
            </p>
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <MapPin className="w-5 h-5 text-[#C9A96E] flex-shrink-0" />
                <p className="text-sm text-white/60 leading-relaxed">
                  <EditableText id="falcao_footer_addr" defaultText="Feira de Santana — BA" />
                </p>
              </div>
              <EditableElement id="falcao_footer_ig_el" label="Link Instagram">
                <a
                  href="https://www.instagram.com/drjoao.falcao"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-[10px] border border-white/10 flex items-center justify-center group-hover:bg-pink-600 transition-all">
                    <Instagram className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium">
                    <EditableText id="falcao_footer_ig" defaultText="@drjoao.falcao" />
                  </span>
                </a>
              </EditableElement>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30">
          <span>
            © {new Date().getFullYear()} <EditableText id="falcao_footer_copy" defaultText="Dr. João Falcão" />. Todos os direitos reservados.
          </span>
          <div className="flex items-center gap-2">
            <span>
              <EditableText id="falcao_footer_rights" defaultText="Dr. João Falcão — Body Aesthetics" />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
