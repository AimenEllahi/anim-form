"use client";
import React, { useState } from "react";

import Choose from "./Choose";
import Info from "./Info";

export default function Index({ character, setCharacter }) {
  const handleSelectBackground = (background) => {
    setCharacter((prev) => ({
      ...prev,
      background,
    }));
  };
  return (
    <div className=' text-white  flex justify-start items-start gap-5 h-full   w-full pb-28 md:pb-0'>
      <Choose
        handleSelectBackground={handleSelectBackground}
        background={character.background}
      />
      <Info background={character.background} />
    </div>
  );
}
