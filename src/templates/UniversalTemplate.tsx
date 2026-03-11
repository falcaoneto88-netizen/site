import React from 'react';
import { GenericNavbar } from '../components/generic/GenericNavbar';
import { GenericHero } from '../components/generic/GenericHero';
import { GenericFeatures } from '../components/generic/GenericFeatures';
import { GenericCTA } from '../components/generic/GenericCTA';
import { GenericFooter } from '../components/generic/GenericFooter';

const UniversalTemplate = () => {
    return (
        <div className="bg-[#050505] min-h-screen selection:bg-white selection:text-black">
            <GenericNavbar />
            <main>
                <GenericHero />
                <GenericFeatures />
                <GenericCTA />
            </main>
            <GenericFooter />
        </div>
    );
};

export default UniversalTemplate;
