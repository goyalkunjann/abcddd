'use client';
import React, { useRef, useEffect, useState } from 'react';
import Slider from 'react-slick';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const CommonSlider = ({ children, className, slidesShow, autoPlay, autoPlaySpeed }) => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 5000,
    slidesToShow: slidesShow,
    slidesToScroll: 1,
    autoplay: autoPlay,
    autoplaySpeed: autoPlaySpeed,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          autoplay: true,
          autoplaySpeed: autoPlaySpeed,
        },
      },
    ],
  };

  return (
    <div className="slickDots lg:px-3 px-8">
      <Slider {...settings} ref={sliderRef} className={className}>
        {children}
      </Slider>
     
    </div>
  );
};

