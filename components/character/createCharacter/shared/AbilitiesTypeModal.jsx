import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";

import Help from "@/components/ui/Icons/Help";
import Button from "@/components/ui/custom-button";
import Cancel from "@/components/ui/Icons/Cancel";
import Delete from "@/components/ui/Icons/Delete";

export default function AbilitiesTypeModal({
  children,
  abilitiesDesc,
  abilitiesTypeStep,
}) {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={(open) => setOpen(open)}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className='bg-blur-bottom-menu  !px-0 gap-0 text-white bg-transparent border-0 h-screen !w-screen'>
        <div className=' h-full  justify-end w-full gap-4 flex flex-col p-5 pt-3.5'>
          <div className='flex gap-4 items-center'>
            <Help className='size-6' />

            <span className='running-text-large'>
              {abilitiesDesc[abilitiesTypeStep].title}
            </span>
          </div>
          {abilitiesDesc[abilitiesTypeStep].options.map((option, index) => (
            <div key={index} className='flex flex-col gap-2'>
              <span className='running-text'>{option.title}</span>
              <span className='running-text text-gray2 '>{option?.desc}</span>
            </div>
          ))}
        </div>

        <DialogFooter className='!flex gap-4 items-end  p-6'>
          <Button
            className={"w-fit"}
            onClick={() => setOpen(false)}
            withIcon={true}
          >
            <Cancel className='w-3 h-3' fill='white' />
            Cancel
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
