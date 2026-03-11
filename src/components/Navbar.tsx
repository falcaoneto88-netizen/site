import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { cn } from '../lib/utils';

import { EditableText, EditableImage } from './EditableWrappers';

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={cn(
            "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
            isScrolled ? "glass py-2" : "bg-transparent"
        )}>
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div className="flex items-center space-x-2 cursor-pointer" onClick={() => window.location.href = "/"}>
                    <EditableImage
                        id="nav_logo_img"
                        defaultSrc="/logo_official.png"
                        alt="Oral Unic Logo"
                        className="h-10 md:h-12 w-auto object-contain"
                    />
                </div>

                <div className="hidden md:flex items-center space-x-8 text-sm font-medium uppercase tracking-wider">
                    <a href="#" className="hover:text-accent transition-colors">
                        <EditableText id="nav_link_1" defaultText="Início" />
                    </a>
                    <a href="#procedimento" className="hover:text-accent transition-colors">
                        <EditableText id="nav_link_2" defaultText="Procedimento" />
                    </a>
                    <a href="#sobre-nos" className="hover:text-accent transition-colors">
                        <EditableText id="nav_link_3" defaultText="Sobre Nós" />
                    </a>
                    <a href="#contato" className="hover:text-accent transition-colors">
                        <EditableText id="nav_link_4" defaultText="Contato" />
                    </a>
                </div>

                <button className="hidden md:flex items-center btn-primary !py-2.5 !px-6">
                    <Phone className="w-[1.1em] h-[1.1em]" strokeWidth={2.5} />
                    <EditableText id="nav_cta" defaultText="Agende uma Consulta" />
                </button>

                <button className="md:hidden text-primary">
                    <Menu className="w-6 h-6" />
                </button>
            </div>
        </nav>
    );
};
