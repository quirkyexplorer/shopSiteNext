'use client'
import React, {useState, useRef, useCallback} from 'react'

import '@uploadcare/react-uploader/core.css'
import { FileUploaderRegular } from '@uploadcare/react-uploader';
import { OutputFileEntry } from '@uploadcare/blocks';

import st from './RegularView.module.css';



export default function GalleryUploader() {

  const [files, setFiles ] = useState<OutputFileEntry<'success'>[]>([]);
  const dataOutputRef = useRef();


  const handleChangeEvent = (files) => {
    console.log('change event payload:', files);

    setFiles([...files.allEntries.filter(f => f.status === 'success')] as OutputFileEntry<'success'>[]);
  };

  // const handleUploaderEvent = useCallback((e) => {
  //   const { data } = e.detail;
  //   setFiles(data);
  // }, []);


  return (
    <div>
      
      {/* <FileUploaderRegular onChange={handleChangeEvent} pubkey="b739047dcf890df23203"/> */}

      <div className={st.previews}>
        {files.map((file) => (
          <div key={file.uuid} className={st.previewWrapper}>
            <img
              className={st.previewImage}
              key={file.uuid}
              src={`${file.cdnUrl}/-/preview/-/resize/x400/`}
              width="200"
              height="200"
              alt={file.fileInfo.originalFilename || ''}
              title={file.fileInfo.originalFilename || ''}
            />

            <p className={st.previewData}>
              {file.fileInfo.originalFilename}
            </p>
            <p className={st.previewData}>
              {formatSize(file.fileInfo.size)}
            </p>
          </div>
        ))}
      </div>
      {/* <lr-config
              ctx-name="my-uploader"
              pubkey="b739047dcf890df23203"
              img-only="true"
              multiple="true"
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
                <lr-data-output
                  ref={dataOutputRef}
                  ctx-name="my-uploader"
                  pubkey="b739047dcf890df23203"
                  hidden
                  use-event
                  onEvent={handleUploaderEvent}
                >
                </lr-data-output>
              </lr-file-uploader-regular> */}
      
    </div>
  )
}

function formatSize(bytes: number | null) {
  if (!bytes) return '0 Bytes';

  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return `${parseFloat((bytes / k ** i).toFixed(2))} ${sizes[i]}`;
}
