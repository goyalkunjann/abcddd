"use client";
import React from 'react';
import Image from 'next/image';
import focusIcon from '../../../../../public/assets/images/focus.png';
import buildingIcon from '../../../../../public/assets/images/building1.png';
import apartmentIcon from '../../../../../public/assets/images/apartment.png';
import bedroomIcon from '../../../../../public/assets/images/bedroom1.png';

const triangleIcon = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 22L22 2" stroke="black" strokeWidth="2"/>
    <path d="M2 22H22V2" stroke="black" strokeWidth="2"/>
    <path d="M7 22L22 7" stroke="black" strokeWidth="2"/>
  </svg>
);

const rupeeCircleIcon = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="black" strokeWidth="2" fill="none"/>
    <path d="M9 7H15" stroke="black" strokeWidth="1.5"/>
    <path d="M9 11H15" stroke="black" strokeWidth="1.5"/>
    <path d="M12 7V17" stroke="black" strokeWidth="1.5"/>
    <path d="M9 11L15 17" stroke="black" strokeWidth="1.5"/>
  </svg>
);

const iconsGroup1 = [
  { icon: buildingIcon, label: '40 * 40 sq.ft' },
  { icon: focusIcon, label: 'East' },
  { icon: bedroomIcon, label: '3 bedrooms' }
];

const iconsGroup2 = [
  { icon: triangleIcon, label: '3 floors', isSvg: true },
  { icon: rupeeCircleIcon, label: '2,18,130', isSvg: true },
  { icon: apartmentIcon, label: 'Residential' }
];

const BoxContent = ({ imageSrc, altText }) => (
  <div className="bg-white p-4 m-2 rounded-lg shadow-md flex flex-col items-center">
    <div className="mb-4">
      <Image src={imageSrc} alt={altText} width={400} height={500} className="rounded-lg" />
    </div>
  </div>
);

const IconsList = ({ icons }) => (
  <div className="flex flex-col space-y-4">
    {icons.map((icon, index) => (
      <div key={index} className="flex items-center px-6 py-4">
        {icon.isSvg ? (
          <div className="w-6 h-6">{icon.icon}</div>
        ) : (
          <Image
            src={icon.icon}
            alt={icon.label}
            width={24}
            height={24}
            className="filter-black"
          />
        )}
        <span className="text-md text-[#575757] ml-4">{icon.label}</span>
      </div>
    ))}
  </div>
);

export const Floor = () => {
  return (
    <div className="p-4 lg:p-6 mx-4 lg:mx-14">
      <h2 className="text-left text-2xl font-semibold mb-6">Our Floor Plans</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[1, 2, 3, 4].map((index) => (
          <div key={index} className="bg-[#FAF7F6] p-4 rounded-lg flex flex-col justify-between">
            <BoxContent imageSrc="/assets/images/image1.png" altText={`Image ${index}`} />
            <div className="flex flex-col lg:flex-row justify-between mt-4">
              <IconsList icons={iconsGroup1} />
              <IconsList icons={iconsGroup2} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Floor;
