'use client';
import React from 'react';
import { CommonButton } from '../../Button/CommonButton';

export const House6 = () => {
  function handleClick() {
    console.log("Button clicked");
  }

  return (
    <section 
      className='relative lg:max-w-[1450px] w-full mx-auto h-[400px] lg:h-[600px] flex flex-col lg:flex-row items-center justify-center'
      style={{
        backgroundImage: "url('/assets/images/background1.png')", 
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className='absolute inset-0' style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}></div>
      <div className='relative flex flex-col lg:w-1/2 w-full px-4 lg:px-[130px] text-white items-center lg:items-start'>
        <div className='flex flex-col w-full lg:w-[500px] gap-[10px] text-[30px] lg:text-[40px] font-semibold leading-[30px] lg:leading-[37px] text-center lg:text-left'>
          <h1 className='text-black text-[30px] lg:text-[45px]'>Construct your</h1>
          <h1 className='text-[#A46254] text-[30px] lg:text-[45px]'>Dream Home</h1>
        </div>
        <p className='text-[12px] lg:text-[18px] leading-[20px] lg:leading-[24px] lg:w-[377px] w-full font-medium mt-[22px] mb-[30px] text-black text-center lg:text-left'>
          Hassle free Interiors and Construction from start to finish.
        </p>
        <CommonButton onClick={handleClick} className='mt-[22px]'>
          Start your construction
        </CommonButton>
      </div>
    </section>
  );
}

export default House6;