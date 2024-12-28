import React from "react";
import { IconButton } from "@/components/ui/iconButton";
import { cn } from "@/lib/utils";

export default function CustomIconButton({
  children,
  className,
  onClick,
  variant,
  disabled = false,
  ariaLabel, // aria-label prop for accessibility
}) {
  return (
    <div
      disabled={disabled}
      aria-label='Button for Menus' // Inform screen readers
      aria-disabled={disabled} // Inform screen readers of disabled state
      title={ariaLabel} // Tooltip for better clarity
      role='button'
      // tabIndex={disabled ? -1 : 0} // Keyboard focus only if not disabled
      onKeyDown={(e) => {
        if (!disabled && (e.key === "Enter" || e.key === " ")) {
          onClick();
        }
      }}
      suppressHydrationWarning
      className={cn(
        "bg-white/10 h-9 w-9 rounded-full border bg-blur flex items-center justify-center box-border ease-animate  border-white/[8%] hover:border-white/20 hover:bg-white/10 active:bg-white/20 active:border-white/40 disabled:opacity-30 disabled:pointer-events-none hover:!duration-200 active:!duration-100 focus:outline-none ",
        variant === "primary" &&
          "bg-white hover:bg-gray1 active:bg-gray2 border-0 text-russianViolet",
        disabled && "opacity-30 pointer-events-none",
        className
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
