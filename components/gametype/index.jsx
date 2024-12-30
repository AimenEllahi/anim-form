"use client";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Switch from "../ui/Shared/Switch";
import LeftSection from "./single/LeftSection";
import RightSection from "./single/RightSection";
import useCustomToast from "@/hooks/useCustomToast";
import { deleteGame } from "@/actions/game";
import useUserStore from "@/utils/userStore";
import useControlsStore from "@/utils/controlsStore";
import GameTabbar from "../ui/Shared/TabBar/games";
import NoGames from "@/components/gametype/noGames/index";
export default function Index({ gameType, games, setGames, dictionary }) {
  const {
    selectedTab,
    setSelectedTab,
    selectedCompletedGame,
    setSelectedCompletedGame,
    selectedGame,
    setSelectedGame,
  } = useControlsStore();

  const [loadingDelete, setLoadingDelete] = useState(false);
  const { invokeToast } = useCustomToast();
  const { user } = useUserStore();
  const [completedGames, setCompletedGames] = useState([]);
  const [inProgressGames, setInProgressGames] = useState([]);

  useEffect(() => {
    if (games.length > 0) {
      const completed = games.filter(({ game }) => game.isCompleted);
      const inProgress = games.filter(({ game }) => !game.isCompleted);

      setCompletedGames(completed);
      setInProgressGames(inProgress);
      if (window.innerWidth > 768) {
        setSelectedGame(inProgress[0] || null);
        setSelectedCompletedGame(completed[0] || null);
      }
    }
  }, [games]);

  const handleDeleteGame = async (id) => {
    try {
      setLoadingDelete(true);
      const response = await deleteGame(id, user?.token);

      const newGames = games.filter(({ game }) => game._id !== id);
      console.log("New Games", newGames);
      setGames(newGames);
      setSelectedGame(newGames[0]);

      invokeToast("Game Deleted Successfully", "Success");
    } catch (error) {
      invokeToast(
        error?.response?.data?.error || "Error Deleting Game",
        "Error"
      );
      console.error("Error:", error);
    } finally {
      setLoadingDelete(false);
    }
  };

  return (
    <div className='h-full z-[10]  w-full flex flex-col '>
      {/* Title Section */}
      <div
        className={`flex flex-col md:flex-row gap-2.5 px-5 md:px-12 ${
          gameType === "multiPlayer"
            ? "md:flex-col justify-start items-start"
            : "justify-between"
        }`}
      >
        <h1 className='  hidden md:flex justify-start text-white headline-3 z-[10]'>
          {gameType === "multiPlayer"
            ? dictionary.games
            : selectedTab === "inProgress"
            ? dictionary.gamesInProgress
            : selectedTab === "publicGames"
            ? dictionary.publicGames
            : dictionary.completedGames}
        </h1>

        {/* Switch Buttons */}
        <div className={cn("", gameType === "multiPlayer" ? "mt-2" : "")}>
          <Switch
            dictionary={dictionary}
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
            gameType={gameType} // Pass game type here
          />
        </div>
        <div className='hidden md:block opacity-0 pointer-events-none headline-3 '>
          {" "}
          {gameType === "multiPlayer"
            ? dictionary.games
            : selectedTab === "inProgress"
            ? dictionary.gamesInProgress
            : selectedTab === "publicGames"
            ? dictionary.publicGames
            : dictionary.completedGames}
        </div>
      </div>
      <div className='md:px-12 h-full  md:overflow-hidden my-6'>
        {selectedTab === "inProgress" && inProgressGames.length <= 0 ? (
          <NoGames
            dictionary={dictionary.noGames}
            removePadding={inProgressGames.length === 0}
          />
        ) : selectedTab === "completed" && completedGames.length <= 0 ? (
          <NoGames dictionary={dictionary.noGames} completedGames={true} />
        ) : (
          <div className='flex md:border text-white md:bg-white/[8%] rounded-[16px] border-white/10 h-full justify-end items-end   w-full md:overflow-hidden px-5 lg:px-0'>
            <div className='w-full md:w-1/2 h-full md:border-r border-white/[8%]'>
              {selectedTab === "inProgress" ? (
                <LeftSection
                  dictionary={dictionary.leftSection}
                  selectedGame={selectedGame}
                  setSelectedGame={setSelectedGame}
                  games={inProgressGames}
                  selectedTab={selectedTab}
                />
              ) : (
                <LeftSection
                  dictionary={dictionary.leftSection}
                  selectedGame={selectedCompletedGame}
                  setSelectedGame={setSelectedCompletedGame}
                  games={completedGames}
                  selectedTab={selectedTab}
                />
              )}
            </div>
            <div
              className={cn(
                " w-screen fixed md:relative bg-blur-bottom-menu md:blur-none md:bg-transparent left-0 top-0 md:w-1/2 h-full !z-[100] md:z-auto ",
                selectedTab === "inProgress" && !selectedGame && "hidden",
                selectedTab === "completed" &&
                  !selectedCompletedGame &&
                  "hidden"
              )}
            >
              <RightSection
                dictionary={dictionary.rightSection}
                selectedGame={
                  selectedTab === "inProgress"
                    ? selectedGame
                    : selectedCompletedGame
                }
                handleDeleteGame={handleDeleteGame}
                selectedTab={selectedTab}
                loadingDelete={loadingDelete}
              />
            </div>
          </div>
        )}
      </div>

      <GameTabbar />
    </div>
  );
}
