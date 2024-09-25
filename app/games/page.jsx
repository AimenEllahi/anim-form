import React from "react";
import Games from "@/components/gametype/index";
import NoGames from "@/components/gametype/noGames/index";
export default function page() {
  return (
    // <div className="h-full md:h-screen w-full relative z-[10] pt-[130px] md:pt-[120px] md:pb-[188px]">
    //   <Games />
    // </div>
    <div className="md:h-screen w-full relative z-[10]">
      <NoGames />
    </div>
  );
}
