import React from "react";
import { DialogContent, DialogTitle } from "@/components/ui/dialog";
import CustomButton from "@/components/ui/custom-button";
import Download from "@/components/ui/Icons/Download";
import Cancel from "@/components/ui/Icons/Cancel";
import CustomIconbutton from "@/components/ui/custom-iconbutton";
import Like from "../ui/Icons/Like";

export default function Image({
  setOpen,
  image,
  likes,
  dictionary,
  isLiked,
  isCreator,
  handleLikeImage,
}) {
  const downloadImage = () => {
    const link = document.createElement("a");
    link.target = "_blank";
    link.href = image;
    link.download = "image.png";
    link.click();
  };

  return (
    <DialogContent className="text-white bg-transparent border-none p-5 md:p-0 !max-w-screen md:!w-full max-h-[90%] !shadow-none !gap-6">
      <DialogTitle className="text-white text-center"></DialogTitle>
      <>
        <div className="grid relative grid-cols-1 gap-4  ">
          <CustomIconbutton
            onClick={() => {
              setOpen(false);
            }}
            className={"absolute top-4 right-4 bg-blur-icon-button md:hidden"}
          >
            <img
              src="/Icons/Cancel.svg"
              alt="imagestyle"
              title="Image Styles"
              className="h-5 w-5 "
            />
          </CustomIconbutton>
          <img
            src={image}
            title="Icon"
            alt="Icon"
            className=" ease-animate object-contain rounded-[16px] "
          />
        </div>
      </>

      <div className=" justify-center md:justify-between flex  ">
        <div className="hidden md:flex justify-start gap-4 ">
          <CustomButton onClick={downloadImage} withIcon variant={"subtle"}>
            <Download className="h-5 w-5 opacity-70 fill-white" />
            {dictionary.downloadImage}
          </CustomButton>
        </div>
        {!isCreator && (
          <CustomButton
            onClick={handleLikeImage}
            withIcon
            variant={"subtle"}
            className={
              " bg-transparent hover:bg-transparent active:bg-transparent !px-0"
            }
          >
            <Like isLiked={isLiked} className="h-5 w-5 fill-white" />
            <span className="running-text-mono">{likes}</span>
          </CustomButton>
        )}
        <CustomButton
          className={"hidden md:flex"}
          onClick={() => setOpen(false)}
          withIcon
        >
          <Cancel className="w-3 h-3 opacity-70 fill-white" />
          <span className="running-text-mono text-white">
            {dictionary.close}
          </span>
        </CustomButton>
      </div>
    </DialogContent>
  );
}
