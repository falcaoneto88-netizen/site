import React from 'react';
import { MessageCircle, MapPin, Mail } from 'lucide-react';

import { EditableText } from './EditableWrappers';

export const Contact = () => {
    return (
        <section id="contact" className="py-28 relative bg-primary">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="glass-dark rounded-[3rem] p-8 md:p-20 grid md:grid-cols-2 gap-16 border-white/10">
                    <div>
                        <h2 className="text-2xl md:text-[30px] font-serif text-white mb-8 leading-tight">
                            <EditableText id="contact_title_1" defaultText="Inicie sua jornada para o" /> <span className="italic opacity-80"><EditableText id="contact_title_2" defaultText="sorriso dos sonhos" /></span>
                        </h2>
                        <EditableText
                            id="contact_desc"
                            as="p"
                            defaultText="Estamos prontos para desenhar um plano de tratamento exclusivo para você."
                            className="text-white/70 text-lg mb-12 block"
                        />

                        <div className="space-y-6">
                            <div className="flex items-center gap-6">
                                <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-white">
                                    <MessageCircle className="w-6 h-6" />
                                </div>
                                <EditableText id="contact_phone" defaultText="(11) 99999-9999" className="text-white font-medium" />
                            </div>
                            <div className="flex items-center gap-6">
                                <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-white">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <EditableText id="contact_address" defaultText="Av. Paulista, 1000 - São Paulo, SP" className="text-white font-medium" />
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-2xl">
                        <h3 className="text-2xl font-serif text-primary mb-8 text-center">
                            <EditableText id="contact_form_title" defaultText="Agende via Mensagem" />
                        </h3>
                        <form className="space-y-6">
                            <div>
                                <label className="block text-xs font-semibold uppercase tracking-wider text-foreground/50 mb-2">
                                    <EditableText id="contact_field_name" defaultText="Nome Completo" />
                                </label>
                                <input type="text" className="w-full px-4 py-3 rounded-xl bg-primary/5 border-none focus:ring-2 focus:ring-accent outline-none" placeholder="Ex: Maria Antonieta" />
                            </div>
                            <div>
                                <label className="block text-xs font-semibold uppercase tracking-wider text-foreground/50 mb-2">
                                    <EditableText id="contact_field_whatsapp" defaultText="Whatsapp" />
                                </label>
                                <input type="text" className="w-full px-4 py-3 rounded-xl bg-primary/5 border-none focus:ring-2 focus:ring-accent outline-none" placeholder="(00) 00000-0000" />
                            </div>
                            <button className="btn-primary w-full !py-4">
                                <EditableText id="contact_submit" defaultText="Enviar Solicitação" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
