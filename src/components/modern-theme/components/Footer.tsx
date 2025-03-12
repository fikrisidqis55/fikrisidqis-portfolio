"use client";

import Link from "next/link";
import { LuMail, LuLinkedin, LuGithub, LuArrowUp } from "react-icons/lu";
import { motion } from "framer-motion";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-[rgba(0,0,0,0.2)] text-gray-400 py-12 border-t border-[#1A120B]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <Link
              href="/"
              className="text-2xl font-bold text-[#FF5700] hover:text-[#FF9100] transition-colors"
            >
              ufeek.dev
            </Link>
            <p className="mt-4 max-w-md">
              Software Engineer specializing in creating exceptional digital
              experiences with modern web technologies.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#about"
                  className="hover:text-[#FF5700] transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#experience"
                  className="hover:text-[#FF5700] transition-colors"
                >
                  Experience
                </Link>
              </li>
              <li>
                <Link
                  href="#tech-stack"
                  className="hover:text-[#FF5700] transition-colors"
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  href="#projects"
                  className="hover:text-[#FF5700] transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="hover:text-[#FF5700] transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <LuMail className="text-[#FF5700]" />
                <a
                  href="mailto:fikrisidqis55@gmail.com"
                  className="hover:text-[#FF5700] transition-colors"
                >
                  fikrisidqis55@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <LuLinkedin className="text-[#FF5700]" />
                <a
                  href="https://www.linkedin.com/in/fikrisidqi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FF5700] transition-colors"
                >
                  linkedin.com/in/fikrisidqi
                </a>
              </li>
              <li className="flex items-center gap-2">
                <LuGithub className="text-[#FF5700]" />
                <a
                  href="https://github.com/fikrisidqi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FF5700] transition-colors"
                >
                  github.com/fikrisidqi
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#1A120B] my-8"></div>

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} Fikri Sidqi. All rights reserved.</p>

          <motion.button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 flex items-center gap-2 text-[#FF5700] hover:text-[#FF9100] transition-colors"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            Back to top <LuArrowUp />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
