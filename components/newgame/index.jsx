"use client";
import React, { useEffect, useState } from "react";
import { Dialog } from "@/components/ui/dialog";
import StepDialog from "./stepper/StepDialog";

export default function index() {
  const [isDialogOpen, setIsDialogOpen] = useState(true);

  useEffect(() => {
    setIsDialogOpen(true);
  }, []);

  return (
    <div className="h-full z-[10] w-full flex flex-col px-5 lg:px-12">
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <StepDialog setOpen={setIsDialogOpen} />
      </Dialog>
    </div>
  );
}
