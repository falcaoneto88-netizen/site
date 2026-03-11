import React from 'react';
import { EditableText, EditableImage } from '../EditableWrappers';

export const GenericFooter = () => {
    return (
        <footer className="py-16 bg-[#050505] border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2">
                        <EditableImage
                            id="footer_logo"
                            defaultSrc="https://placehold.co/150x50/1a1a1a/ffffff?text=LOGO"
                            alt="Footer Logo"
                            className="h-6 w-auto grayscale mb-6"
                        />
                        <p className="text-white/30 text-sm max-w-xs leading-relaxed italic">
                            <EditableText id="footer_about" defaultText="Especialistas em criar experiências digitais que convertem e geram valor real para o seu negócio." />
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Links</h4>
                        <ul className="space-y-4">
                            <li><EditableText id="footer_link_1" defaultText="Termos de Uso" className="text-white/40 hover:text-white transition-colors text-sm cursor-pointer" /></li>
                            <li><EditableText id="footer_link_2" defaultText="Privacidade" className="text-white/40 hover:text-white transition-colors text-sm cursor-pointer" /></li>
                            <li><EditableText id="footer_link_3" defaultText="Trabalhe Conosco" className="text-white/40 hover:text-white transition-colors text-sm cursor-pointer" /></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Contato</h4>
                        <ul className="space-y-4">
                            <li className="text-white/40 text-sm">
                                <EditableText id="footer_email" defaultText="contato@empresa.com.br" />
                            </li>
                            <li className="text-white/40 text-sm">
                                <EditableText id="footer_phone" defaultText="+55 (11) 99999-9999" />
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-white/20 text-xs">
                    <EditableText id="footer_copyright" defaultText="© 2024 Nome da Empresa. Todos os direitos reservados." />
                    <div className="flex gap-6">
                        <span className="hover:text-white/40 transition-colors cursor-pointer">Instagram</span>
                        <span className="hover:text-white/40 transition-colors cursor-pointer">LinkedIn</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};
