"use client";
import React from "react";
import { Parallax } from "react-scroll-parallax";
import useDeviceDetect from "@/hooks/useDeviceDetect";

export default function ImageParallax() {
  const { isMobile } = useDeviceDetect();

  return (
    <div className='h-full w-[99%] me-auto relative flex flex-col gap-y-10 px-[20px] md:px-12 justify-center items-center'>
      {!isMobile ? (
        <div className='relative h-full flex items-center justify-center'>
          <h2
            style={{
              mixBlendMode: "exclusion",
            }}
            className='headline-1 text-center text-white z-[10]'
          >
            DISCOVER ENDLESS CREATIVE POSSIBILITIES.
          </h2>

          <Parallax
            translateY={5}
            speed={-8}
            className='absolute w-1/12 top-[15%] left-[14%]'
          >
            <video
              style={{
                mixBlendMode: "exclusion",
              }}
              src='https://dzjg7lvewk7ln.cloudfront.net/parallax/parallax-2.mp4'
              alt='Parallax Image 1'
              autoPlay
              loop
              playsInline
              muted
              width={256}
              height={256}
              className='w-full object-contain rounded-[10px]'
            />
          </Parallax>
          <Parallax
            translateY={15}
            speed={-10}
            className='absolute w-3/12 top-[10%] right-[16%]'
          >
            <video
              style={{
                mixBlendMode: "exclusion",
              }}
              src='https://dzjg7lvewk7ln.cloudfront.net/parallax/parallax-1.mp4'
              alt='Parallax Image 2'
              autoPlay
              loop
              playsInline
              muted
              width={768}
              height={512}
              className='w-full object-contain rounded-[10px]'
            />
          </Parallax>
          <Parallax
            translateY={20}
            speed={-10}
            className='absolute w-3/12 top-[30%] left-0'
          >
            <video
              style={{
                mixBlendMode: "exclusion",
              }}
              src='https://dzjg7lvewk7ln.cloudfront.net/parallax/parallax-3.mp4'
              alt='Parallax Image 3'
              autoPlay
              playsInline
              loop
              muted
              width={768}
              height={512}
              className='w-full object-contain rounded-[10px]'
            />
          </Parallax>
          <Parallax
            translateY={5}
            speed={-10}
            className='absolute w-4/12 top-[60%] right-[0%]'
          >
            <video
              style={{
                mixBlendMode: "exclusion",
              }}
              src='https://dzjg7lvewk7ln.cloudfront.net/parallax/parallax-4.mp4'
              alt='Parallax Image 4'
              autoPlay
              playsInline
              loop
              muted
              width={1024}
              height={768}
              className='w-full object-contain rounded-[10px]'
            />
          </Parallax>
          <Parallax
            translateY={10}
            speed={-8}
            className='absolute w-2/12 top-[50%] left-[50%]'
          >
            <video
              style={{
                mixBlendMode: "exclusion",
              }}
              src='https://dzjg7lvewk7ln.cloudfront.net/parallax/parallax-5.mp4'
              alt='Parallax Image 5'
              autoPlay
              playsInline
              loop
              muted
              width={512}
              height={384}
              className='w-full object-contain rounded-[10px] z-10 translate-x-[-50%]'
            />
          </Parallax>
          <Parallax
            translateY={15}
            speed={-10}
            className='absolute w-2/12 top-[65%] left-[8%]'
          >
            <video
              style={{
                mixBlendMode: "exclusion",
              }}
              src='https://dzjg7lvewk7ln.cloudfront.net/parallax/parallax-6.mp4'
              alt='Parallax Image 6'
              autoPlay
              playsInline
              loop
              muted
              width={512}
              height={384}
              className='w-full object-contain rounded-[10px]'
            />
          </Parallax>
        </div>
      ) : (
        <div className='relative flex flex-col gap-y-[64px] mt-16'>
          <Parallax
            translateY={15}
            speed={-10}
            className='w-full flex justify-start z-10'
          >
            <video
              style={{
                mixBlendMode: "exclusion",
              }}
              src='https://dzjg7lvewk7ln.cloudfront.net/parallax/parallax-1.mp4'
              alt='Parallax Image 2'
              autoPlay
              loop
              playsInline
              muted
              width={768}
              height={512}
              className='w-2/3 object-contain rounded-[10px] z-10'
            />
          </Parallax>
          <Parallax
            translateY={15}
            speed={-10}
            className='w-full flex justify-end z-10'
          >
            <video
              style={{
                mixBlendMode: "exclusion",
              }}
              src='https://dzjg7lvewk7ln.cloudfront.net/parallax/parallax-2.mp4'
              alt='Parallax Image 1'
              autoPlay
              loop
              muted
              playsInline
              width={512}
              height={384}
              className='w-1/3 object-contain rounded-[10px] z-10'
            />
          </Parallax>

          <Parallax translateY={15} speed={-10} className='w-full z-10'>
            <video
              style={{
                mixBlendMode: "exclusion",
              }}
              src='https://dzjg7lvewk7ln.cloudfront.net/parallax/parallax-3.mp4'
              width={1024}
              height={768}
              autoPlay
              playsInline
              loop
              muted
              className='w-full object-contain rounded-[10px] z-10'
            />
          </Parallax>
          <h2
            style={{
              mixBlendMode: "difference",
            }}
            className='headline-1 top-[50%] translate-y-[-50%] self-center text-center text-white absolute !z-[11]'
          >
            DISCOVER ENDLESS CREATIVE POSSIBILITIES.
          </h2>
          <Parallax translateY={15} speed={-10} className='w-full z-10'>
            <video
              style={{
                mixBlendMode: "exclusion",
              }}
              src='https://dzjg7lvewk7ln.cloudfront.net/parallax/parallax-4.mp4'
              alt='Parallax Image 5'
              autoPlay
              loop
              playsInline
              muted
              width={1024}
              height={768}
              className='w-1/2 object-contain rounded-[10px] z-10'
            />
          </Parallax>
          <Parallax
            translateY={15}
            speed={-10}
            className='w-full flex justify-end z-10'
          >
            <video
              style={{
                mixBlendMode: "exclusion",
              }}
              src='https://dzjg7lvewk7ln.cloudfront.net/parallax/parallax-6.mp4'
              alt='Parallax Image 6'
              autoPlay
              loop
              playsInline
              muted
              width={512}
              height={384}
              className='w-1/3 object-contain rounded-[10px] z-10'
            />
          </Parallax>
          <Parallax translateY={15} speed={-10} className='w-full z-10'>
            <video
              style={{
                mixBlendMode: "exclusion",
              }}
              src='https://dzjg7lvewk7ln.cloudfront.net/parallax/parallax-5.mp4'
              alt='Parallax Image 4'
              autoPlay
              playsInline
              loop
              muted
              width={1024}
              height={768}
              className='w-full object-contain rounded-[10px] z-10'
            />
          </Parallax>
        </div>
      )}
    </div>
  );
}
