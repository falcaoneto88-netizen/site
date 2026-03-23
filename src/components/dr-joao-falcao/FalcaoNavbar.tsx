import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { EditableText, EditableImage, EditableElement } from '../EditableWrappers';

const navLinks = [
  { label: 'Procedimento', href: '#procedimento', id: 'falcao_nav_link_1' },
  { label: 'Benefícios', href: '#beneficios', id: 'falcao_nav_link_2' },
  { label: 'Dr. João Falcão', href: '#doutor', id: 'falcao_nav_link_3' },
  { label: 'Dúvidas', href: '#faq', id: 'falcao_nav_link_4' },
];

export const FalcaoNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-[#0A0A0A]/90 backdrop-blur-xl border-b border-white/[0.04]' : ''
        }`}
    >
      <div className="max-w-[1600px] mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex-shrink-0">
          <img
            src="/assets/dr-joao-falcao/logo_jf_gold.png"
            alt="Dr. João Falcão"
            className="h-6 sm:h-8 w-auto object-contain"
          />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className="text-white hover:text-[#C9A96E] text-base tracking-wide transition"
            >
              <EditableText id={link.id} defaultText={link.label} />
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <EditableElement id="falcao_navbar_cta_el" label="Botão Menu">
            <a
              href="https://wa.me/351926991096?text=Ol%C3%A1%2C%20vim%20do%20Instagram%20e%20gostaria%20de%20agendar%20uma%20consulta%20com%20o%20Dr.%20Jo%C3%A3o%20Falc%C3%A3o."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 bg-gradient-to-r from-[#C9A96E] via-[#E8D5A3] to-[#C9A96E] text-[#0A0A0A] font-semibold px-6 py-2.5 rounded-full hover:shadow-lg hover:shadow-[#C9A96E]/20 transition text-sm"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <EditableText id="falcao_navbar_cta_text" defaultText="Agendar" />
            </a>
          </EditableElement>

          {/* Mobile menu */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white/60 hover:text-white transition"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-[#0A0A0A]/95 backdrop-blur-xl border-t border-white/[0.04] px-6 py-6"
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block text-white/60 hover:text-white py-3 text-sm border-b border-white/[0.04] last:border-0"
            >
              <EditableText id={`${link.id}_mobile`} defaultText={link.label} />
            </a>
          ))}
          <a
            href="https://wa.me/351926991096?text=Ol%C3%A1%2C%20vim%20do%20Instagram%20e%20gostaria%20de%20agendar%20uma%20consulta%20com%20o%20Dr.%20Jo%C3%A3o%20Falc%C3%A3o."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex w-full justify-center items-center gap-2 bg-gradient-to-r from-[#C9A96E] via-[#E8D5A3] to-[#C9A96E] text-[#0A0A0A] font-semibold px-5 py-3 rounded-full text-sm"
          >
            <WhatsAppIcon className="w-4 h-4" />
            <EditableText id="falcao_navbar_cta_text_mobile" defaultText="Agendar Avaliação" />
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
};
