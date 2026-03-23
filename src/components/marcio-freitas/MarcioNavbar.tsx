import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import { EditableText, EditableElement } from '../EditableWrappers';
import { MARCIO_WHATSAPP_URL } from './marcioConstants';

const navLinks = [
  { label: 'Casos Reais', href: '#resultados', id: 'marcio_nav_results' },
  { label: 'Procedimento', href: '#procedimento', id: 'marcio_nav_proc' },
  { label: 'Sobre', href: '#medico', id: 'marcio_nav_about' },
  { label: 'Diferenciais', href: '#diferenciais', id: 'marcio_nav_diff' },
  { label: 'FAQ', href: '#faq', id: 'marcio_nav_faq' },
];

export const MarcioNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <motion.nav initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0d0a06]/95 backdrop-blur-md border-b border-white/[0.06]' : 'bg-transparent'}`}>
      <div className="max-w-[1600px] mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex-shrink-0">
          <img src="/assets/marcio-freitas/logo_marcio.webp" alt="Marcio Freitas" className="h-7 md:h-9 object-contain" />
        </a>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <a key={link.id} href={link.href} className="text-white/50 text-sm hover:text-[#C9A96E] transition tracking-wide">
              <EditableText id={link.id} defaultText={link.label} />
            </a>
          ))}
          <EditableElement id="marcio_nav_cta_el" label="CTA Navbar">
            <a href={MARCIO_WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#C9A96E] via-[#E8D5A3] to-[#C9A96E] text-[#0d0a06] font-semibold px-5 py-2 rounded-full text-xs uppercase tracking-wider hover:shadow-lg hover:shadow-[#C9A96E]/25 transition-all">
              <EditableText id="marcio_nav_cta" defaultText="Agendar" />
              <ArrowRight className="w-3 h-3" />
            </a>
          </EditableElement>
        </div>
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white">
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0d0a06]/98 backdrop-blur-md border-t border-white/[0.06]">
            <div className="px-6 py-6 space-y-4">
              {navLinks.map(link => (
                <a key={link.id} href={link.href} onClick={() => setMenuOpen(false)} className="block text-white/60 text-base hover:text-[#C9A96E] transition">
                  <EditableText id={`${link.id}_m`} defaultText={link.label} />
                </a>
              ))}
              <a href={MARCIO_WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-5 py-3 bg-gradient-to-r from-[#C9A96E] via-[#E8D5A3] to-[#C9A96E] text-[#0d0a06] rounded-full font-semibold text-sm uppercase tracking-wider">
                <EditableText id="marcio_nav_cta_m" defaultText="Agendar Consulta" />
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
