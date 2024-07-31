'use client';
import React from 'react';
import Image from 'next/image';
import backgroundImage from '/public/assets/images/front2.png';
import { CommonButton } from '../../Button/CommonButton';

const House2 = () => {
  return (
    <div className="relative flex items-center justify-center w-full h-[400px] lg:h-[600px]">
      <Image 
        src={backgroundImage} 
        alt="Background Image" 
        fill
        style={{ objectFit: 'cover', objectPosition: 'bottom' }}
        className="w-full h-full"
      />
      <div className="absolute bottom-0 text-center p-4 mb-10 w-full md:w-auto">
        <h1 className="text-white text-2xl font-bold md:text-4xl mb-4">The finest choice in modular solutions</h1>
        <CommonButton className="text-xs lg:text-sm py-1 px-2 lg:py-2 lg:px-4">Start your construction</CommonButton>
      </div>
    </div>
  );
};

export default House2;