import React, { useState } from "react";
import CustomButton from "@/components/ui/custom-button";
import Delete from "@/components/ui/Icons/Delete";
import Continue from "@/components/ui/Icons/Continue";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import ArrowLeft from "@/components/ui/Icons/ArrowLeft";
import useControlsStore from "@/utils/controlsStore";
import DeleteGame from "@/components/ui/Shared/Dialogue/DeleteGame";
import Note from "@/components/ui/Icons/Note";
import Turns from "@/components/ui/Icons/Turns";
import Watch from "@/components/ui/Icons/Watch";
import Adventure from "@/components/ui/Icons/Adventure";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

// Helper function to split text by double newlines
const splitTextIntoParagraphs = (text) => {
  return text.split(/\n\s*\n/); // Splits by double newlines
};

export default function RightSection({
  selectedTab,
  selectedGame,
  handleDeleteGame,
  loadingDelete,
  dictionary,
}) {
  const [readMore, setReadMore] = useState(false);
  const { setSelectedCompletedGame, setSelectedGame } = useControlsStore();
  const router = useRouter();

  const handleRedirect = (path) => {
    router.push(path);
  };

  if (!selectedGame) return null;

  const gameState = selectedGame.game.state || "";
  const gameId = selectedGame.game._id;

  // Split the game state into paragraphs using newlines
  const paragraphs = splitTextIntoParagraphs(gameState);

  return (
    <div className='flex flex-col justify-between h-full z-[100]   '>
      <div className=' flex-col p-5 pt-20 md:pt-5 h-full pb-32 md:pb-5 overflow-y-scroll hide-scrollbar '>
        <span className='running-text-large'>
          {selectedGame?.campaign?.title}, {selectedGame?.character.name}
        </span>

        <div className='border-none mt-4 bg-transparent flex gap-2 items-center hover:bg-transparent'>
          <Note className='h-5 w-5 fill-gray2' />
          <span className='running-text-mono uppercase text-gray2'>
            {dictionary.currentSituation}
          </span>
        </div>

        <div className='mt-3 running-text'>
          {/* Render paragraphs manually */}
          {!readMore && paragraphs.length > 2 ? (
            <>
              {paragraphs.slice(0, 2).map((para, index) => (
                <ReactMarkdown
                  key={index}
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeRaw]}
                  className='mb-4 leading-relaxed text-gray-200'
                >
                  {para}
                </ReactMarkdown>
              ))}
              <span
                onClick={() => setReadMore((prev) => !prev)}
                className='text-irisPurpleLight cursor-pointer'
              >
                {dictionary.readMore}
              </span>
            </>
          ) : (
            <>
              {paragraphs.map((para, index) => (
                <ReactMarkdown
                  key={index}
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeRaw]}
                  className='mb-4 leading-relaxed text-gray-200'
                >
                  {para}
                </ReactMarkdown>
              ))}
              {paragraphs.length > 2 && (
                <span
                  onClick={() => setReadMore((prev) => !prev)}
                  className='text-irisPurpleLight cursor-pointer'
                >
                  {dictionary.showLess}
                </span>
              )}
            </>
          )}
        </div>

        <div className='border-none mt-5 bg-transparent flex gap-2 hover:bg-transparent items-center'>
          <Adventure className='h-5 w-5 fill-gray2' />
          <span className='running-text-mono uppercase text-gray2'>
            {dictionary.adventurer}
          </span>
        </div>

        <div className='mt-3 w-full flex justify-start'>
          <div className='flex gap-4 border border-white/[8%] p-2 pe-4 py-2 rounded-[10px] bg-white/[8%] items-center'>
            <img
              src={selectedGame.character.imgUrl || "/images/Header.png"}
              className='w-16 h-16 rounded-[6px] object-contain'
            />
            <div className='flex flex-col justify-center gap-3.5 items-start'>
              <span className='running-text-mono uppercase'>
                {selectedGame.character.name}
              </span>
              <div className='flex flex-col'>
                <span className='description uppercase'>
                  {dictionary.level} {selectedGame.character.level}
                </span>
                <span className='flex gap-1 description uppercase'>
                  <span className='text-irisPurpleLight'>
                    {selectedGame.character.race}
                  </span>
                  <span className='text-sandyOrange'>
                    {selectedGame.character.class}
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className='flex gap-2 mt-5 uppercase items-center'>
          <Turns className='h-5 w-5 fill-gray2' />
          <span className='text-gray2 running-text-mono'>
            {selectedGame.game.__v + 1}{" "}
            {selectedGame.game.__v === 0 ? "turn" : "turns"} {dictionary.played}
          </span>
        </div>

        <div className='flex flex-col gap-6'>
          <div className='flex gap-2 mt-3 uppercase items-center'>
            <Watch className='h-5 w-5 fill-gray2' />
            <span className='text-gray2 running-text-mono'>
              ~{(selectedGame.game.__v + 1) * 2} {dictionary.playTime}
            </span>
          </div>
          {selectedTab === "inProgress" && (
            <DeleteGame action={() => handleDeleteGame(gameId)}>
              <CustomButton
                disabled={loadingDelete}
                withIcon
                className={"md:hidden me-auto"}
              >
                <Delete className='h-5 w-5 fill-errorRed' />
                {dictionary.deleteGame}
              </CustomButton>
            </DeleteGame>
          )}
        </div>
      </div>

      {/* Desktop */}
      <div
        className={cn(
          "md:flex p-4 justify-between border-t border-white/[10%] hidden",
          selectedTab === "completed" && "justify-end"
        )}
      >
        {selectedTab === "inProgress" && (
          <DeleteGame action={() => handleDeleteGame(gameId)}>
            <CustomButton disabled={loadingDelete} withIcon variant={"subtle"}>
              <Delete className='h-5 w-5 fill-errorRed' />
              {dictionary.deleteGame}
            </CustomButton>
          </DeleteGame>
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
          {dictionary.continue}
        </CustomButton>
      </div>

      {/* Mobile */}
      <div
        className={cn(
          "md:hidden p-5 justify-end gap-4 bg-blur-bottom-menu flex fixed bottom-0 left-0 z-[200]  w-full"
        )}
      >
        <CustomButton
          onClick={() => {
            setSelectedGame(null);
            setSelectedCompletedGame(null);
          }}
          withIcon
        >
          <ArrowLeft className='h-5 w-5 fill-white opacity-70' />
          {dictionary.back}
        </CustomButton>
        <CustomButton
          onClick={() => handleRedirect("/game/play?id=" + gameId)}
          withIcon
          variant={"primary"}
        >
          <Continue className='h-5 w-5 fill-russianViolet' />
          {dictionary.continue}
        </CustomButton>
      </div>
    </div>
  );
}
