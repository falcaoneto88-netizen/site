import React from 'react';
import { Phone, Clock, MapPin, Instagram } from 'lucide-react';
import { EditableText, EditableImage } from './EditableWrappers';

export const Footer = () => {
    return (
        <footer className="bg-[#1a1520] text-white pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Col */}
                    <div className="space-y-6">
                        <div className="flex items-center space-x-2">
                            <EditableImage
                                id="footer_logo_img"
                                defaultSrc="/logo_official.png"
                                alt="Oral Unic Logo"
                                className="h-12 w-auto object-contain brightness-0 invert"
                            />
                        </div>
                        <EditableText
                            id="footer_brand_desc"
                            as="p"
                            defaultText="Cuidado odontológico completo e especializado em cada detalhe."
                            className="text-white/50 text-sm leading-relaxed max-w-xs block"
                        />
                    </div>

                    {/* Opening Hours */}
                    <div className="space-y-6">
                        <EditableText id="footer_title_opening" defaultText="Funcionamento" className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 block" />
                        <div className="space-y-3">
                            <EditableText id="footer_hours_day" defaultText="Segunda a Sexta" className="font-semibold block" />
                            <div className="flex items-center gap-3 text-white/60 text-sm">
                                <Clock className="w-4 h-4 text-accent" />
                                <EditableText id="footer_hours_time" defaultText="8h às 18h" />
                            </div>
                        </div>
                    </div>

                    {/* Contact Details */}
                    <div className="space-y-6">
                        <EditableText id="footer_title_contact" defaultText="Contato" className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 block" />
                        <div className="space-y-4">
                            <a href="tel:75999540384" className="flex items-center gap-4 group">
                                <div className="w-10 h-10 rounded-[10px] border border-white/10 flex items-center justify-center group-hover:bg-primary transition-all">
                                    <Phone className="w-4 h-4" />
                                </div>
                                <EditableText id="footer_phone_1" defaultText="(75) 99954-0384" className="text-sm font-medium" />
                            </a>
                        </div>
                    </div>

                    {/* Location & Social */}
                    <div className="space-y-6">
                        <EditableText id="footer_title_location" defaultText="Localização" className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 block" />
                        <div className="space-y-6">
                            <div className="flex gap-4 items-start">
                                <MapPin className="w-5 h-5 text-accent flex-shrink-0" />
                                <EditableText
                                    id="footer_address"
                                    as="p"
                                    defaultText="R. Osvaldo Cruz, 295 - Centro, Feira de Santana - BA"
                                    className="text-sm text-white/60 leading-relaxed block"
                                />
                            </div>
                            <a href="#" className="flex items-center gap-4 group">
                                <div className="w-10 h-10 rounded-[10px] border border-white/10 flex items-center justify-center group-hover:bg-pink-600 transition-all">
                                    <Instagram className="w-4 h-4" />
                                </div>
                                <EditableText id="footer_social_insta" defaultText="@oralunic" className="text-sm font-medium" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30 lowercase">
                    <EditableText id="footer_copyright" defaultText="© 2026 Oral Unic. Todos os direitos reservados." />
                    <div className="flex items-center gap-2">
                        <EditableText id="footer_tagline" defaultText="Oral Unic — Viva de Frente" />
                        <div className="w-1 h-1 bg-white/20 rounded-full" />
                        <EditableText id="footer_editor_tag" defaultText="Edit with Lovable" />
                    </div>
                </div>
            </div>
        </footer>
    );
};
