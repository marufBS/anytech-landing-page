import { Button } from 'flowbite-react'
import React, { useState } from 'react'
import hero_women from "../assets/hero-women.jpg";
import { X, Menu, ChevronDown, Globe, ChevronRight } from 'lucide-react'
import { motion } from "framer-motion";

const HeroSection = () => {
  const [isHoverButton, setIsHoverButton] = useState(false)
  return (
    <div className=''>
      <div className='bg-[#005BC4] grid grid-cols-1 lg:grid-cols-[55%_45%] min-h-[600px] clip-path-container'>
        <div className='flex justify-center items-center'>
          <div className='min-h-28 w-[85%] md:w-[80%] mx-auto space-y-5 my-16 text-white'>
            <h1 className='text-5xl md:text-6xl font-bold'>Embrace the future of finance</h1>
            <p className='text-xl font-semibold'>Reimagine financial services with AnyTech’s open platform, distributed banking solution that powers transformation</p>
            {/* <Button onMouseEnter={() => setIsHoverButton(true)} onMouseLeave={() => setIsHoverButton(false)} className='rounded-sm bg-orange-400' color='default'>
              <motion.div className='text-lg'
                animate={{ translateX: isHoverButton ? -5 : 0 }}
                transition={{ duration: 0.2 }}
              >
                Reach Out to Us
              </motion.div>
              <motion.div
                animate={{ translateX: isHoverButton ? 5 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronRight size={20} />
              </motion.div>
            </Button> */}
            <Button
              onMouseEnter={() => setIsHoverButton(true)}
              onMouseLeave={() => setIsHoverButton(false)}
              className="w-full md:w-auto rounded-sm bg-orange-400 flex items-center gap-2 px-4 py-2"
              color="default"
            >
              <div className='flex justify-center items-center'>
                <motion.div
                  className="text-lg"
                  animate={{ translateX: isHoverButton ? -5 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  Reach Out to Us
                </motion.div>
                <motion.div
                  animate={{ translateX: isHoverButton ? 5 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronRight size={20} />
                </motion.div>
              </div>
            </Button>

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