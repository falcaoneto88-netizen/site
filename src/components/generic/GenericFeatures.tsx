import React from 'react';
import { EditableText, EditableElement } from '../EditableWrappers';
import { Shield, Zap, Target, BarChart3 } from 'lucide-react';

const icons = {
    Shield: <Shield className="w-6 h-6" />,
    Zap: <Zap className="w-6 h-6" />,
    Target: <Target className="w-6 h-6" />,
    BarChart3: <BarChart3 className="w-6 h-6" />,
};

const FeatureItem = ({ id, defaultTitle, defaultDesc, icon }: any) => (
    <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-white/15 transition-all group">
        <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
            {icon}
        </div>
        <h3 className="text-xl font-bold text-white mb-4">
            <EditableText id={`${id}_title`} defaultText={defaultTitle} />
        </h3>
        <p className="text-white/40 leading-relaxed italic">
            <EditableText id={`${id}_desc`} defaultText={defaultDesc} />
        </p>
    </div>
);

export const GenericFeatures = () => {
    return (
        <section className="py-24 bg-[#050505]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <EditableText id="features_label" defaultText="FUNCIONALIDADES" className="text-[10px] font-bold tracking-[0.2em] text-blue-500 mb-4 block" />
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                        <EditableText id="features_title" defaultText="Tudo o que você precisa para escalar com qualidade." />
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <FeatureItem
                        id="feature_1"
                        icon={icons.Shield}
                        defaultTitle="Segurança Total"
                        defaultDesc="Proteção de ponta a ponta para seus dados e de seus clientes."
                    />
                    <FeatureItem
                        id="feature_2"
                        icon={icons.Zap}
                        defaultTitle="Performance"
                        defaultDesc="Velocidade de carregamento otimizada para máxima experiência."
                    />
                    <FeatureItem
                        id="feature_3"
                        icon={icons.Target}
                        defaultTitle="Assertividade"
                        defaultDesc="Foco total nos objetivos de negócio e conversão real."
                    />
                    <FeatureItem
                        id="feature_4"
                        icon={icons.BarChart3}
                        defaultTitle="Analytics"
                        defaultDesc="Dados claros para tomada de decisão baseada em evidências."
                    />
                </div>
            </div>
        </section>
    );
};
