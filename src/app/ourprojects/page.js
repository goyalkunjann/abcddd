import React from 'react';

import House from '../component/MainSection/House/House1'; 

import { HeroSection } from '../component/MainSection/HeroSection';
import Projects from '../component/MainSection/Projects/Projects';
import Projects1 from '../component/MainSection/Projects/Projects1';


const howitwork = () => {
    return (
        <div className='bg-white'>
            <House />
            <div className='mt-6 '>
            <Projects/>
            </div>
            
            
        </div>
    );
}

export default howitwork;