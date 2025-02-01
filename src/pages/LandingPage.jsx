import React from 'react'
import HeroSection from '../components/HeroSection'
import FinanceSection from '../components/FinanceSection'
import Footer from '../components/Footer'
import Philosophy from '../components/Philosophy'
import Technology from '../components/Technology'
import Trusted from '../components/Trusted'
import Legacy from '../components/Legacy'

const LandingPage = () => {
  return (
    <>
      <HeroSection />
      <FinanceSection />
      <Philosophy />
      <Technology/>
      <Trusted/>
      <Legacy/>
      <Footer />
    </>
  )
}

export default LandingPage