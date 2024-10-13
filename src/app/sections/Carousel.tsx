'use client'
import React from 'react'
import { useState } from 'react';
import { IKImage } from "imagekitio-next";

// const getUploadcareImageUrl = (uuid, transformation) => {
//   const baseUrl = `https://ucarecdn.com/${uuid}`; 
//   const transformationString = transformation.join("");
//   return `${baseUrl}/${transformationString}`
// }

// async function fetcher() {
//   const productsResponse = await fetch('http:/local')
// }

interface CarouselProps {
   products: { id: number; price: number; title: string; description: string; productGallery: string; }[]; 

}

export default function Carousel({products}: CarouselProps) {
  const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;
  //const productGalleryPaths = 
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === products.length - 3 ? prevIndex : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? prevIndex : prevIndex - 1
    );
  };

  const getProductpath = (id: number) => {
    const product = products[id];
    if(product && product.productGallery) {
      return product.productGallery.split(',')[0];
    }
    return ''
  }

  return (
    <div className='h-screen bg-carousel-gradient bg-full flex justify-center items-center'>
        <div className=' '>

          <div style={{ transform: `translateX(-${currentIndex * 320}px)` }}  className='flex gap-4 items-center'>
            
            {products.map((product, id) => (

              <div key={`img${id}`}  className='rounded-xl'>  
                <IKImage 
                      urlEndpoint={urlEndpoint}  
                      path={getProductpath(id)}
                      width="350"
                      height="450"
                      alt={product.title}
                      className='rounded-xl'
                />
              </div>
              
            ))}
          </div>

        </div>

    </div>
  )
}
