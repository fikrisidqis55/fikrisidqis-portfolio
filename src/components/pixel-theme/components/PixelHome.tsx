"use client";

import { motion } from "framer-motion";
import PixelCharacter from "./PixelCharacter";

interface PixelHomeProps {
  onNavigate: (section: string) => void;
}

export default function PixelHome({ onNavigate }: PixelHomeProps) {
  return (
    <motion.section
      key="home"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen flex flex-col items-center justify-center px-4 pb-20"
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 pixel-text">
            <span className="text-green-400">ufeek</span>
            <span className="text-yellow-400">.dev</span>
          </h1>
          <div className="bg-indigo-900 p-4 border-4 border-indigo-700 mb-6">
            <p className="text-lg md:text-xl mb-4 font-mono">
              <span className="text-green-400">const</span> developer = {"{"}
              <br />
              &nbsp;&nbsp;name:{" "}
              <span className="text-yellow-300">&quot;Fikri&quot;</span>,
              <br />
              &nbsp;&nbsp;skills: [
              <span className="text-yellow-300">&quot;Web Dev&quot;</span>,{" "}
              <span className="text-yellow-300">
                &quot;Software Engineer&quot;
              </span>
              ],
              <br />
              &nbsp;&nbsp;passion:{" "}
              <span className="text-yellow-300">
                &quot;Creating interactive experiences&quot;
              </span>
              <br />
              {"}"};
            </p>
          </div>
          <div className="flex space-x-4">
            <button
              onClick={() => onNavigate("projects")}
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 font-mono border-b-4 border-green-700 hover:border-green-800 transition-all"
            >
              View Projects
            </button>
            <button
              onClick={() => onNavigate("contact")}
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 font-mono border-b-4 border-blue-700 hover:border-blue-800 transition-all"
            >
              Contact Me
            </button>
          </div>
        </div>
        <div className="order-1 md:order-2 flex justify-center mb-10 md:mb-0">
          <PixelCharacter />
        </div>
      </div>
    </motion.section>
  );
}
