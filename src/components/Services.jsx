import React, { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import shadow from '/media/shadow.png'

const Model = () => {
  const { scene } = useGLTF('/threejs/galaxy.gltf')
  const ref = useRef()
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.x -= 0.005
    }
  })
  // Adjust scale as needed, but camera position is more important for fit
  return <primitive ref={ref} object={scene} scale={2.8} />
}

const Services = () => {
  const services = [
    {
      id: '01',
      title: 'Brand Communication',
      items: [
        'Identity and Positioning',
        'Brand and Innovation Strategy',
        'Brand Messaging',
        'Guidelines and Systems',
        'Visual Language and Art Direction'
      ]
    },
    {
      id: '02',
      title: 'Experiential Design',
      items: [
        'Spatial Design',
        'eCommerce and Websites',
        'Digital Product and Services',
        'Prototyping and Optimization'
      ]
    },
    {
      id: '03',
      title: 'Content Creation',
      items: [
        'Content Strategy',
        'Photography',
        'Video Production',
        '3D and Motion Graphics',
        'Copywriting',
        'NFT Design and Development'
      ]
    }
  ]

  return (
    <div className="w-full lg:px-0 px-[10px]">
      <div className="w-[var(--box-width)] mx-auto flex relative">
        <div className="services-content lg:w-[50%] w-full flex flex-col lg:gap-[250px] md:gap-[50px] gap-[30px] lg:pt-[200px]">
          {services.map((service, idx) => (
            <div key={idx} className="service-box w-full">
              <h5 className='roobert-r text-[20px] flex items-center'>
                0{idx + 1} <div className="w-4 md:w-6 h-px mx-1 md:mx-1.5 bg-black"></div> {service.title}
              </h5>
              <ul className='playfair lg:text-[48px] md:text-[36px] text-[24px] leading-[1em] md:pl-[50px] mt-[17px]'>
                {service.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="service-model w-[45%] lg:flex hidden flex-col items-start relative">
          <div className="w-full flex flex-col items-start justify-start sticky top-0">
            <Canvas
              style={{
                height: 700,
                width: '100%',
                display: 'block',
                marginTop: 0,
                marginBottom: -150,
                alignSelf: 'flex-start'
              }}
              camera={{
                position: [0, 0, 7], // Move camera further back for full model
                fov: 40 // Wider field of view to fit more of the model
              }}
            >
              <ambientLight intensity={0.7} />
              <directionalLight position={[5, 5, 5]} />
              <Suspense fallback={null}>
                <Model />
              </Suspense>
              {/* <OrbitControls enableZoom={false} enablePan={false} autoRotate={false} /> */}
            </Canvas>
            <img
            src={shadow} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services