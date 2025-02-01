import React, { useEffect, useRef, useState } from "react";
import { Carousel, Button } from "flowbite-react";

const CustomCarousel = () => {
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
    if (carouselRef.current) {
      const indicators = carouselRef.current.querySelectorAll('[data-testid="carousel-indicator"]');
      // Hide the indicators using inline style or CSS class
      indicators.forEach((indicator) => {
        indicator.style.display = "none"; // Hides the indicator
      });
    }
  }, []);

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Custom Slide Control Buttons */}
      <div className="flex gap-3">
        <Button className={`${activeIndex===0?'bg-red-400':'bg-red-200'}`} onClick={() => goToSlide(0)} color="gray">Slide 1</Button>
        <Button className={`${activeIndex===1?'bg-red-400':'bg-red-200'}`} onClick={() => goToSlide(1)} color="blue">Slide 2</Button>
        <Button className={`${activeIndex===2?'bg-red-400':'bg-red-200'}`} onClick={() => goToSlide(2)} color="green">Slide 3</Button>
        <Button className={`${activeIndex===3?'bg-red-400':'bg-red-200'}`} onClick={() => goToSlide(3)} color="red">Slide 4</Button>
      </div>

      {/* Flowbite Carousel */}
      <div ref={carouselRef} className="w-full max-w-2xl h-64">
        <Carousel slide={false} indicators=' ' leftControl=" " rightControl=' '>
          <div className="bg-slate-400 h-full">Slide - 1</div>
          <div className="bg-slate-400 h-full">Slide - 2</div>
          <div className="bg-slate-400 h-full">Slide - 3</div>
          <div className="bg-slate-400 h-full">Slide - 4</div>
        </Carousel>
      </div>
    </div>
  );
};

export default CustomCarousel;
