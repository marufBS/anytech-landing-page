import { Button } from 'flowbite-react'
import React from 'react'

const Legacy = () => {
    return (
        <div>
            <div className='bg-slate-600 flex justify-center items-center py-20' style={{ clipPath: 'polygon(0 0, 100% 35%, 100% 100%, 0% 100%)' }}>
                <div className='min-w-[80%] text-white space-y-5 my-20'>
                    <h1 className='text-4xl font-bold'>Legacy no longer</h1>
                    <p className='font-semibold'>Talk to us to find out how we can transform your organisation for the future</p>
                    <Button>Contact Us</Button>
                </div>
            </div>
        </div>
    )
}

export default Legacy