"use client";
import React, { useEffect, useRef, useState } from "react";
import Card from "@/components/ui/Shared/Card/character";
import CustomInputIcon from "@/components/ui/custom-input-icon";
import Chatbox from "./chatbox";
import BottomMenu from "./bottomMenu";
import useGameStore from "@/utils/gameStore";
import useUserStore from "@/utils/userStore";
import { addChoice } from "@/actions/game";
import Loader from "@/components/ui/Loader";
import useCustomToast from "@/hooks/useCustomToast";
import useControlsStore from "@/utils/controlsStore";
import DiceBox from "@3d-dice/dice-box";
import { getCredits } from "@/actions/character";

export default function Index({
  response,
  gameCharacter,
  setGameCharacter,
  gameCampaign,
  choices,
}) {
  console.log(choices);
  const { game, setGame } = useGameStore();
  const { user, setYellowCredits, setBlueCredits } = useUserStore();
  const { setShowCreditsDialogue } = useControlsStore();
  const { invokeToast } = useCustomToast();
  const [input, setInput] = useState("");
  const [textSize, setTextSize] = useState(19);
  const [saveCharacterLoading, setSaveCharacterLoading] = useState(false);
  const [imageViewDialog, setImageViewDialog] = useState(false);
  const [narrate, setNarrate] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isImageLoading, setIsImageLoading] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [diceBox, setDiceBox] = useState(null);
  const [rollSound, setRollSound] = useState();
  const [focusTrigger, setFocusTrigger] = useState(false);
  const [chat, setChat] = useState([
    {
      type: "system",
      text: response,
      choices,
    },
  ]);

  useEffect(() => {
    const rollSound = new Audio("/audio/dice-roll.mp3");
    setRollSound(rollSound);
    const _diceBox = new DiceBox("#dice-box-game", {
      assetPath: "/assets/dice-box", // required
      theme: "default", //optional
      enableShadows: true, // optional
      themeColor: "#242e9e", // optional
      scale: 8,
      lightIntensity: 1,
      shadowIntensity: 2,
    });
    setDiceBox(_diceBox);
  }, []);

  useEffect(() => {
    if (gameCampaign?.title) {
      document.title = "DND AI | Game: " + gameCampaign.title;
    }
  }, [gameCampaign]);

  const handleChat = async (text) => {
    if (user?.blueCredits < 1) {
      setShowCreditsDialogue(true);
      return;
    }

    try {
      // Initialize the dice box if not already initialized
      if (!diceBox.initialized) {
        await diceBox.init();
        diceBox.initialized = true; // Mark as initialized to prevent re-initialization
      }

      setTimeout(() => {
        rollSound.play();
      }, 1000);
      // Roll the dice
      const result = await diceBox.roll("1d20");

      // Get the roll result
      const roll = result[0].value;

      const payload = {
        userInput: `${text}, Roll: ${roll}`,
        characterId: game.characterId,
        campaignId: game.campaignId,
        gameId: game._id,
      };

      setLoading(true);
      const element = document.querySelector(".chat-box");
      setTimeout(() => {
        element.scrollTo({
          top: element.scrollHeight,
          behavior: "smooth", // You can also use 'auto' for an immediate scroll
        });
      }, 500);

      const {
        game: _game,
        responseText,
        choices,
      } = await addChoice(payload, user?.token);

      setGame(_game);
      console.log(choices);
      setChat((prev) => [
        ...prev,
        {
          type: "system",
          text: responseText,
          choices,
        },
      ]);
    } catch (error) {
      console.log(error);
      invokeToast(
        error?.response?.data?.error || "Something Went Wrong",
        "error"
      );
    } finally {
      const { credits } = await getCredits(user?.token);
      setYellowCredits(credits.yellowCredits);
      setBlueCredits(credits.blueCredits);
      setLoading(false);

      // Clear dice state if necessary
      // Ensure this does not transfer control again
      diceBox.clear();
    }
  };

  return (
    <>
      {saveCharacterLoading && (
        <Loader
          text={"Saving Character..."}
          className='absolute top-0 z-[40] left-0 max-h-screen h-screen w-screen bg-blur-bottom-menu flex items-center justify-center'
        />
      )}

      <div
        className={
          "absolute pointer-events-none top-0 left-0 ease-animate z-[9] flex items-center justify-start w-screen"
        }
      >
        <img
          src='/images/Game/gradient.png'
          alt='gradient'
          className='w-full h-52 lg:h-full lg:object-contain'
        />
      </div>
      <div
        suppressHydrationWarning
        className='w-full flex gap-10 px-6 lg:px-12 pb-32 lg:pb-12 h-screen fixed z-[8] overflow-y-scroll hide-scrollbar text-white'
      >
        <div className='w-1/4 b h-full hidden lg:flex flex-col gap-3 z-30 pt-[40px] lg:pt-[128px]'>
          <span className='running-text-mono text-gray2'>CAMPAIGN</span>
          <span className='headline-4 mb-3'>{gameCampaign?.title}</span>
          <Card hideMenu={true} isGamePage={true} character={gameCharacter} />
        </div>
        <div className='w-full lg:w-3/4 z-10 h-full'>
          <div className='flex relative flex-col h-full gap-3 w-full pt-[40px]'>
            {showMobileMenu && (
              <div className='fixed z-[10] top-0 left-0 w-screen h-screen bg-russianViolet/20'></div>
            )}
            <Chatbox
              isImageLoading={isImageLoading}
              textSize={textSize}
              loading={loading}
              chat={chat}
              character={gameCharacter}
              setInput={setInput}
              setImageViewDialog={setImageViewDialog}
              narrate={narrate}
              setFocusTrigger={setFocusTrigger}
            />
            <div className='z-[20] flex flex-col-reverse lg:flex-col gap-4 lg:gap-5 fixed bottom-0 left-0 w-screen bg-blur-bottom-menu lg:bg-transparent lg:backdrop-filter-none px-5 lg:p-0 lg:pt-2 pb-5 pt-4 lg:relative lg:w-full'>
              <CustomInputIcon
                focusTrigger={focusTrigger}
                blurOnOutsideClick={true}
                value={input}
                disabled={loading}
                onChange={(e) => setInput(e)}
                onClick={() => {
                  if (user?.blueCredits < 1) {
                    setTimeout(() => {
                      setShowCreditsDialogue(true);
                    }, 300);
                    return;
                  }
                  setChat((prev) => [
                    ...prev,
                    {
                      type: "player",
                      text: input,
                    },
                  ]);

                  setInput("");
                  handleChat(input);
                }}
                className={"w-full lg:w-[65%] h-[64px] lg:h-[80px]"}
                textAreaClassName={
                  "h-[64px] lg:h-[80px] pt-[22px] lg:py-[28px]"
                }
                placeholder='What Would You Do?'
                icon={
                  <img
                    src='/Icons/ArrowUp.svg'
                    alt='chat'
                    className='h-5 w-5'
                  />
                }
              />

              <BottomMenu
                setChat={setChat}
                textSize={textSize}
                setTextSize={setTextSize}
                imageViewDialog={imageViewDialog}
                setImageViewDialog={setImageViewDialog}
                loading={saveCharacterLoading}
                setLoading={setSaveCharacterLoading}
                narrate={narrate}
                showMenu={showMobileMenu}
                setShowMenu={setShowMobileMenu}
                setNarrate={setNarrate}
                setGameCharacter={setGameCharacter}
                isImageLoading={isImageLoading}
                setIsImageLoading={setIsImageLoading}
                gameCharacter={gameCharacter}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
