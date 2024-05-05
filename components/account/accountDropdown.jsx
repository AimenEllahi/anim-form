import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import useUserStore from "@/utils/userStore";
import GeneralMenu from "./GeneralMenu";
import SignedInUserMenu from "./SignedInUserMenu";

export default function accountDropdown() {
  const [open, setOpen] = useState(false);
  const { user } = useUserStore();
  console.log(open);
  return (
    <DropdownMenu onOpenChange={(e) => setOpen(e)} open={open}>
      <DropdownMenuTrigger className='outline-none bg-white/10 h-9 w-9 border border-white/10 hover:border-white/20 active:border-white/40  transition-all duration-300  flex items-center justify-center rounded-full'>
        <img src='/Icons/User.svg' className='h-5 w-5 invert' />
      </DropdownMenuTrigger>
      {user ? <SignedInUserMenu /> : <GeneralMenu />}
    </DropdownMenu>
  );
}
