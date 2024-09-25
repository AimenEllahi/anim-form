import React from "react";
import CustomButton from "@/components/ui/custom-button";
import Play from "@/components/ui/Icons/Play";

export default function index() {
  return (
    <div className="no-games-bg flex w-full h-full justify-center items-center">
      <div className=" flex flex-col justify-center items-center gap-4 mb-4">
        <img src="/images/PurpleDice.svg" alt="" className="h-full w-1/5" />
        <span className="headline-3 text-white">
          Ready to start your{" "}
          <span className="text-irisPurpleLight">first adventure?</span>
        </span>
        <span className="running-text text-white text-center mb-4">
          You're just moments away from unlocking endless creative <br /> power,
          ready to explode into infinite possibilities!
        </span>
        <CustomButton withIcon variant={"primary"}>
          <Play
            className={`h-5 w-5 fill-gray2
            `}
          />
          continue
        </CustomButton>
      </div>
    </div>
  );
}
