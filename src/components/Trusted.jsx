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

const Trusted = ({ target = 200, duration = 2 }) => {
  const [count, setCount] = useState(0);

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

  useEffect(() => {
    let start = 0;
    let end = target;
    let range = end - start;
    let increment = end > start ? 1 : -1;
    let current = start;

    const stepDuration = duration * 1000; // Duration in milliseconds
    const totalSteps = 100; // Divide the animation into 100 steps
    const stepTime = stepDuration / totalSteps;

    const interval = setInterval(() => {
      current += increment * (range / totalSteps);
      if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
        current = end;
        clearInterval(interval);
      }
      setCount(Math.round(current));
    }, stepTime);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [target, duration]);

  return (
    <div className="text-3xl font-bold">
      {count}
    <div className="grid grid-cols-5 justify-center items-center gap-10 max-w-[70%] mx-auto">
      {
        logos.map((logo,idx)=>(
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
