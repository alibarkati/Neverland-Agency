import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
const Cta = () => {

  const titleRef = useRef(null)

  useEffect(() => {
    const split = new SplitText(titleRef.current, { types: 'lines' })

        gsap.fromTo(
      split.lines.reverse(),
      { opacity: 0, y: 40, rotate: -10 },
      {
        opacity: 1,
        y: 0,
        rotate : 0,
        stagger: 0.12,
        ease: 'power2.out',
        scrollTrigger: {
          
          trigger: titleRef.current,
          start: 'top 80%',
          end: 'top 30%',
          scrub: true,
        },
      }
    )

        return () => {
          split.revert()
          ScrollTrigger.getAll().forEach(t => t.kill())
        }

  }, [])

  return (
    <div className="w-[var(--box-width)] mx-auto flex lg:items-end justify-between lg:flex-row flex-col lg:pb-[115px] md:pb-[90px] mb-[65px] lg:px-0 px-[10px] relative">
      <div className="lg:w-[70%]">
        <h6 className='roobert-r text-black text-[18px] leading-none lg:pt-[150px] md:pt-[75px] pt-[35px]'>Create at Neverland</h6>
        <h2 ref={titleRef} className='playfair text-black lg:text-[70px] md:text-[45px] text-[26px] leading-[0.9em] lg:mt-[50px] md:mt-[30px] mt-[15px] md:pl-[50px]'>
          We firmly believe in integrated experiences based on everlasting stories and designs that never grow old.
        </h2>
      </div>
         <a
            href="#"
            className="fairy-cursor-overlay roobert-r w-fit lg:text-[20px] text-[18px] menu-email flex text-[var(--pink)] lg:mt-0 md:mt-[20px] mt-[15px] md:ml-[50px] fairy-cursor-color-burn overflow-hidden relative">
            Let's fly today
         </a>
    </div>
  )
}

export default Cta