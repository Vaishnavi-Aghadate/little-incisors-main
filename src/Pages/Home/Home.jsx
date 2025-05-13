import React from 'react'
import Hero from '../../components/Hero/Hero'
import Values from '../../components/Values/Values'
import About from '../../components/About/About'
import Schedule from '../../components/Schedule/Schedule'
import CoreValues from '../../components/Bear/Bear'
import Features from '../../components/Features/Features'
import Reviews from '../../components/Reviews/Reviews'

function Home() {
  return (
    <>
      <Hero />
      <About />
      {/* <Values /> */}
      <Schedule />
      <CoreValues />    
      <Features />
      <Reviews />
    </>
  )
}

export default Home;