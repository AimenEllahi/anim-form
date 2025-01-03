"use client";
import React, { Suspense, useEffect, useState } from "react";
import Game from "@/components/game/gamepage/index";
import useGameStore from "@/utils/gameStore";
import Loader from "@/components/ui/Loader";
import { getGame, initiateGame } from "@/actions/game";
import useUserStore from "@/utils/userStore";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import useCustomToast from "@/hooks/useCustomToast";
import useControlsStore from "@/utils/controlsStore";
import { getCredits } from "@/actions/character";

//game logic fixed
let INTTIATING = false;
function GameHandler() {
  const router = useRouter();
  const pathname = usePathname();
  const { invokeToast } = useCustomToast();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [gameCampaign, setGameCampaign] = useState();
  const [gameCharacter, setGameCharacter] = useState();
  const [choices, setChoices] = useState([]);
  const {
    currentCampaign,
    currentCharacter,
    setGame,
    game,
    setCurrentCharacter,
    setCurrentCampaign,
  } = useGameStore();
  const { user, setBlueCredits, setYellowCredits } = useUserStore();
  const { setShowCreditsDialogue } = useControlsStore();
  const [response, setResponse] = useState();

  const handleInitiateGame = async () => {
    if (user.blueCredits < 1) {
      //   console.log("here");
      setShowCreditsDialogue(true);

      return;
    }
    if (INTTIATING) {
      return;
    }
    INTTIATING = true;
    try {
      const { game, character, campaign, unlockedAchievements, newLevel } =
        await initiateGame(
          {
            campaignId: currentCampaign._id,
            characterId: currentCharacter._id,
          },
          user?.token
        );
      setChoices(game.choices);
      setResponse(game.state);

      setGame(game);
      setCurrentCharacter(null);
      setCurrentCampaign(null);
      setGameCharacter(character);
      setGameCampaign(campaign);

      //push to the game page with the game id
      router.push(`${pathname}?id=${game._id}`);

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
      invokeToast(error?.response?.data || "Error Initiating Game", "Error");
      router.push("/discover");
      console.log(error);
    } finally {
      const { credits } = await getCredits(user?.token);
      setBlueCredits(credits.blueCredits);
      setYellowCredits(credits.yellowCredits);
      INTTIATING = false;
    }
  };

  const handleGetGame = async () => {
    try {
      const { game, character, campaign } = await getGame(id, user?.token);
      //   console.log(game);
      setGame(game);
      setResponse(game?.state);
      setChoices(game?.choices);
      setCurrentCharacter(null);
      setCurrentCampaign(null);
      setGameCharacter(character);
      setGameCampaign(campaign);
    } catch (error) {
      invokeToast(error?.response?.data || "Error Fetching Game", "Error");
      router.push("/discover");

      console.log(error);
    }
  };
  useEffect(() => {
    if (id) {
      handleGetGame();
    } else {
      //   setGame(dummyGame);
      //  setResponse(dummyGame.state);
      //   setGameCharacter({
      //    value: {},
      //   personal: {
      //      race: "",
      //    class: "",
      //    },
      //  });

      handleInitiateGame();
    }
  }, [user?.token]);

  //console.log(choices);
  if (!response) {
    return <Loader text="Loading Game ..." />;
  }
  return (
    <Game
      response={response}
      gameCharacter={gameCharacter}
      setGameCharacter={setGameCharacter}
      gameCampaign={gameCampaign}
      choices={choices}
    />
  );
}

export default function page() {
  return (
    <Suspense fallback={null}>
      <GameHandler />
    </Suspense>
  );
}
