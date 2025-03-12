"use client";

import { motion } from "framer-motion";
import { SiRetroarch } from "react-icons/si";
import { useThemeStore } from "@/store/useThemeStore";

export default function ThemeSwitcher() {
  const { theme, toggleTheme: toggleThemeSwitch } = useThemeStore();

  return (
    <motion.button
      onClick={toggleThemeSwitch}
      className={`fixed top-20 right-12 p-4 rounded-full shadow-lg flex items-center justify-center transition-all z-50 ${
        theme === "modern"
          ? "bg-transparent text-black"
          : "bg-transparent text-[#0D0D0D] pixelated"
      }`}
      whileHover={{
        scale: 1.2,
        backgroundColor: theme === "modern" ? "#FF5700" : "#3A3480",
      }}
      whileTap={{ scale: 0.9 }}
      title="Switch Theme"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <SiRetroarch
          size={24}
          className={theme === "modern" ? "text-[#994D00]" : "text-black"}
        />
      </motion.div>
    </motion.button>
  );
}
