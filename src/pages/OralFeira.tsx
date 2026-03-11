import React from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { WhyChoose } from '../components/WhyChoose';
import { PatientResults } from '../components/PatientResults';
import { HowItWorks } from '../components/HowItWorks';
import { DoctorSection } from '../components/DoctorSection';
import { FAQ } from '../components/FAQ';
import { Contact } from '../components/Contact';
import { FinalCTA } from '../components/FinalCTA';
import { MapSection } from '../components/MapSection';
import { Footer } from '../components/Footer';
import { UnitGallery } from '../components/UnitGallery';
import { EditorProvider } from '../context/EditorContext';
import { EditorToolbar } from '../components/EditorToolbar';

const OralFeira = () => {
    return (
        <EditorProvider projectId="oral-feira">
            <div className="min-h-screen selection:bg-primary/10 selection:text-primary">
                <Navbar />
                <main className="space-y-0 text-sm md:text-base">
                    <Hero />
                    <Services />
                    <WhyChoose />
                    <PatientResults />
                    <DoctorSection />
                    <HowItWorks />
                    <UnitGallery />
                    <FAQ />
                    <Contact />
                    <FinalCTA />
                    <MapSection />
                </main>
                <Footer />
                <EditorToolbar />
            </div>
        </EditorProvider>
    );
};

export default OralFeira;
