import React from 'react';
import { EditableText, EditableImage, EditableElement } from '../EditableWrappers';

export const GenericNavbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-lg border-b border-white/10">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <EditableImage
                    id="nav_logo"
                    defaultSrc="https://placehold.co/150x50/1a1a1a/ffffff?text=LOGO"
                    alt="Logo"
                    className="h-8 w-auto grayscale hover:grayscale-0 transition-all cursor-pointer"
                />

                <div className="hidden md:flex items-center gap-8">
                    <EditableText id="nav_link_1" defaultText="Início" className="text-white/60 hover:text-white transition-colors cursor-pointer text-sm font-medium" />
                    <EditableText id="nav_link_2" defaultText="Sobre" className="text-white/60 hover:text-white transition-colors cursor-pointer text-sm font-medium" />
                    <EditableText id="nav_link_3" defaultText="Serviços" className="text-white/60 hover:text-white transition-colors cursor-pointer text-sm font-medium" />
                    <EditableElement id="nav_cta_button">
                        <button className="bg-white text-black px-5 py-2 rounded-full text-sm font-semibold hover:bg-neutral-200 transition-all">
                            <EditableText id="nav_cta_text" defaultText="Falar com Especialista" />
                        </button>
                    </EditableElement>
                </div>
            </div>
        </nav>
    );
};
