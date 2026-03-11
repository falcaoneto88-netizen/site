import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { EditableText, EditableImage } from './EditableWrappers';

interface PremiumHeroProps {
    id: string;
    badgeText?: string;
    titlePart1?: string;
    titlePart2?: string;
    description?: string;
    imageSrc?: string;
    ctaPrimaryText?: string;
    ctaSecondaryText?: string;
    heightVariant?: 'high' | 'medium';
}

export const PremiumHeroStandard: React.FC<PremiumHeroProps> = ({
    id,
    badgeText = "Viva a Experiência Premium",
    titlePart1 = "Sinta o prazer de",
    titlePart2 = "sorrir novamente",
    description = "Combinamos alta tecnologia, estética de luxo e um atendimento personalizado.",
    imageSrc = "/assets/real-photos/dra_hero_hq_v5.png",
    ctaPrimaryText = "Começar Transformação",
    ctaSecondaryText = "Conhecer Especialidades",
    heightVariant = 'high'
}) => {
    const heightClass = heightVariant === 'high' ? 'h-[85vh] md:h-[90vh]' : 'h-[60vh] md:h-[70vh]';

    return (
        <section className={`relative ${heightClass} flex items-center overflow-hidden bg-[#FDFCF8]`}>
            {/* Background Layer */}
            <div className="absolute inset-0 z-0">
                <motion.div
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="relative w-full h-full"
                >
                    <EditableImage
                        id={`${id}_bg`}
                        defaultSrc={imageSrc}
                        alt="Hero Background"
                        className="absolute right-0 top-0 h-full w-full md:w-[65%] lg:w-[60%] max-w-[1100px] object-cover object-[center_35%]"
                    />

                    {/* Gradient Overlays (DNA do Lovable Style) */}
                    <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#FDFCF8] via-[#FDFCF8] to-transparent w-full md:w-[85%] lg:w-[80%] z-10 backdrop-blur-[1px] pointer-events-none" />
                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#FDFCF8] to-transparent z-20 pointer-events-none" />
                    <div className="absolute inset-0 bg-[#FDFCF8]/5 mix-blend-multiply z-0 pointer-events-none" />
                </motion.div>
            </div>

            {/* Content Layer */}
            <div className="max-w-[1600px] mx-auto w-full px-6 relative z-30 pt-28 md:pt-36">
                <div className="max-w-2xl">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <span className="inline-block px-4 py-1.5 mb-6 text-[10px] font-bold tracking-[0.2em] uppercase text-accent bg-accent/10 rounded-full backdrop-blur-sm">
                            <EditableText id={`${id}_badge`} defaultText={badgeText} />
                        </span>

                        <h1 className="text-2xl md:text-[30px] font-serif font-medium leading-[1.1] mb-6 text-foreground">
                            <EditableText id={`${id}_title_1`} defaultText={titlePart1} />
                            <EditableText id={`${id}_title_2`} defaultText={titlePart2} className="text-primary italic" />
                        </h1>

                        <EditableText
                            id={`${id}_desc`}
                            as="p"
                            defaultText={description}
                            className="text-sm md:text-base text-foreground/70 mb-8 leading-relaxed max-w-sm font-light block"
                        />

                        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                            <button className="btn-primary group">
                                <EditableText id={`${id}_cta_primary`} defaultText={ctaPrimaryText} />
                                <ArrowRight className="ml-2 w-[1.1em] h-[1.1em] group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
                            </button>
                            <button className="btn-outline">
                                <EditableText id={`${id}_cta_secondary`} defaultText={ctaSecondaryText} />
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
