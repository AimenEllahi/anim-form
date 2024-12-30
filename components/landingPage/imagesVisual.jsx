import React from "react";
import Images from "./images";
import Button from "@/components/ui/custom-button";
import { useRouter } from "next/navigation";

export default function imagesVisual({ dictionary }) {
  const router = useRouter();
  const handleRedirect = () => {
    router.push("/discover/gallery");
  };

  console.log(dictionary);
  return (
    <div className=' h-full w-screen flex flex-col justify-center items-center text-white md:py-64 py-16 pb-32'>
      <h3 className='headline-1 text-center mb-16 px-12 z-10'>
        {dictionary?.fourthSection.title}
      </h3>
      <div className='flex flex-col relative gap-6 mb-8 h-[540px] justify-center bg-transparent items-center w-[100%] overflow-hidden'>
        <Images />
      </div>
      <Button onClick={handleRedirect}>
        {" "}
        {dictionary?.fourthSection.button}
      </Button>
    </div>
  );
}
