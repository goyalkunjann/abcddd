'use client';
import React from 'react';
import { HeroSectionContent } from './HeroSectionContent';
import { BookForm } from './BookingPopUp/BookForm';
import Image from 'next/image';
import whatsappicon from "../../../../public/assets/images/whatsapp.svg";
import phoneNoicon from "../../../../public/assets/images/phone.svg";

export const HeroSection = ({ altText }) => {
  return (
    <div className="relative w-full">
      <img src="/assets/images/bannerimage.jpeg" alt={altText} className='w-full h-[600px] lg:h-[700px] object-cover object-bottom'/>
      <a href="https://api.whatsapp.com/send?phone=9810117643" target="_blank" rel="noopener noreferrer" className="cursor-pointer inline z-[20] fixed right-0 overflow-hidden bg-white px-[10px] py-[7px] rounded-l-[6px] shadow-xl flex items-center w-[55px] h-[55px] top-[118px]">
        <Image src={whatsappicon} alt='whatsapp' className='w-[34px]' />
      </a>
      <a href="tel:+919810232124" className="cursor-pointer inline z-[20] fixed right-0 overflow-hidden bg-white px-[10px] py-[7px] rounded-l-[6px] shadow-xl flex items-center w-[55px] h-[55px] top-[180px]">
        <Image src={phoneNoicon} alt='contact' className='w-[26px]' />
      </a>
      <div className="absolute inset-0 flex flex-col lg:flex-row items-center justify-center w-full h-full px-4 lg:px-16">
        <HeroSectionContent />
        <div className="w-full lg:w-1/3 px-4 lg:px-0 lg:absolute lg:right-24">
          {/* Ensuring BookForm appears below the background image on mobile */}
           <div className="hidden lg:block mt-[0px]">
            <BookForm />
           </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
