import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

const CustomCursor = () => {
  const fairyCursor = useRef(null)

  useEffect(() => {
    const cursor = fairyCursor.current

    // Mouse move listener
    const moveCursor = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.25,
        ease: 'power2.out'
      })
    }

    // Elements that trigger custom cursor style
    const popOverlays = document.querySelectorAll('.fairy-cursor-overlay')

    const handleEnter = () => {
      cursor.classList.add('pop-overlay')
    }

    const handleLeave = () => {
      cursor.classList.remove('pop-overlay')
    }

    // Attach hover listeners
    popOverlays.forEach((overlay) => {
      overlay.addEventListener('mouseenter', handleEnter)
      overlay.addEventListener('mouseleave', handleLeave)
    })

    window.addEventListener('mousemove', moveCursor)

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', moveCursor)
      popOverlays.forEach((overlay) => {
        overlay.removeEventListener('mouseenter', handleEnter)
        overlay.removeEventListener('mouseleave', handleLeave)
      })
    }
  }, [])

  return (
    <div
      ref={fairyCursor}
      className="fairy-cursor w-4 h-4 -translate-x-1/2 -translate-y-1/2 top-0 left-0 rounded-full bg-black fixed z-[9999] pointer-events-none hidden lg:block"
    />
  )
}

export default CustomCursor