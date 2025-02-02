import React, { useEffect, useRef, useState } from "react";
import { Carousel, Button } from "flowbite-react";
import technology_img_1 from '../assets/technology_img_1.jpg'
import technology_img_2 from '../assets/technology_img_2.jpg'
import technology_img_3 from '../assets/technology_img_3.png'
import technology_img_4 from '../assets/technology_img_4.jpg'

const Technology = () => {
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0)

  const goToSlide = (index) => {
    setActiveIndex(index)
    if (carouselRef.current) {
      const indicators = carouselRef.current.querySelectorAll('[data-testid="carousel-indicator"]');
      if (indicators[index]) {
        indicators[index].click(); // Simulates clicking the real indicator
      }
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % Slides.length;
        goToSlide(nextIndex);
        return nextIndex;
      });
    }, 5000);

    return () => clearInterval(interval); // Cleanup to prevent multiple intervals
  }, []);

  useEffect(() => {
    if (carouselRef.current) {
      const indicators = carouselRef.current.querySelectorAll('[data-testid="carousel-indicator"]');
      // Hide the indicators using inline style or CSS class
      indicators.forEach((indicator) => {
        indicator.style.display = "none"; // Hides the indicator
      });
    }
  }, []);

  const Slides = [
    {
      tagline: 'Customer focused',
      title: 'Purpose-built financial services',
      description_1: 'Elevate customer experience and achieve agile financial product innovation with the world’s first, consumer-centric, real-time transaction account processing and credit limit system.',
      description_2: 'Experience the advantages of integrated retail financial services technology, real-time analysis of transactional behaviour and product marketing opportunities.',
      image: technology_img_1,
      buttonText: 'Customer focused'
    },
    {
      tagline: 'Agile and adaptable',
      title: 'Agile and adaptable for growth',
      description_1: 'Innovate with evolving customer demands through our open platform-based technology architecture. Stay ahead of the ever-changing financial landscape with a strong focus on security, compliance and performance.',
      description_2: 'Optimise your offerings to unlock new revenue streams and deliver an extraordinary customer experience, with digitally designed core banking, payment processing and lending capabilities.',
      image: technology_img_2,
      buttonText: 'Agile and adaptable'
    },
    {
      tagline: 'Compliance ready',
      title: 'Manage compliance with ease',
      description_1: 'Navigate through the evolving regulatory landscape with confidence by streamlining compliance management—through real-time risk monitoring solutions powered by AI and machine learning.',
      description_2: 'Transform your compliance strategy with flexible and diversified policy rules, powered by cutting-edge technology that is designed for seamless integration with core banking and card payment systems.',
      image: technology_img_3,
      buttonText: 'Compliance ready'
    },
    {
      tagline: 'Secure and safe',
      title: 'Highly secure and safe',
      description_1: 'Discover unparalleled security trusted by financial institutions across the globe. Our applications are meticulously developed in compliance with international security standards, drawing on 20 years of technical expertise.',
      description_2: 'Join over 40 esteemed Fls, each serving more than 200 million customers, and benefit from our secure, robust and reliable infrastructure.',
      image: technology_img_4,
      buttonText: 'Secure and safe'
    },
  ]
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="text-center font-semibold my-10">
        <p className="text-[#1F86F0] text-xl">TECHNOLOGY BUILT FOR YOU</p>
        <h1 className="text-[#0B305B] text-5xl">The future of finance</h1>
      </div>
      {/* Custom Slide Control Buttons */}
      <div className="flex gap-3">
        {
          Slides.map((slide, idx) => (
            <Button className={`${activeIndex === idx ? 'bg-red-400' : 'bg-red-200'}`} onClick={() => goToSlide(idx)} color="gray">{slide.buttonText}</Button>
          ))
        }
      </div>

      {/* Flowbite Carousel */}
      <div ref={carouselRef} className="w-full max-w-5xl h-96 shadow-2xl rounded-2x">
        <Carousel slide={false} indicators=' ' leftControl=" " rightControl=' '>
          {
            Slides.map((slide, idx) => (
              <div className=" h-full grid grid-cols-2 gap-5 p-10">
                <div className="my-auto">
                  <p>{slide.tagline}</p>
                  <h1>{slide.title}</h1>
                  <p>{slide.description_1}</p>
                  <p>{slide.description_2}</p>
                </div>
                <div className="flex justify-center items-center ">
                  <img className="h-[300px] w-[400px] rounded-2xl" src={slide.image} alt="" />
                </div>
              </div>
            ))
          }
        </Carousel>
      </div>
    </div>
  );
};

export default Technology;
