import React, { useEffect, useRef } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Hero from './components/Hero'
import Header from './components/Header'
import ThemeProvider from './ThemeProvider'
import AboutContent from './components/AboutContent'
import Services from './components/Services'
import Clients from './components/Clients'
import TakeMe from './components/TakeMe'
import Cta from './components/Cta'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'

const App = () => {

  // Initialize a new Lenis instance for smooth scrolling
const lenis = new Lenis({
  smooth: true,
  lerp: 0.05, // Try values between 0.02 and 0.07 for smoother effect
})


// Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
lenis.on('scroll', ScrollTrigger.update);

// Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
// This ensures Lenis's smooth scroll animation updates on each GSAP tick
gsap.ticker.add((time) => {
  lenis.raf(time * 1000); // Convert time from seconds to milliseconds
});

// Disable lag smoothing in GSAP to prevent any delay in scroll animations
gsap.ticker.lagSmoothing(0);



  return (
    <ThemeProvider>
      <Header />
      <div id="main" className='w-full'>
        <Hero />
        <AboutContent />
        <Services />
        <Clients />
        <TakeMe />
        <Cta />
        <Footer />
      </div>
      <CustomCursor />
    </ThemeProvider>
  )
}

export default App