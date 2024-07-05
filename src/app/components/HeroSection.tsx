import React from 'react'
import Image from "next/image";
import heroImage1 from '../../../public/hero1.jpg'
import heroImage2 from '../../../public/hero2.jpg'

export default function HeroSection() {
  return (
    <div className='flex items-center justify-center bg-conic-gradient bg-full bg-custom-pos h-screen relative'>
      <div><Image alt='girl in gym clothes' width={'500'} height={'600'} src={heroImage1}/></div>
      <div><Image alt='girl in gym clothes' width={'500'} height={'600'} src={heroImage2}/></div>
      <div className='absolute flex flex-col items-center top-[65%]'>
        <div>
          Lista para el veraneo?
        </div>
        <div>
          ver estilos
        </div>
      </div>
    </div>
  )
}
