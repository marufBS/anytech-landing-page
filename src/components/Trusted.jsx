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

const Trusted = () => {
  const [count, setCount] = useState(0);
  const [experience, setExperience] = useState(0)
  const [institutions, setInstitutions] = useState(0)
  const [customers, setCustomers] = useState(0)
  const experienceTarget = 20
  const institutionsTarget = 200
  const customersTarget = 10

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
      <div className="flex flex-col items-center">
        <p>TRUSTED BY THE BEST</p>
        <div className="flex gap-10">
          <div>
            <h1>&gt;{experience}</h1>
            <p>Years of Experience</p>
          </div>
          <div>
            <h1>{institutions}+</h1>
            <p>Financial Institutions</p>
          </div>
          <div>
            <h1>&gt;{customers}m</h1>
            <p>Customers Each</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-5 justify-center items-center gap-10 max-w-[70%] mx-auto">
        {
          logos.map((logo, idx) => (
            <div key={idx}>
              <img src={logo} alt="" />
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Trusted;
