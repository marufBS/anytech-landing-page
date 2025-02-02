import { Button } from 'flowbite-react'
import React, { useState } from 'react'
import { X, Menu, ChevronDown, Globe, ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'

const Legacy = () => {
    const [isHoverButton, setIsHoverButton] = useState(false)

    return (
        <div>
            <div className='bg-[#005BC4] px-5 flex justify-center items-center py-20' style={{ clipPath: 'polygon(0 0, 100% 17%, 100% 100%, 0% 100%)' }}>
                <div className='min-w-[80%] text-white space-y-5 my-20'>
                    <h1 className='text-3xl md:text-6xl font-bold'>Legacy no longer</h1>
                    <p className='font-semibold'>Talk to us to find out how we can transform your organisation for the future</p>

                    <Button
                        onMouseEnter={() => setIsHoverButton(true)}
                        onMouseLeave={() => setIsHoverButton(false)}
                        className="rounded-sm w-full md:w-auto bg-orange-400 flex items-center gap-2 px-4 py-2"
                        color="default"
                    >
                        <div className='flex justify-center items-center'>
                            <motion.div
                                className="text-lg"
                                animate={{ translateX: isHoverButton ? -5 : 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                Contact Us
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
        </div>
    )
}

export default Legacy