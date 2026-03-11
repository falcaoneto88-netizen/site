import React from 'react';
import { EditableText, EditableElement } from '../EditableWrappers';

export const GenericCTA = () => {
    return (
        <section className="py-32 bg-[#0A0A0A] relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[400px] bg-blue-600/10 blur-[150px] pointer-events-none" />

            <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tighter">
                    <EditableText id="cta_title" defaultText="Pronto para o próximo nível?" />
                </h2>
                <p className="text-xl text-white/40 mb-12 max-w-2xl mx-auto leading-relaxed italic">
                    <EditableText id="cta_description" defaultText="Junte-se a centenas de marcas que já transformaram seus resultados com nossa metodologia exclusiva." />
                </p>

                <EditableElement id="cta_main_button">
                    <button className="bg-white text-black px-12 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition-all shadow-2xl shadow-white/10">
                        <EditableText id="cta_button_text" defaultText="Agendar Reunião Estratégica" />
                    </button>
                </EditableElement>
            </div>
        </section>
    );
};
