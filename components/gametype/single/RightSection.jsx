import React, { useState } from "react";
import CustomButton from "@/components/ui/custom-button";
import Delete from "@/components/ui/Icons/Delete";
import Continue from "@/components/ui/Icons/Continue";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

export default function RightSection({
  selectedTab,
  selectedGame,
  handleDeleteGame,
  loadingDelete,
}) {
  const [readMore, setReadMore] = useState(false);
  const router = useRouter();

  const handleRedirect = (path) => {
    router.push(path);
  };
  if (!selectedGame) return null;

  const gameState = selectedGame.game.state;
  const gameId = selectedGame.game._id;
  return (
    <div className='flex flex-col justify-between h-full z-[100] '>
      <div className='flex flex-col p-5 pt-20 md:pt-5  h-screen md:h-full overflow-y-scroll hide-scrollbar'>
        <span className='running-text-large'>
          {selectedGame?.campaign?.title}, {selectedGame?.character.name}
        </span>

        <div className='border-none mt-4 bg-transparent flex gap-4 hover:bg-transparent'>
          <img src='/Icons/Note.svg' alt='' />
          <span className='running-text-mono uppercase text-gray2'>
            current situation
          </span>
        </div>

        <span className='mt-3'>
          {!readMore && gameState.length > 200
            ? gameState.slice(0, 200) + "..."
            : gameState}
          <span
            onClick={() => setReadMore((prev) => !prev)}
            className='text-irisPurpleLight cursor-pointer'
          >
            {readMore
              ? " Show less"
              : gameState.length > 200
              ? " Read more"
              : ""}
          </span>
        </span>

        <div className='border-none mt-5 bg-transparent flex gap-2 hover:bg-transparent'>
          <img src='/Icons/Swords.svg' alt='' className='h-5 w-5' />
          <span className='running-text-mono uppercase text-gray2'>
            Character
          </span>
        </div>
        {/* card */}
        <div className='mt-3 w-full flex justify-between'>
          <div className='flex gap-4 border border-white/[8%] p-2 pe-4 rounded-[10px] bg-white/[8%] items-center'>
            <img
              src={"/images/Header.png"}
              className='w-16 h-16 rounded-[6px] object-cover'
            />
            <div className='flex flex-col justify-center gap-3.5 py-2 items-start'>
              <span className='running-text-mono uppercase'>
                {selectedGame.character.name}
              </span>
              <div className='flex flex-col'>
                <span className='description uppercase'>Level 31</span>
                <span className='flex gap-1 description uppercase'>
                  <span className='text-irisPurpleLight'>Drow</span>
                  <span className='text-sandyOrange'>Rogue</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className='flex gap-2 mt-5 uppercase'>
          <img src='/Icons/Turns.svg' alt='' className='h-5 w-5 ' />
          <span className='text-gray2 running-text-mono'>
            {selectedGame.game.__v + 1}{" "}
            {selectedGame.game.__v === 0 ? "turn" : "turns"} played
          </span>
        </div>
        <div className='flex gap-2 mt-3 uppercase'>
          <img src='/Icons/Watch.svg' alt='' className='h-5 w-5 ' />
          <span className='text-gray2 running-text-mono'>
            ~{(selectedGame.game.__v + 1) * 2} min. playtime
          </span>
        </div>
        {selectedTab === "inProgress" && (
          <CustomButton
            disabled={loadingDelete}
            withIcon
            className={"mt-6 md:hidden me-auto"}
            onClick={() => handleDeleteGame(gameId)}
          >
            <Delete className='h-5 w-5 fill-errorRed' />
            delete game
          </CustomButton>
        )}
      </div>
      <div
        className={cn(
          "md:flex p-4 justify-between border-t border-white/[10%] hidden",
          selectedTab === "completed" && "justify-end"
        )}
      >
        {/* Show delete button only if the "inProgress" tab is selected */}
        {selectedTab === "inProgress" && (
          <CustomButton
            disabled={loadingDelete}
            withIcon
            onClick={() => handleDeleteGame(gameId)}
            variant={"subtle"}
          >
            <Delete className='h-5 w-5 fill-errorRed' />
            delete game
          </CustomButton>
        )}
        <CustomButton
          onClick={() => handleRedirect("/game/play?id=" + gameId)}
          withIcon
          variant={"primary"}
          className={
            selectedTab === "completed" || selectedTab === "publicGames"
              ? "ml-auto"
              : ""
          }
        >
          <Continue className='h-5 w-5 fill-russianViolet' />
          continue
        </CustomButton>
      </div>
    </div>
  );
}
