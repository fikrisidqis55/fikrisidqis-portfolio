"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function PixelCharacter() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<"left" | "right" | "still">(
    "still"
  );

  const handleOnClick = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setDirection(Math.random() > 0.5 ? "right" : "left");

      setTimeout(() => {
        setIsAnimating(false);
        setDirection("still");
      }, 1000);
      console.log("clicked");
    }
  };
  // Random movement
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setIsAnimating(true);
  //     setDirection(Math.random() > 0.5 ? "right" : "left");

  //     setTimeout(() => {
  //       setIsAnimating(false);
  //     }, 1000);
  //   }, 3000);

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div className="relative w-64 h-64">
      <motion.div
        animate={{
          x: isAnimating ? (direction === "right" ? 20 : -20) : 0,
        }}
        transition={{ type: "spring", stiffness: 100 }}
        className="pixel-character"
        onClick={handleOnClick}
      >
        {/* Character Head */}
        <div className="w-32 h-32 bg-yellow-300 relative mx-auto">
          {/* Eyes */}
          <div
            className={`absolute top-10 ${
              direction === "right"
                ? "left-8"
                : direction === "left"
                ? "left-4"
                : "left-6"
            } w-4 h-4 bg-black`}
          ></div>
          <div
            className={`absolute top-10 ${
              direction === "right"
                ? "right-4"
                : direction === "left"
                ? "right-8"
                : "right-6"
            } w-4 h-4 bg-black`}
          ></div>

          {/* Mouth */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-12 h-4 bg-red-500"></div>

          {/* Hair */}
          <div className="absolute top-0 left-0 w-full h-6 bg-brown-600"></div>
          <div className="absolute top-6 left-0 w-4 h-10 bg-brown-600"></div>
          <div className="absolute top-6 right-0 w-4 h-10 bg-brown-600"></div>
        </div>

        {/* Character Body */}
        <div className="w-40 h-24 relative mx-auto">
          {/* Body */}
          <div className="w-32 h-24 bg-blue-400 relative mx-auto"></div>
          {/* Arms */}
          <motion.div
            animate={{ rotate: isAnimating ? 45 : 0 }}
            className="absolute top-0 left-0 w-8 h-24 bg-blue-600 origin-top"
          ></motion.div>
          <motion.div
            animate={{ rotate: isAnimating ? -45 : 0 }}
            className="absolute top-0 right-0 w-8 h-24 bg-blue-600 origin-top"
          ></motion.div>
        </div>

        {/* Character Legs */}
        <div className="flex justify-center">
          <motion.div
            animate={{ y: isAnimating ? -5 : 0 }}
            className="w-12 h-20 bg-indigo-700 mx-1"
          ></motion.div>
          <motion.div
            animate={{ y: isAnimating ? 5 : 0 }}
            className="w-12 h-20 bg-indigo-700 mx-1"
          ></motion.div>
        </div>
      </motion.div>

      {/* Shadow */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-40 h-6 bg-black/20 rounded-full"></div>
    </div>
  );
}

// Check if there are any Lucide icons in the PixelCharacter component
// No Lucide icons found in this file
