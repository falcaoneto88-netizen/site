import React from 'react';
import { motion } from 'framer-motion';
import { EditableText, EditableImage, EditableElement } from '../EditableWrappers';
import { EditableSectionColors, ColorDef } from '../EditableSectionColors';
import { LOGO_PATH } from '../../lib/constants';

const BEN_COLORS: ColorDef[] = [
    { id: 'bg', label: 'Fundo', defaultColor: '#FDFCF8', cssProperty: 'backgroundColor' },
    { id: 'fadeLateral', label: 'Fade Lateral', defaultColor: '#FDFCF8', cssProperty: 'backgroundColor' },
    { id: 'fadeBottom', label: 'Fade Inferior', defaultColor: '#FDFCF8', cssProperty: 'backgroundColor' },
    { id: 'title', label: 'Título', defaultColor: '#000000', cssProperty: 'color' },
    { id: 'titleAccent', label: 'Título Destaque', defaultColor: '#540247', cssProperty: 'color' },
    { id: 'text', label: 'Texto', defaultColor: '#555555', cssProperty: 'color' },
];

export const OrtodontiaBenefits = () => {
    return (
        <EditableSectionColors sectionId="ortodontiaBenefits" colors={BEN_COLORS}>
            {(colors) => (
                <section className="relative overflow-hidden" style={{ backgroundColor: colors.bg }}>
                    {/* MOBILE */}
                    <div className="md:hidden flex flex-col">
                        <div className="relative w-full aspect-square overflow-hidden">
                            <motion.div initial={{ opacity: 0, scale: 1.05 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1.2, ease: "easeOut" }} className="w-full h-full">
                                <EditableImage id="orto_benefits_img_mobile" defaultSrc="/assets/ortodontia/benefits_smile.jpg" alt="Benefícios do Tratamento Ortodôntico" className="w-full h-full object-cover" />
                            </motion.div>
                            <div className="absolute bottom-0 left-0 right-0 h-32 z-20 pointer-events-none" style={{ background: `linear-gradient(to top, ${colors.fadeBottom}, transparent)` }} />
                        </div>
                        <div className="px-6 pt-6 pb-10">
                            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: "easeOut" }}>
                                <img src={LOGO_PATH} alt="Oral Unic" className="w-12 mb-4 opacity-80" />
                                <h2 className="text-2xl md:text-[30px] font-serif font-medium leading-[1.1] mb-4">
                                    <span style={{ color: colors.titleAccent }} className="italic"><EditableText id="orto_benefits_t1" defaultText="Benefícios do " /></span>
                                    <span style={{ color: colors.title }}><EditableText id="orto_benefits_t2" defaultText="Tratamento Ortodôntico" /></span>
                                </h2>
                                <div style={{ color: colors.text }} className="space-y-3">
                                    <EditableText id="orto_benefits_p1" as="p" defaultText="Ao corrigir o alinhamento dos dentes e da mordida, o paciente percebe benefícios que vão além do sorriso mais bonito. Há melhora na mastigação, maior facilidade de higienização, redução de desgastes dentários e mais conforto no dia a dia." className="text-sm leading-relaxed font-light block" />
                                    <EditableText id="orto_benefits_p2" as="p" defaultText="Além disso, o alinhamento correto contribui diretamente para a autoestima e para a saúde bucal a longo prazo." className="text-sm leading-relaxed font-light block" />
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* DESKTOP */}
                    <div className="hidden md:block min-h-[70vh]">
                        <div className="absolute inset-0 z-0">
                            <motion.div initial={{ opacity: 0, scale: 1.05 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1.2, ease: "easeOut" }} className="relative w-full h-full">
                                <EditableImage id="orto_benefits_img" defaultSrc="/assets/ortodontia/benefits_smile.jpg" alt="Benefícios do Tratamento Ortodôntico" className="absolute right-0 top-0 h-full w-[65%] lg:w-[60%] max-w-[1100px] object-cover object-[80%_center]" />
                                <div className="absolute inset-y-0 z-10 backdrop-blur-[2px] pointer-events-none left-[35%] w-[16.25%] lg:left-[40%] lg:w-[15%]" style={{ background: `linear-gradient(to right, ${colors.fadeLateral}, ${colors.fadeLateral}99, transparent)` }} />
                                <div className="absolute bottom-0 left-0 right-0 h-32 z-20 backdrop-blur-[1px] pointer-events-none" style={{ background: `linear-gradient(to top, ${colors.fadeBottom}, transparent)` }} />
                            </motion.div>
                        </div>
                        <div className="max-w-[1600px] mx-auto w-full px-6 relative z-30 py-20 md:py-28 flex items-center min-h-[70vh]">
                            <div className="max-w-md lg:max-w-lg">
                                <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: "easeOut" }}>
                                    <img src={LOGO_PATH} alt="Oral Unic" className="w-14 mb-6 opacity-80" />
                                    <h2 className="text-[30px] font-serif font-medium leading-[1.1] mb-6">
                                        <span style={{ color: colors.titleAccent }} className="italic"><EditableText id="orto_benefits_t1" defaultText="Benefícios do " /></span>
                                        <span style={{ color: colors.title }}><EditableText id="orto_benefits_t2" defaultText="Tratamento Ortodôntico" /></span>
                                    </h2>
                                    <div style={{ color: colors.text }} className="space-y-4">
                                        <EditableText id="orto_benefits_p1" as="p" defaultText="Ao corrigir o alinhamento dos dentes e da mordida, o paciente percebe benefícios que vão além do sorriso mais bonito. Há melhora na mastigação, maior facilidade de higienização, redução de desgastes dentários e mais conforto no dia a dia." className="text-sm leading-relaxed font-light block" />
                                        <EditableText id="orto_benefits_p2" as="p" defaultText="Além disso, o alinhamento correto contribui diretamente para a autoestima e para a saúde bucal a longo prazo." className="text-sm leading-relaxed font-light block" />
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </EditableSectionColors>
    );
};
