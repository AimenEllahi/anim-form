import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export default function CustomButton({
  children,
  className,
  withIcon,
  variant,
  disabled,
  onClick,
  active,
}) {
  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "running-text-mono gap-2 !h-[48px] px-6 bg-white/10 hover:bg-white/10 active:bg-white/10 md:hover:bg-white/10 uppercase border border-white/10 md:hover:border-white/20 md:active:bg-white/20 md:active:border-white/40 disabled:opacity-70 rounded-[10px] cursor-pointer z-[10] ease-animate hover:!duration-200 active:!duration-100",
        withIcon && "flex items-center pe-5 ps-[20px]",
        variant === "subtle" &&
          "!border-none bg-transparent md:hover:bg-transparent md:active:bg-transparent md:hover:text-gray1 md:active:text-gray2 !px-0",
        variant === "primary" &&
          "bg-white hover:bg-white active:bg-white md:hover:bg-gray1 text-russianViolet md:active:bg-gray2 border-none",
        variant === "error" &&
          "bg-errorRed text-russianViolet hover:bg-errorRed active:bg-errorRed md:hover:bg-[#D13942] md:active:md:hover:bg-[#C12D36] border-none",
        variant === "success" &&
          "bg-successGreen text-russianViolet hover:bg-successGreen active:bg-successGreen md:hover:bg-[#0FBB76] md:active:md:hover:bg-[#0E9961] border-none",
        (variant === "success" || variant === "error") &&
          withIcon &&
          "ps-6 pe-4",
        active && "!bg-white/20 !border-white/40",
        variant === "upgrade" &&
          "bg-irisPurple hover:bg-irisPurple active:bg-irisPurple  md:hover:bg-[#5E60F4] md:active:bg-[#6C6EFD]",
        className
      )}
    >
      {children}
    </Button>
  );
}
