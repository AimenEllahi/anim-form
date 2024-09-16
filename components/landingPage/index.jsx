"use client";
import React, { useRef, useState } from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import Step from "@/components/landingPage/step";
import ImageParallax from "@/components/landingPage/ImageParallax";
import useDeviceDetect from "@/hooks/useDeviceDetect";
import dynamic from "next/dynamic";
import { cn } from "@/lib/utils";
import useControlsStore from "@/utils/controlsStore";
import SoundButton from "@/components/ui/Shared/SoundButton";
import PlayForFreeMobile from "@/components/ui/Shared/PlayForFreeMobile";
import ImagesVisual from "@/components/landingPage/imagesVisual";
import Campaigns from "@/components/landingPage/campaignSection";
import Image from "next/image";

// Dynamically import LocomotiveScroll to avoid server-side rendering issues
const LocomotiveScroll = dynamic(
  () => import("@/components/landingPage/LocomotiveScroll"),
  {
    ssr: false,
  }
);

export default function Home() {
  const { showMenu } = useControlsStore();
  const scrollRef = useRef(null);
  const locoScrollRef = useRef(null);
  const { isMobile } = useDeviceDetect();
  const [videoError, setVideoError] = useState(false);

  const handleVideoError = () => {
    setVideoError(true);
  };

  return (
    <>
      <div className='gradient-blur'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <LocomotiveScroll scrollRef={scrollRef} locoScrollRef={locoScrollRef} />
      <div
        data-scroll-container
        ref={scrollRef}
        className='w-full h-full overflow-x-hidden bg-gradient-to-b px-0 py-0 m-0 '
      >
        <div className='w-full h-screen relative'>
          {!videoError ? (
            <video
              autoPlay
              loop
              //inline
              playsInline
              muted
              className='absolute top-0 left-0 w-full h-full object-cover'
              onError={handleVideoError}
            >
              <source src='/videos/header.mp4' type='video/mp4' />
              Your browser does not support the video tag.
            </video>
          ) : (
            <div className='absolute top-0 left-0 w-full h-full'>
              <Image
                src={
                  isMobile
                    ? "/images/Landing/Header-mobile.webp"
                    : "/images/Landing/Header.webp"
                }
                alt='Header Background'
                className='absolute top-0 left-0'
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
          )}
          <div className='absolute md:bottom-10 px-5 md:px-12 bottom-40 md:left-0 left-0 md:w-2/4 w-full'>
            <h1 className='text-white w-full headline-3'>
              UNLEASH YOUR IMAGINATION WITH LIMITLESS GAMEPLAY!
            </h1>
            <div
              className={cn(
                `flex w-full z-50 fixed bottom-[20px] left-0 px-[20px] justify-between items-center md:hidden`,
                showMenu && "hidden"
              )}
            >
              <SoundButton />
              <PlayForFreeMobile />
            </div>
          </div>
        </div>
        <ParallaxProvider>
          <div className='w-screen md:h-[200vh] py-10 h-full flex flex-col justify-center items-center '>
            <ImageParallax />
          </div>
        </ParallaxProvider>

        <div className='h-full flex flex-col justify-center items-center bg-transparent md:py-32 px-5 md:px-12'>
          <Step
            number={1}
            title={"CRAFT YOUR OWN CHARACTER"}
            description={
              "You can easily create your own character by selecting from a wide range of races, classes, backgrounds, starting gear, and more. This allows you to venture into your own unique stories, shaping your character's journey as you progress and level up!"
            }
            image={
              "https://dzjg7lvewk7ln.cloudfront.net/tutorial/tutorial-1.webp"
            }
            loading='lazy'
          />
          <Step
            number={2}
            title={"DESIGN YOUR OWN CAMPAIGNS"}
            description={
              "Unleash your creativity and effortlessly craft your own campaign. You have the freedom to set the main plot, establish the setting, create a timeline, and add a special hook. There are no limits to what you can create!"
            }
            image={
              "https://dzjg7lvewk7ln.cloudfront.net/tutorial/tutorial-2.webp"
            }
            loading='lazy'
          />
          <Step
            number={3}
            title={"EXPERIENCE EPIC CHARACTER PROGRESSION"}
            description={
              "Immerse yourself in the journey of your character's growth. Progress through your own campaigns or those created by others, both privately and publicly, for an unforgettable gaming experience!"
            }
            image={
              "https://dzjg7lvewk7ln.cloudfront.net/tutorial/tutorial-3.webp"
            }
            loading='lazy'
          />
        </div>

        <ImagesVisual />
        <div className='w-s h-full flex flex-col justify-center items-center bg-transparent'>
          <Campaigns />
        </div>
      </div>
    </>
  );
}
