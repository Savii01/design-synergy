import React from 'react'
import Top from '../components/Top'
import Hero from '../components/Hero'
import TrustedBrands from '../components/TrustedBrands'
import ProjectSlider from '../components/ProjectSlider'
import Processes from '../components/Processes.jsx'


function Home() {
  return (
    <div className=''>
      <Top/>
      <Hero/>
      <TrustedBrands/>
      <ProjectSlider/>
      <Processes/>
    </div>
  )
}

export default Home
