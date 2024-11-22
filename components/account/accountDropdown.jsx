import React, { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import useUserStore from "@/utils/userStore";
import GeneralMenu from "./GeneralMenu";
import SignedInUserMenu from "./SignedInUserMenu";
import { cn } from "@/lib/utils";

import User from "@/components/ui/Icons/User";

export default function AccountDropdown() {
  const [open, setOpen] = useState(false);
  const { user } = useUserStore();

  return (
    <DropdownMenu
      suppressHydrationWarning
      onOpenChange={(e) => setOpen(e)}
      open={open}
    >
      {/* Accessible Trigger with keyboard and aria support */}
      <DropdownMenuTrigger
        asChild={true}
        className='outline-0 hidden md:block'
        aria-haspopup='menu'
        aria-expanded={open}
        tabIndex={0}
      >
        <div
          className={cn(
            "bg-white/10 w-9 h-9  border bg-blur !flex !items-center !justify-center box-border ease-animate rounded-full border-white/[8%] cursor-pointer hover:border-white/20 hover:bg-white/10 active:bg-white/20 active:border-white/40 disabled:opacity-30% disabled:pointer-events-none hover:!duration-200 active:!duration-100",
            open && "border-white/40 bg-white/20 cursor-pointer"
          )}
          role='button' // Make it identifiable as a button
          aria-label='User account options' // Add descriptive label
        >
          {/* Accessible image with alt text */}
          <User
            className='h-5 w-5 fill-white  '
            alt='User icon'
            title='User account icon'
            aria-hidden='true' // Decorative image, screen readers can ignore
          />
        </div>
      </DropdownMenuTrigger>

      {/* Dropdown content with ARIA roles */}
      {user?.token ? (
        <SignedInUserMenu
          setOpen={setOpen}
          open={open}
          role='menu' // Role for dropdown content
        />
      ) : (
        <GeneralMenu
          setOpen={setOpen}
          role='menu' // Role for dropdown content
        />
      )}
    </DropdownMenu>
  );
}
