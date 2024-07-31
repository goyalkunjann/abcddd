'use client'
import React from 'react';

export const CommonButton = ({ children, onClick = () => {} }) => {
  return (
    <button
      className='rounded-full lg:rounded-lg  shadow-md py-1 lg:py-2 px-2 lg:px-6 px-8 py-4 text-sm lg:text-lg text-white bg-[#A46254] leading-tight hover:bg-[#93503e]'
      onClick={onClick}
    >
      {children}
    </button>
  );
};
