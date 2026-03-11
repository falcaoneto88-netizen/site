import React from 'react';
import { Phone, Clock, MapPin, Instagram } from 'lucide-react';
import { WHATSAPP_DISPLAY, PHONE_TEL, ADDRESS, INSTAGRAM_URL, INSTAGRAM_HANDLE, BUSINESS_HOURS_DAYS, BUSINESS_HOURS_TIME, BRAND_SLOGAN, BRAND_YEAR, LOGO_PATH } from '../../lib/constants';

export const FooterV2 = () => {
    return (
        <footer className="bg-foreground text-white pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div className="space-y-6">
                        <img src={LOGO_PATH} alt="Oral Unic Logo" className="h-12 w-auto object-contain brightness-0 invert" />
                        <p className="text-white/50 text-sm leading-relaxed max-w-xs">{BRAND_SLOGAN}</p>
                    </div>

                    <div className="space-y-6">
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 block">Funcionamento</span>
                        <div className="space-y-3">
                            <span className="font-semibold block">{BUSINESS_HOURS_DAYS}</span>
                            <div className="flex items-center gap-3 text-white/60 text-sm">
                                <Clock className="w-4 h-4 text-accent" />
                                <span>{BUSINESS_HOURS_TIME}</span>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 block">Contato</span>
                        <a href={PHONE_TEL} className="flex items-center gap-4 group">
                            <div className="w-10 h-10 rounded-[10px] border border-white/10 flex items-center justify-center group-hover:bg-primary transition-all">
                                <Phone className="w-4 h-4" />
                            </div>
                            <span className="text-sm font-medium">{WHATSAPP_DISPLAY}</span>
                        </a>
                    </div>

                    <div className="space-y-6">
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 block">Localização</span>
                        <div className="flex gap-4 items-start">
                            <MapPin className="w-5 h-5 text-accent flex-shrink-0" />
                            <p className="text-sm text-white/60 leading-relaxed">{ADDRESS}</p>
                        </div>
                        <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                            <div className="w-10 h-10 rounded-[10px] border border-white/10 flex items-center justify-center group-hover:bg-pink-600 transition-all">
                                <Instagram className="w-4 h-4" />
                            </div>
                            <span className="text-sm font-medium">{INSTAGRAM_HANDLE}</span>
                        </a>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30 lowercase">
                    <span>© {BRAND_YEAR} Oral Unic. Todos os direitos reservados.</span>
                    <span>Oral Unic — Viva de Frente</span>
                </div>
            </div>
        </footer>
    );
};
