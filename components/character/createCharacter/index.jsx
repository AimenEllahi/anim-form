"use client";
import React, { useEffect, useState } from "react";
import Create from "@/components/character/createCharacter/create";

import useCharacterStore from "@/utils/characterStore";
import useDeviceDetect from "@/hooks/useDeviceDetect";
import { INITIAL_CHARACTER } from "./constants";
import ImageModal from "./shared/ImageModal";
import BottomMenu from "./BottomMenu";
import { useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";

export default function Index() {
  const { isMobile } = useDeviceDetect();

  const { showModal, setActiveStep } = useCharacterStore();
  const searchParams = useSearchParams();

  const id = searchParams.get("id");

  const [character, setCharacter] = useState(INITIAL_CHARACTER);

  //get item from local storage with this id
  useEffect(() => {
    if (id) {
      const item = JSON.parse(localStorage.getItem(id));

      if (item) {
        //delete from localstorage
        localStorage.removeItem(id);
        setCharacter(item);
        setActiveStep(isMobile ? 8 : 7);
      }
    }
  }, [id]);

  useEffect(() => {
    //height 100 vh  not scrollable when show modal
    if (showModal) {
      document.body.style.overflowY = "hidden ";
    }

    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [showModal]);
  return (
    <div
      className={cn(
        "h-full md:h-screen md:max-h-screen box-border  w-full flex flex-col bg-gradient pt-[136px] md:pt-[120px]  px-6 lg:px-12  ",
        showModal && "h-screen overflow-hidden"
      )}
    >
      <ImageModal />
      {/* Desktop */}
      <div className='hidden md:flex flex-col gap-2.5 '>
        <h1 className='text-center flex justify-start text-white headline-3 z-[10] '>
          Create your Adventurer
        </h1>
      </div>

      <div className='w-full flex z-[10] h-1/2 flex-1     '>
        <Create setCharacter={setCharacter} character={character} />
      </div>
      <BottomMenu setCharacter={setCharacter} character={character} />
    </div>
  );
}
