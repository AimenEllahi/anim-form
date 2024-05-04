// hooks/useDeviceDetect.js
"use client";
import { useState, useEffect } from "react";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
const useCustomToast = () => {
  const router = useRouter();

  const { toast } = useToast();
  const invokeToast = (
    title,
    message,
    actionIcon,
    actionText,
    redirectLink
  ) => {
    toast({
      title: title,
      description: "",
      className: cn(
        "border-0 text-white font-roboto-mono uppercase",
        message === "Error" ? "bg-[#C92631] " : "bg-[#4767DC] "
      ),
      action: (
        <ToastAction
          onClick={() => {
            if (redirectLink) {
              router.push(redirectLink);
            }
          }}
          altText='Try again'
          className='gap-x-2'
        >
          {actionIcon}
          {actionText}
        </ToastAction>
      ),
    });
  };

  return { invokeToast };
};

export default useCustomToast;
