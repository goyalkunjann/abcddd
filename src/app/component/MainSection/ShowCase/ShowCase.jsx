'use client';
import React from 'react';
import Image from 'next/image';
import show1 from '/public/assets/images/show1.jpg';
import show2 from '/public/assets/images/show2.jpg';
import show3 from '/public/assets/images/show3.jpg';
import show4 from '/public/assets/images/show4.jpg';
import show5 from '/public/assets/images/show5.jpg';

const ShowCase = () => {
  const showcases = [
    {
      img: show1,
      heading: 'Meet our expert',
      points: [
        'Raise a house construction service request or call us at +91 7505 205 205. Our team will get in touch with you to understand your requirements in more detail.',
        'They will arrange the meeting with our technical expert.'
      ]
    },
    {
      img: show2,
      heading: 'Book with us',
      points: [
        'Good to go! You pay 2% of the estimated project cost as the booking amount'
      ]
    },
    {
      img: show3,
      heading: 'Receive detailed plan',
      points: [
        'Our architects will provide exhaustive drawings and designs till you are completely satisfied.',
        'House construction Designs include floor plans, 3D elevations, electrical, plumbing, and structural designs',
        'Project manager is allotted and project management team works on your contract.',
        'All project details like specifications, work, and payment schedules etc are fed into the system.'
      ]
    },
    {
      img: show4,
      heading: 'Track and transact',
      points: [
        'Monitor progress through our app.',
        'Make transactions securely.'
      ]
    },
    {
      img: show5,
      heading: 'Move In',
      points: [
        'Receive the keys to your new home.',
        'Enjoy your newly constructed house.'
      ]
    },
  ];

  return (
    <div className="bg-white py-6 px-4 md:px-10">
      <div className="container mx-auto">
        {showcases.map((showcase, index) => (
          <div key={index} className="flex flex-wrap md:flex-nowrap items-center my-4">
            <div className="w-full md:w-1/2 px-4">
              <div className="p-2">
                <Image src={showcase.img} alt={showcase.heading} className="object-cover rounded-lg" width={300} height={300} />
              </div>
            </div>
            <div className="w-full md:w-1/2 px-4">
              <h1 className="text-xl md:text-2xl mb-2 text-black">{showcase.heading}</h1>
              <ul className="list-disc pl-5 text-[#575757] max-w-md">
                {showcase.points.map((point, idx) => (
                  <li key={idx} className="mb-2 text-sm">
                    <p className="text-[#575757] text-justify">{point}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowCase;
