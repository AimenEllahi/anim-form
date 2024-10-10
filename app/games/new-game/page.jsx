import React from "react";
import NewGame from "@/components/newgame/index";

export default function page() {
  return (
    <div className="h-full md:h-screen w-full fixed md:relative z-[10] pt-[122px] md:pt-[144px] md:pb-[48px]">
      <NewGame />
    </div>
  );
}
