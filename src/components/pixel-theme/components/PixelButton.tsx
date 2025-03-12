"use client";

import type React from "react";

interface PixelButtonProps {
  children: React.ReactNode;
  active?: boolean;
  onClick: () => void;
  keyHint?: string;
}

export default function PixelButton({
  children,
  active = false,
  onClick,
  keyHint,
}: PixelButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`relative px-3 py-2 font-mono text-sm md:text-base transition-all ${
        active
          ? "bg-green-500 border-b-4 border-green-700"
          : "bg-indigo-800 border-b-4 border-indigo-600 hover:bg-indigo-700"
      }`}
    >
      {children}
      {keyHint && (
        <span className="absolute -top-3 -right-1 w-5 h-5 flex items-center justify-center bg-yellow-400 text-black text-xs">
          {keyHint}
        </span>
      )}
    </button>
  );
}
