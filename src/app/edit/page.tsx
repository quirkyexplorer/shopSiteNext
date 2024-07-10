'use client'
import  React from 'react'
import { useState } from 'react';
import GalleryUploader from '../components/GalleryUploader';

export default function Edit() {
  const [formData, setFormData] = useState({
    price: 0,
    title: '',
    decription: '',
    imageUuid: []
  });

  const handleInputChange = (e: any) => {
    const {name, value} = e.target;

    const parsedValue = name === 'price' ? parseInt(value) || 0 : value;

    setFormData({
      ...formData,
      [name]: parsedValue
    })
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log('formData', formData);

    try {

    } catch(error) {
      console.log('Error during fetch:', error);
    }
  }

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
              name='decription'
              value={formData.decription}
              onChange={handleInputChange}
              />
          </div>
          <p className='text-teal font-bold'>Fotos:</p> 
          <GalleryUploader/>
          <button type='submit'onClick={(e) => handleSubmit(e)} className='bg-darkBlue self-center w-32 font-bold rounded-2xl p-4 mt-4'>Guardar</button>
        </form>
      </div>
      
    </div>
  )
}