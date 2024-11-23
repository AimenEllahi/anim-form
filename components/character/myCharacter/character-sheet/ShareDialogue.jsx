import React from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import CustomButton from "@/components/ui/custom-button";
import Cancel from "@/components/ui/Icons/Cancel";
import CustomInputIcon from "@/components/ui/custom-input-icon";
import Send from "@/components/ui/Icons/Send";

const socialPlatforms = [
  { name: "TIKTOK", icon: "/Icons/tiktok.png" },
  { name: "X", icon: "/Icons/twitter.jpeg" },
  { name: "INSTAGRAM", icon: "/Icons/insta.png" },
];

export default function ShareDialogue({ open, onOpenChange }) {
  const handleCancelClick = () => {
    onOpenChange(false); // Close the dialog by setting open to false
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-white/[8%] border border-white/[7%] !rounded-2xl !p-0 flex-col !gap-0  !w-[481px] max-w-screen flex ">
        <div className="text-left text-white !z-50 flex flex-col">
          <div className="p-4 running-text-large">Share Adventurer</div>
          <div className="p-4 flex flex-col gap-4 border-y border-white/10">
            <div className="w-full flex gap-4">
              {socialPlatforms.map((platform) => (
                <div
                  key={platform.name}
                  className="flex flex-col justify-center items-center gap-2"
                >
                  <div className="w-14 h-14 rounded-full">
                    <img
                      src={platform.icon}
                      alt={`${platform.name} Icon`}
                      className="object-cover h-full w-full rounded-full"
                    />
                  </div>
                  <span className="uppercase description">{platform.name}</span>
                </div>
              ))}
            </div>
            <CustomInputIcon
              //   value={"comment"}
              //   disabled={isLoading}
              //   onClick={addComment}
              //   onChange={(e) => setComment(e)}
              className={"w-full "}
              placeholder="Write a comment...."
              icon={<Send fill={"white"} className="h-4 w-4  opacity-70" />}
              isComment={true}
              text={"Copy"}
              isSubtle={true}
            />
          </div>
          <div className="p-4 w-full flex justify-end">
            <CustomButton
              withIcon={true}
              variant="secondary"
              onClick={handleCancelClick} // Close the dialog when clicked
            >
              <Cancel className="h-3 w-3 opacity-70 fill-white" />
              Cancel
            </CustomButton>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
