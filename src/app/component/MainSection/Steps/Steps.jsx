'use client';
import React from 'react';
import Image from 'next/image';

import step2 from '/public/assets/images/step2.png';
import step3 from '/public/assets/images/step3.png';
import step4 from '/public/assets/images/step4.png';
import step5 from '/public/assets/images/step5.png';
import curve from '/public/assets/images/curve.png';
import { CommonButton } from '../../Button/CommonButton'; // Corrected import path

const Steps = () => {
  const steps = [
    { img: step2, label: 'Meet Experts' },
    { img: step2, label: 'Book with us' },
    { img: step3, label: 'Receive detailed plan' },
    { img: step4, label: 'Track and transact' },
    { img: step5, label: 'Move In' },
  ];

  return (
    <div className="text-center bg-white py-6 relative">
      <h1 className="text-2xl mb-4 text-black font-bold mt-8">Your dream home in 5 steps!</h1>
      <p className="mb-8 text-black">Looking to design your home interiors? Here’s how you can get started.</p>
      <div className="flex flex-wrap justify-center items-center gap-4 mx-4 relative">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div className="flex flex-col items-center relative">
              <div className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full overflow-hidden border border-gray-200 flex items-center justify-center">
                <div className="w-full h-full relative">
                  <Image src={step.img} alt={step.label} layout="fill" objectFit="cover" className="rounded-full" />
                </div>
              </div>
              <p className="mt-1 text-[#575757] text-[10px] md:text-[12px] lg:text-[14px]">{step.label}</p>
            </div>
            {index < steps.length - 1 && (
              <div className="flex items-center justify-center -ml-4 lg:-ml-6">
                <Image src={curve} alt="Curve" width={100} height={60} className="object-contain" />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
      <div className="mt-10">
        <CommonButton>Start your construction</CommonButton>
      </div>
    </div>
  );
};

export default Steps;
