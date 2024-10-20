import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import CustomIconButton from "../custom-iconbutton";
import Add from "@/components/ui/Icons/Add";
import AddUser from "@/components/ui/Icons/AddUser";
import CampaignAdd from "@/components/ui/Icons/CampaignAdd";
import { useRouter } from "next/navigation";
import CustomMenuItem from "../custom-menu-item";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

//menu
export default function CreateMenu() {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const isGamePage = usePathname().includes("/game/play");

  const handleNavigation = (path) => {
    router.push(path);
  };

  return (
    <Popover open={open} onOpenChange={(open) => setOpen(open)}>
      <PopoverTrigger asChild>
        <div
          role="button"
          tabIndex={0}
          onClick={() => setOpen(!open)}
          onKeyPress={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              setOpen(!open);
            }
          }}
        >
          <CustomIconButton
            className={cn(
              open &&
                "bg-white/20 border-white/40 hover:bg-white/20 active:bg-white/20 active:border-white/40 hover:border-white/40"
            )}
          >
            <Add className='h-5 w-5 fill-white' />
          </CustomIconButton>
        </div>
      </PopoverTrigger>
      <PopoverContent
        className={cn(
          "mt-5  !bg-white/10 p-5 py-2 running-text-mono uppercase flex flex-col gap-2  !px-2 border !border-white/10 !rounded-[16px] ",
          isGamePage && "mt-3.5"
        )}
      >
        <CustomMenuItem
          onClick={() => handleNavigation("/character/create")}
          withIcon={true}
          variant='subtle'
        >
          <AddUser className='h-5 w-5 fill-white' />
          Create Adventurer
        </CustomMenuItem>
        <CustomMenuItem
          onClick={() => handleNavigation("/campaign/create")}
          withIcon={true}
          variant='subtle'
        >
          <CampaignAdd className='h-5 w-5 fill-white' />
          Create Campaign
        </CustomMenuItem>
      </PopoverContent>
    </Popover>
  );
}