'use client'

import React from 'react'
import Image from "next/image";
import heroImage1 from '../../../public/hero1.jpg'
import heroImage2 from '../../../public/hero2.jpg'
// below this piece of code is needed for next to render images.
// https://uploadcare.com/docs/integrations/next-js/

export default function HeroSection() {

  const handleClick =() => {
    console.log('hello there sexy');
  }
  return (
    <div className='flex items-center justify-center bg-conic-gradient bg-full h-screen'>
      {/* i think that the height does not work here - research height prop in Image in next js */}

      <div><Image alt='girl in gym clothes' width={'500'} height={'600'} src={heroImage1} /></div>
      <div><Image alt='girl in gym clothes' width={'500'} height={'600'} src={heroImage2} /></div>
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
