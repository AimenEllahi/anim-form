"use client";

import React, { useEffect, useState } from "react";
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
import GameCompletionPopup from "./GameCompletionPopup"; // Adjust the import path as needed

// Import the Google Analytics event function
import { event as gaEvent } from "@/utils/gtag";

export default function Index({
  response,
  gameCharacter,
  setGameCharacter,
  gameCampaign,
  choices,
}) {
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
  // New state for popup and completion check
  const [isGameCompleted, setIsGameCompleted] = useState(false);
  const [completionMessage, setCompletionMessage] = useState("");

  useEffect(() => {
    const rollSound = new Audio("/audio/dice-roll.mp3");
    setRollSound(rollSound);
    const _diceBox = new DiceBox("#dice-box-game", {
      assetPath: "/assets/dice-box",
      theme: "rock",
      enableShadows: true,
      themeColor: "#4F4ED8",
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
    // Track the user input event
    gaEvent({
      action: "submit_input",
      category: "Game Interaction",
      label: "User Submitted Input",
      value: text.length,
    });

    if (user?.blueCredits < 1) {
      console.log("Not enough credits to proceed.");
      setShowCreditsDialogue(true);
      return;
    }
    try {
      let rollResults = null;
      let diceExpression = null;
      const triggerWords = [
        "Roll",
        "Investigate",
        "Check",
        "Examine",
        "Cast",
        "Persuade",
        "Charm",
        "attack",
        "Loot",
      ];

      // Regular expression to match dice expressions like "2d6", "3d10", etc.
      const diceRegex = /(\d*)d(\d+)/i;
      const diceMatch = text.match(diceRegex);

      if (text.toLowerCase().includes("loot")) {
        diceExpression = "1d100";
      }
      // Check if the input contains any other trigger words
      else if (
        triggerWords.some((word) =>
          text.toLowerCase().includes(word.toLowerCase())
        )
      ) {
        if (!diceBox.initialized) {
          await diceBox.init();
          diceBox.initialized = true;
        }
        setTimeout(() => {
          rollSound.play();
        }, 1000);
        // Determine the dice expression to roll
        if (diceMatch) {
          const numberOfDice = diceMatch[1] ? parseInt(diceMatch[1], 10) : 1;
          const diceType = diceMatch[2];
          diceExpression = `${numberOfDice}d${diceType}`;
        } else if (
          text.toLowerCase().includes("roll") ||
          text.toLowerCase().includes("investigate") ||
          text.toLowerCase().includes("examine") ||
          text.toLowerCase().includes("charm") ||
          text.toLowerCase().includes("cast") ||
          text.toLowerCase().includes("persuade") ||
          text.toLowerCase().includes("attack") ||
          text.toLowerCase().includes("check")
        ) {
          diceExpression = "1d20";
        }
      }

      if (diceExpression) {
        const result = await diceBox.roll(diceExpression);
        rollResults = result.map((r) => r.value).join(", ");
      }

      const payload = {
        userInput: diceExpression ? `${text}, Roll: ${rollResults}` : text,
        characterId: game.characterId,
        campaignId: game.campaignId,
        gameId: game._id,
      };

      setLoading(true);

      const element = document.querySelector(".chat-box");
      setTimeout(() => {
        element.scrollTo({
          top: element.scrollHeight,
          behavior: "smooth",
        });
      }, 500);

      const {
        game: _game,
        responseText,
        choices,
        isCompleted,
        newLevel,
        unlockedAchievements,
      } = await addChoice(payload, user?.token);
      setGame(_game);

      if (isCompleted) {
        setIsGameCompleted(true);
        setCompletionMessage(responseText);

        // Track game completion event
        gaEvent({
          action: "game_completed",
          category: "Game Interaction",
          label: "User Completed Game",
        });
      }

      setChat((prev) => [
        ...prev,
        {
          type: "system",
          text: responseText,
          choices,
        },
      ]);

      if (newLevel) {
        invokeToast(`You have reached level ${newLevel}`, "success");
      }

      if (unlockedAchievements.length > 0) {
        unlockedAchievements.forEach((achievement, index) => {
          setTimeout(() => {
            invokeToast(`${achievement.title} Unlocked`, "success");
          }, 4000 * (index + (newLevel ? 1 : 0)));
        });
      }
    } catch (error) {
      console.log("Error in handleChat:", error);
      invokeToast(
        error?.response?.data?.error || "Something Went Wrong",
        "error"
      );
    } finally {
      const { credits } = await getCredits(user?.token);
      setYellowCredits(credits.yellowCredits);
      setBlueCredits(credits.blueCredits);
      setLoading(false);
      if (diceBox.initialized) {
        diceBox.clear();
      }
    }
  };

  return (
    <>
      {saveCharacterLoading && (
        <Loader
          text={"Saving Character..."}
          className="absolute top-0 z-[40] left-0 max-h-screen h-screen w-screen bg-blur-bottom-menu flex items-center justify-center"
        />
      )}
      {/* Show Game Completion Popup */}
      {isGameCompleted && (
        <GameCompletionPopup
          message={completionMessage}
          onClose={() => setIsGameCompleted(false)}
        />
      )}
      <div className="fixed pointer-events-none top-0 left-0 ease-animate z-[9] flex items-center justify-start w-screen">
        <img
          src="/images/Game/gradient.png"
          alt="gradient"
          className="hidden lg:block w-full lg:h-full lg:object-contain"
        />
        <img
          src="/images/Gradient-Mobile.png"
          alt="gradient"
          className="block lg:hidden w-full"
        />
      </div>
      <div
        suppressHydrationWarning
        className="w-full flex gap-10 px-5 lg:px-12 pb-32 lg:pb-12 h-screen fixed z-[8] overflow-y-scroll hide-scrollbar text-white"
      >
        <div className="w-1/4 b h-full hidden lg:flex flex-col gap-3 z-30 pt-[40px] lg:pt-[128px]">
          <span className="running-text-mono text-gray2">CAMPAIGN</span>
          <span className="headline-4 mb-3">{gameCampaign?.title}</span>
          <Card hideMenu={true} isGamePage={true} character={gameCharacter} />
        </div>
        <div className="w-full lg:w-3/4 z-10 h-full">
          <div className="flex relative flex-col h-full gap-3 w-full ">
            {showMobileMenu && (
              <div className="fixed z-[10] top-0 left-0 w-screen h-screen bg-russianViolet/20"></div>
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
            <div className="z-[20] flex flex-col-reverse lg:flex-col gap-4 lg:gap-5 fixed bottom-0 left-0 w-screen bg-blur-bottom-menu lg:bg-transparent lg:backdrop-filter-none px-5 lg:p-0 lg:pt-2 pb-5 pt-4 lg:relative lg:w-full">
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

                  // Track submit button click event
                  gaEvent({
                    action: "click_submit",
                    category: "User Interaction",
                    label: "User Clicked Submit",
                  });

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
                placeholder="What will you do?"
                icon={
                  <img
                    src="/Icons/ArrowUp.svg"
                    alt="chat"
                    className="h-5 w-5"
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
