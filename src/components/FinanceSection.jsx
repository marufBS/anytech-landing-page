import React from 'react'
import finance_women from '../assets/finance-women.avif'

const FinanceSection = () => {
    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-2 mx-auto my-28'>
                <div className='flex justify-center md:max-w-[80%] mx-auto'>
                    <div className='space-y-5 md:space-y-10'>
                        <div className='space-y-5 md:space-y-10'>
                            <p className='text-blue-500 text-sm md:text-md font-bold'>POWERING THE FUTURE OF FINANCE</p>
                            <h1 className='text-3xl md:text-6xl font-bold'>Uncovering new ways to delight customers</h1>
                        </div>
                        <div className='md:hidden'>
                            <div className='p-5'>
                                <img className='' src={finance_women} alt="" />
                            </div>
                        </div>
                        <div className='space-y-5 md:space-y-10'>

                            <p className='font-bold'>AnyTech is revolutionising financial technology by introducing innovative and real-time transaction account processing capabilities, specifically designed for retail financial services.</p>
                            <p>Our modern approach surpasses traditional banking and card processing systems, empowering you with the most advanced technology for lasting success.</p>
                        </div>
                    </div>
                </div>
                <div className='hidden md:flex justify-center'>
                    <div className=''>
                        <img className='md:max-w-[500px] mx-auto' src={finance_women} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default FinanceSection