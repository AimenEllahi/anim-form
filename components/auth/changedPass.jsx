import React from "react";
import CustomButton from "../ui/custom-button";

export default function changedPass() {
  return (
    <div className=" text-white h-[278px] w-[345px] flex text-center flex-col justify-between items-center gap-8  ">
      <img
        src="/Icons/passChanged.png"
        alt=""
        className="w-[109px] h-[126px] object-contain"
      />
      <div className="flex flex-col justify-center items-center gap-4">
        <h1 className="running-text-large">
          You’ve successfully changed your password
        </h1>
      </div>

      <div className="w-full flex flex-col gap-4">
        <CustomButton variant={"primary"} className={"w-full font-bold"}>
          SIGN IN <img src="/Icons/ArrowRight.svg" alt="" className="h-5 w-5" />
        </CustomButton>
      </div>
    </div>
  );
}
