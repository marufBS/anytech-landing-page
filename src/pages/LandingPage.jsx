import React from 'react'
import HeroSection from '../components/HeroSection'
import FinanceSection from '../components/FinanceSection'
import Footer from '../components/Footer'
import Philosophy from '../components/Philosophy'
import Technology from '../components/Technology'
import Trusted from '../components/Trusted'
import Legacy from '../components/Legacy'
import Navbar from '../components/NavigationBar'

const LandingPage = () => {
  return (
    <div className=''>
      <Navbar />
      <HeroSection />
      <div className='max-w-[90%] md:max-w-[80%] mx-auto'>
        <FinanceSection />
        <Philosophy />
        <Technology />
        <Trusted />
      </div>
      <Legacy />
      <Footer />
    </div>
  )
}

export default LandingPage