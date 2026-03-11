import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { cn } from '../../lib/utils';
import { WHATSAPP_URL, NAV_LINKS, LOGO_PATH } from '../../lib/constants';

export const NavbarV2 = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        if (href === '/') {
            navigate('/');
            window.scrollTo(0, 0);
        } else if (href.startsWith('/#')) {
            const hash = href.substring(1);
            if (location.pathname !== '/') {
                navigate('/' + hash);
            } else {
                const el = document.querySelector(hash);
                el?.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            navigate(href);
        }
    };

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isMobileOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [isMobileOpen]);

    return (
        <>
            <nav className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
                isScrolled ? "bg-background/80 backdrop-blur-xl shadow-sm py-2" : "bg-transparent"
            )}>
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <div className="flex items-center space-x-2 cursor-pointer" onClick={() => { navigate('/'); window.scrollTo(0, 0); }}>
                        <img src={LOGO_PATH} alt="Oral Unic Logo" className="h-10 md:h-12 w-auto object-contain" />
                    </div>

                    <div className="hidden md:flex items-center space-x-8 text-sm font-medium uppercase tracking-wider">
                        {NAV_LINKS.map((link) => (
                            <a key={link.href} href={link.href} onClick={(e) => handleNavClick(e, link.href)} className="hover:text-accent transition-colors">
                                {link.label}
                            </a>
                        ))}
                    </div>

                    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center btn-primary !py-3 !px-8 !text-sm">
                        <Phone className="w-[1.1em] h-[1.1em]" strokeWidth={2.5} />
                        Agende uma Consulta
                    </a>

                    <button className="md:hidden text-primary" onClick={() => setIsMobileOpen(!isMobileOpen)}>
                        {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </nav>

            <AnimatePresence>
                {isMobileOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60]"
                            onClick={() => setIsMobileOpen(false)}
                        />
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-background z-[70] shadow-2xl flex flex-col"
                        >
                            <div className="flex items-center justify-between p-6 border-b border-border">
                                <img src={LOGO_PATH} alt="Oral Unic" className="h-10 w-auto" />
                                <button onClick={() => setIsMobileOpen(false)} className="text-foreground">
                                    <X className="w-6 h-6" />
                                </button>
                            </div>
                            <div className="flex flex-col p-6 space-y-6 flex-1">
                                {NAV_LINKS.map((link, i) => (
                                    <motion.a
                                        key={link.href}
                                        href={link.href}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        onClick={(e) => { handleNavClick(e, link.href); setIsMobileOpen(false); }}
                                        className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                                    >
                                        {link.label}
                                    </motion.a>
                                ))}
                            </div>
                            <div className="p-6 border-t border-border">
                                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary w-full flex items-center justify-center">
                                    <Phone className="w-[1.1em] h-[1.1em]" strokeWidth={2.5} />
                                    Agende uma Consulta
                                </a>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};
