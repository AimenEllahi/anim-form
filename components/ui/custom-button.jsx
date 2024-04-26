import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
export default function CustomButton({
  children,
  className,
  withIcon,
  variant,
}) {
  return (
    <Button
      className={cn(
        "running-text-mono gap-2 h-[48px] px-6 bg-white/10 hover:bg-white/10 uppercase border border-white/10 hover:border-white/20 rounded-[10px]  cursor-pointer z-[10] ease-animate",
        withIcon && "flex items-center pe-5 ps-[14px]",
        variant === "subtle"
          ? "!border-none bg-transparent hover:bg-transparent"
          : variant === "primary" &&
              "bg-white hover:bg-gray1 text-black focus:bg-gray2",
        className
      )}
    >
      {children}
    </Button>
  );
}