import React from 'react'
import Top from '../components/Top'
import Hero from '../components/Hero'
import TrustedBrands from '../components/TrustedBrands'
import ProjectSlider from '../components/ProjectSlider'
import Processes from '../components/Processes.jsx'
import Services from '../components/Services.jsx'
import Pricing from '../components/Pricing.jsx'
import Testimonial from '../components/Testimonial.jsx'
import FAQ from '../components/FAQ.jsx'
import Footer from '../components/Footer.jsx'

function Home() {
  return (
    <div className=''>
      {/* <Top/> */}
      <Hero/>
      <TrustedBrands/>
      <ProjectSlider/>
      <Processes/>
      <Services/>
      <Pricing/>
      <Testimonial/>
      <FAQ/>
      {/* <Footer/> */}
    </div>
  )
}

export default Home
