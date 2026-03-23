import React from 'react';
import { NavbarV2 } from './NavbarV2';
import { HeroV2 } from './HeroV2';
import { ServicesV2 } from './ServicesV2';
import { WhyChooseV2 } from './WhyChooseV2';
import { PatientResults } from '../PatientResults';
import { DoctorSectionV2 } from './DoctorSectionV2';
import { HowItWorks } from '../HowItWorks';
import { UnitGallery } from '../UnitGallery';
import { FAQV2 } from './FAQV2';
import { ContactV2 } from './ContactV2';
import { FooterV2 } from './FooterV2';
import { MapSection } from '../MapSection';
import { SectionFade } from '../SectionFade';

export const OralUnicLayout = () => {
  return (
    <>
      <NavbarV2 />
      <main className="space-y-0 text-sm md:text-base">
        <HeroV2 />
        <SectionFade topColor="#FDFCF8" bottomColor="#FDFCF8">
          <ServicesV2 />
        </SectionFade>
        <SectionFade topColor="#FDFCF8" bottomColor="#FDFCF8">
          <WhyChooseV2 />
        </SectionFade>
        <SectionFade topColor="#FDFCF8" bottomColor="#FDFCF8">
          <PatientResults />
        </SectionFade>
        <DoctorSectionV2 />
        <SectionFade topColor="#FDFCF8" bottomColor="#FDFCF8">
          <HowItWorks />
        </SectionFade>
        <SectionFade topColor="#FDFCF8" bottomColor="#FDFCF8">
          <UnitGallery />
        </SectionFade>
        <SectionFade topColor="hsl(var(--background))" bottomColor="hsl(var(--background))">
          <FAQV2 />
        </SectionFade>
        <SectionFade topColor="hsl(var(--primary))" bottomColor="hsl(var(--primary))">
          <ContactV2 />
        </SectionFade>
        <MapSection />
      </main>
      <FooterV2 />
    </>
  );
};
