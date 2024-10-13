'use client'
import React, { useState, useEffect, ChangeEventHandler, MouseEventHandler } from 'react';
import ImageKit from 'imagekit-javascript';
import { IKImage } from 'imagekitio-next';

interface GalleryUploaderProps {
  handlePicChange: ChangeEventHandler<HTMLInputElement>;
  handleUploads: MouseEventHandler<HTMLButtonElement>
}


export default function GalleryUploader( { handlePicChange, handleUploads }: GalleryUploaderProps ) {

  return (
    <div>
      <input type="file" id="fileInput" name="files[]" multiple accept="image/*" onChange={handlePicChange}/>

      <div>upload button</div>

      <button type='button' onClick={handleUploads}>Subir</button>

    </div>
  )
}
