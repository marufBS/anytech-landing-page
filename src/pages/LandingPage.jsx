import React from 'react'
import HeroSection from '../components/HeroSection'
import FinanceSection from '../components/FinanceSection'
import Footer from '../components/Footer'
import Philosophy from '../components/Philosophy'

const LandingPage = () => {
  return (
    <>
      <HeroSection />
      <FinanceSection />
      <Philosophy />
      <Footer />
    </>
  )
}

export default LandingPage