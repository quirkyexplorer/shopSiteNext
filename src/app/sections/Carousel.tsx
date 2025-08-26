'use client'
import React from 'react'
import { useState, CSSProperties } from 'react';
import { IKImage, ImageKitProvider } from "imagekitio-next";
import Image from 'next/image';
import { faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faCircleChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// this is a typescript object - what is doing is defining the object type for the products
interface CarouselProps {
   products: { id: number; price: number; title: string; description: string; productGallery: string; }[]; 

}

export default function Carousel({products}: CarouselProps) {
  const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;
  const [currentIndex, setCurrentIndex] = useState(0);

// FIX ME: CONCEPTUALLY HOW WOULD YOU EXPLAIN THIS CODE ?
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

// making css objects as tailwind does not support natively some of the motion features
  const wrapper = {
    maxWidth: "1260px",
    overflow: "hidden"
  }

  const trackStyle = {
      
     display: 'flex',
     transition: "transform 1.5s ease",
     transform: `translateX(-${currentIndex * 420}px)`,
     gap: '20px',
     paddingLeft: '10px', 
  }

  const slide = {
    maxWidth: '400px',
    borderRadius: '3%',
    boxShadow: '0px 0px 10px 1px hsl(265, 100%, 50%)',
  }

  const buttonLeft: CSSProperties = {
    display: 'flex',
    position: 'absolute',
    justifyContent: 'center',   // Center the icon inside the button
    alignItems: 'center',       // Center the icon inside the button
    borderRadius: '50%',
    width: '40px',              // Set width for the circle
    height: '40px',             // Set height for the circle
    backgroundColor: 'hsl(315, 100%, 50%)', // Background color
    transition: 'opacity 1s ease',
    top: '50%',
    left: '10%',
    transform: 'translateY(-50%)',
  };

  const buttonRight: CSSProperties = {
    display: 'flex',
    position: 'absolute',
    justifyContent: 'center',   // Center the icon inside the button
    alignItems: 'center',       // Center the icon inside the button
    borderRadius: '50%',
    width: '40px',              // Set width for the circle
    height: '40px',             // Set height for the circle
    backgroundColor: 'hsl(315, 100%, 50%)', // Background color
    transition: 'opacity 1s ease',
    top: '50%',
    transform: 'translateY(-50%)',
    right: '10%',
  }


  return (
    <div id='main'  className='h-screen w-full bg-carousel-gradient bg-full flex justify-center items-center relative'>
      {/* */}
      <div id='wrapper' 
        
        style={wrapper} 
        //className="max-w-[960px] md:max-w-[645px] sm:max-w-[325px] mx-auto"
      >

          <div id='track' style={trackStyle} >
          {/* <ImageKitProvider urlEndpoint={urlEndpoint}  > */}
            {products.map((product, id) => ( 
                <IKImage 
                      key={id}
                      urlEndpoint={urlEndpoint}
                      src={getProductpath(id)}
                      height={800}
                      width={500}
                      alt={product.title}
                      style={slide}
                />
            ))}            
            
          {/* </ImageKitProvider>    */}
          </div>

            {/* navigation buttons or indicators */}
            <button style={buttonLeft} onClick={handlePrev}
            // adding transitions
              onMouseEnter={(e) => e.currentTarget.style.opacity = '0.5'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
            >
              <FontAwesomeIcon icon={faCircleChevronLeft}  size="3x" />
            </button>
            <button style={buttonRight} onClick={handleNext}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '0.5'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
            >
              <FontAwesomeIcon icon={faCircleChevronRight} size="3x"/>
            </button>
            
        

      </div>

    </div>
  )
}
