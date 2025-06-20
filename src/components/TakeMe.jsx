import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'

gsap.registerPlugin(ScrollTrigger)

const TakeMe = () => {

  const takeMeData = [
    {
      label: "Established",
      value: "2021"
    },
    {
      label: "Nationalities",
      value: "7"
    },
    {
      label: "Location",
      value: "The Netherlands"
    }
  ]

  const titleRef = useRef(null)
  const contentRef = useRef(null)
  const containerRef = useRef(null)
  const liRefs = useRef([])

  useEffect(() => {
    const split = new SplitText(titleRef.current, { types: 'chars' })
    const splitContent = new SplitText(contentRef.current, { type: 'words' })
    gsap.fromTo(
      split.chars.reverse(),
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
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

    gsap.from(
      splitContent.words, {
        opacity: 0, 
        y: -40,
        stagger: 0.02,
        ease: 'power2.out',
        scrollTrigger: {
          
          trigger: contentRef.current,
          start: 'top 80%',
          end: 'top 0%',
          scrub: true,
        },
      })

    liRefs.current.forEach((ref, i) => {
      gsap.fromTo(
        ref,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          ease: 'power2.out',
          scrollTrigger: {
            
            trigger: contentRef.current,
            start: `bottom+=${i * 40} bottom-=100`,
            end: `bottom+=${i * 40 + 20} top+=40`,
            scrub: 3,
          },  
        }
      )
    })

gsap.to(containerRef.current, {
  scale: 0.85,
  ease: 'power2.out',
  scrollTrigger: {
    trigger: containerRef.current,
    start: 'top top',
    end: '+=1250', // how long it stays pinned
    pin: true,
    scrub: 2,
  },
})


    return () => {
      split.revert()
      splitContent.revert()
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])

  return (
    <section className='w-full lg:px-0 px-[10px]'>
      <h2
        ref={titleRef}
        className='playfair lg:text-[86px] md:text-[65px] text-[40px] font-medium text-black leading-[1em] lg:block flex justify-center lg:w-1/3 mx-auto text-center'
      >
        Take me to Neverland
      </h2>
      <div ref={containerRef} className="take-me w-full md:h-[100vh] h-[90vh] bg-linear-to-br from-[#42786F] to-[#8BFFEF] mt-[60px] relative">
        <div className="w-[var(--box-width)] mx-auto h-full flex md:items-end items-center lg:p-0 p-[35px]">
          <div className="col-span-12 xl:col-span-8 text-white pb-8 md:pb-20 xl:pb-[15vh]">
            <p ref={contentRef} className="playfair lg:w-[65%] lg:text-[48px] md:text-[40px] text-[25px] leading-none">
              Neverland is the everlasting creative experience agency. We combine aesthetic design with compelling storytelling and a touch of pixie dust.
            </p>
            <ul className="roobert-r pt-8 md:pt-16">
              {takeMeData.map((data, idx) => (
                <li
                  key={idx}
                  ref={el => liRefs.current[idx] = el}
                  style={{ opacity: 0 }}
                  className="inline-block pr-4 w-full md:w-1/3 xl:w-60 mt-2 md:mt-0"
                >
                  <p className="text-base md:text-lg border-b md:pb-2 xl:pb-3">{data.label}</p>
                  <p className="text-base md:text-lg md:pt-2 xl:pt-3">{data.value}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TakeMe