import React, { useEffect, useState, useRef } from "react";

import Emblems from "./Emblems";
import CustomButton from "@/components/ui/custom-button";
import Play from "@/components/ui/Icons/Play";
import Edit from "@/components/ui/Icons/Edit";
// import Avatar from "./create-avatar/avatar";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import CustomIconbutton from "@/components/ui/custom-iconbutton";
import SoundButton from "@/components/ui/Shared/SoundButton";
import Delete from "@/components/ui/Icons/Delete";
import useUserStore from "@/utils/userStore";
import { cn } from "@/lib/utils";
import DeleteCharacter from "@/components/ui/Shared/Dialogue/DeleteCharacter";
import useCustomToast from "@/hooks/useCustomToast";
import { deleteCharacter, getCharacter } from "@/actions/character";
import Loader from "@/components/ui/Loader";
import useGameStore from "@/utils/gameStore";
import GuestUser from "@/components/ui/Shared/Dialogue/GuestUser";
import Switch from "./Switch";
import Titles from "./Titles";
import Achieve from "./Achieve";

export default function characterSheet({ character, setCharacter }) {
  const [selectedTab, setSelectedTab] = useState("emblems");
  const router = useRouter();
  const pathname = usePathname();
  //   const { user } = useUserStore();
  //   const params = useSearchParams();
  const { currentCharacter, setCurrentCharacter, setStartNewGame } =
    useGameStore();
  //   const { invokeToast } = useCustomToast();
  const containerRef = useRef();
  const [open, setOpen] = useState(false);
  const [selectedCompanion, setSelectedCompanion] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  //   const [loadingAvatar, setLoadingAvatar] = useState(false);
  //   const [deleteCharacterLoading, setDeleteCharacterLoading] = useState(false);
  //   const isCompanion = params.get("companion") === "true";
  //   const [currentPortrait, setCurrentPortrait] = useState(
  //     character.personal.portraitUrl
  //   );
  //   const isCreator = user?._id === character?.userId;

  //   useEffect(() => {
  //     const container = containerRef.current;
  //     if (open) {
  //       //remove scorll
  //       container.style.height = "100vh !important";
  //       container.style.overflow = "hidden !important";
  //     } else {
  //       //add scroll
  //       container.style.height = "auto";
  //       container.style.overflow = "auto";
  //     }
  //   }, [open]);

  //   const handleDeleteCharacter = async () => {
  //     setDeleteCharacterLoading(true);
  //     try {
  //       await deleteCharacter(character._id, user?.token);
  //       if (currentCharacter?._id === character._id) setCurrentCharacter(null);
  //       router.push("/character/my-characters");
  //       invokeToast("Character Deleted Successfully", "Success");
  //     } catch (error) {
  //       console.log(error);
  //       invokeToast(
  //         error?.response?.data?.error || "Something Went Wrong",
  //         "Error"
  //       );
  //     } finally {
  //       setDeleteCharacterLoading(false);
  //     }
  //   };

  //   const handlePlayWithCharacter = async () => {
  //     try {
  //       setIsLoading(true);
  //       const characterId = character._id;

  //       const { character: _character } = await getCharacter(
  //         characterId,
  //         user?.token
  //       );

  //       setCurrentCharacter(_character);
  //       setStartNewGame(true);
  //     } catch (error) {
  //       invokeToast(
  //         error?.response?.data?.error || "Error playing character",
  //         "Error"
  //       );
  //       console.log("Error:", error);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };

  //   if (deleteCharacterLoading) return <Loader text={"Deleting Character ..."} />;

  return (
    <div
      ref={containerRef}
      className="h-full min-h-full w-full pt-[160px] px-5 pb-32 md:pt-[120px] md:pb-[104px] md:px-12 flex flex-col gap-[24px] relative z-10"
    >
      <GuestUser />
      <div className="hidden md:flex  items-start justify-start md:justify-between  gap-1 md:gap-[32px]  ">
        <div className="w-full z-10  flex justify-between items-center">
          <div className="z-10 h-20 w-2/4 flex justify-start items-start md:items-center gap-1 md:gap-5 flex-col md:flex-row">
            <div className="w-20 h-20  rounded-full ">
              <img
                src="/achievements/adept.png"
                alt=""
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="flex flex-col  h-full">
              <span className=" text-sandyOrange running-text-mono  uppercase">
                Adept
              </span>
              <span className="text-white headline-3">Antichristus</span>
              <span className="text-gray2 headline-3 running-text-mono uppercase">
                Archievement Rank 3
              </span>
            </div>
          </div>
          <div className="z-10 text-sandyOrange w-2/4 h-20  flex flex-col gap-5 justify-start items-start ">
            <div className="w-full flex  justify-between items-center">
              <span className="text-[#FFB371] flex gap-2 uppercase running-text-mono">
                Total Trophies{" "}
                <img src="/achievements/icons/trophy.png" alt="" /> 120
              </span>
              <span className="text-[#FFB371] flex gap-2 uppercase running-text-mono">
                {" "}
                <img src="/achievements/icons/trophy.png" alt="" /> 120/340
              </span>
            </div>
            <div className="w-full bg-white/[15%] rounded-full h-2">
              <div className="h-2 rounded-full w-1/2 bg-gradient-to-r from-[#FFB371] to-[#F8D8BB]"></div>
            </div>
          </div>
        </div>
      </div>
      <Switch selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      {selectedTab === "emblems" && (
        <div className=" h-full w-full flex flex-col lg:flex-row">
          <div className="w-full ">
            <Emblems />
          </div>
        </div>
      )}
      {selectedTab === "titles" && <Titles />}{" "}
      {selectedTab === "achievements" && <Achieve />}
      <div className="md:hidden z-[10] flex items-center justify-between bg-blur-bottom-menu fixed bottom-0 w-screen left-0 p-5 ">
        <div className="flex items-center gap-4">
          <SoundButton />
          <CustomIconbutton
          // onClick={() => {
          //   setOpen(true);
          //   router.push(pathname);
          // }}
          >
            <Edit fill="white" className="h-5 w-5  " />
          </CustomIconbutton>
        </div>
        <CustomButton
          disabled={isLoading}
          //   onClick={handlePlayWithCharacter}
          variant={"primary"}
        >
          <Play className="h-5 w-5 opacity-70" />
          Play Now
        </CustomButton>
      </div>
    </div>
  );
}
