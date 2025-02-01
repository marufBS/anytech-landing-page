import React from 'react'
import logo from '../assets/logo.svg'
import { Button, FooterLink } from 'flowbite-react'

const Footer = () => {
  return (
    <div className=''>
      <div className='bg-[#002045] py-10'>

        <div className=' flex justify-between items-center max-w-[80%] mx-auto'>
          <div className=''>
            <img src={logo} alt="" />
          </div>
          <div className='flex gap-3 font-bold text-[#00E9DF]'>
            <p className='border-r-2 p-4'>Our Solution</p>
            <ul className='flex gap-5 p-4'>
              <li><a href="">AnyCaaS</a></li>
              <li><a href="">AnyBaaS</a></li>
              <li><a href="">AnyPaaS</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className='bg-[#00152D] py-5'>
        <div className='flex justify-between max-w-[80%] mx-auto text-[#1F80D7] font-bold '>
          <p>©2023 All rights reserved. Any Technology Pte Ltd.</p>
          <a href="">Privacy Policy</a>
        </div>
      </div>
    </div>
  )
}

export default Footer