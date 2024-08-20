import React, { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import useUserStore from "@/utils/userStore";
import GeneralMenu from "./GeneralMenu";
import SignedInUserMenu from "./SignedInUserMenu";
import { cn } from "@/lib/utils";
import { IconButton } from "../ui/iconButton";
import CustomIconbutton from "../ui/custom-iconbutton";

export default function accountDropdown() {
  const [open, setOpen] = useState(false);
  const { user } = useUserStore();

  return (
    <DropdownMenu
      suppressHydrationWarning
      onOpenChange={(e) => setOpen(e)}
      open={open}
    >
      <DropdownMenuTrigger asChild={true} className='outline-0 hidden md:block'>
        <div
          //  onClick={() => setOpen((prev) => !prev)}
          className={cn(
            "bg-white/10 p-2 border bg-blur flex items-center justify-center box-border ease-animate rounded-full border-white/[8%] cursor-pointer hover:border-white/20 hover:bg-white/10 active:bg-white/20  active:border-white/40 disabled:opacity-30% disabled:pointer-events-none hover:!duration-200 active:!duration-100",
            open && "border-white/40 bg-white/20 cursor-pointer"
          )}
        >
          <img src='/Icons/User.svg' className='h-5 w-5 invert' />
        </div>
      </DropdownMenuTrigger>

      {user?.token ? (
        <SignedInUserMenu setOpen={setOpen} />
      ) : (
        <GeneralMenu setOpen={setOpen} />
      )}
    </DropdownMenu>
  );
}
