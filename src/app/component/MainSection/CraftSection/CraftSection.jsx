"use client";
import React from "react";
import Image from "next/image";
import craft1 from "../../../../../public/assets/images/craft1.png";
import craft2 from "../../../../../public/assets/images/craft2.png";
import craft3 from "../../../../../public/assets/images/craft3.png";
import craft4 from "../../../../../public/assets/images/craft4.png";
import craft5 from "../../../../../public/assets/images/craft5.png";
import craft6 from "../../../../../public/assets/images/craft6.png";
import { CommonHeading } from "../../Heading/CommonHeading";

export const CraftSection = () => {
  const images = [
    { src: craft1, text: "Design" },
    { src: craft2, text: "Core Materials" },
    { src: craft3, text: "Manufacturing" },
    { src: craft4, text: "Quality Checks" },
    { src: craft5, text: "Packaging" },
    { src: craft6, text: "Delivery & Installation" },
  ];

  return (
    <div className="bg-white p-4 lg:p-6 mx-4 lg:mx-14">
      <CommonHeading className="text-left ml-2 mb-6">
        What goes into crafting the best
      </CommonHeading>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((img, index) => (
          <div key={index} className="relative">
            <Image
              src={img.src}
              alt={`Image ${index + 1}`}
              className="w-full h-48 object-cover rounded-lg"
            />
            <div className="absolute inset-0 flex items-end bg-black bg-opacity-50 rounded-lg p-4">
              <p className="text-white text-sm font-semibold mb-2 ml-2">
                {img.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
