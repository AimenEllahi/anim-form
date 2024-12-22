import React from "react";
import { Dialog, DialogContent, DialogFooter } from "@/components/ui/dialog";
import Button from "@/components/ui/custom-button";
import Cancel from "../ui/Icons/Cancel";

export default function LanguagePopup({ open, onClose }) {
  return (
    <Dialog open={open} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <DialogContent className="bg-white/[8%] !rounded-[16px] !px-0 gap-0 text-white border border-white/10 !w-[352px] sm:min-w-[352px] running-text">
        <div className="flex p-6 pt-4 border-b border-white/10 ">
          <h2 className="running-text-large text-gray1">
            <p>Choose your language</p>
          </h2>
        </div>
        <div className=" grid grid-cols-2 gap-2 p-6">
          <Button className="  normal-case w-[144px] bg-transparent border-white/0 hover:cursor-pointer hover:border hover:border-white/10 hover:bg-white/10 active:bg-white/10">
            Cancel <Cancel className="h-3 w-3 fill-white opacity-70" />
          </Button>
          <Button className="  normal-case w-[144px] bg-transparent border-white/0 hover:cursor-pointer hover:border hover:border-white/10 hover:bg-white/10 active:bg-white/10">
            Cancel <Cancel className="h-3 w-3 fill-white opacity-70" />
          </Button>
          <Button className="  normal-case w-[144px] bg-transparent border-white/0 hover:cursor-pointer hover:border hover:border-white/10 hover:bg-white/10 active:bg-white/10">
            Cancel <Cancel className="h-3 w-3 fill-white opacity-70" />
          </Button>
          <Button className="  normal-case w-[144px] bg-transparent border-white/0 hover:cursor-pointer hover:border hover:border-white/10 hover:bg-white/10 active:bg-white/10">
            Cancel <Cancel className="h-3 w-3 fill-white opacity-70" />
          </Button>
          <Button className="  normal-case w-[144px] bg-transparent border-white/0 hover:cursor-pointer hover:border hover:border-white/10 hover:bg-white/10 active:bg-white/10">
            Cancel <Cancel className="h-3 w-3 fill-white opacity-70" />
          </Button>
          <Button className="  normal-case w-[144px] bg-transparent border-white/0 hover:cursor-pointer hover:border hover:border-white/10 hover:bg-white/10 active:bg-white/10">
            Cancel <Cancel className="h-3 w-3 fill-white opacity-70" />
          </Button>
        </div>

        <DialogFooter className="!flex gap-4 border-t border-white/10 p-6">
          <Button onClick={onClose}>
            <Cancel className="h-3 w-3 fill-white opacity-70 " /> Cancel
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
