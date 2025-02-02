import React from 'react'
import logo from '../assets/logo.svg'
import { Button, FooterLink } from 'flowbite-react'
import {Linkedin,Phone,Mail} from 'lucide-react'

const Footer = () => {
  return (
    <div className=''>
      <div className='bg-[#002045] py-10'>

        <div className=' flex justify-between items-center max-w-[92%] md:max-w-[80%] mx-auto'>
          <div className=''>
            <img src={logo} alt="" />
          </div>
          <div className='hidden md:flex gap-3 font-bold text-[#00E9DF]'>
            <p className='border-r-2 p-4'>Our Solution</p>
            <ul className='flex gap-5 p-4'>
              <li><a href="">AnyCaaS</a></li>
              <li><a href="">AnyBaaS</a></li>
              <li><a href="">AnyPaaS</a></li>
            </ul>
          </div>
          <div className='flex gap-2 md:hidden'>
            <Linkedin size={30}/>
            <Phone  size={30}/>
            <Mail  size={30}/>
          </div>
        </div>
      </div>
      <div className='bg-[#00152D] py-5'>
        <div className='flex justify-between max-w-[90%] mx-auto text-[#1F80D7] font-bold '>
          <p className='text-xs'>©2023 All rights reserved. Any Technology Pte Ltd.</p>
          <a className='hidden md:block' href="">Privacy Policy</a>
        </div>
      </div>
    </div>
  )
}

export default Footer