import React, { useEffect, useState, useRef } from "react";
import CharacterInfo from "@/components/character/myCharacter/character-sheet/characterInfo";
import Appearance from "@/components/character/myCharacter/character-sheet/Appearance";
import GeneralInfo from "@/components/character/myCharacter/character-sheet/general";
import CustomButton from "@/components/ui/custom-button";
import Play from "@/components/ui/Icons/Play";
import Edit from "@/components/ui/Icons/Edit";
import Avatar from "./create-avatar/avatar";
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
import Abilities from "./Abilities";
import Inventory from "./Inventory";
import Companions from "./Companions";
import ShareDialogue from "./ShareDialogue";
import Head from "next/head";

export default function characterSheet({ character, setCharacter }) {
  const [isShareDialogOpen, setIsShareDialogOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState("appearance");
  const router = useRouter();
  const pathname = usePathname();
  const { user } = useUserStore();
  const params = useSearchParams();
  const { currentCharacter, setCurrentCharacter, setStartNewGame } =
    useGameStore();
  const { invokeToast } = useCustomToast();
  const containerRef = useRef();
  const [open, setOpen] = useState(false);
  const [selectedCompanion, setSelectedCompanion] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingAvatar, setLoadingAvatar] = useState(false);
  const [deleteCharacterLoading, setDeleteCharacterLoading] = useState(false);
  const isCompanion = params.get("companion") === "true";
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

  const handleShareClick = () => {
    setIsShareDialogOpen(true);
  };

  const handleDialogClose = () => {
    setIsShareDialogOpen(false);
  };

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
      className='h-full min-h-full w-full pt-[160px] px-5 pb-32 md:pt-[120px] md:pb-[104px] md:px-12 flex flex-col gap-[24px] relative z-10'
    >
      <GuestUser />
      <div className='hidden md:flex  items-start justify-start md:justify-between  gap-1 md:gap-[32px]  '>
        <div className='z-10 flex justify-start items-start md:items-center gap-1 md:gap-5 flex-col md:flex-row'>
          <span className='text-white headline-3'>
            {character.personal.name}
          </span>
          <div className='flex  items-center gap-2 md:gap-5'>
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
        </div>
       
        <div className='flex gap-4'>
          <CustomButton
            withIcon={true}
            variant='secondary'
            onClick={handleShareClick}
            className={cn("hidden md:flex", !isCreator && "hidden md:hidden")}
          >
            <img
              src='/Icons/Share.svg'
              alt='Share Icon'
              className='h-5 w-5 opacity-70'
            />
            Share
          </CustomButton>
          <DeleteCharacter action={handleDeleteCharacter}>
            <CustomButton
              withIcon={true}
              variant='secondary'
              className={cn("hidden md:flex", !isCreator && "hidden md:hidden")}
            >
              <Delete className='h-5 w-5 opacity-70 fill-errorRed' />
              Delete character
            </CustomButton>
          </DeleteCharacter>
        </div>
      </div>
      <Switch selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      {selectedTab === "appearance" && (
        <div className=' h-full gap-5  flex flex-col lg:flex-row'>
          <div>
            <CharacterInfo
              setOpen={setOpen}
              loadingAvatar={loadingAvatar}
              currentPortrait={currentPortrait}
              character={character}
              isCreator={isCreator}
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
      {selectedTab === "companions" && (
        <Companions
          loadingAvatar={loadingAvatar}
          character={character}
          isCreator={isCreator}
          selectedCompanion={selectedCompanion}
          setOpen={setOpen}
          setSelectedCompanion={setSelectedCompanion}
        />
      )}

      {selectedTab === "appearance" && (
        <div className='flex items-center gap-5'>
          <CustomButton
            withIcon={true}
            variant='secondary'
            onClick={handleShareClick}
            className={cn("md:hidden", !isCreator && "hidden")}
          >
            <img
              src='/Icons/Share.svg'
              alt='Share Icon'
              className='h-5 w-5 opacity-70'
            />
            Share
          </CustomButton>
          <DeleteCharacter action={handleDeleteCharacter}>
            <CustomButton
              withIcon={true}
              variant='secondary'
              className={cn(" md:hidden", !isCreator && "hidden")}
            >
              <Delete className='h-5 w-5 opacity-70 fill-errorRed' />
              Delete character
            </CustomButton>
          </DeleteCharacter>
        </div>
      )}
      <Avatar
        open={open}
        setOpen={setOpen}
        payload={{
          appearance: isCompanion
            ? selectedCompanion?.appearance
            : character.value.appearance,
          id: character?._id,
          selectedPortrait: isCompanion
            ? selectedCompanion?.selectedPortrait
            : "",
          name: isCompanion ? selectedCompanion?.name : character.personal.name,
          isCompanion,
        }}
        setCurrentPortrait={setCurrentPortrait}
        setLoadingAvatar={setLoadingAvatar}
        character={character}
        setCharacter={setCharacter}
        avatars={
          isCompanion
            ? selectedCompanion?.portraits
            : character?.personal?.portraits || []
        }
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
      {/* Share Dialogue */}
      <ShareDialogue
        open={isShareDialogOpen}
        onOpenChange={handleDialogClose}
      />
    </div>
  );
}
