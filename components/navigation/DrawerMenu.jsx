import { cn } from "@/lib/utils";
import React, { useEffect } from "react";
import Button from "@/components/ui/custom-button";
import CustomIcontext from "@/components/ui/custom-icontext";
import useUserStore from "@/utils/userStore";
import Link from "next/link";
import useControlsStore from "@/utils/controlsStore";
import Cancel from "@/components/ui/Icons/Cancel";
import { useRouter } from "next/navigation";
import Play from "@/components/ui/Icons/Play";
import Discover from "@/components/ui/Icons/Discover";
import CustomMenuItem from "@/components/ui/custom-menu-item";
import Star from "@/components/ui/Icons/Star";
import Settings from "@/components/ui/Icons/Settings";
import Logout from "@/components/ui/Icons/Logout";
import Cookie from "universal-cookie";
import CampaignAdd from "@/components/ui/Icons/CampaignAdd";
import Adventure from "@/components/ui/Icons/Adventure";
import Support from "@/components/ui/Icons/Support";
import useGameStore from "@/utils/gameStore";
import Emblem from "../ui/Icons/Emblem";
import { getUserAchievements } from "@/actions/achievement";
const UserLoggedIn = ({ handleRedirect, handlePlay }) => {
  const { showMenu, setShowMenu } = useControlsStore();
  const { user, setUser, rank, title, updateTitle, updateRank } =
    useUserStore();
  const cookies = new Cookie();

  const handleLogout = () => {
    setUser(null);
    cookies.set("token", null, { path: "/" });
    setShowMenu(false);
  };

  const handleGetUserAchievements = async () => {
    try {
      const userAchievements = await getUserAchievements(user.token);
      updateTitle(userAchievements.title);
      updateRank(userAchievements.rank);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    if (user?.token) {
      handleGetUserAchievements();
    }
  }, [showMenu]);
  return (
    <div className='mx-[20px] mt-12 gap-[34px] flex flex-col running-text-mono uppercase pb-16'>
      <div className='gap-5 pb-4 flex flex-col'>
        <div className='flex flex-col gap-2'>
          <span className=' headline-4'>{user.username}</span>
          <span className='running-text-small lowercase text-gray2'>
            {user?.email}
          </span>
          <div className='flex gap-2 items-center'>
            <img
              src={`https://dzjg7lvewk7ln.cloudfront.net/rank-images/${rank}.webp`}
              alt=''
              className='size-6 rounded-full'
            />
            <span className='running-text-mono uppercase text-sandyOrange'>
              the {title}
            </span>
          </div>
        </div>
        <div className='flex gap-5'>
          <CustomIcontext onClick={() => handleRedirect("/pricing")}>
            <img
              src='/gems/Mythic.webp'
              alt='Mythic gem image'
              title='Mythic Gem'
              className='h-[18px] object-contain '
            />
            {user.blueCredits}
          </CustomIcontext>
          <CustomIcontext>
            <img
              src='/gems/Legendary.webp'
              alt='Legendary gem'
              title='Legendary Gem'
              className='h-[18px] object-contain '
            />
            {user.yellowCredits}
          </CustomIcontext>
        </div>
        <Button
          onClick={handlePlay}
          variant='primary'
          withIcon={true}
          className={"w-fit"}
        >
          <Play className='h-5 w-5 fill-russianViolet' />
          Play Now
        </Button>
      </div>

      <hr className='border-white/10 ' />
      <div className='flex flex-col gap-6'>
        <CustomMenuItem
          onClick={() => handleRedirect("/games")}
          className={
            "p-0 hover:bg-transparent active:bg-transparent hover:border-transparent active:border-transparent"
          }
        >
          <Discover className='h-5 w-5 opacity-70 fill-white' />
          <span>Games</span>
        </CustomMenuItem>
        <CustomMenuItem
          onClick={() => handleRedirect("/discover")}
          className={
            "p-0 hover:bg-transparent active:bg-transparent hover:border-transparent active:border-transparent"
          }
        >
          <CampaignAdd className='h-5 w-5 opacity-70 fill-white' />
          <span>Campaigns</span>
        </CustomMenuItem>
        <CustomMenuItem
          onClick={() => handleRedirect("/discover/gallery?page=1")}
          className={
            "p-0 hover:bg-transparent active:bg-transparent hover:border-transparent active:border-transparent"
          }
        >
          <img
            src='/Icons/ImageLibrary.svg'
            alt='Gallery'
            title='gallery'
            className='h-5 w-5  opacity-70'
          />
          <span>Community Gallery</span>
        </CustomMenuItem>
      </div>

      <hr className='border-white/10 ' />
      <div className='flex flex-col gap-6'>
        <CustomMenuItem
          onClick={() => handleRedirect("/emblems-titles")}
          className={
            "p-0 hover:bg-transparent active:bg-transparent hover:border-transparent active:border-transparent"
          }
        >
          <Emblem className='h-5 w-5 opacity-70 fill-white' />
          <span>Emblems & Titles</span>
        </CustomMenuItem>
        <CustomMenuItem
          onClick={() => handleRedirect("/character/my-characters")}
          className={
            "p-0 hover:bg-transparent active:bg-transparent hover:border-transparent active:border-transparent"
          }
        >
          <Adventure className='h-5 w-5 opacity-70 fill-white' />
          <span>My Adventurers</span>
        </CustomMenuItem>
        <CustomMenuItem
          onClick={() => handleRedirect("/my-account/gallery?page=1")}
          className={
            "p-0 hover:bg-transparent active:bg-transparent hover:border-transparent active:border-transparent"
          }
        >
          <img
            src='/Icons/ImageLibrary.svg'
            alt='My images button'
            title='My images Icon'
            className='h-5 w-5  opacity-70'
          />
          <span>My images</span>
        </CustomMenuItem>
        <CustomMenuItem
          onClick={() => handleRedirect("/campaign/my-campaigns")}
          className={
            "p-0 hover:bg-transparent active:bg-transparent hover:border-transparent active:border-transparent"
          }
        >
          <img
            src='/Icons/Campaign.svg'
            alt='My campaigns button'
            title='My Campaigns Icon'
            className='h-5 w-5  opacity-70'
          />
          <span>My campaigns</span>
        </CustomMenuItem>
        <CustomMenuItem
          onClick={() => handleRedirect("/campaign/my-campaigns/favorites")}
          className={
            "p-0 hover:bg-transparent active:bg-transparent hover:border-transparent active:border-transparent"
          }
        >
          <Star isfilled={"true"} className='h-5 w-5 opacity-70 fill-white' />
          <span>Favorites</span>
        </CustomMenuItem>
      </div>

      <hr className='border-white/10 ' />
      <div className='flex flex-col gap-6'>
        <CustomMenuItem
          onClick={() => handleRedirect("/my-account/settings")}
          className={
            "p-0 hover:bg-transparent active:bg-transparent hover:border-transparent active:border-transparent"
          }
        >
          <Settings className='h-5 w-5 opacity-70 fill-white' />
          <span>Account Setting</span>
        </CustomMenuItem>

        <CustomMenuItem
          onClick={() => handleRedirect("/pricing")}
          className={
            "p-0 hover:bg-transparent active:bg-transparent hover:border-transparent active:border-transparent"
          }
        >
          <Support className='h-5 w-5 opacity-70 fill-white' />
          <span>Support Us</span>
        </CustomMenuItem>

        <CustomMenuItem
          onClick={handleLogout}
          className={
            "p-0 hover:bg-transparent active:bg-transparent hover:border-transparent active:border-transparent"
          }
        >
          <Logout className='h-5 w-5 opacity-70 fill-white' />
          <span>Logout</span>
        </CustomMenuItem>
      </div>

      {/* <div className='flex gap-3  hover:bg-transparent focus:bg-transparent   transition-all duration-300 ease-linear cursor-pointer'>
        <span>How to play</span>
      </div> */}
    </div>
  );
};
const UserLoggedOut = ({ handleRedirect }) => {
  const { setStartNewGame } = useGameStore();
  return (
    <div className='mx-[20px] mt-10 gap-[34px] flex flex-col running-text-mono uppercase '>
      <div className={cn("flex items-center gap-6 ")}>
        <Button onClick={() => handleRedirect("/auth/sign-in")} withIcon>
          <img
            src='/Icons/Login.svg'
            alt='logo'
            title='Login Icon'
            className='h-5 w-5 opacity-70 '
          />
          SIGN IN
        </Button>
        <Button
          onClick={() => handleRedirect("/auth/sign-up")}
          variant='subtle'
        >
          Sign Up
        </Button>
      </div>

      <div
        onClick={() => handleRedirect("/games")}
        className='flex gap-3  hover:bg-transparent focus:bg-transparent focus:text-white  transition-all duration-300 ease-linear cursor-pointer'
      >
        <Discover className='h-5 w-5 opacity-70 fill-white' />

        <span>Games</span>
      </div>
      <div
        onClick={() => handleRedirect("/discover")}
        className='flex gap-3 hover:bg-transparent focus:bg-transparent focus:text-white  transition-all duration-300 ease-linear cursor-pointer'
      >
        <img
          src='/Icons/Campaign.svg'
          title='My campaigns Button'
          alt='My campaigns button'
          className='h-5 w-5  opacity-70'
        />
        <span>Campaigns</span>
      </div>
      <div
        onClick={() => handleRedirect("/discover/gallery?page=1")}
        className='flex gap-3 hover:bg-transparent focus:bg-transparent focus:text-white  transition-all duration-300 ease-linear cursor-pointer'
      >
        <img
          src='/Icons/ImageLibrary.svg'
          alt='My images button'
          title='My images button'
          className='h-5 w-5  opacity-70'
        />
        <span>Gallery</span>
      </div>

      {/* <div className='flex gap-3  hover:bg-transparent focus:bg-transparent focus:text-white  transition-all duration-300 ease-linear cursor-pointer'>
        <span>How to play</span>
      </div> */}

      <Button
        onClick={() => setStartNewGame(true)}
        className='mt-3 w-40'
        variant='primary'
      >
        PLAY FOR FREE
      </Button>
    </div>
  );
};
export default function DrawerMenu({
  characterCreatePage,
  handlePlay,
  newGameStepper = false,
}) {
  const { user } = useUserStore();
  const { showMenu, setShowMenu } = useControlsStore();
  const { setStartNewGame } = useGameStore();

  const router = useRouter();

  useEffect(() => {
    if (showMenu) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [showMenu]);

  const handleRedirect = (path) => {
    router.push(path);
    setShowMenu(false);
    if (newGameStepper) setStartNewGame(false);
  };

  return (
    <div
      className={cn(
        "absolute !z-[400]  -top-5 left-[50%] ease-animate opacity-0 pointer-events-none lg:hidden translate-x-[-150%]    h-screen w-screen overflow-y-scroll pb-10 flex flex-col justify-start ",
        showMenu &&
          "translate-x-[-50%] bg-blur-drawer opacity-100 pointer-events-auto  ",
        characterCreatePage && "-top-5"
      )}
    >
      <div
        className={cn(
          "w-full  px-[20px] mt-5 mx-auto rounded-lg text-white  flex justify-between items-center !z-[200]",
          characterCreatePage && "mt-5"
        )}
      >
        <Link
          href='/'
          onClick={() => {
            console.log("clicked");
            setShowMenu(false);
            if (newGameStepper) setStartNewGame(false);
          }}
          className='text-white hover:text-gray2 transition-all duration-300 ease-in-out keychainify-checked'
        >
          <img
            src='/Icons/Logo.svg'
            alt='logo'
            title='logo'
            className='h-[32px] object-contain'
          />
        </Link>
        <Cancel
          width={"20px"}
          fill={"#9A9AC1"}
          onClick={() => setShowMenu(false)}
        />
      </div>
      {user?.token ? (
        <UserLoggedIn
          handlePlay={() => {
            setShowMenu(false);
            handlePlay();
          }}
          newGameStepper={newGameStepper}
          handleRedirect={handleRedirect}
        />
      ) : (
        <UserLoggedOut
          handlePlay={() => {
            setShowMenu(false);
            handlePlay();
          }}
          newGameStepper={newGameStepper}
          handleRedirect={handleRedirect}
        />
      )}
    </div>
  );
}
