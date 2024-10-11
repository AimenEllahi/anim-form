"use client";
import React, { useEffect, useRef, useState } from "react";
import AccountDropdown from "@/components/account/accountDropdown";
import useDeviceDetect from "@/hooks/useDeviceDetect";
import { cn } from "@/lib/utils";
import CustomButton from "../ui/custom-button";
import DrawerMenu from "./DrawerMenu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import useControlsStore from "@/utils/controlsStore";
import useUserStore from "@/utils/userStore";
import Menu from "@/components/ui/Icons/Menu";
import Play from "@/components/ui/Icons/Play";
import { getCharacter, getCharacters } from "@/actions/character";
import useGameStore from "@/utils/gameStore";
import { useRouter } from "next/navigation";
import { getCampaignBySlug } from "@/actions/campaigns";
import { isSelectionValid } from "@/lib/Helpers/shared";
import SoundButton from "@/components/ui/Shared/SoundButton";
import MobileHeader from "@/components/navigation/MobileHeaders/index";
import useCustomToast from "@/hooks/useCustomToast";
import Diamond from "@/components/ui/Icons/Diamond";
import CustomIcontext from "@/components/ui/custom-icontext";
import CreateMenu from "@/components/ui/Shared/CreateMenu";
import Discover from "@/components/ui/Icons/Discover";
import CampaignAdd from "@/components/ui/Icons/CampaignAdd";
import Game from "@/components/ui/Icons/Game";
import CustomNavtab from "../ui/custom-navtab";

const NavLinks = () => {
  return (
    <ul className='flex gap-6'>
      <li>
        <Link
          href='/discover/gallery'
          className='text-white hover:text-gray1 transition-all duration-300 ease-in-out keychainify-checked'
          aria-label='Gallery'
        >
          GALLERY
        </Link>
      </li>
      <li>
        <Link
          href='/about-us'
          className='text-white hover:text-gray1 transition-all duration-300 ease-in-out keychainify-checked'
          aria-label='About'
        >
          ABOUT US
        </Link>
      </li>
      <li>
        <Link
          href='/pricing'
          className='text-white hover:text-gray1 transition-all duration-300 ease-in-out keychainify-checked'
          aria-label='support us'
        >
          SUPPORT US
        </Link>
      </li>
    </ul>
  );
};

const CampaignLinks = () => {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <div className='flex items-center gap-2'>
      <CustomNavtab
        onClick={() => {
          router.push("/games");
        }}
        variant={"subtle"}
        withIcon={true}
        aria-label='Games'
        className={cn(
          pathname === "/games" && "bg-white/10 hover:bg-white/[8%]"
        )}
      >
        <Game className='h-5 w-5 fill-white opacity-70 ' />
        Games
      </CustomNavtab>
      <CustomNavtab
        onClick={() => {
          router.push("/discover");
        }}
        variant={"subtle"}
        withIcon={true}
        aria-label='Discover'
        className={cn(
          pathname === "/discover" && "bg-white/10 hover:bg-white/[8%]"
        )}
      >
        <CampaignAdd className='h-5 w-5 fill-white opacity-70 ' />
        Campaigns
      </CustomNavtab>
      <CustomNavtab
        onClick={() => {
          router.push("/discover/gallery?page=1");
        }}
        variant={"subtle"}
        withIcon={true}
        aria-label='Images'
        className={cn(
          pathname.includes("/discover/gallery") &&
            "bg-white/10 hover:bg-white/[8%]"
        )}
      >
        <img
          src='/Icons/ImageLibrary.svg'
          alt='My images button'
          title='My images button'
          className='h-5 w-5  opacity-70'
        />
        Community Gallery
      </CustomNavtab>
    </div>
  );
};

const CreditsDisplay = () => {
  const { user } = useUserStore();

  return (
    <>
      {" "}
      <CustomIcontext  onClick={() => handleRedirect("/pricing")}
        className={"pointer-events-none"}
        aria-label='Blue Credits'
      >
        <img
          src='/gems/Mythic.webp'
          alt='Blue Credits'
          title='blue credits'
          className='h-[18px] object-contain '
        />
        {user?.blueCredits}
      </CustomIcontext>
      <CustomIcontext  onClick={() => handleRedirect("/pricing")}
        className={"pointer-events-none"}
        aria-label='Yellow Credits'
      >
        <img
          src='/gems/Legendary.webp'
          alt='Yellow Credits'
          title='Legendary Credits'
          className='h-[18px] object-contain '
        />
        {user?.yellowCredits}
      </CustomIcontext>
    </>
  );
};

//navbar
export default function Navbar({ variant, characterSheet }) {
  const { isMobile } = useDeviceDetect();
  const { invokeToast } = useCustomToast();
  const { showMenu, setShowMenu, selectedCompletedGame, selectedGame } =
    useControlsStore();
  const { user } = useUserStore();
  const {
    setCurrentCharacter,
    setCurrentCampaign,
    currentCharacter,
    currentCampaign,
    characterSelectTime,
    campaignSelectTime,
  } = useGameStore();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();
  const { gamesLength } = useControlsStore();
  const isSignUp = pathname.includes("/auth/sign-up");
  const isGamePage = pathname.includes("/game/play");
  const isLandingPage = pathname === "/";
  const mobileBlurNotAllowed = isLandingPage || isGamePage;

  const showCampaignLinks =
    !isGamePage && !pathname.includes("character/create");
  const isNoGamesPage = pathname.includes("/games") && gamesLength === 0;

  const characterCreatePage = pathname.includes("/character/create");
  const regex = /^\/campaign\/[a-fA-F0-9]{24}$/;

  const isCampaignSubpage = regex.test(pathname);

  const handlePlayWithCampaign = async () => {
    try {
      setIsLoading(true);
      const campaignId = pathname.split("/").pop();

      const { campaign, hasSingleCharacter, characterId } =
        await getCampaignBySlug(campaignId, user?.token);

      setCurrentCampaign(campaign);

      if (hasSingleCharacter) {
        const { character } = await getCharacter(characterId, user?.token);

        //  console.log("Has single character", character);
        setCurrentCharacter(character);
        router.push("/game/play");
        return;
      }
      if (!isSelectionValid(currentCharacter, characterSelectTime)) {
        router.push("/game/character-selection");
      } else {
        router.push("/game/play");
      }
    } catch (error) {
      invokeToast(
        error?.response?.data?.error || "Error playing campaign",
        "Error"
      );
      console.log("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePlayWithCharacter = async () => {
    try {
      setIsLoading(true);
      const characterId = pathname.split("/").pop();

      const { character } = await getCharacter(characterId, user?.token);

      setCurrentCharacter(character);
      if (!isSelectionValid(currentCampaign, campaignSelectTime)) {
        router.push("/game/campaign-selection");
      } else {
        router.push("/game/play");
      }
    } catch (error) {
      invokeToast(
        error?.response?.data?.error || "Error playing with character",
        "Error"
      );
      console.log("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };
  const handlePlay = async () => {
    try {
      setIsLoading(true);
      const { characters } = await getCharacters(user?.token);
      if (characters.length === 0) {
        router.push("/character/create");
        return;
      } else if (characters.length === 1) {
        setCurrentCharacter(characters[0]);
        if (!isSelectionValid(currentCampaign, campaignSelectTime)) {
          router.push("/game/campaign-selection");
        } else {
          router.push("/game/play");
        }
        return;
      } else {
        router.push("/game/character-selection");
      }
    } catch (error) {
      invokeToast(
        error?.response?.data?.error || "Error fetching characters",
        "Error"
      );
      console.log("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <nav
      suppressHydrationWarning
      className={cn(
        "px-5 md:px-8 fixed top-0 pt-5  pb-4 gap-5  md:py-0 flex flex-col md:top-8 z-20 w-full",
        isMobile &&
          !mobileBlurNotAllowed &&
          !showMenu &&
          "bg-blur-bottom-menu md:bg-auto ",
        characterCreatePage && "pt-5",
        isNoGamesPage && "bg-transparent",
        (selectedGame || selectedCompletedGame) && "hidden md:flex"
      )}
    >
      <div
        className={cn(
          " running-text-mono w-full rounded-2xl md:border border-white/10 top-0 md:top-8 left-0 translate-x-[0] flex h-auto md:h-[64px]  justify-center md:p-[8px] md:ps-4 ",
          variant === "transparent" && "bg-transparent border-none",
          variant === "glass" && "md:bg-blur",
          isMobile && "bg-transparent border-0"
          //scrollFromTop.current > 100 && "bg-white/10 border-white/10 bg-blur"
        )}
      >
        {/* Mobile */}
        <div
          className={
            "w-full h-full rounded-lg text-white  md:hidden flex justify-between items-center"
          }
        >
          <Link
            href='/'
            className='text-white hover:text-gray1 transition-all duration-300 ease-in-out keychainify-checked'
            aria-label='Home'
          >
            <img
              src='/Icons/Logo.svg'
              alt='logo'
              title='Logo icon'
              className='h-8 object-contain'
            />
          </Link>
          <button
            onClick={() => setShowMenu(true)}
            className='w-10'
            aria-label='Menu'
          >
            <Menu fill='#9A9AC1' />
          </button>

          <DrawerMenu
            handlePlay={handlePlay}
            characterCreatePage={characterCreatePage}
          />
        </div>
        {/* Desktop */}
        <div className=' w-full hidden h-full text-white  md:flex justify-between items-center'>
          <div className='flex justify-center items-center gap-6'>
            <Link
              href='/'
              className='text-white me-2 hover:text-gray1 transition-all duration-300 ease-in-out keychainify-checked'
              aria-label='Home'
            >
              <img src='/Icons/Logo.svg' title='Logo icon' alt='logo' className='h-10' />
            </Link>

            {showCampaignLinks && <CampaignLinks />}
          </div>
          <div className='flex justify-center items-center gap-5'>
            <span
              className={cn(
                "running-text-mono uppercase cursor-pointer",
                user && "hidden"
              )}
              aria-label={isSignUp ? "Sign In" : "Sign Up"}
            >
              {isSignUp ? (
                <Link href={"/auth/sign-in"} aria-label='Sign In'>
                  Sign In
                </Link>
              ) : (
                <Link href={"/auth/sign-up"} aria-label='Sign Up'>
                  Sign Up
                </Link>
              )}
            </span>
            {isGamePage && <CreditsDisplay />}
            {user?.token && <CreateMenu aria-label='Create Menu' />}
            <AccountDropdown aria-label='Account Dropdown' />

            <SoundButton aria-label='Sound Button' />

            {characterSheet || isCampaignSubpage ? (
              <CustomButton
                variant={"primary"}
                disabled={isLoading}
                withIcon={true}
                onClick={
                  isCampaignSubpage
                    ? handlePlayWithCampaign
                    : handlePlayWithCharacter
                }
                aria-label={isCampaignSubpage ? "Play Campaign" : "Play Now"}
              >
                <Play className='h-5 w-5 fill-russianViolet opacity-70' />
                {isCampaignSubpage ? "Play Campaign" : "PLAY Now"}
              </CustomButton>
            ) : (
              <CustomButton
                disabled={isLoading}
                onClick={handlePlay}
                variant={"primary"}
                className={cn(isGamePage && "hidden")}
                aria-label='Play for Free'
              >
                <Play className='h-5 w-5 fill-russianViolet opacity-70' />
                {isLandingPage
                  ? "PLAY NOW"
                  : user?.token
                  ? "Start new Game"
                  : "PLAY FOR FREE"}
              </CustomButton>
            )}
          </div>
        </div>
      </div>
      <MobileHeader aria-label='Mobile Header' />
    </nav>
  );
}
