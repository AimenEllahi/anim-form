"use client";
import React, { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Play from "@/components/ui/Icons/Play";
import Button from "@/components/ui/custom-button";
import IconButton from "@/components/ui/custom-iconbutton";
import { cn } from "@/lib/utils";
import CustomIcontext from "@/components/ui/custom-icontext";
import { useRouter } from "next/navigation";
import { starCampaign } from "@/actions/campaigns";
import useUserStore from "@/utils/userStore";
import Star from "@/components/ui/Icons/Star";

export default function card({ campaign, carousel, className }) {
  const router = useRouter();
  const { user, setUserStared } = useUserStore();
  const [isStarLoading, setIsStarLoading] = useState(false);
  const handleRedirect = (event) => {
    const classNames =
      event?.target?.className?.baseVal || event?.target?.className;

    if (!classNames?.includes("prevent-redirect")) {
      router.push(`/campaign/${campaign._id}`);
    }
  };

  const handleStar = async () => {
    try {
      setIsStarLoading(true);

      const response = await starCampaign(campaign._id, user?.token);
      console.log(response);
      setUserStared(response.stared);
    } catch (error) {
      console.log(error);
    } finally {
      setIsStarLoading(false);
    }
  };

  // console.log(user);
  return (
    <div
      className={cn(
        "rounded-[16px] cursor-pointer h-auto group min-w-full my-0 max-w-full overflow-hidden md:min-w-[345px] md:w-[345px]  border-white/[8%] border hover:border-white/20 running-text-mono ease-animate ",
        className
      )}
    >
      <Card className='w-full h-full hover:!shadow-custom-1 overflow-hidden  border-none bg-russianViolet transition-all duration-200 ease-in-out '>
        <CardHeader className='relative '>
          <img
            onClick={handleRedirect}
            src='/images/Header.png'
            alt=''
            className='h-[248px] w-full  object-cover'
          />
          <div
            className={cn(
              "absolute text-xs text-white p-4 flex w-full justify-between items-center",
              carousel && "hidden"
            )}
          >
            <div
              onClick={handleRedirect}
              className='flex capitalize justify-center items-center !text-sm gap-2 font-roboto-mono'
            >
              <IconButton className='bg-white  font-roboto-mono hover:bg-white h-6 w-6'></IconButton>
              {campaign?.playerName}
            </div>
            <div className='flex justify-center items-center gap-2  prevent-redirect'>
              <IconButton className='bg-blur ease-animate group  border border-iconColor opacity-0 group-hover:opacity-100 ease-animate !duration-500 prevent-redirect'>
                <img
                  src='/Icons/Share.svg'
                  alt=''
                  className='h-5 w-5 group-hover:opacity-100 invert  prevent-redirect'
                />
              </IconButton>
              <IconButton
                disabled={isStarLoading}
                onClick={handleStar}
                className='bg-blur group  border border-iconColor opacity-0 group-hover:opacity-100 ease-animate !duration-500 prevent-redirect'
              >
                <Star
                  isfilled={
                    user?.stared?.includes(campaign._id) ? "true" : undefined
                  }
                  className='h-5 w-5 fill-white  group-hover:opacity-100  prevent-redirect'
                />
              </IconButton>
            </div>
          </div>
        </CardHeader>
        <CardContent
          onClick={handleRedirect}
          className=' rounded-bl-2xl  rounded-br-2xl flex flex-col justify-around p-5 bg-white/[8%] group-hover:bg-white/10  '
        >
          <span className='mb-4 headline-4 text-white '>{campaign?.title}</span>
          <span className='text-gray2 running-text-small truncate  text-wrap  max-h-16'>
            {campaign?.plot}
          </span>
          <div
            className={cn(
              "flex justify-between items-center gap-5 mt-4 text-white",
              carousel && "hidden"
            )}
          >
            <div className='flex items-center gap-x-3 running-text-mono '>
              <CustomIcontext>
                <img
                  src='/Icons/Like.svg'
                  alt=''
                  className='h-5 w-5 opacity-70'
                />
                <span>{campaign?.analytics.likes.length}</span>
              </CustomIcontext>
              <CustomIcontext>
                <Play className='h-5 w-5 fill-white opacity-70' />
                <span>{campaign?.analytics.plays.length}</span>
              </CustomIcontext>
            </div>
            <Button withIcon>
              <Play className='h-5 w-5 fill-white opacity-70' />
              <span>Play</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}