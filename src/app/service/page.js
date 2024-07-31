import React from 'react';
import House from '../component/MainSection/House/House4'; 
import { Journey } from '../component/MainSection/Journey/Journey';
import { Faqs } from '../component/MainSection/FAQs/Faqs';
import { OfferTwo } from '../component/MainSection/OfferTwo/OfferTwo';
import { HeroSection } from '../component/MainSection/HeroSection1';
import { CraftSection } from '../component/MainSection/CraftSection/CraftSection';

const service = () => {
    return (
        <div className="bg-white">
            <House />
            <OfferTwo />
            <CraftSection />
            <Journey />
            <Faqs />
         
        </div>
    );
}

export default service;
