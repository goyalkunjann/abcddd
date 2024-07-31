'use client'
import React, { useState, useEffect } from "react";
import { CommonHeading } from "../../Heading/CommonHeading";
import { Cards } from "../../Utils/Cards/Cards";
import {
  faCalendarDays,
  faCircleCheck,
  faCreditCard,
  faEyeSlash,
} from "@fortawesome/free-regular-svg-icons";
import {
  faPeopleGroup,
} from "@fortawesome/free-solid-svg-icons";
import { CommonSlider } from "../../Utils/CommonSlider/CommonSlider";

export const Services = () => {
  const [slidesToShow, setSlidesToShow] = useState(4.2);
  const [autoPlay, setAutoPlay] = useState(true); // Set autoPlay to true initially

  const updateSliderSettings = () => {
    const width = window.innerWidth;
    if (width < 768) {
      setSlidesToShow(1.5); // Show fewer slides on smaller screens
    } else {
      setSlidesToShow(4.2); // Default value for larger screens
    }
  };

  useEffect(() => {
    updateSliderSettings();
    window.addEventListener("resize", updateSliderSettings);
    return () => window.removeEventListener("resize", updateSliderSettings);
  }, []);

  const cardsContent = [
    {
      icon: faCalendarDays,
      title: "Quick Delivery",
      backgroundColor: "#ECDAF2",
    },
    {
      icon: faPeopleGroup,
      title: "Many happy customers",
      backgroundColor: "#FFEDDE",
    },
    {
      icon: faCreditCard,
      title: "Easy EMI options",
      backgroundColor: "#D9FCF6",
    },
    {
      icon: faCircleCheck,
      title: "Regular quality checks",
      backgroundColor: "#FFF7AE",
    },
    {
      icon: faEyeSlash,
      title: "0 Hidden costs",
      backgroundColor: "#E3DEFF",
    },
    {
      icon: faCircleCheck,
      title: "10 years warranty",
      backgroundColor: "#C5FDBB",
    },
  ];

  return (
    <>
      <section className="bg-[#F7F7F7] lg:h-[380px] h-auto mb-[30px] mt-[25px] w-full flex justify-center items-center pt-[20px] pb-[40px] flex-col">
        <CommonHeading className="mt-[10px]">Why choose us?</CommonHeading>
        <div className="relative lg:max-w-[1290px] lg:w-[87%] w-[100%] mx-auto">
          <CommonSlider
            slidesShow={slidesToShow}
            autoPlay={autoPlay}
            autoPlayDelay={8000} // Change auto-play delay to 5000 milliseconds (5 seconds)
            className="py-6 lg:mx-auto"
          >
            {cardsContent.map((card, index) => (
              <Cards
                key={index}
                icon={card.icon}
                title={card.title}
                bgColor={card.backgroundColor}
              />
            ))}
          </CommonSlider>
        </div>
      </section>
    </>
  );
};

export default Services;