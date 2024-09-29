import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export default function CustomNavtab({
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
        "running-text-mono gap-2  px-3  bg-transparent hover:bg-white/10 uppercase  active:bg-white/20 disabled:opacity-70 rounded-[10px] cursor-pointer z-[10] ease-animate hover:!duration-200 active:!duration-100",
        className
      )}
    >
      {children}
    </Button>
  );
}
