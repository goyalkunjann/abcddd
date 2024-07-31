"use client";
import React from "react";
import { CommonHeading } from "../../Heading/CommonHeading";
import { SubHeading } from "../../SubHeading/SubHeading";
import Image from "next/image";
import asianpainticon from "../../../../../public/assets/images/asianpaintss.png";
import boschicon from "../../../../../public/assets/images/bosch.png";
import siemensicon from "../../../../../public/assets/images/siemens.png";
import hettichicon from "../../../../../public/assets/images/hettichh.png";
import dorseticon from "../../../../../public/assets/images/dorset.png";
import dewaicon from "../../../../../public/assets/images/dewa.png";

export const CollabsSection = () => {
  const icons = [
    boschicon,
    asianpainticon,
    siemensicon,
    hettichicon,
    dorseticon,
    dewaicon,
  ];

  return (
    <div
   
      className="lg:max-w-[1290px] mx-auto w-full flex flex-col gap-[1px] mt-[30px] mb-[60px] lg:px-0 px-[20px]"
    >
      <CommonHeading>Our Trusted partners</CommonHeading>
      <SubHeading className={"mt-[3px]"}>
        Great collaborations that produce great designs{" "}
      </SubHeading>

      <div className="w-full  h-auto relative flex items-center justify-center">
        <div className="w-full h-fit flex items-center justify-center flex-col">
          <div className="marque">
            {[...Array(2)].map((_, i) => (
              <div
                key={i}
                className="flex justify-around flex-shrink-0 items-center w-full image-slide"
              >
                {icons.map((icon, index) => (
                  <div
                    key={`partner-${index}`}
                    className="grid place-items-center"
                  >
                    <Image
                      src={icon}
                      alt={`icon-${index}`}
                      className="h-[100px] object-contain w-[100px]"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
