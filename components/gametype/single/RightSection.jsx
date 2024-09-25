import React from "react";
import CustomButton from "@/components/ui/custom-button";
import Delete from "@/components/ui/Icons/Delete";
import Continue from "@/components/ui/Icons/Continue";

export default function RightSection() {
  return (
    <div className="flex flex-col justify-between h-full">
      <div className=" flex flex-col p-4 ">
        <span className="running-text-large ">
          Echoes of the Forgotten, Valhein Kicklighter
        </span>

        <div className="border-none mt-4 bg-transparent flex gap-4 hover:bg-transparent">
          <img src="/Icons/Note.svg" alt="" />
          <span className="running-text-mono uppercase text-gray2">
            current situation
          </span>
        </div>

        <span className="mt-3">
          The players are approached by a mysterious figure cloaked in shadows
          during a bustling festival in a small town. The figure reveals that
          they possess an ancient map leading to the lost capital of Althar,
          where the Heart of Echoes is said to lie...{" "}
          <a href="" className="text-irisPurpleLight">
            Read more
          </a>
        </span>

        <div className="border-none mt-4 bg-transparent flex gap-4 hover:bg-transparent">
          <img src="/Icons/Swords.svg" alt="" />
          <span className="running-text-mono uppercase text-gray2">
            Character
          </span>
        </div>

        {/* card */}
        <div className={`mt-3 w-full flex justify-between `}>
          <div className="flex gap-4 border border-white/[8%] p-2 rounded-[16px] bg-white/[8%]">
            <img
              src={"/images/Header.png"}
              className="w-16 h-16 rounded-[6px] object-cover"
            />
            <div className="flex flex-col justify-center gap-2 items-start">
              <span className="running-text-mone">Valhein Kicklighter</span>
              <div className="flex flex-col">
                <span className="text-gray2 running-text-mono uppercase">
                  Level 31
                </span>
                <span className="flex gap-1 description uppercase">
                  <span className="text-irisPurpleLight">Drow</span>
                  <span className="text-sandyOrange">Rogue</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-2 mt-4 ">
          <img src="/Icons/Turns.svg" alt="" />
          <span className="text-gray2 running-text-mono">36 turns playeD</span>
        </div>
        <div className="flex gap-2 mt-4">
          <img src="/Icons/Watch.svg" alt="" />
          <span className="text-gray2 running-text-mono">
            ~102 min. playtime
          </span>
        </div>
      </div>
      <div className="flex p-4 justify-between border-t border-white/[10%]">
        <CustomButton
          withIcon
          variant={"secondary"}
          className={"bg-transparent border-none"}
        >
          <Delete
            className={`h-5 w-5 fill-red-500
            `}
          />
          delete game
        </CustomButton>
        <CustomButton withIcon variant={"primary"}>
          <Continue
            className={`h-5 w-5 fill-russianViolet
            `}
          />
          continue
        </CustomButton>
      </div>
    </div>
  );
}
