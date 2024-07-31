"use client";
import React from "react";
import { CommonHeading } from "../../Heading/CommonHeading";
import Image from "next/image";
import constructionimage01 from "../../../../../public/assets/images/Constructionimage01.png";
import constructionimage02 from "../../../../../public/assets/images/Constructionimage02.png";
import constructionimage03 from "../../../../../public/assets/images/Constructionimage03.png";

export const OfferTwo = () => {
  const data = [
    {
      icon: constructionimage01,
      title: "Modular kitchen",
      subHeading: "Functional kitchen, wardrobe and storage",
    },
    {
      icon: constructionimage02,
      title: "Wardrobe",
      subHeading: "Personalize as per your needs ",
    },
    {
      icon: constructionimage03,
      title: "Storage",
      subHeading: "A beautiful space for everything. Get bookshelves, shoe rack, etc.",
    },
  ];

  return (
    <div className="bg-white p-4 lg:p-6 mx-4 lg:mx-14">
      <CommonHeading className="text-left ml-2 mb-6">
        What we offer
      </CommonHeading>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col shadow-lg rounded-lg mb-[20px] w-full transition-transform transform hover:scale-105"
          >
            <Image
              src={item.icon}
              alt={item.subHeading}
              className="h-[200px] sm:h-[300px] rounded-t-lg object-cover"
            />
            <div className="border-t-2 bg-white p-4 flex flex-col items-center gap-2 rounded-b-lg">
              <p className="text-[#575757] text-base sm:text-lg font-semibold">
                {item.title}
              </p>
              <p className="text-center text-sm">
                {item.subHeading}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
