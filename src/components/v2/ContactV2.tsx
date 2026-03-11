import React, { useState } from 'react';
import { MessageCircle, MapPin } from 'lucide-react';
import { EditableElement, EditableText } from '../EditableWrappers';
import { WHATSAPP_NUMBER, WHATSAPP_DISPLAY, ADDRESS, buildWhatsAppURL } from '../../lib/constants';

export const ContactV2 = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const message = `Olá! Meu nome é ${name}, meu telefone é ${phone}. Gostaria de agendar uma consulta.`;
        window.open(buildWhatsAppURL(message), '_blank');
    };

    return (
        <section id="contato" className="py-14 md:py-24 relative bg-primary">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="bg-black/30 backdrop-blur-xl rounded-[2rem] md:rounded-[3rem] p-6 md:p-20 grid md:grid-cols-2 gap-10 md:gap-16 border border-white/10">
                    <div>
                        <EditableElement id="contact_title_el" label="Título">
                            <h2 className="text-2xl md:text-[30px] font-serif text-white mb-6 md:mb-8 leading-tight">
                                <EditableText id="contact_title_1_v2" defaultText="Inicie sua jornada para o" /> <span className="italic text-accent"><EditableText id="contact_title_2_v2" defaultText="sorriso dos sonhos" /></span>
                            </h2>
                        </EditableElement>

                        <EditableElement id="contact_desc_el" label="Descrição">
                            <EditableText
                                id="contact_desc_v2"
                                as="p"
                                defaultText="Estamos prontos para desenhar um plano de tratamento exclusivo para você."
                                className="text-white/70 text-lg mb-12 block"
                            />
                        </EditableElement>

                        <div className="space-y-6">
                            <EditableElement id="contact_phone_el" label="Telefone">
                                <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group hover:translate-x-1 transition-transform">
                                    <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-white border border-white/20 group-hover:bg-accent transition-colors">
                                        <MessageCircle className="w-6 h-6" />
                                    </div>
                                    <span className="text-white font-medium"><EditableText id="contact_phone_v2" defaultText={WHATSAPP_DISPLAY} /></span>
                                </a>
                            </EditableElement>

                            <EditableElement id="contact_address_el" label="Endereço">
                                <div className="flex items-center gap-6">
                                    <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-white border border-white/20">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <span className="text-white font-medium"><EditableText id="contact_address_v2" defaultText={ADDRESS} /></span>
                                </div>
                            </EditableElement>
                        </div>
                    </div>

                    <EditableElement id="contact_form_el" label="Formulário">
                        <div className="bg-white rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-12 shadow-2xl">
                            <h3 className="text-2xl font-serif text-primary mb-8 text-center">
                                <EditableText id="contact_form_title_v2" defaultText="Agende via WhatsApp" />
                            </h3>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Nome Completo</label>
                                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required className="w-full px-4 py-3 rounded-xl bg-primary/5 border-none focus:ring-2 focus:ring-accent outline-none text-foreground" placeholder="Ex: Maria Antonieta" />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">WhatsApp</label>
                                    <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} required className="w-full px-4 py-3 rounded-xl bg-primary/5 border-none focus:ring-2 focus:ring-accent outline-none text-foreground" placeholder="(00) 00000-0000" />
                                </div>
                                <button type="submit" className="btn-primary w-full !py-4">
                                    <EditableText id="contact_submit_v2" defaultText="Enviar via WhatsApp" />
                                </button>
                            </form>
                        </div>
                    </EditableElement>
                </div>
            </div>
        </section>
    );
};
