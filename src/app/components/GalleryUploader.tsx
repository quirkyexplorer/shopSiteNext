'use client'
import React, {useState, useRef, useEffect} from 'react'
import * as LR from '@uploadcare/blocks';
import { OutputFileEntry } from '@uploadcare/blocks';

// Register uploadcare blocks
LR.registerBlocks(LR);

interface GalleryUploaderProps {
  files: OutputFileEntry[];
  onChange: (files: OutputFileEntry[]) => void;
  productGallery: string[]; // Define the type of gallery items
  addUrl: (update: (prevUrlArray: string[]) => string[]) => void;
  urlArray: string[];
}

export default function GalleryUploader({ 
  files,
  onChange,
  productGallery,
  addUrl,
  urlArray
} : GalleryUploaderProps) {

  const [uploadedFiles, setUploadedFiles] = useState<OutputFileEntry[]>([]);
  const ctxProviderRef = useRef<typeof LR.UploadCtxProvider.prototype & LR.UploadCtxProvider>(null);
  
  useEffect(()=>{

    if (typeof window !== 'undefined') {
      // Only run this in the browser
      const uploadcareProviderRef = ctxProviderRef.current;
      if (!uploadcareProviderRef) return;
  
      // handleUploadEvent logic...
      const handleUploadEvent = (e: Event) => {
        const detail = (e as CustomEvent<OutputFileEntry[]>).detail;
  
        if (detail) {
          const newFiles = [...uploadedFiles, ...detail];
          setUploadedFiles(newFiles);
          onChange(newFiles);
          //onError('');
  
          detail.forEach(file => {
            if (file.cdnUrl ) {
              addUrl(prevUrlArray => [...prevUrlArray, file.cdnUrl || '/No_image_available.svg']);
            }
          })
  
        }
      }

      uploadcareProviderRef.addEventListener('upload-finish', handleUploadEvent);

    return () => {
			uploadcareProviderRef.removeEventListener('upload-finish', handleUploadEvent);
		};

    }

  }, [files, uploadedFiles, urlArray, addUrl, onChange])

  return (
    <div className='w-full'>
      <lr-config
              ctx-name="my-uploader"
              pubkey="b739047dcf890df23203"
              img-only="true"
              multiple={true}
              max-local-file-size-bytes="524288000"
              use-cloud-image-editor="true"
              source-list="local, camera, instagram"
              >
      </lr-config>
      <lr-upload-ctx-provider id="uploaderctx" ctx-name={"my-uploader"} ref={ctxProviderRef} />
      <lr-file-uploader-regular
                ctx-name="my-uploader"
                class="my-config"
                css-src="https://cdn.jsdelivr.net/npm/@uploadcare/blocks@0.50.1/web/lr-file-uploader-regular.min.css"
              >       
      </lr-file-uploader-regular>    
    </div>
  )
}

