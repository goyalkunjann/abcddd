import React from 'react';

import House from '../component/MainSection/House/House1'; 

import { HeroSection } from '../component/MainSection/HeroSection';
import { Packages } from '../component/MainSection/Packages/Packages';

const howitwork = () => {
    return (
        <div className='bg-white'>
            <House />
            <Packages/>
            
            
        </div>
    );
}

export default howitwork;