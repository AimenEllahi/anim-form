import React, { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import CustomButton from "@/components/ui/custom-button";
import Cancel from "@/components/ui/Icons/Cancel";
import Save from "@/components/ui/Icons/Save";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import GenerateNew from "./generate-new";
import { cn } from "@/lib/utils";
import { IMAGE_STYLES } from "./constants";
import {
  getCredits,
  handleGenerateAvatar,
  handleUpdateAvatar,
} from "@/actions/character";
import useUserStore from "@/utils/userStore";
import Navbar from "@/components/navigation/Navbar";
import useDeviceDetect from "@/hooks/useDeviceDetect";
import Generate from "@/components/ui/Icons/Generate";
import useCustomToast from "@/hooks/useCustomToast";
import useControlsStore from "@/utils/controlsStore";
const CurrentAvatarsList = ({
  avatars,
  selectedPortrait,
  setSelectedPortrait,
}) => {
  return (
    <div className="grid  grid-cols-12 w-full gap-5 min-h-96 max-h-[60vh] overflow-y-scroll hide-scrollbar pb-24 md:pb-0">
      {avatars.map((avatar, index) => (
        <div
          key={index}
          className="col-span-6 md:col-span-4"
          onClick={() => {
            setSelectedPortrait(avatar);
          }}
        >
          <img
            src={avatar}
            alt="avatar"
            title="Avatar"
            className={cn(
              "w-full  md:h-[223px] cursor-pointer object-contain ease-animate rounded-[16px] ",
              avatar === selectedPortrait && "border-2 border-irisPurple"
            )}
          />
        </div>
      ))}

      {avatars.length === 0 && (
        <span className="text-white flex items-center justify-center running-text-mono uppercase col-span-12  w-full">
          No avatars found
        </span>
      )}
    </div>
  );
};

const GenerateNewAvatarBtn = ({
  generateAvatar,
  handleAvatarClick,
  className,
}) => {
  return (
    <CustomButton
      variant={"primary"}
      onClick={() => {
        handleAvatarClick();
      }}
      withIcon={true}
      className={cn(generateAvatar && "hidden", className)}
    >
      <Generate className="h-5 w-5 " /> Generate new portrait
    </CustomButton>
  );
};
export default function Avatar({
  character,
  setCharacter,
  setCurrentPortrait,
  setLoadingAvatar,
  open,
  setOpen,
  avatars = [],
  payload,
}) {
  const { isMobile } = useDeviceDetect();
  const { invokeToast } = useCustomToast();
  const params = useSearchParams();
  const router = useRouter();
  const path = usePathname();
  const { user, setBlueCredits, setYellowCredits } = useUserStore();
  const { setShowCreditsDialogue } = useControlsStore();
  const generateAvatar = params.get("generateAvatar");
  const isCompanion = params.get("companion") === "true";
  const [style, setStyle] = useState(IMAGE_STYLES[0]);

  const [selectedPortrait, setSelectedPortrait] = useState(
    isCompanion ? payload.selectedPortrait : character?.personal?.portraitUrl
  );

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setSelectedPortrait(
      isCompanion ? payload.selectedPortrait : character?.personal?.portraitUrl
    );
  }, [character, isCompanion, payload]);

  const _handleGenerateAvatar = async () => {
    if (user.yellowCredits < 1) {
      setShowCreditsDialogue(true);
      return;
    }
    try {
      setIsLoading(true);
      setLoadingAvatar(true);
      setOpen(false);
      payload.appearance += " in the visual art of " + style;

      const { avatarUrl, updatedCharacter, unlockedAchievements, newLevel } =
        await handleGenerateAvatar(payload, user?.token);
      const { credits } = await getCredits(user?.token);
      if (isCompanion) {
        setCharacter(updatedCharacter);
      } else {
        setCurrentPortrait(avatarUrl);
        setSelectedPortrait(avatarUrl);
        setCharacter((prev) => ({
          ...prev,
          personal: {
            ...prev.personal,
            portraits: [...prev.personal.portraits, avatarUrl],
          },
        }));
      }
      setBlueCredits(credits.blueCredits);
      setYellowCredits(credits.yellowCredits);

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
      invokeToast(
        error?.response?.data?.error || "Error generating avatar",
        "Error"
      );
      console.log("error", error);
    } finally {
      //  console.log("here");
      setIsLoading(false);
      setLoadingAvatar(false);
    }
  };

  const _handleUpdateAvatar = async () => {
    try {
      const _payload = {
        newSelection: selectedPortrait,
        id: character._id,
        name: payload.name,
        isCompanion,
      };
      if (!isCompanion) {
        setCurrentPortrait(selectedPortrait);
      }

      const { updatedCharacter } = await handleUpdateAvatar(
        _payload,
        user?.token
      );

      setCharacter(updatedCharacter);
    } catch (error) {
      invokeToast(
        error?.response?.data?.error || "Error updating avatar",
        "Error"
      );

      console.log(error);
    }
  };
  const handleAvatarClick = () => {
    let url = path + "?generateAvatar=true";
    if (isCompanion) {
      url += "&companion=true";
    }
    router.push(url);
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(_open) => setOpen(_open)}
      className=" !gap-0"
    >
      {isMobile ? (
        // Mobile
        <DialogContent className="bg-gradient   !p-0 flex-col !gap-0 border-none !h-full !w-full  max-w-screen flex  !pt-[46px]   ">
          <Navbar hideHeader={true} />

          <div className="flex gap-5 relative  flex-col  items-start p-6 pt-5 !pb-0 !z-10">
            {generateAvatar ? (
              <div className="flex justify-between items-start z-10">
                <div className="flex flex-col gap-2">
                  <span className="text-white running-text-large ">
                    Generate new portrait
                  </span>
                  <span className="running-text text-gray2">
                    Select an art style you want to use
                  </span>
                </div>
              </div>
            ) : (
              <span className="text-white running-text-large z-10">
                Change character portrait
              </span>
            )}
            <GenerateNewAvatarBtn
              generateAvatar={generateAvatar}
              handleAvatarClick={handleAvatarClick}
              className={"w-full"}
            />
            {generateAvatar ? (
              <GenerateNew style={style} setStyle={setStyle} />
            ) : (
              <CurrentAvatarsList
                selectedPortrait={selectedPortrait}
                setSelectedPortrait={setSelectedPortrait}
                avatars={avatars}
              />
            )}
          </div>

          <div
            className={cn(
              "p-6 md:border-t border-white/10 justify-end w-screen fixed bottom-0 left-0 bg-blur-bottom-menu flex items-center  !z-10  "
            )}
          >
            <div className="flex  items-center gap-4 justify-end ">
              <CustomButton
                onClick={() => {
                  setOpen(false);
                }}
                disabled={isLoading}
                withIcon={true}
              >
                <Cancel className="w-3 h-3 opacity-70" fill={"white"} />
                Cancel
              </CustomButton>
              <CustomButton
                variant={"primary"}
                onClick={() => {
                  _handleUpdateAvatar();
                  setOpen(false);
                }}
                withIcon={true}
                disabled={avatars.length === 0}
                className={cn(generateAvatar && "hidden")}
              >
                <Save className="w-5 h-5 " fill={"#0A0A21"} />
                Save
              </CustomButton>

              <CustomButton
                variant={"primary"}
                onClick={() => {
                  _handleGenerateAvatar();
                }}
                disabled={isLoading}
                withIcon={true}
                className={cn(!generateAvatar && "hidden")}
              >
                {isLoading ? (
                  "Generating..."
                ) : (
                  <>
                    Generate
                    <div className="flex  items-center gap-1 ">
                      (
                      <img
                        src="/gems/Legendary.webp"
                        title="Legenadary Gem"
                        alt="Legendary Gem"
                        className="p-0 w-3"
                      />
                      1)
                    </div>
                  </>
                )}
              </CustomButton>
            </div>
          </div>
        </DialogContent>
      ) : (
        // Desktop
        <DialogContent className="bg-[#1b1b31] !rounded-[16px] !p-0 flex-col !gap-0 border border-white/10  !min-w-[757px] flex   ">
          <div className="flex gap-5 flex-col items-start p-6 pt-4  pb-0">
            {generateAvatar ? (
              <div className="flex items-start w-full  justify-between">
                <div className="flex flex-col gap-3">
                  <span className="text-white running-text-large ">
                    Generate new portrait
                  </span>
                  <span className="running-text text-gray2">
                    Select an art style you want to use
                  </span>
                </div>
                <span className="text-white running-text-mono md:flex items-center gap-1 hidden">
                  <img
                    src="/gems/Legendary.webp"
                    title="Legendary Gem"
                    alt="Legendary Gem"
                    className="w-[15px] object-contain"
                  />
                  {user.yellowCredits}{" "}
                </span>
              </div>
            ) : (
              <span className="text-white running-text-large ">
                Change character portrait
              </span>
            )}
            {generateAvatar ? (
              <GenerateNew style={style} setStyle={setStyle} />
            ) : (
              <CurrentAvatarsList
                selectedPortrait={selectedPortrait}
                setSelectedPortrait={setSelectedPortrait}
                avatars={avatars}
              />
            )}
          </div>

          <div
            className={cn(
              "p-6 border-t border-white/10 justify-between w-full flex items-center  ",
              generateAvatar && "justify-end"
            )}
          >
            <GenerateNewAvatarBtn
              generateAvatar={generateAvatar}
              handleAvatarClick={handleAvatarClick}
            />
            <div className="md:flex items-center gap-4 hidden">
              <CustomButton
                onClick={() => {
                  setOpen(false);
                }}
                disabled={isLoading}
                withIcon={true}
              >
                <Cancel className="w-3 h-3 opacity-70" fill={"white"} />
                Cancel
              </CustomButton>
              <CustomButton
                variant={"primary"}
                onClick={() => {
                  _handleUpdateAvatar();
                  setOpen(false);
                }}
                withIcon={true}
                disabled={avatars.length === 0}
                className={cn(generateAvatar && "hidden")}
              >
                <Save className="w-5 h-5 " fill={"#0A0A21"} />
                Save
              </CustomButton>

              <CustomButton
                variant={"primary"}
                onClick={() => {
                  _handleGenerateAvatar();
                }}
                disabled={isLoading}
                withIcon={true}
                className={cn(!generateAvatar && "hidden")}
              >
                {isLoading ? (
                  "Generating..."
                ) : (
                  <>
                    Generate
                    <div className="flex  items-center gap-1 ">
                      (
                      <img
                        src="/gems/Legendary.webp"
                        title="Legendary gem"
                        alt="Legendary Gem"
                        className="p-0 w-3"
                      />
                      1)
                    </div>
                  </>
                )}
              </CustomButton>
            </div>
          </div>
        </DialogContent>
      )}
    </Dialog>
  );
}
