import React, { useCallback, useState, useEffect, useRef } from "react";
import Upload from "@/components/ui/Icons/Upload";
import { useDropzone } from "react-dropzone";

import "subjx/dist/style/subjx.css";
const allowedTypes = ["image/jpeg", "image/webp", "image/png"];
const upload = ({ files, setFiles, dictionary }) => {
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();

      if (!allowedTypes.includes(file.type)) {
        //  console.log(`File type ${file.type} is not allowed.`);
        return; // Skip this file if it's not an allowed type
      }

      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {
        // Convert the file to Base64
        const base64String = reader.result.split(",")[1]; // Extract base64 part
        const base64URL = reader.result; // Full base64 string with prefix for rendering

        setFiles((prev) => {
          if (prev.length < 5) {
            return [
              ...prev,
              {
                filename: file.name,
                content: base64String,
                encoding: "base64",
                url: base64URL,
              },
            ];
          } else {
            return prev;
          }
        });
      };
      reader.readAsDataURL(file);
    });
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
  });

  return (
    <>
      <div
        className={"max-h-[173px] w-full flex items-center justify-center  "}
      >
        <section className=' h-[173px] w-full'>
          <div
            {...getRootProps()}
            className='dropzone h-full w-full rounded-xl border-dashed border-white border border-opacity-75  flex items-center justify-center flex-col gap-y-3 bg-transparent'
          >
            <input {...getInputProps()} />
            <Upload />

            <span>
              <span className='text-gray2'>{dictionary.dragAndDrop} </span>
              {dictionary.uploadFile}
            </span>
            <span className='text-gray2 font-roboto-mono'>png, jpg, webp</span>
          </div>
        </section>
      </div>
    </>
  );
};

export default upload;
