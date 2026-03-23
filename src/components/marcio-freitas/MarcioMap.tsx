import React from 'react';
import { MARCIO_MAPS_EMBED } from './marcioConstants';

export const MarcioMap = () => {
  return (
    <section className="relative bg-[#0d0a06]">
      <div className="h-[300px] md:h-[450px] w-full">
        <iframe
          src={MARCIO_MAPS_EMBED}
          width="100%"
          height="100%"
          style={{ border: 0, filter: 'invert(0.9) hue-rotate(180deg) brightness(0.9) contrast(1.1)' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Localização Dr. Marcio Freitas"
        />
      </div>
    </section>
  );
};
