'use client'
import React from 'react'
import Image from "next/image";
import heroImage1 from '../../../public/hero1.jpg'
import heroImage2 from '../../../public/hero2.jpg'
import { IKImage, ImageKitProvider } from "imagekitio-next";


export default function HeroSection() {
  const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

  const handleClick =() => {
    console.log('hello there sexy');
  }
  return (
    <div className='flex items-center justify-center bg-conic-gradient bg-full h-screen'>
      {/* i think that the height does not work here - research height prop in Image in next js */}

        <IKImage 
                      urlEndpoint={urlEndpoint}
                      src={"https://ik.imagekit.io/nshimhfrv/Untitled%20design(1).png?updatedAt=1728947250215"}
                      height={750}
                      width={500}
                      alt={"girl in blue sweats"}
                      
                />
      <IKImage 
                      urlEndpoint={urlEndpoint}
                      src={"https://ik.imagekit.io/nshimhfrv/beach_H_oxwfBWX.jpg?updatedAt=1728869447954"}
                      height={750}
                      width={500}
                      alt={"girl in blue sweats"}
                      
                />
    
      <div className='absolute flex flex-col items-center top-[65%]'>
        <div>
          Lista para el veraneo?
        </div>
        <button onClick={handleClick}>
          ver estilos
        </button>
      </div>
    </div>
  )
}
