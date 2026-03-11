import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { EditableText, EditableImage, EditableElement } from '../EditableWrappers';

const navLinks = [
  { label: 'Procedimento', href: '#procedimento', id: 'falcao_nav_link_1' },
  { label: 'Benefícios', href: '#beneficios', id: 'falcao_nav_link_2' },
  { label: 'Dr. João Falcão', href: '#doutor', id: 'falcao_nav_link_3' },
  { label: 'FAQ', href: '#faq', id: 'falcao_nav_link_4' },
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
        <EditableElement id="falcao_navbar_logo_el" label="Logo e Título">
          <a href="#" className="flex items-center gap-3">
            <EditableImage
              id="falcao_navbar_logo"
              defaultSrc="/assets/dr-joao-falcao/logo_jf.png"
              alt="JF"
              className="h-8 w-auto"
            />
            <div className="hidden sm:block">
              <p className="text-white text-xs font-semibold leading-tight">
                <EditableText id="falcao_navbar_title" defaultText="Dr. João Falcão" />
              </p>
              <p className="text-white/30 text-[9px] tracking-wider uppercase">
                <EditableText id="falcao_navbar_subtitle" defaultText="Body Aesthetics" />
              </p>
            </div>
          </a>
        </EditableElement>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className="text-white/50 hover:text-white text-xs tracking-wide transition"
            >
              <EditableText id={link.id} defaultText={link.label} />
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <EditableElement id="falcao_navbar_cta_el" label="Botão Menu">
            <a
              href="https://wa.me/5575999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 bg-gradient-to-r from-[#C9A96E] via-[#E8D5A3] to-[#C9A96E] text-[#0A0A0A] font-semibold px-5 py-2 rounded-full hover:shadow-lg hover:shadow-[#C9A96E]/20 transition text-xs"
            >
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
            href="https://wa.me/5575999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex w-full justify-center items-center gap-2 bg-gradient-to-r from-[#C9A96E] via-[#E8D5A3] to-[#C9A96E] text-[#0A0A0A] font-semibold px-5 py-3 rounded-full text-sm"
          >
            <EditableText id="falcao_navbar_cta_text_mobile" defaultText="Agendar Avaliação" />
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
};
