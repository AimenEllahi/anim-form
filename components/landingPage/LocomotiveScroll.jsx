import React, { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import useGameStore from "@/utils/gameStore";

export default function LocomotiveScrollInitiate({ scrollRef, locoScrollRef }) {
  const { startNewGame } = useGameStore();

  useEffect(() => {
    if (scrollRef.current) {
      locoScrollRef.current = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        // Add other Locomotive Scroll options here
      });
    }

    return () => {
      if (locoScrollRef.current) {
        locoScrollRef.current.destroy();
        locoScrollRef.current = null;
      }
    };
  }, [scrollRef]);

  // Effect to enable/disable locomotive scroll when `startNewGame` changes
  useEffect(() => {
    if (locoScrollRef.current) {
      if (startNewGame) {
        locoScrollRef.current.stop(); // Disable scroll
      } else {
        locoScrollRef.current.start(); // Enable scroll
      }
    }
  }, [startNewGame, locoScrollRef]);

  return null;
}
