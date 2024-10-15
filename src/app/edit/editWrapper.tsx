'use client'
import React, { useState, useEffect, ChangeEventHandler, MouseEventHandler } from 'react'
import Image from 'next/image';
import GalleryUploader from '../components/GalleryUploader';
import { Product } from '@prisma/client';
import ImageKit from "imagekit-javascript"
import { IKImage } from "imagekitio-next";

export const emptyProduct: Product = {
  id: NaN,
  price: 0,
  title: '',
  description: '',
  productGallery: ''
}

export default function EditWrapper()  {

  const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;
  const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;

  const imageKit = new ImageKit({
    publicKey: publicKey,
    urlEndpoint: urlEndpoint!,
  });


  const [formData, setFormData] = useState({
    price: 0,
    title: '',
    description: '',
    productGallery: ''
  });

  // state for gallery image files
  const [galleryPics, setGalleryPics] = useState<File[]>([]);

  const [galleryUrls, setGalleryUrls] = useState<string[]>([]);

  // console.log('gallery pics', galleryPics);

  // console.log('gallery urls', galleryUrls);
  //const defaultValues = 

  const handleInputChange = (e: any) => {
    const {name, value} = e.target;

    const parsedValue = name === 'price' ? parseInt(value) || 0 : value;

    setFormData({
      ...formData,
      [name]: parsedValue
    })
  }

  // console.log('gallery urls', galleryUrls);

  const handlePicChange: ChangeEventHandler<HTMLInputElement> = (e) => {

    const files = e.target.files;

    if (files) {
      // Convert the FileList to an array
      const filesArray = Array.from(files);
      setGalleryPics(filesArray); // Store selected files in state

      // You can also handle the uploads here
      filesArray.forEach((file) => {
          // Trigger IKUpload for each file
          // You can programmatically pass each file to IKUpload here if needed
      });
  } else {
      // Handle the case where no files were selected (optional)
      console.log('No files selected');
  }

  }

  const handleUploads: MouseEventHandler<HTMLButtonElement> = async () => {
    try {

          // Now you can safely use signature, expire, and token
          for (const file of galleryPics) {
            const result = await authenticator();

            if (result) {
              const { signature, expire, token } = result;

              //console.log('this working?', file.name);
              // the following are required
              
              if (token && expire) {
    
                // go ahead and upload
                imageKit.upload({
                  file: file,
                  fileName: file.name, 
                  signature: signature, 
                  token: token, 
                  expire: expire
                })
                .then((result) => {
                 
                  console.log("result", result.url);
                  setGalleryUrls((prevPaths) => [...prevPaths, result.url]);
                })
                .catch((error) => {
                  console.log("upload failed, error", error);
                })
    
              }
            }      
          }

    } catch (error) {
      console.error('error', error)
    }
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    

		let eventData = formData;
    if (galleryUrls.length > 0) {
      eventData.productGallery = galleryUrls.join(','); // Join the URLs into a single string
  }

    // console.log('formData', eventData);
    // console.log('images urls', galleryUrls);
    try {
      const response = await fetch('/api/products', {
        method: 'POST',
        headers: {
          'Content-Type' : 'application/json',
        }, 
        body: JSON.stringify(eventData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();

      console.log("server response", data);

      setFormData({
        price: 0,
        title: '',
        description: '',
        productGallery: ''
      })

      setGalleryPics([]);

    } catch(error) {
      console.log('Error during fetch:', error);
    }
  }

  const authenticator = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/auth");
  
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Request failed with status ${response.status}: ${errorText}`);
      }
  
      const data = await response.json();
      const { signature, expire, token } = data;
      return { signature, expire, token };
    } catch (error: unknown) {

      if (error instanceof Error) {
        console.log(error.message);
      }

      else {
        console.log('Unknown error occurred');
      }
    }
  };

  return (
    <div className='bg-editPage-gradient bg-full h-screen'>
      <div className='flex justify-center items-center gap-4 h-24 bg-darkBlue'>
        <div className='font-bold text-4xl text-hotPink'>2sure</div>
      </div>
      <div className='text-3xl font-bold flex justify-center p-10'> Página de edición </div>
      <div className='w-full flex justify-center'>

        <form action="" className='flex flex-col gap-4 bg-darkPurple p-4 rounded-lg'>

          <p className='text-teal font-bold'>Precio:</p>
          <div className='p-3 rounded-md bg-darkBlue '>
            <input 
             
              className='bg-darkBlue rounded-md outline-none' 
              name='price'
              value={formData.price}
              onChange={handleInputChange}
              />
          </div>

          <p className='text-teal font-bold'>Nombre de la prenda:</p>
          <div className='p-3 rounded-md bg-darkBlue '>
            <input 
              type="text" 
              className='bg-darkBlue rounded-md outline-none' 
              name='title'
              value={formData.title}
              onChange={handleInputChange}
              />
          </div>

          <p className='text-teal font-bold'>Breve descripción:</p> 
          <div className='p-3 rounded-md bg-darkBlue '>
            <input 
              type="text" 
              className='bg-darkBlue rounded-md outline-none' 
              name='description'
              value={formData.description}
              onChange={handleInputChange}
              />
          </div>
          <p className='text-teal font-bold'>Fotos:</p> 

          <GalleryUploader handlePicChange= {handlePicChange} handleUploads={handleUploads}
            /> 

          {/* {galleryUrls.map((data, index) => {

            return (

              <div className='' key={data}>
                <Image 
                  src={data}
                  alt=''
                  className="rounded transition-opacity opacity-0 duration-[1s] object-cover w-full h-full"
                  quality={100}
									fill
                />
              </div>
            )

          })} */}

          <button type='submit'onClick={(e) => handleSubmit(e)} className='bg-darkBlue self-center w-32 font-bold rounded-2xl p-4 mt-4'>Guardar</button>
        </form>
      </div>
      
    </div>
  )
}

