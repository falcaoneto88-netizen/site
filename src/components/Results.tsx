import React from 'react';
import { motion } from 'framer-motion';

const items = [
    { id: 1, image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=2070" },
    { id: 2, image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2000" },
    { id: 3, image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2070" }
];

export const Results = () => {
    return (
        <section className="py-28 bg-white">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="max-w-2xl">
                        <h2 className="text-2xl md:text-[30px] font-serif mb-6 text-foreground leading-tight">
                            Galeria de <span className="text-primary italic">Transformações</span>
                        </h2>
                        <p className="text-foreground/60 text-lg">
                            Resultados reais que comprovam a nossa dedicação à excelência estética.
                        </p>
                    </div>
                    <div className="flex gap-4">
                        <button className="w-12 h-12 rounded-[10px] border border-primary/20 flex items-center justify-center hover:bg-primary/5 transition-all">←</button>
                        <button className="w-12 h-12 rounded-[10px] border border-primary/20 flex items-center justify-center hover:bg-primary/5 transition-all">→</button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {items.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="aspect-square rounded-[2rem] overflow-hidden shadow-lg group"
                        >
                            <img
                                src={item.image}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                alt="Resultado Clínico"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
