import React from "react";
import { CommonHeading } from "../../Heading/CommonHeading";
import Image from "next/image";
import interioricon from "../../../../../public/assets/images/Interiordesignicon.png";
import lightningicon from "../../../../../public/assets/images/Lightingdesignicon.png";
import outdooricon from "../../../../../public/assets/images/Outdoordesignicon.png";

export const ServicesOffered = () => {
  return (
    <div
     
      className="flex flex-col gap-[40px] lg:max-w-[1290px] mx-auto w-full mb-[45px] lg:px-0 px-[20px]"
    >
      <div className="flex gap-[18px] items-center">
        <span className=" w-[75px] h-[2px] bg-[#1F1F1F]"></span>
        <CommonHeading className="text-[40px]">Our Services</CommonHeading>
      </div>
      <div className="flex gap-[30px] justify-between lg:flex-row flex-col">
        {data.map((item, index) => (
          <div className="flex gap-[20px]" key={index}>
            <Image
              src={item.serviceIcon}
              alt={item.altText}
              className="w-[50px] h-[48px]"
            />
            <div className="w-full">
              <div className="flex flex-col gap-[20px] w-[256px]">
                <h3 className="text-[19px] font-semibold">{item.title}</h3>
                <p className="text-[14px] font-medium">{item.subTitle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const data = [
  {
    serviceIcon: lightningicon,
    altText: "Lightning design",
    title: "Budget - Premium - Luxury",
    subTitle:
      "Comprehensive interior design & Construction services tailored to diverse budgets, guaranteeing excellence and creative solutions for every client.",
  },
  {
    serviceIcon: interioricon,
    altText: "Interior design",
    title: "Interior Designing & Construction",
    subTitle:
      "From concept to completion, we oversee every detail to bring your vision to life efficiently",
  },
  {
    serviceIcon: outdooricon,
    altText: "Outdoor Design",
    title: "Professionals - Corporates - MSMEs",
    subTitle:
      "Celebrate the changing seasons with our seasonal outdoor decor services",
  },
];
