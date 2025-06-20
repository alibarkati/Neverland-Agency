import React, { useContext, useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import ThemeContext from '../ThemeContext'

gsap.registerPlugin(ScrollTrigger)


const Hero = () => {

  const { isDarkTheme, setIsDarkTheme } = useContext(ThemeContext)

  useEffect(() => {
  }, [isDarkTheme])

  const canvasRef = useRef(null)
  const containerRef = useRef(null)
  const headingRef = useRef(null)
  const paragraphRef = useRef(null)
  const heroBtn = useRef(null)

  useEffect(() => {

    const splitHeading = new SplitText(headingRef.current, { types: 'chars' })
    const splitParagraph = new SplitText(paragraphRef.current, { types: 'chars' })

    const canvas = canvasRef.current
    const context = canvas.getContext('2d')

    const frames = {
      currentFrame: 0,
      maxFrames: 180,
    }

    const images = []
    let loadedImages = 0

    for (let i = 1; i <= frames.maxFrames; i++) {
      const img = new Image()
      img.src = `/media/hero-canvas/${i.toString().padStart(3, '0')}-hero.webp`
      img.onerror = () => {
        console.error(`Failed to load image: ${img.src}`)
      }
      img.onload = () => {
        loadedImages++
        if (loadedImages === frames.maxFrames) {
          drawFrame(frames.currentFrame)
        }
      }
      images.push(img)
    }

    const drawFrame = (index) => {
      const img = images[index]
      if (!img || !img.complete || img.naturalWidth === 0 || img.naturalHeight === 0) return

      canvas.width = window.innerWidth
      canvas.height = window.innerHeight

      const canvasRatio = canvas.width / canvas.height
      const imageRatio = img.naturalWidth / img.naturalHeight

      let drawWidth, drawHeight

      if (canvasRatio > imageRatio) {
        drawWidth = canvas.width
        drawHeight = canvas.width / imageRatio
      } else {
        drawHeight = canvas.height
        drawWidth = canvas.height * imageRatio
      }

      const offsetX = (canvas.width - drawWidth) / 2
      const offsetY = (canvas.height - drawHeight) / 2

      context.clearRect(0, 0, canvas.width, canvas.height)
      context.drawImage(img, offsetX, offsetY, drawWidth, drawHeight)

      context.imageSmoothingEnabled = true
      context.imageSmoothingQuality = 'high'
    }

    const updateFrames = (newFrame) => ({
      currentFrame: newFrame,
      onUpdate: () => {
        drawFrame(Math.floor(frames.currentFrame))
      },
    })

    const tl = gsap.timeline({
      scrollTrigger: {
        
        trigger: containerRef.current,
    start: 'top top',
    end: 'bottom bottom',
    scrub: 5,
    onUpdate: (self) => {
      if (self.progress === 1) {
        setIsDarkTheme(true); // darken
      } else {
        setIsDarkTheme(false); // lighten
      }
    }
      },
    })

    tl.to(frames, updateFrames(40), 'a')
    tl.to(splitHeading.chars, {
      opacity: 0,
      duration: 0.01,
      stagger: 0.01
    }, "a")
    tl.to(heroBtn.current, {
      opacity: 0
    }, "a")
    tl.to(frames, updateFrames(90), 'b')
    tl.to(splitParagraph.chars, {
      opacity: 0,
      duration: 0.01,
      stagger: 0.01
    }, "b")
    tl.to(frames, updateFrames(130))
    tl.to(frames, updateFrames(180), "c")
    tl.to(canvasRef.current, {
      scale: 0.7
    }, "c")


    const handleResize = () => drawFrame(Math.floor(frames.currentFrame))
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <div ref={containerRef} className="w-full h-[350vh] lg:overflow-x-clip relative">
      <div className="w-full h-screen sticky top-0">
        <canvas ref={canvasRef} className="w-full h-full" />
        <div className="hero-content w-[var(--box-width)] h-screen lg:pr-0 md:pr-[100px] flex flex-col md:items-end items-center justify-center absolute top-0 md:left-1/2 md:-translate-x-1/2">
          <div className="md:w-[50%] flex flex-col items-center justify-center gap-[25px]">
            <h1 ref={headingRef} className="playfair text-white md:text-[65px] text-[32px] leading-none text-center">
              Welcome to Neverland
            </h1>
            <p ref={paragraphRef} className="roobert-r text-white text-[18px] text-center lg:w-1/2 md:w-[70%] w-[90%]">
              The Everlasting Creative Experience Agency
            </p>
          </div>
        </div>
        <div className="w-[var(--box-width)] absolute lg:left-[52.5%] left-[50%] -translate-x-1/2 bottom-[10%] flex justify-end">
          <a ref={heroBtn} href="#" className="fairy-cursor-overlay flex flex-col items-center gap-[60px]">
            <span className="roobert-b flex rotate-[-90deg] translate-x-[-1px] text-white lg:text-[15px] md:text-[13px] text-[12px] leading-none">
              Scroll to Discover
            </span>
            <svg width="12" height="54" viewBox="0 0 12 54" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-1.5 transition-transform duration-500"><path d="M6 1L6 53 M1 48L6 53L11 48" stroke="#ffffff" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero