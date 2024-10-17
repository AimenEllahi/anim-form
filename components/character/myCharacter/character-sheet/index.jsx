import React, { useEffect, useState, useRef } from "react";
import CharacterInfo from "@/components/character/myCharacter/character-sheet/characterInfo";
import Appearance from "@/components/character/myCharacter/character-sheet/Appearance";
import GeneralInfo from "@/components/character/myCharacter/character-sheet/general";
import CustomButton from "@/components/ui/custom-button";
import Play from "@/components/ui/Icons/Play";
import Edit from "@/components/ui/Icons/Edit";
import Download from "@/components/ui/Icons/Download";
import Avatar from "./create-avatar/avatar";
import { usePathname, useRouter } from "next/navigation";
import { extractSection, isSelectionValid } from "@/lib/Helpers/shared";
import CustomIconbutton from "@/components/ui/custom-iconbutton";
import SoundButton from "@/components/ui/Shared/SoundButton";
import Generate from "@/components/ui/Icons/Generate";
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
import Abilities from "./Abilities";
import Inventory from "./Inventory";

export default function characterSheet({ character, setCharacter }) {
  const [selectedTab, setSelectedTab] = useState("inventory");
  const router = useRouter();
  const pathname = usePathname();
  const { user } = useUserStore();
  const {
    currentCharacter,
    setCurrentCharacter,

    setStartNewGame,
  } = useGameStore();
  const { invokeToast } = useCustomToast();
  const containerRef = useRef();
  const [open, setOpen] = useState(false);
  const [appearance, setAppearance] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingAvatar, setLoadingAvatar] = useState(false);
  const [deleteCharacterLoading, setDeleteCharacterLoading] = useState(false);
  const [currentPortrait, setCurrentPortrait] = useState(
    character.personal.portraitUrl
  );
  const isCreator = user?._id === character?.userId;

  useEffect(() => {
    const container = containerRef.current;
    if (open) {
      //remove scorll
      container.style.height = "100vh !important";
      container.style.overflow = "hidden !important";
    } else {
      //add scroll
      container.style.height = "auto";
      container.style.overflow = "auto";
    }
  }, [open]);

  const handleDeleteCharacter = async () => {
    setDeleteCharacterLoading(true);
    try {
      await deleteCharacter(character._id, user?.token);
      if (currentCharacter?._id === character._id) setCurrentCharacter(null);
      router.push("/character/my-characters");
      invokeToast("Character Deleted Successfully", "Success");
    } catch (error) {
      console.log(error);
      invokeToast(
        error?.response?.data?.error || "Something Went Wrong",
        "Error"
      );
    } finally {
      setDeleteCharacterLoading(false);
    }
  };

  const handlePlayWithCharacter = async () => {
    try {
      setIsLoading(true);
      const characterId = character._id;

      const { character: _character } = await getCharacter(
        characterId,
        user?.token
      );

      setCurrentCharacter(_character);
      setStartNewGame(true);
    } catch (error) {
      invokeToast(
        error?.response?.data?.error || "Error playing character",
        "Error"
      );
      console.log("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (deleteCharacterLoading) return <Loader text={"Deleting Character ..."} />;

  return (
    <div
      ref={containerRef}
      className='h-full min-h-full w-full pt-[94px] px-5 pb-32 md:pt-[120px] md:pb-[104px] md:px-12 flex flex-col gap-[24px]'
    >
      <GuestUser />
      <div className='hidden md:flex md:justify-between gap-[32px]'>
        <div className='z-10 flex justify-start items-center gap-5'>
          <span className='text-white headline-3'>Antichristus</span>
          <img
            src={`https://dzjg7lvewk7ln.cloudfront.net/class/${character?.personal?.class
              .toLowerCase()
              .replaceAll(" ", "-")}.webp`}
            className='rounded-full h-[32px] w-[32px]'
            title='Characters Class'
            alt='class of the Character'
          />
          <div className='flex flex-col running-text-mono'>
            <span className='text-white '>LEVEL {character.value.level}</span>
            <span className=' text-irisPurpleLight uppercase'>
              {character.value.race}{" "}
              <span className=' text-sandyOrange uppercase'>
                {" "}
                {character.value.class}
              </span>
            </span>
          </div>
        </div>
        {/* <CustomButton
          onClick={() => {
            setOpen(true);
            if (character?.personal?.portraits?.length > 0) {
              router.push(pathname);
            } else {
              router.push(pathname + "?generateAvatar=true");
            }
          }}
        >
          {character?.personal?.portraits?.length > 0 ? (
            <Edit fill="white" className="h-5 w-5 opacity-70" />
          ) : (
            <Generate className="h-5 w-5 opacity-70 fill-white" />
          )}
          {character?.personal?.portraits?.length > 0 ? "Change " : "Create "}
          character portrait
        </CustomButton> */}
        {/**       <CustomButton variant='subtle'>
         <Download fill='white' className='h-5 w-5 opacity-70 text-white' />
          Download character sheet
        </CustomButton> */}
        <DeleteCharacter action={handleDeleteCharacter}>
          <CustomButton
            withIcon={true}
            variant='secondary'
            className={cn(!isCreator && "hidden")}
          >
            <Delete className='h-5 w-5 opacity-70 fill-errorRed' />
            Delete character
          </CustomButton>
        </DeleteCharacter>
      </div>
      <Switch selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      {selectedTab === "appearance" && (
        <div className=' h-full gap-5  z-10 flex'>
          <div>
            <CharacterInfo
              loadingAvatar={loadingAvatar}
              currentPortrait={currentPortrait}
              character={character}
            />
          </div>
          <div className=''>
            <Appearance character={character} />
          </div>

          <div className='   '>
            <GeneralInfo character={character} />
          </div>
        </div>
      )}

      {selectedTab === "abilities" && <Abilities character={character} />}
      {selectedTab === "inventory" && <Inventory character={character} />}

      <DeleteCharacter action={handleDeleteCharacter}>
        <CustomButton
          withIcon={true}
          variant='subtle'
          className={cn("w-fit self-start md:hidden", !isCreator && "hidden")}
        >
          <Delete className='h-5 w-5 opacity-70 fill-errorRed' />
          Delete
        </CustomButton>
      </DeleteCharacter>
      <Avatar
        open={open}
        setOpen={setOpen}
        payload={{
          appearance: character.value.appearance,
          id: character?._id,
        }}
        setCurrentPortrait={setCurrentPortrait}
        setLoadingAvatar={setLoadingAvatar}
        character={character}
        setCharacter={setCharacter}
        avatars={character?.personal?.portraits || []}
      />
      <div className='md:hidden z-[10] flex items-center justify-between bg-blur-bottom-menu fixed bottom-0 w-screen left-0 p-5 '>
        <div className='flex items-center gap-4'>
          <SoundButton />
          <CustomIconbutton
            onClick={() => {
              setOpen(true);
              router.push(pathname);
            }}
          >
            <Edit fill='white' className='h-5 w-5  ' />
          </CustomIconbutton>
        </div>
        <CustomButton
          disabled={isLoading}
          onClick={handlePlayWithCharacter}
          variant={"primary"}
        >
          <Play className='h-5 w-5 opacity-70' />
          Play Now
        </CustomButton>
      </div>
    </div>
  );
}
