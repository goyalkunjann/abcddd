'use client';
import React, { useState, useEffect } from 'react';
import { CommonButton } from '../Button/CommonButton';
import { HeroSectionButton } from '../Button/HeroSectionButton';

export const HeroSectionContent = () => {
  const [index, setIndex] = useState(0);
  const titles = ['Ideal Design', 'Interior Design', 'Structure'];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 3000); // Change text every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className='relative flex-grow lg:flex lg:items-start lg:justify-start w-full lg:text-left text-center'>
      <style jsx>{`
        .sliding-text {
          display: inline-block;
          position: relative;
          animation: slide 3s infinite;
        }

        @keyframes slide {
          0%, 100% {
            opacity: 0;
            transform: translateY(100%);
          }
          10%, 90% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
      <div className='lg:pl-10 py-24 lg:py-10'>
        <h1 className='text-[#3f3d3d] text-[32px] lg:text-[47px] pt-10 lg:pt-0 font-bold'>Construct your</h1>
        <h2 className='text-[#A46254] text-[28px] lg:text-[38px] font-bold sliding-text'>{titles[index]}</h2>
        <p className='text-[#3f3d3d] mb-10 text-[18px] leading-[24px] font-medium'>
          Hassle free Interiors and Construction from start to finish.
        </p>
        <CommonButton>Start your construction</CommonButton>
        <div className='flex justify-center lg:justify-start gap-2 mt-4 items-center flex-nowrap overflow-visible'>
          <span className='text-black text-[10px] md:text-[14px] lg:text-[16px] mt-2 whitespace-nowrap'>Popular:</span>
          <HeroSectionButton title='Interior designing' />
          <HeroSectionButton title='End to end construction' />
        </div>
      </div>
    </section>
  );
};
