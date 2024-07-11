import React, { useState } from "react";
import Button from "@/components/ui/custom-button";
import CustomIcontext from "@/components/ui/custom-icontext";
import Play from "@/components/ui/Icons/Play";
import DeleteBox from "./deleteBox";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import Delete from "@/components/ui/Icons/Delete";
import World from "@/components/ui/Icons/World";
import useUserStore from "@/utils/userStore";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import {
  deleteCampaign,
  publishCampaign,
  unPublishCampaign,
  likeCampaign,
  starCampaign,
} from "@/actions/campaigns";
import Star from "@/components/ui/Icons/Star";
import useGameStore from "@/utils/gameStore";
import Like from "@/components/ui/Icons/Like";

const TopButtons = ({ campaign, setCampaign, className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useUserStore();
  const isCreator = campaign.userId === user?._id;
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const { setCurrentCampaign } = useGameStore();

  const handleDelete = async () => {
    setIsLoading(true);
    try {
      if (user?._id !== campaign.userId) {
        return;
      }

      await deleteCampaign(campaign._id, user?.token);

      router.push("/campaign/my-campaigns");
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  const handlePublish = async () => {
    setIsLoading(true);
    try {
      const response = await publishCampaign(campaign._id, user?.token);

      setCampaign((prev) => ({
        ...prev,
        isPublished: response.isPublished,
      }));
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  const handleUnpublish = async () => {
    setIsLoading(true);
    try {
      const response = await unPublishCampaign(campaign._id, user?.token);
      console.log(response);
      setCampaign((prev) => ({
        ...prev,
        isPublished: response.isPublished,
      }));
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  const downloadWorldMap = async () => {
    const url = campaign?.worldMapUrl || "/campaignheader.png";
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const a = document.createElement("a");
      const urlObject = URL.createObjectURL(blob);

      a.href = urlObject;
      a.download = "worldmap.png";
      document.body.appendChild(a);
      a.click();

      // Clean up
      document.body.removeChild(a);
      URL.revokeObjectURL(urlObject);
    } catch (error) {
      console.error("Error downloading the world map:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLike = async () => {
    setIsLoading(true);
    try {
      const response = await likeCampaign(campaign._id, user?.token);
      setCampaign((prev) => ({
        ...prev,
        analytics: {
          ...prev.analytics,
          likes: response.likes,
        },
      }));
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  const handleStarCampaign = async () => {
    setIsLoading(true);
    try {
      const response = await starCampaign(campaign._id, user?.token);
      setCampaign((prev) => ({
        ...prev,
        analytics: {
          ...prev.analytics,
          stars: response.stars,
        },
      }));
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  const handlePlay = () => {
    setCurrentCampaign(campaign);
    router.push("/game/play");
  };

  const handleOpenDelete = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div
      className={cn(
        "flex flex-col md:flex-row justify-between w-full ",
        className
      )}
    >
      <div className="flex justify-start items-start md:items-center gap-8 w-full md:w-3/4 flex-col md:flex-row">
        <div className="hidden md:flex items-start justify-start">
          <Button onClick={handlePlay} withIcon variant={"primary"}>
            <Play size={14} /> <span>Play campaign</span>
          </Button>
        </div>
        <div className="flex gap-6 md:gap-8 w-full  justify-start items-start">
          <CustomIcontext disabled={isLoading} onClick={handleLike}>
            <Like
              className="h-5 w-5 fill-white opacity-70"
              isfilled={
                campaign.analytics.likes.includes(user?._id) ? "true" : null
              }
            />
            <span>{campaign.analytics.likes.length}</span>
          </CustomIcontext>
          <CustomIcontext disabled={true} className={"disabled:opacity-100"}>
            <Play className="h-5 w-5 fill-white opacity-70" />
            <span>{campaign.analytics.plays.length}</span>
          </CustomIcontext>
          <CustomIcontext
            disabled={isLoading || !user?.token}
            onClick={handleStarCampaign}
          >
            <Star
              isfilled={
                campaign.analytics.stars.includes(user?._id) ? "true" : null
              }
              className="h-5 w-5 fill-white  group-hover:opacity-100  prevent-redirect"
            />
            <span>{campaign.analytics.stars.length}</span>
          </CustomIcontext>
          <CustomIcontext>
            <img
              src="/Icons/Share.svg"
              alt=""
              className="h-5 w-5 opacity-70 invert"
            />{" "}
            <span>Share</span>
          </CustomIcontext>
        </div>
      </div>
      <div className=" gap-2 md:gap-6 items-start md:justify-end md:items-end flex-col md:flex-row hidden md:flex">
        <Button
          disabled={isLoading}
          onClick={campaign.isPublished ? handleUnpublish : handlePublish}
          withIcon
          variant={"subtle"}
          className={cn(!isCreator && "hidden")}
        >
          <World className="h-5 w-5 fill-white" />{" "}
          <span>{campaign.isPublished ? "Unpublish" : "Publish"}</span>
        </Button>
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger
            withIcon
            variant={"subtle"}
            className={cn(
              "flex items-center pe-5 ps-[20px] running-text-mono gap-2 h-[48px] px-6 uppercase ",
              !isCreator && "hidden"
            )}
          >
            <Delete className="h-5 w-5 fill-errorRed" /> <span>Delete</span>
          </DialogTrigger>
          <DeleteBox
            isLoading={isLoading}
            handleDelete={handleDelete}
            setIsOpen={setIsOpen}
          />
        </Dialog>
        <Button disabled={isLoading} onClick={downloadWorldMap} withIcon>
          <img
            src="/Icons/Download.svg"
            className="h-5 w-5 opacity-75 invert"
            alt=""
          />{" "}
          <span>Download world map</span>
        </Button>
      </div>
    </div>
  );
};

export default TopButtons;