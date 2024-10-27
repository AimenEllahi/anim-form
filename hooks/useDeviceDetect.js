"use client";
import { useState, useEffect } from "react";

const useDeviceDetect = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const userAgent =
      typeof window.navigator === "undefined" ? "" : navigator.userAgent;
    const mobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        userAgent
      );
    setIsMobile(window.innerWidth < 756 || mobile);
    setIsTablet(window.innerWidth < 1024 || mobile);
  }, []);

  return { isMobile, isTablet };
};

export default useDeviceDetect;
