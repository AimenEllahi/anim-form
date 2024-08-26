import React, { useEffect, useState } from "react";
import CustomInput from "@/components/ui/custom-input";
import CustomButton from "@/components/ui/custom-button";
import { cn } from "@/lib/utils";
import CustomIconbutton from "@/components/ui/custom-iconbutton";
import useCharacterStore from "@/utils/characterStore";
import { canMoveForward, getRandomName } from "@/lib/Helpers/character";
import useDeviceDetect from "@/hooks/useDeviceDetect";
import { createCharacter, getCredits } from "@/actions/character";
import useUserStore from "@/utils/userStore";
import SearchInput from "@/components/ui/search-input";
import Check from "@/components/ui/Icons/Check";
import ArrowRight from "@/components/ui/Icons/ArrowRight";
import useCustomToast from "@/hooks/useCustomToast";
import { useRouter } from "next/navigation";
import { INITIAL_CHARACTER } from "./constants";
import useControlsStore from "@/utils/controlsStore";
import Loader from "@/components/ui/Loader";

const BackButton = ({ activeStep, isChoosingRandom, handleBack }) => {
  return (
    <CustomButton
      variant={"subtle"}
      className={cn(
        "opacity-0 pointer-events-none ease-animate",
        activeStep !== 0 && "opacity-100 pointer-events-auto"
      )}
      disabled={isChoosingRandom}
      onClick={handleBack}
      withIcon={true}
    >
      <img
        src='/Icons/ArrowLeft.svg'
        alt='logo'
        className='h-5 w-5 invert opacity-70'
      />
      Back
    </CustomButton>
  );
};

const NextButton = ({
  formComplete,
  activeStep,
  character,
  handleSubmit,
  handleNext,
  isLoading,
  isChoosingRandom,
}) => {
  const { isMobile } = useDeviceDetect();

  return (
    <CustomButton
      variant={formComplete ? "success" : "primary"}
      withIcon={true}
      disabled={
        !canMoveForward(activeStep, character, isMobile) ||
        isLoading ||
        isChoosingRandom
      }
      onClick={() => {
        if (formComplete) {
          handleSubmit();
        } else handleNext();
      }}
      className={"ps-5 pe-3.5"}
    >
      {formComplete ? "Finish And Start" : "Next step"}
      {formComplete ? (
        <Check className='h-5 w-5 fill-black' />
      ) : (
        <ArrowRight className='h-5 w-5 fill-black' />
      )}
    </CustomButton>
  );
};
export default function BottomMenu({ character, setCharacter }) {
  const {
    activeStep,
    setActiveStep,
    raceQuery,
    setRaceQuery,
    backgroundQuery,
    characterNameError,
    setCharacterNameError,
    setBackgroundQuery,
  } = useCharacterStore();
  const { invokeToast } = useCustomToast();
  const [isLoading, setIsLoading] = useState(false);
  const [isSoundOn, setIsSoundOn] = useState(true);
  const [searchMode, setSearchMode] = useState(false);
  const router = useRouter();
  const { setShowCreditsDialogue } = useControlsStore();
  const { isMobile } = useDeviceDetect();
  const { user, setBlueCredits, setYellowCredits } = useUserStore();
  const [isChoosingRandom, setIsChoosingRandom] = useState(false);
  const MAX_STEPS = isMobile ? 8 : 7;
  // console.log(character);

  const formComplete = activeStep === MAX_STEPS;
  function toggleSound() {
    setIsSoundOn(!isSoundOn);
  }
  const handleBack = () => {
    if (activeStep === 0) return;
    setActiveStep(activeStep - 1);
  };
  const handleNext = () => {
    if (activeStep === MAX_STEPS) return;
    setActiveStep(activeStep + 1);
  };

  const handleSubmit = async () => {
    console.log(character);
    return;
    if (!character.name) {
      setCharacterNameError(true);
      return;
    }

    if (user && user?.blueCredits < 1) {
      setShowCreditsDialogue(true);
      return;
    }
    try {
      setIsLoading(true);
      const payload = {
        who: character.name,
        race: character.race.name,
        gender: character.race.gender,
        background: character.background.name,
        _class: character.class.name,
        alignment: character.alignment.name,
        toolammo: character.equipment["tool&ammo"],
        isGreen: true,
        gold: character.gold,
        ...character.abilities,
        ...character.personality,
        ...character.equipment,
      };

      const { newCharacter } = await createCharacter(
        payload,
        user?.token || null
      );

      if (user?.token) {
        router.push("/character/sheet/" + newCharacter._id);
      } else {
        router.push(
          "/character/sheet/" + newCharacter._id + "?showGuestDialogue=true"
        );
      }

      setActiveStep(0);
      setCharacter(INITIAL_CHARACTER);
      invokeToast("Character Created Successfully", "Success");
    } catch (error) {
      invokeToast(
        error?.response?.data?.error || "Error Creating Character",
        "Error"
      );
      console.log(error);
    } finally {
      setIsLoading(false);
      const { credits } = await getCredits(user?.token);
      setYellowCredits(credits.yellowCredits);
      setBlueCredits(credits.blueCredits);
    }
  };

  const handleRandomCharacterName = () => {
    const name = getRandomName();
    setCharacter((prev) => ({
      ...prev,
      name,
    }));
    setCharacterNameError(false);
  };

  useEffect(() => {
    // Add event listener
    document.addEventListener("click", detectClickOutside);

    // Cleanup function to remove event listener
    return () => {
      document.removeEventListener("click", detectClickOutside);
    };
  }, [searchMode]); // Depend on searchMode to properly handle changes in its state

  const detectClickOutside = (e) => {
    if (searchMode && !e.target.closest(".search")) {
      // console.log("here");
      setSearchMode(false);
    }
  };

  if (isLoading)
    return (
      <Loader
        className={"fixed top-0 h-screen w-screen left-0 z-[20] bg-blur"}
        text='Creating Character...'
      />
    );

  return (
    <>
      {/* For Desktop */}
      <div className='text-white hidden     md:flex justify-between items-center w-full py-12  left-0 z-[20]   '>
        <CustomButton withIcon onClick={handleRandomCharacterName}>
          <img src='/Icons/Random.svg' alt='logo' className='h-5 w-5 ' />
          RANDOM CHARACTER Name
        </CustomButton>
        <div className='flex w-1/4 relative flex-col gap-1'>
          <CustomInput
            focusOnError={true}
            value={character.name}
            disabled={isChoosingRandom}
            icon={
              character.name && (
                <img
                  src='/Icons/Success.svg'
                  alt='Success'
                  className=' h-5 w-5'
                />
              )
            }
            error={characterNameError}
            onChange={(value) => {
              if (value) setCharacterNameError(false);
              else setCharacterNameError(true);
              if (value.length <= 32)
                setCharacter((prev) => ({ ...prev, name: value }));
            }}
            placeholder='CHARACTER NAME'
            className={"w-full"}
          />
          {characterNameError && (
            <span className='text-errorRed uppercase font-roboto-mono -bottom-6 left-1 text-[10px] absolute'>
              Please enter a character name
            </span>
          )}
        </div>

        <div className='flex items-center gap-x-6'>
          <BackButton
            activeStep={activeStep}
            isChoosingRandom={isChoosingRandom}
            handleBack={handleBack}
          />
          <NextButton
            formComplete={formComplete}
            activeStep={activeStep}
            character={character}
            handleSubmit={handleSubmit}
            handleNext={handleNext}
            isChoosingRandom={isChoosingRandom}
            isLoading={isLoading}
          />
        </div>
      </div>
      {/* For Mobile */}
      <div
        className={cn(
          "w-full md:hidden left-0 z-[10] fixed bottom-0",
          activeStep >= 7 ? "!bg-transparent " : "bg-blur-bottom-menu"
        )}
      >
        <div className=' flex items-center justify-between p-5  '>
          {searchMode ? (
            <SearchInput
              autoFocus={true}
              className={"w-full search text-white"}
              query={activeStep === 0 ? raceQuery : backgroundQuery}
              setQuery={activeStep === 0 ? setRaceQuery : setBackgroundQuery}
            />
          ) : (
            <>
              <div className='flex items-center gap-5'>
                <CustomIconbutton onClick={toggleSound}>
                  <img
                    src={isSoundOn ? "/Icons/Sound.svg" : "/Icons/SoundOff.svg"}
                    alt='Sound Toggle'
                    className='h-5 w-5 invert'
                  />
                </CustomIconbutton>
                <CustomIconbutton
                  className={cn(
                    "hidden search",
                    (activeStep === 0 || activeStep === 3) && "flex"
                  )}
                  onClick={() => setSearchMode(true)}
                >
                  <img
                    src={"/Icons/Search.svg"}
                    alt='Search Toggle'
                    className='h-5 w-5  '
                  />
                </CustomIconbutton>
              </div>
              <div className='flex items-center gap-x-6'>
                <BackButton
                  activeStep={activeStep}
                  isChoosingRandom={isChoosingRandom}
                  handleBack={handleBack}
                />
                <NextButton
                  formComplete={formComplete}
                  activeStep={activeStep}
                  character={character}
                  handleSubmit={handleSubmit}
                  handleNext={handleNext}
                  isLoading={isLoading}
                  isChoosingRandom={isChoosingRandom}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
