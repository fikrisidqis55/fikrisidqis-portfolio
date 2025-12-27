"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-[#EDEDED] relative overflow-hidden"
    >
      <motion.div
        className="z-1 text-center px-6 max-w-4xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 glitch-text text-white font-mono tracking-wider"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          UFEEK
        </motion.h1>

        <motion.p
          className="text-4xl md:text-6xl lg:text-7xl font-bold glitch-text-orange-pink text-primary font-mono tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          Software Engineer
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <button
            onClick={() => {
              const section = document.getElementById("projects");
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="px-8 py-4 text-white font-semibold font-mono rounded-lg flex items-center justify-center transition-all relative overflow-hidden group hover:bg-white hover:text-secondary"
            type="button"
          >
            <span className="relative z-10">View My Work</span>
          </button>

          <button
            onClick={() => {
              const section = document.getElementById("contact");
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="px-8 py-4 text-[#FF10F0] font-semibold font-mono rounded-lg flex items-center justify-center transition-all hover:bg-secondary hover:text-white"
            type="button"
          >
            Contact Me
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
