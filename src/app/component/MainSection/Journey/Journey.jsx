"use client";
import React from 'react';
import { CommonHeading } from '../../Heading/CommonHeading';

export const Journey = () => {
  const steps = [
    {
      title: 'Booking',
      description: 'Typically 1 week*',
      note: 'You pay 10%',
    },
    {
      title: 'Design Phase',
      description: 'Typically 2-4 weeks*',
      note: 'You pay 40%',
    },
    {
      title: 'Construction',
      description: 'Typically 8-12 weeks*',
      note: 'You pay 40%',
    },
    {
      title: 'Final Touches',
      description: 'Typically 1-2 weeks*',
      note: 'You pay 10%',
    },
  ];  

  const formSteps = [
    { title: 'Fill form', description: 'Share your basic information and property details in a quiz.' },
    { title: 'Get a call', description: 'Our representative connects with you to understand your requirements' },
    { title: 'Share your floor plan', description: 'We match you to a designer as per your requirements.' },
    { title: 'Speak to your designer', description: 'Your designer takes the time to understand your needs.' },
    { title: 'Design proposal', description: 'A design proposal and quotes are created based on your budget.' },
    { title: 'Revised quote', description: 'Share your feedback and receive a revised proposal.' },
    { title: 'You pay 10%', description: '' },
  ];

  return (
    <div className="p-4 lg:p-6 mx-4 lg:mx-14 flex flex-wrap">
      <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
        <CommonHeading>Your journey is a snapshot</CommonHeading>
        <div className="flex flex-col items-start relative mt-10">
          {steps.map((step, index) => (
            <div key={index} className="flex mb-4 w-full relative">
              <div className="w-full flex flex-col border-l-4 border-[#A46254] pl-4 bg-[#FAF7F6] text-left p-2 rounded-lg">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-[#A46254] text-white flex items-center justify-center mr-4">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <span className="text-lg text-[#000000]">{step.title}</span>
                  </div>
                </div>
                <div className="mt-2 ml-12">
                  <span className="text-sm text-[#575757]">{step.description}</span>
                  <span className="block text-lg mt-2 text-[#575757]">{step.note}</span>
                </div>
                {index < steps.length - 1 && (
                  <div className="flex-1 w-px border-l-2 border-dashed border-[#A46254] mt-4 ml-4"></div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full lg:w-1/2 pl-0 lg:pl-12">
        <div className="flex flex-col items-start">
          <h1 className='text-[24px] lg:text-[32px] mb-4 lg:mb-8 mt-8 lg:mt-16'>Booking</h1>
          {formSteps.map((step, index) => (
            <div key={index} className="flex items-start mb-4 relative">
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-[#575757] absolute mt-[25px]"></div>
                {index < formSteps.length - 1 && (
                  <div className="flex-1 w-px border-l-2 border-dashed border-[#575757] absolute top-8 left-1"></div>
                )}
              </div>
              <div className="ml-6">
                <span className="text-lg text-[#000000]">{step.title}</span>
                {step.description && (
                  <div className="text-sm text-[#575757]">{step.description}</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Journey;
