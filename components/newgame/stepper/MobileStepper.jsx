import Navbar from "@/components/navigation/Navbar";
import React from "react";

export default function MobileStepper() {
  return (
    <div className='flex flex-col md:hidden'>
      <Navbar newGameStepper = {true} />
    </div>
  );
}
