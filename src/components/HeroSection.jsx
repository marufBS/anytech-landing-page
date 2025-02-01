import { Button } from 'flowbite-react'
import React from 'react'
import hero_women from "../assets/hero-women.jpg";

const HeroSection = () => {
  return (
    <div className=''>
      <div className='bg-[#1799EE] grid grid-cols-1 lg:grid-cols-[55%_45%] min-h-[600px] clip-path-container'>
        <div className='flex justify-center items-center'>
          <div className='min-h-28 w-[80%] mx-auto space-y-5 text-white'>
            <h1 className='text-4xl font-bold'>Embrace the future of finance</h1>
            <p>Reimagine financial services with AnyTech’s open platform, distributed banking solution that powers transformation</p>
            <Button>Reach Out to Us</Button>
          </div>
        </div>
        <div className='clip-path-img'>
          <img className='w-full h-full' src={hero_women} alt="" />
        </div>
      </div>
    </div>
  )
}

export default HeroSection