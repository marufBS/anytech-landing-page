import React from 'react'
import philosophy_card_img from '../assets/philosophy_card_img.png'
import logo_1 from '../assets/philosophy_logo_1.svg'
import logo_2 from '../assets/philosophy_logo_2.png'
import logo_3 from '../assets/philosophy_logo_3.svg'



const cardData = [
    {
        logo: logo_1,
        title: 'Full-suite solutions',
        description: 'Experience the ease of integration across various banking and payment functions with our comprehensive suite of solutions.'
    },
    {
        logo: logo_2,
        title: 'Simplify the complex',
        description: 'Simplify complex processes and optimise your financial operations by leveraging the power of AI, Blockchain, Cloud Computing, and Big Data.'
    },
    {
        logo: logo_3,
        title: 'Cutting-edge tech',
        description: 'We seamlessly combine cutting-edge technologies, resulting in an unparalleled fintech experience for financial institutions.'
    },
]

const Philosophy = () => {
    return (
        <div className='w-[70%] mx-auto space-y-10'>
            <div className='text-center space-y-5'>
                <p className='text-blue-400 font-bold'>OUR PHILOSOPHY</p>
                <h1 className='text-6xl font-semibold'>Human-centred innovation</h1>
            </div>
            <div className='flex flex-col justify-center space-y-10'>
                <div className='flex justify-center'>
                    <img src={philosophy_card_img} alt="" />
                </div>
                <div className='flex gap-10'>
                    {
                        cardData.map((card, i) => (
                            <div key={i} className='bg-[#F8FCFF] space-y-5 p-5 rounded-xl'>
                                <div><img src={card.logo} alt="" /></div>
                                <h1 className='text-2xl'>{card.title}</h1>
                                <p>{card.description}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Philosophy