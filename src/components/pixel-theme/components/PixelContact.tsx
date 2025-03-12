"use client";

import { motion } from "framer-motion";
import { LuGithub, LuLinkedin, LuMail } from "react-icons/lu";

export default function PixelContact() {
  return (
    <motion.section
      key="contact"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen pt-20 pb-24 px-4"
    >
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 pixel-text text-center">
          <span className="text-blue-400">{"{"}</span> Contact Me{" "}
          <span className="text-blue-400">{"}"}</span>
        </h2>

        <div className="bg-indigo-900 p-6 border-4 border-indigo-700 mb-8">
          <form className="space-y-4">
            <div>
              <label className="block font-mono mb-2">Your Name</label>
              <input
                type="text"
                className="w-full bg-indigo-950 border-2 border-indigo-700 p-3 font-mono text-white"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block font-mono mb-2">Your Email</label>
              <input
                type="email"
                className="w-full bg-indigo-950 border-2 border-indigo-700 p-3 font-mono text-white"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block font-mono mb-2">Message</label>
              <textarea
                className="w-full bg-indigo-950 border-2 border-indigo-700 p-3 font-mono text-white h-32"
                placeholder="Type your message here..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white px-6 py-3 font-mono border-b-4 border-green-700 hover:border-green-800 transition-all"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="flex justify-center space-x-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-indigo-900 p-3 border-4 border-indigo-700 hover:bg-indigo-800 transition-all"
          >
            <LuGithub className="w-6 h-6 text-white" />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-indigo-900 p-3 border-4 border-indigo-700 hover:bg-indigo-800 transition-all"
          >
            <LuLinkedin className="w-6 h-6 text-white" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a
            href="mailto:fikrisidqis55@gmail.com"
            className="bg-indigo-900 p-3 border-4 border-indigo-700 hover:bg-indigo-800 transition-all"
          >
            <LuMail className="w-6 h-6 text-white" />
            <span className="sr-only">Email</span>
          </a>
        </div>
      </div>
    </motion.section>
  );
}
