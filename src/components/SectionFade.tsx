import React from 'react';

interface SectionFadeProps {
  children: React.ReactNode;
  topColor?: string;
  bottomColor?: string;
}

export const SectionFade: React.FC<SectionFadeProps> = ({
  children,
  topColor = '#FDFCF8',
  bottomColor = '#FDFCF8',
}) => {
  return (
    <div className="relative">
      {/* Top fade — z-0 so it never blocks content */}
      <div
        className="absolute top-0 left-0 right-0 z-0 pointer-events-none"
        style={{
          height: '15%',
          background: `linear-gradient(to bottom, ${topColor}, transparent)`,
        }}
      />
      {/* Content always above fades */}
      <div className="relative z-[1]">
        {children}
      </div>
      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 z-0 pointer-events-none"
        style={{
          height: '15%',
          background: `linear-gradient(to top, ${bottomColor}, transparent)`,
        }}
      />
    </div>
  );
};
