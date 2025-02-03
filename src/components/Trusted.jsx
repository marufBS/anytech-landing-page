import React, { useState, useEffect } from "react";
import trusted_logo_1 from '../assets/trusted_logo_1.webp'
import trusted_logo_2 from '../assets/trusted_logo_2.webp'
import trusted_logo_3 from '../assets/trusted_logo_3.webp'
import trusted_logo_4 from '../assets/trusted_logo_4.webp'
import trusted_logo_5 from '../assets/trusted_logo_5.webp'
import trusted_logo_6 from '../assets/trusted_logo_6.webp'
import trusted_logo_7 from '../assets/trusted_logo_7.webp'
import trusted_logo_8 from '../assets/trusted_logo_8.webp'
import trusted_logo_9 from '../assets/trusted_logo_9.webp'
import trusted_logo_10 from '../assets/trusted_logo_10.webp'
import trusted_logo_11 from '../assets/trusted_logo_11.webp'
import trusted_logo_12 from '../assets/trusted_logo_12.webp'
import trusted_logo_13 from '../assets/trusted_logo_13.webp'
import trusted_logo_14 from '../assets/trusted_logo_14.webp'
import trusted_logo_15 from '../assets/trusted_logo_15.webp'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const Trusted = () => {
  const [experience, setExperience] = useState(0)
  const [institutions, setInstitutions] = useState(0)
  const [customers, setCustomers] = useState(0)
  const experienceTarget = 20
  const institutionsTarget = 40
  const customersTarget = 200

  const logos = [
    trusted_logo_1,
    trusted_logo_2,
    trusted_logo_3,
    trusted_logo_4,
    trusted_logo_5,
    trusted_logo_6,
    trusted_logo_7,
    trusted_logo_8,
    trusted_logo_9,
    trusted_logo_10,
    trusted_logo_11,
    trusted_logo_12,
    trusted_logo_13,
    trusted_logo_14,
    trusted_logo_15
  ]

  const animateCounter = (target, setter, duration) => {
    let start = 0;
    let end = target;
    let range = end - start;
    let increment = range / 100;
    let current = start;
    const stepTime = (duration * 1000) / 100;

    const interval = setInterval(() => {
      current += increment;
      if (current >= end) {
        current = end;
        clearInterval(interval);
      }
      setter(Math.round(current));
    }, stepTime);

    return () => clearInterval(interval);
  };

  useEffect(() => {
    animateCounter(experienceTarget, setExperience, 1);
    animateCounter(institutionsTarget, setInstitutions, 1.5);
    animateCounter(customersTarget, setCustomers, 2);
  }, [experienceTarget, institutionsTarget, customersTarget]);


  return (
    <div className="text-3xl font-bold">
      <div className="flex flex-col items-center gap-10 my-20">
        <p className="text-blue-500 text-xl font-medium">TRUSTED BY THE BEST</p>
        <div className="flex flex-col md:flex-row md:gap-28 w-full md:w-auto">
          <div className="flex flex-row md:flex-col items-center justify-between border-b-2 md:border-b-0">
            <h1 className="text-5xl md:text-7xl text-blue-500">&gt;{experience}</h1>
            <p className="text-sm md:text-xl font-medium">Years of Experience</p>
          </div>
          <div className="flex flex-row md:flex-col items-center justify-between border-b-2 md:border-b-0">
            <h1 className="text-5xl md:text-7xl text-blue-500">{institutions}+</h1>
            <p className="text-sm font-medium">Financial Institutions</p>
          </div>
          <div className="flex flex-row md:flex-col items-center justify-between border-b-2 md:border-b-0">
            <h1 className="text-5xl md:text-7xl text-blue-500">&gt;{customers}m</h1>
            <p className="text-sm font-medium">Customers Each</p>
          </div>
        </div>
      </div>
      <div className="hidden md:grid grid-cols-5 justify-center items-center gap-10 mx-auto">
        {
          logos.map((logo, idx) => (
            <div key={idx}>
              <img src={logo} alt="" />
            </div>
          ))
        }
      </div>
      {/* Swiper for logos, visible only on small screens */}
      <div className="block md:hidden my-10">
        <Swiper
          slidesPerView={'auto'}
          centeredSlides={true}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={false}
          className="mySwiper"
        >
          {logos.map((logo, idx) => (
            <SwiperSlide key={idx}>
              <div className="flex justify-center items-center">
                <img src={logo} alt={`Trusted Logo ${idx + 1}`} className="w-full max-w-[150px]" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Trusted;
