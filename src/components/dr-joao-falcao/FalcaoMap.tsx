import React from 'react';
import { FALCAO_MAPS_EMBED } from './falcaoConstants';

export const FalcaoMap = () => {
  return (
    <section className="relative bg-[#0A0A0A]">
      <div className="h-[300px] md:h-[450px] w-full">
        <iframe
          src={FALCAO_MAPS_EMBED}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Localização"
        />
      </div>
    </section>
  );
};
