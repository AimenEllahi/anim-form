import React from "react";
import CustomButton from "@/components/ui/custom-button";
import Play from "@/components/ui/Icons/Play";
import { useRouter } from "next/navigation";
import GameTabbar from "@/components/ui/Shared/TabBar/games";
import { cn } from "@/lib/utils";
export default function index({ completedGames }) {
  const router = useRouter();
  const handleRedirect = () => {
    router.push("/discover");
  };
  return (
    <div className='fixed  flex w-full h-screen justify-center items-center md:relative z-10'>
      <div className=' flex flex-col justify-center items-center gap-4 mb-4 z-10 '>
        {!completedGames && (
          <img
            src='/images/PurpleDice.svg'
            title='dice'
            alt='dice'
            className='h-full w-1/5'
          />
        )}

        {completedGames ? (
          <span className='headline-3 text-white text-center '>
            You haven't <span className='text-irisPurpleLight'>completed</span>{" "}
            any games yet.
            <br />
            Start a new adventure!
          </span>
        ) : (
          <span className='headline-3 text-white text-center '>
            Ready to start your{" "}
            <span className='text-irisPurpleLight'>first adventure?</span>
          </span>
        )}

        {!completedGames && (
          <span className='running-text text-white   mb-4 text-center  w-4/5 md:w-3/5'>
            You're just moments away from unlocking endless creative power,
            ready to explode into infinite possibilities!
          </span>
        )}
        <CustomButton
          onClick={handleRedirect}
          className={" hidden md:flex"}
          withIcon
          variant={completedGames ? "" : "primary"}
        >
          <Play
            className={cn(
              `h-5 w-5 fill-russianViolet`,
              completedGames && "fill-white opacity-70"
            )}
          />
          {completedGames ? "Start New Game" : "Start Now"}
        </CustomButton>
      </div>

      {!completedGames && (
        <>
          {" "}
          <img
            src='/images/NoGames/Background-mobile.webp'
            alt=''
            className='w-full h-full fixed top-0 left-0 object-cover md:hidden'
          />
          <img
            src='/images/NoGames/Background.webp'
            alt=''
            className='w-full h-full fixed top-0 left-0 object-cover hidden md:block'
          />
        </>
      )}

      <GameTabbar className='bg-transparent' />
    </div>
  );
}
