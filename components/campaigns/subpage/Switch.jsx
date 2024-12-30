import React from "react";
import CustomButton from "@/components/ui/custom-button";
import { cn } from "@/lib/utils";
import Eye from "@/components/ui/Icons/Eye";
import Comment from "@/components/ui/Icons/Comment";

export default function Switch({
  selectedTab,
  setSelectedTab,
  commentCount,
  dictionary,
}) {
  return (
    <div className='flex w-full z-[20]'>
      <div className='w-full md:w-fit overflow-x-scroll hide-scrollbar flex md:p-2 gap-2'>
        {/* Details Tab */}
        <CustomButton
          withIcon
          className={cn(
            "active:bg-white",
            selectedTab === "details"
              ? "text-russianViolet !border !border-white/10 bg-white hover:bg-white md:hover:bg-white active:!bg-white"
              : "text-gray2 border-transparent bg-transparent md:hover:border"
          )}
          onClick={() => setSelectedTab("details")}
        >
          <Eye
            className={cn(
              "h-5 w-5",
              selectedTab === "details" ? "fill-russianViolet" : "fill-gray2"
            )}
          />
          {dictionary.details}
        </CustomButton>

        {/* Comments Tab */}
        <CustomButton
          withIcon
          className={cn(
            "active:bg-white",
            selectedTab === "comments"
              ? "text-russianViolet !border !border-white/10 bg-white hover:bg-white md:hover:bg-white active:!bg-white"
              : "text-gray2 border-transparent bg-transparent md:hover:border"
          )}
          onClick={() => setSelectedTab("comments")}
        >
          <div className='relative flex gap-1'>
            <Comment
              className={cn(
                "h-5 w-5",
                selectedTab === "comments" ? "fill-russianViolet" : "fill-gray2"
              )}
            />
            {dictionary.comments}
            {commentCount > 0 && (
              <span className='text-[9px] self-start -mt-1'>
                ({commentCount})
              </span>
            )}
          </div>
        </CustomButton>
      </div>
    </div>
  );
}
