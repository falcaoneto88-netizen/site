import React from 'react';
import { motion } from 'framer-motion';

interface FuturisticMarqueeProps {
    text: string;
    velocity?: number;
    direction?: 'left' | 'right';
    className?: string;
}

export const FuturisticMarquee: React.FC<FuturisticMarqueeProps> = ({
    text,
    velocity = 20,
    direction = 'left',
    className = ""
}) => {
    const marqueeVariant = {
        animate: {
            x: direction === 'left' ? [0, -1000] : [-1000, 0],
            transition: {
                x: {
                    repeat: Infinity,
                    repeatType: "loop" as const,
                    duration: velocity,
                    ease: "linear",
                },
            },
        },
    };

    return (
        <div className={`relative w-full overflow-hidden bg-white/5 py-3 md:py-4 border-y border-primary/5 select-none ${className}`}>
            <motion.div
                className="flex whitespace-nowrap"
                variants={marqueeVariant}
                animate="animate"
            >
                {[...Array(20)].map((_, i) => (
                    <span
                        key={i}
                        className="text-2xl md:text-4xl lg:text-6xl font-serif font-bold uppercase tracking-tighter mx-4 text-primary/5 hover:text-primary/10 transition-colors"
                    >
                        {text} &nbsp;
                    </span>
                ))}
            </motion.div>
        </div>
    );
};
