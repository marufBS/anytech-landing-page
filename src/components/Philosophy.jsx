import philosophy_card_img from '../assets/philosophy_card_img.png'
import logo_1 from '../assets/philosophy_logo_1.svg'
import logo_2 from '../assets/philosophy_logo_2.png'
import logo_3 from '../assets/philosophy_logo_3.svg'
import philosophy_card_mobile from '../assets/philosophy_card_mobile.avif'
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Card Data
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
];

const Philosophy = () => {
    return (
        <div className='mx-auto space-y-10'>
            <div className='text-center space-y-5'>
                <p className='text-blue-400 font-bold'>OUR PHILOSOPHY</p>
                <h1 className='text-3xl md:text-6xl font-semibold'>Human-centred innovation</h1>
            </div>
            <div className='flex flex-col justify-center space-y-10'>
                <div className='hidden md:flex justify-center'>
                    <img src={philosophy_card_img} alt="" />
                </div>
                <div className='md:hidden'>
                    <img src={philosophy_card_mobile} alt="" />
                </div>


                <div className="flex md:hidden">
                    <Swiper
                        slidesPerView={'auto'}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}

                        modules={false}
                        className="mySwiper"
                    >
                        {cardData.map((card, i) => (
                            <SwiperSlide key={i}>
                                <motion.div
                                    initial={{ y: 100, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: i * 0.2,
                                    }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    className="bg-[#F8FCFF] space-y-5 p-5 rounded-xl"
                                >
                                    <div><img className='!w-10' src={card.logo} alt="" /></div>
                                    <div className='text-left space-y-5'>

                                        <h1 className='text-2xl font-semibold'>{card.title}</h1>
                                        <p className='font-medium'>{card.description}</p>
                                    </div>
                                </motion.div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>


                <div className="hidden md:grid md:grid-cols-3 gap-10">
                    {cardData.map((card, i) => (
                        <motion.div
                            key={i}
                            initial={{ y: 100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{
                                duration: 0.5,
                                delay: i * 0.3,
                            }}
                            viewport={{ once: true, amount: 0.2 }} // Ensures animation triggers when 20% of the card is visible
                            className="bg-[#F8FCFF] space-y-5 p-5 rounded-xl"
                        >
                            <div><img src={card.logo} alt="" /></div>
                            <h1 className='text-2xl'>{card.title}</h1>
                            <p>{card.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Philosophy;
