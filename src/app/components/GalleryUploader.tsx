'use client'
import React, {useState, useRef, useCallback} from 'react'
import Image from 'next/image';
import * as LR from '@uploadcare/blocks';

import '@uploadcare/react-uploader/core.css'

LR.registerBlocks(LR);

export default function GalleryUploader() {
  
  return (
    <div>
      
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
      <lr-file-uploader-regular
                ctx-name="my-uploader"
                class="my-config"
                css-src="https://cdn.jsdelivr.net/npm/@uploadcare/blocks@0.25.0/web/lr-file-uploader-regular.min.css"
              >
      </lr-file-uploader-regular>
      
    </div>
  )
}

