import React from 'react';
import { EditableText } from './EditableWrappers';
import { GOOGLE_MAPS_EMBED } from '../lib/constants';

export const MapSection = () => {
    return (
        <section className="h-[300px] md:h-[450px] w-full relative group">
            <iframe
                src={GOOGLE_MAPS_EMBED}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Oral Unic"
            />
            <div className="absolute top-4 right-4 z-20">
                <EditableText
                    id="map_url_config"
                    defaultText="Configurar Mapa (URL Google Maps)"
                    className="bg-white/80 p-2 rounded text-[8px] text-primary font-bold opacity-0 group-hover:opacity-100 transition-opacity"
                />
            </div>
        </section>
    );
};
