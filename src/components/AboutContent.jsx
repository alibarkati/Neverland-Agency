import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import ring from '/media/ring.webp'

gsap.registerPlugin(ScrollTrigger)
const AboutContent = () => {

    const ringRef = useRef(null)

  useEffect(() => {
    gsap.to(ringRef.current, {
      y: window.innerWidth >= 1024 ? -400 : -135,
      // ease: 'none',
      scrollTrigger: {
        trigger: ringRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      }
    })
  }, [])


  return (
    <section className="w-full relative lg:px-0 px-[10px]">
  <div className="w-[var(--box-width)] mx-auto pb-14 md:pb-0 pt-24 md:pt-56 relative text-center">
    <div className="w-full">
      <h1 className="playfair lg:text-[85px] md:text-[60px] text-[40px] leading-[1em] mb-0">
        The Everlasting Creative Experience Agency
      </h1>
    </div>
    <div className="w-full">
      <div className="tale">
        <p className="roobert-r lg:text-[24px] md:text-[21px] text-[16px] mt-8 md:mt-56 mb-8 md:mb-14 leading-4">
        All great things start with a story that lasts forever
        </p>
        <p className="playfair lg:text-[65px] md:text-[50px] text-[28px] leading-[1em]">
          Neverland was founded in 2021. The name stems from a play that’s over a hundred years old. It tells the tale of a boy who doesn’t want to grow up – and never does. It’s a story in which dreams meet reality. And a reminder that your story can be everlasting. As long as you want it to.
        </p>
      </div>
      <div className="tale">
        <p className="roobert-r lg:text-[24px] text-[21px] lg:mt-28 md:mt-28 mt-8 mb-8 md:mb-14 leading-4">
          A team that never gets lost
        </p>
        <p className="playfair lg:text-[65px] md:text-[50px] text-[28px] leading-[1em]">
         We are a fast-growing crew of creatives, designers, strategists, producers, copywriters, and developers.
         <br />
         <br />
         Together we seek to craft the stories of the projects we work on.
        </p>
      </div>
    </div>
    <img ref={ringRef} src={ring} alt="" className='absolute top-0 left-1/2 -translate-x-1/2 md:w-[65%] w-[75%] z-20' />
  </div>
  <div className="w-full lg:h-[30vh] h-[20vh] md:block hidden sticky bottom-0 z-10 bg-linear-to-t from-[#fffaf0] to-transparent"></div>
    </section>
  )
}

export default AboutContent