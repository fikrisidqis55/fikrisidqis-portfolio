"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center bg-[#0D0D0D] text-[#EDEDED] relative overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[800px] h-[800px] bg-[#FF5700] opacity-10 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#FF9100] opacity-10 blur-[80px] rounded-full"></div>

      <div className="absolute top-20 left-20 w-8 h-8 border-2 border-[#FF5700] opacity-40 rotate-45"></div>
      <div className="absolute bottom-40 right-20 w-12 h-12 border-2 border-[#FF9100] opacity-30 rounded-full"></div>
      <div className="absolute top-40 right-40 w-6 h-6 bg-[#FF5700] opacity-20 rounded-full"></div>

      <motion.div
        className="z-10 text-center px-6 max-w-4xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-6xl md:text-7xl font-bold text-[#FF5700] drop-shadow-lg mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Hi, I&#39;m Fikri
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-gray-300 mt-2 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          Software Engineer crafting exceptional digital experiences
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link
            href="#projects"
            className="px-8 py-4 bg-[#FF5700] text-white font-semibold rounded-lg shadow-lg flex items-center justify-center transition-all relative overflow-hidden group"
          >
            <span className="relative z-10">View My Work</span>
            <div className="absolute inset-0 bg-[#FF9100] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>

          <Link
            href="#contact"
            className="px-8 py-4 bg-transparent text-[#FF5700] border-2 border-[#FF5700] font-semibold rounded-lg shadow-lg flex items-center justify-center transition-all hover:bg-[#FF5700]/10"
          >
            Contact Me
          </Link>
        </motion.div>

        {/* <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7, y: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            delay: 1,
          }}
        >
          <div className="flex flex-col items-center">
            <p className="text-sm text-gray-400 mb-2">Scroll to explore</p>
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
              <div className="w-1.5 h-3 bg-gray-400 rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </motion.div> */}
      </motion.div>
    </section>
  );
}
