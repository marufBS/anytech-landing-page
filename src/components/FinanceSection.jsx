import React from 'react'
import finance_women from '../assets/finance-women.avif'

const FinanceSection = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 max-w-[60%] mx-auto gap-2 my-28'>
            <div className='flex justify-center items-center'>
                <div className='space-y-10'>
                    <p className='text-blue-500 font-bold'>POWERING THE FUTURE OF FINANCE</p>
                    <h1 className='text-6xl font-bold'>Uncovering new ways to delight customers</h1>
                    <p className='font-bold'>AnyTech is revolutionising financial technology by introducing innovative and real-time transaction account processing capabilities, specifically designed for retail financial services.</p>
                    <p>Our modern approach surpasses traditional banking and card processing systems, empowering you with the most advanced technology for lasting success.</p>
                </div>
            </div>
            <div className='flex justify-center'>
                <div className=''>
                    <img className='h-[500px] w-full mx-auto' src={finance_women} alt="" />
                </div>
            </div>
        </div>
    )
}

export default FinanceSection