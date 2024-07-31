import React from 'react';

export const HeroSectionButton = ({ title, onclick = () => {} }) => {
  const handleClick = () => {
    if (onclick) {
      onclick();
    }
  };

  return (
    <>
      <button
        className='bg-transparent rounded-full py-1 px-2 text-xs md:text-sm lg:text-base whitespace-nowrap border-[1px] border-black'
        onClick={handleClick}
      >
        {title}
      </button>
    </>
  );
};
