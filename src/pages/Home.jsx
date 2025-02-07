import React from 'react'
import Top from '../components/Top'
import Hero from '../components/Hero'
import TrustedBrands from '../components/TrustedBrands'
import ProjectSlider from '../components/ProjectSlider'
import Processes from '../components/Processes.jsx'
import Services from '../components/Services.jsx'
import Pricing from '../components/Pricing.jsx'

function Home() {
  return (
    <div className=''>
      <Top/>
      <Hero/>
      <TrustedBrands/>
      <ProjectSlider/>
      <Processes/>
      <Services/>
      <Pricing/>
    </div>
  )
}

export default Home
