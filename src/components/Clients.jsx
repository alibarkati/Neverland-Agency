import React from 'react'
import client_logo_1 from '/media/client_logo_1.svg'
import client_logo_2 from '/media/client_logo_2.svg'
import client_logo_3 from '/media/client_logo_3.svg'
import client_logo_4 from '/media/client_logo_4.svg'
import client_logo_5 from '/media/client_logo_5.svg'
import client_logo_6 from '/media/client_logo_6.svg'
import client_logo_7 from '/media/client_logo_7.svg'
import client_logo_8 from '/media/client_logo_8.svg'
import client_logo_9 from '/media/client_logo_9.svg'
import client_logo_10 from '/media/client_logo_10.svg'
import client_logo_11 from '/media/client_logo_11.svg'
import client_logo_12 from '/media/client_logo_12.svg'
import client_logo_13 from '/media/client_logo_13.svg'
import client_logo_14 from '/media/client_logo_14.svg'
import client_logo_15 from '/media/client_logo_15.svg'
import client_logo_16 from '/media/client_logo_16.svg'
import client_logo_17 from '/media/client_logo_17.svg'
import client_logo_18 from '/media/client_logo_18.svg'

// Add all logos and their display data here
const logos = [
  {
    src: client_logo_1,
    alt: "Coty",
    width: 94,
    height: 12,
    className: "h-3 w-auto sm:mx-auto flex-2 sm:flex-3 xl:flex-5 my-6 sm:my-10 xl:my-16",
    sr: "Coty"
  },
  {
    src: client_logo_2,
    alt: "Suit Supply",
    width: 113,
    height: 12,
    className: "float-right sm:float-none h-3 w-auto sm:mx-auto flex-2 sm:flex-3 xl:flex-5 my-6 sm:my-10 xl:my-16",
    sr: "Suit Supply"
  },
  {
    src: client_logo_3,
    alt: "O'neill",
    width: 130,
    height: 12,
    className: "h-3 w-auto sm:mx-auto flex-2 sm:flex-3 xl:flex-5 my-6 sm:my-10 xl:my-16",
    sr: "O'neill"
  },
  {
    src: client_logo_4,
    alt: "Nike",
    width: 69,
    height: 24,
    className: "float-right sm:float-none h-6 w-auto sm:mx-auto flex-2 sm:flex-3 xl:flex-5 my-6 sm:my-10 xl:my-16",
    sr: "Nike"
  },
  {
    src: client_logo_5,
    alt: "North Sails",
    width: 28,
    height: 28,
    className: "mx-auto h-7 w-auto sm:mx-auto flex-2 sm:flex-3 xl:flex-5 my-6 sm:my-10 xl:my-16",
    sr: "North Sails"
  },
  {
    src: client_logo_6,
    alt: "Rituals",
    width: 122,
    height: 12,
    className: "float-right sm:float-none h-3 w-auto sm:mx-auto flex-2 sm:flex-3 xl:flex-6 my-6 sm:my-10 xl:my-16",
    sr: "Rituals"
  },
  {
    src: client_logo_7,
    alt: "G-Star Raw",
    width: 134,
    height: 12,
    className: "h-3 w-auto sm:mx-auto flex-2 sm:flex-3 xl:flex-6 my-6 sm:my-10 xl:my-16",
    sr: "G-Star Raw"
  },
  {
    src: client_logo_8,
    alt: "Heesen",
    width: 32,
    height: 38,
    className: "mx-auto h-10 w-auto sm:mx-auto flex-2 sm:flex-3 xl:flex-6 my-6 sm:my-10 xl:my-16",
    sr: "Heesen"
  },
  {
    src: client_logo_9,
    alt: "Asics",
    width: 61,
    height: 20,
    className: "h-5 w-auto sm:mx-auto flex-3 xl:flex-6 my-6 sm:my-10 xl:my-16",
    sr: "Asics"
  },
  {
    src: client_logo_10,
    alt: "Nestle",
    width: 48,
    height: 12,
    className: "mx-auto h-3 w-auto sm:mx-auto flex-3 xl:flex-6 my-6 sm:my-10 xl:my-16",
    sr: "Nestle"
  },
  {
    src: client_logo_11,
    alt: "Wise",
    width: 44,
    height: 19,
    className: "float-right sm:float-none h-5 w-auto sm:mx-auto flex-3 xl:flex-7 my-6 sm:my-10 xl:my-16",
    sr: "Wise"
  },
  {
    src: client_logo_12,
    alt: "Siemens",
    width: 78,
    height: 12,
    className: "h-3 w-auto sm:mx-auto flex-3 xl:flex-7 my-6 sm:my-10 xl:my-16",
    sr: "Siemens"
  },
  {
    src: client_logo_13,
    alt: "Unknown",
    width: 30,
    height: 51,
    className: "mx-auto h-12 w-auto sm:mx-auto flex-3 xl:flex-7 my-6 sm:my-10 xl:my-16",
    sr: "Unknown"
  },
  {
    src: client_logo_14,
    alt: "WAMP",
    width: 27,
    height: 24,
    className: "float-right sm:float-none h-7 w-auto sm:mx-auto flex-3 xl:flex-7 my-6 sm:my-10 xl:my-16",
    sr: "WAMP"
  },
  {
    src: client_logo_15,
    alt: "Roland",
    width: 114,
    height: 17,
    className: "h-4 w-auto sm:mx-auto flex-2 sm:flex-3 xl:flex-7 my-6 sm:my-10 xl:my-16",
    sr: "Roland"
  },
  {
    src: client_logo_16,
    alt: "Heineken",
    width: 98,
    height: 18,
    className: "float-right sm:float-none h-5 w-auto sm:mx-auto flex-2 sm:flex-3 xl:flex-7 my-6 sm:my-10 xl:my-16",
    sr: "Heineken"
  },
  {
    src: client_logo_17,
    alt: "Bunq",
    width: 57,
    height: 24,
    className: "h-6 w-auto sm:mx-auto flex-2 sm:flex-3 xl:flex-7 my-6 sm:my-10 xl:my-16",
    sr: "Bunq"
  },
  {
    src: client_logo_18,
    alt: "Booking",
    width: 121,
    height: 20,
    className: "float-right sm:float-none h-5 w-auto sm:mx-auto flex-2 sm:flex-3 xl:flex-7 my-6 sm:my-10 xl:my-16",
    sr: "Booking"
  }
]

const Clients = () => {
  return (
    <section className="w-full py-14 md:py-20 lg:px-0 px-[10px] relative">
      <h1 className="sr-only">Brands we worked for</h1>
<div className="w-[var(--box-width)] mx-auto flex flex-wrap items-center">
  {logos.map((logo, idx) => (
    <div
      key={idx}
      className={
        "px-4 mb-8 w-1/2 sm:w-1/3 md:w-1/4 xl:w-1/6 flex justify-center items-center " +
        logo.className.replace(/flex-\d+(\s|$)/g, '').trim()
      }
    >
      <img
        src={logo.src}
        alt={logo.alt}
        width={logo.width}
        height={logo.height}
        className={logo.className.replace(/flex-\d+(\s|$)/g, '').trim()}
        loading="lazy"
      />
      <h2 className="sr-only">{logo.sr}</h2>
    </div>
  ))}
</div>
    </section>
  )
}

export default Clients