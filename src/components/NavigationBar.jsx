import { Button, Dropdown } from 'flowbite-react'
import React, { useEffect, useRef, useState } from 'react'
import logo from '../assets/logo.svg'
import { X, Menu, ChevronDown, Globe, ChevronRight } from 'lucide-react'
import { motion } from "framer-motion";
import { div } from 'framer-motion/client';

const NavigationBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
    const [isSolutionsToggle, setIsSolutionToggle] = useState(false)
    const [isENOpen, setIsENOpen] = useState(false);
    const [isHoverContact, setIsHoverContact] = useState(false)


    // const [isVisible, setIsVisible] = useState(false);
    // const [isFixed, setIsFixed] = useState(false);
    // const [lastScrollY, setLastScrollY] = useState(0);

    // useEffect(() => {
    //     const handleScroll = () => {
    //         const currentScrollY = window.scrollY;

    //         if (currentScrollY < 100) {
    //             // When near the top (less than 100px), reset to relative
    //             setIsVisible(true);
    //             setIsFixed(false);
    //         } else if (currentScrollY > 400 && currentScrollY > lastScrollY) {
    //             // If scrolling down past 400px → Hide navbar
    //             setIsVisible(false);
    //         } else if (currentScrollY > 400 && currentScrollY < lastScrollY) {
    //             // If scrolling up past 400px → Show & fix navbar
    //             setIsVisible(true);
    //             setIsFixed(true);
    //         }

    //         setLastScrollY(currentScrollY);
    //     };

    //     window.addEventListener("scroll", handleScroll);
    //     return () => window.removeEventListener("scroll", handleScroll);
    // }, [lastScrollY]);

    return (
        // <div className={`${isFixed ? "fixed top-0 left-0 w-full shadow-md" : "relative"} 
        //     bg-white p-4 transition-transform duration-300 
        //     ${isVisible ? "translate-y-0" : "-translate-y-full"}`}>
            <div className='flex md:block justify-between items-center p-3 h-[70px] md:h-[100px] bg-[#005BC4]'>
                <div className='md:flex justify-between items-center text-white mx-6 md:max-w-[80%] md:mx-auto'>
                    <div className=''>
                        <img className='w-36 md:w-44' src={logo} alt="" />
                    </div>
                    <nav className='hidden md:block'>
                        <ul className='text-lg  flex items-center gap-10' >
                            <li className='flex flex-col py-4' onMouseEnter={() => setIsSolutionsOpen(true)} onMouseLeave={() => !isSolutionsToggle && setIsSolutionsOpen(false)}>
                                <div className='flex items-center gap-2' onClick={() => setIsSolutionToggle((prev) => !prev)} >
                                    <a href="" onClick={(e) => e.preventDefault()}>Solutions</a>
                                    <i><ChevronDown /></i>
                                </div>
                                <ul className={`${isSolutionsOpen ? 'block absolute top-20 z-10 w-56 bg-white rounded-md' : 'hidden'} text-black`}>
                                    <li className='border-b-2 px-3 py-3 hover:text-blue-400'>
                                        <a href="">AnyCaaS</a>
                                    </li>
                                    <li className='border-b-2 px-3 py-3 hover:text-blue-400' >
                                        <a href="">AnyBaaS</a>
                                    </li>
                                    <li className='px-3 py-3 hover:text-blue-400'>
                                        <a href="">AnyPaaS</a>
                                    </li>
                                </ul>
                            </li>
                            <li className='py-4 hover:border-b-2'><a href=""></a>Services</li>
                            <li className='py-4 hover:border-b-2'><a href=""></a>About Us</li>
                            <li className='py-4 ' onClick={() => setIsENOpen((prev) => !prev)}>
                                <div className='flex items-center gap-2 border rounded-3xl px-2 py-1' >
                                    <Globe size={15} />
                                    <a href="" onClick={(e) => e.preventDefault()}>EN</a>
                                    <motion.div
                                        animate={{ rotate: isENOpen ? -180 : 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <ChevronDown size={20} />
                                    </motion.div>
                                </div>
                                <ul className={`${isENOpen ? 'block absolute top-20 z-10 bg-white rounded-md' : 'hidden'} text-black`}>
                                    <li className='border-b-2 px-5 py-3 hover:text-blue-400'>
                                        <a href="">EN (English)</a>
                                    </li>
                                    <li className='border-b-2 px-5 py-3 hover:text-blue-400' >
                                        <a href="">TH (Thai)</a>
                                    </li>
                                    <li className='px-5 py-3 hover:text-blue-400'>
                                        <a href="">ID (Bahasa Indonesia)</a>
                                    </li>
                                    <li className='px-5 py-3 hover:text-blue-400'>
                                        <a href="">TW (Traditional Chinese)</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                    <div className='hidden md:block'>
                        <Button onMouseEnter={() => setIsHoverContact(true)} onMouseLeave={() => setIsHoverContact(false)} className='rounded-sm bg-transparent hover:bg-white border hover:text-blue-500' color='default'>
                            Contact Us
                            <motion.div
                                animate={{ translateX: isHoverContact ? 10 : 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <ChevronRight size={20} />
                            </motion.div>
                        </Button>
                    </div>
                </div>
                <div className="block md:hidden">
                    <button
                        onClick={toggleMenu}
                        className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-blue-700 focus:outline-none"
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
                {isOpen && (
                    <div className="md:hidden absolute top-16 z-50 left-0 bg-[rgba(151,129,129,0.15)] backdrop-blur-sm w-full  ">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700">Home</a>
                            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700">About</a>
                            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700">Services</a>
                            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700">Contact</a>
                        </div>
                    </div>
                )}
            </div>
        // </div>
    )
}

export default NavigationBar