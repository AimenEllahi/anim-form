import React, { useCallback, useState, useEffect, useRef } from "react";
import Upload from "@/components/ui/Icons/Upload";
import { useDropzone } from "react-dropzone";

import "subjx/dist/style/subjx.css";
// import { cn } from "@/lib/utils";
// import ImageEditor from "./ImageEditor";
// import { useFunctionalityStore } from "@/utils/store";
// import PopupShapes from "../BottomMenu/PopupShapes";
// const convertPdfToImages = async (file) => {
//   const pdfjs = window.pdfjsLib;
//   const pdfjsWorker = await import("pdfjs-dist/build/pdf.worker.min.mjs");
//   pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;
//   console.log("PDFJS", pdfjs);
//   let image;
//   // const data = await readFileData(file);
//   const pdf = await pdfjs.getDocument(file).promise;
//   console.log(pdf);
//   const canvas = document.createElement("canvas");

//   const page = await pdf.getPage(1);
//   const viewport = page.getViewport({ scale: 1 });
//   const context = canvas.getContext("2d");
//   canvas.height = viewport.height;
//   canvas.width = viewport.width;
//   await page.render({ canvasContext: context, viewport: viewport }).promise;
//   image = canvas.toDataURL("image/png");

//   canvas.remove();
//   return image;
// };

// const tiffToImage = (file) => {
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();
//     xhr.responseType = "arraybuffer";
//     xhr.open("GET", file);
//     xhr.onload = function (e) {
//       if (xhr.status === 200) {
//         const Tiff = window.Tiff;
//         const tiff = new Tiff({ buffer: xhr.response });
//         const canvas = tiff.toCanvas();
//         const imageData = canvas.toDataURL("image/png");

//         canvas.remove();
//         resolve(imageData);
//       } else {
//         reject(new Error("Failed to fetch TIFF file"));
//       }
//     };
//     xhr.onerror = function (e) {
//       reject(new Error("Error fetching TIFF file"));
//     };
//     xhr.send();
//   });
// };

// const createImage = (
//   url,
//   setSelectedFile,
//   setAspectRatio,
//   calculateDimensions
// ) => {
//   // Load the image to get its natural width and height
//   const img = new Image();
//   img.onload = function () {
//     // Calculate the aspect ratio
//     const aspectRatio = img.naturalWidth / img.naturalHeight;
//     console.log("Aspect Ratio:", aspectRatio);

//     // Set the selected file and aspect ratio in state
//     calculateDimensions(url);
//     setSelectedFile(url);
//     setAspectRatio(aspectRatio);
//   };
//   img.src = url;
// };
// const AcceptedFileTypes = [
//   "image/png",
//   "image/jpeg",
//   "image/tiff",
//   "application/pdf",
// ];

const upload = ({ file, setFile }) => {
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();

      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {
        // Do whatever you want with the file contents
        const binaryStr = reader.result;
        console.log(binaryStr);
      };
      reader.readAsArrayBuffer(file);
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
              <span className='text-gray2'>Drag and drop files or </span>upload
              files
            </span>
            <span className='text-gray2 font-roboto-mono'>
              png, jpg, tif, webp, pdf
            </span>
          </div>
        </section>
      </div>
    </>
  );
};

export default upload;
