'use client'
import React from 'react'
import Image from "next/image";
import heroImage1 from '../../../public/hero1.jpg'
import heroImage2 from '../../../public/hero2.jpg'
import { IKImage, ImageKitProvider } from "imagekitio-next";


export default function HeroSection() {
  // in next we can fetch the endpoing with the following line
  const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

  const handleClick =() => {
    // FIX ME 
    // should redirect to the actual place. a list of styles in cards. not yet developed. 
  }


  return (
    <div className='flex items-center justify-center bg-conic-gradient bg-full h-screen'>
      <div className="grid grid-cols-1 lg:grid-cols-2  max-w-7xl px-4">
        {/* First Image - Always visible */}
        <div className="w-full block">
          <IKImage
            urlEndpoint={urlEndpoint}
            src="https://ik.imagekit.io/nshimhfrv/Untitled%20design(1).png?updatedAt=1728947250215"
            height={750}
            width={500}
            alt="girl in blue sweats"
            
          />
        </div>
        
        {/* Second Image - Hidden on mobile/medium, visible on large screens small screens-oriented*/}
        <div className="w-full hidden lg:block">
          <IKImage
            urlEndpoint={urlEndpoint}
            src="https://ik.imagekit.io/nshimhfrv/beach_H_oxwfBWX.jpg?updatedAt=1728869447954"
            height={750}
            width={500}
            alt="white see through beach pants with adorned hat"
            
          />
        </div>
      </div>
    
      <div className='absolute flex flex-col items-center top-[80%] gap-4'>
        <div className='font-extrabold text-3xl text-black bg-white bg-opacity-70 p-2 w-96 text-center

        '>
          Lista para el veraneo?
        </div>
        <button className='font-bold text-2xl bg-black p-2 w-56
          hover:text-black
          hover:bg-white
          transition-all duration-700 ease-in-out
        ' onClick={handleClick}>
          ver estilos
        </button>
      </div>
    </div>
  )
}
