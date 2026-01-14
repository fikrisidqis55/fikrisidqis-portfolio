"use client";

import { motion } from "framer-motion";
import { LuFileText } from "react-icons/lu";

export default function Hero() {
  const resumeUrl = process.env.NEXT_PUBLIC_RESUME_URL || "";
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-foreground relative overflow-hidden"
    >
      {/* Floating Sun Background */}
      <div className="floating-sun"></div>

      <motion.div
        className="z-10 text-center px-6 max-w-5xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-5xl md:text-7xl lg:text-9xl font-heading font-black mb-4 glitch-text text-white tracking-tight uppercase"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{
            textShadow:
              "0 0 10px rgba(255,255,255,0.5), 0 0 30px rgba(255,0,255,0.6)",
          }}
        >
          UFEEK
        </motion.h1>

        <motion.p
          className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold glitch-text-orange-pink vaporwave-gradient-text tracking-wider uppercase"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          Software Engineer
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mt-12"
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
            className="group relative px-8 py-4 h-14 border-2 border-secondary bg-transparent text-secondary font-mono uppercase tracking-wider rounded-none -skew-x-12 transition-all duration-200 ease-linear hover:skew-x-0 hover:bg-secondary hover:text-black hover:shadow-neon-cyan"
            type="button"
          >
            <span className="inline-block skew-x-12 group-hover:skew-x-0 transition-transform duration-200">
              View My Work
            </span>
          </button>

          {resumeUrl && (
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 h-14 border-2 border-primary bg-transparent text-primary font-mono uppercase tracking-wider rounded-none -skew-x-12 transition-all duration-200 ease-linear hover:skew-x-0 hover:bg-primary hover:text-white hover:shadow-neon-magenta flex items-center justify-center gap-2"
            >
              <span className="inline-block skew-x-12 group-hover:skew-x-0 transition-transform duration-200">
                View Resume
              </span>
              <LuFileText
                size={18}
                className="inline-block skew-x-12 group-hover:skew-x-0 transition-transform duration-200"
              />
            </a>
          )}

          <button
            onClick={() => {
              const section = document.getElementById("contact");
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="group relative px-8 py-4 h-14 border-2 border-tertiary bg-tertiary text-black font-mono uppercase tracking-wider rounded-none -skew-x-12 transition-all duration-200 ease-linear hover:skew-x-0 hover:scale-105 hover:opacity-90 hover:shadow-neon-orange"
            type="button"
          >
            <span className="inline-block skew-x-12 group-hover:skew-x-0 transition-transform duration-200">
              Contact Me
            </span>
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
