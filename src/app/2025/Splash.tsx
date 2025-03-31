"use client";
import { FunctionComponent, useEffect, useState } from "react";

export const Splash: FunctionComponent = () => {
  const [fadeOut, setFadeOut] = useState(false);
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    if (fadeOut) {
      const timer = setTimeout(() => {
        setShowSplash(false);
      }, 1000); // fade-out animation duration

      return () => {
        clearTimeout(timer);
      };
    }
  }, [fadeOut]);

  if (!showSplash) {
    return null;
  }

  return (
    <video
      className={`absolute top-0 left-0 w-full h-full object-cover z-999 ${
        fadeOut ? "animate-fade-out opacity-0" : ""
      }`}
      src="2025/splash.mp4"
      id="splash"
      autoPlay={true}
      muted={true}
      onEnded={() => {
        setFadeOut(true);
      }}
      onClick={() => {
        setFadeOut(true);
      }}
    >
      Video not supported
    </video>
  );
};
