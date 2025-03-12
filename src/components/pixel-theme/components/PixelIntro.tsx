"use client";

import { useState, useEffect } from "react";

interface PixelIntroProps {
  onComplete: () => void;
}

export default function PixelIntro({ onComplete }: PixelIntroProps) {
  const [typedText, setTypedText] = useState("");
  const introText = "Welcome to ufeek.dev";

  // Typing effect for intro
  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      setTypedText(introText.substring(0, i));
      i++;
      if (i > introText.length) {
        clearInterval(typing);
        setTimeout(() => {
          onComplete();
        }, 1000);
      }
    }, 100);
    return () => clearInterval(typing);
  }, [onComplete]);

  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <div className="font-mono text-green-500 text-2xl md:text-4xl pixel-text">
        {typedText}
        <span className="animate-blink">_</span>
      </div>
    </div>
  );
}
