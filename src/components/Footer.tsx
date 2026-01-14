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
    <footer className="bg-card/80 backdrop-blur-md text-foreground/70 py-12 border-t-2 border-secondary/30 z-12 relative mt-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link
              href="/"
              className="text-2xl font-heading font-bold text-secondary hover:text-secondary/80 transition-colors glitch-text-orange-small vaporwave-glow-cyan uppercase tracking-wider"
            >
              ufeek.is-a.dev
            </Link>
            <p className="mt-4 max-w-md font-mono text-foreground/70">
              Software Engineer specializing in creating exceptional digital
              experiences with modern web technologies.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-heading font-semibold text-secondary mb-4 uppercase tracking-wider vaporwave-glow-cyan">
              Quick Links
            </h3>
            <ul className="space-y-2 font-mono uppercase tracking-wider">
              <li>
                <Link
                  href="#about"
                  className="hover:text-secondary transition-colors text-foreground/70 hover:underline"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#experience"
                  className="hover:text-secondary transition-colors text-foreground/70 hover:underline"
                >
                  Experience
                </Link>
              </li>
              <li>
                <Link
                  href="#tech-stack"
                  className="hover:text-secondary transition-colors text-foreground/70 hover:underline"
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  href="#projects"
                  className="hover:text-secondary transition-colors text-foreground/70 hover:underline"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="hover:text-secondary transition-colors text-foreground/70 hover:underline"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-heading font-semibold text-secondary mb-4 uppercase tracking-wider vaporwave-glow-cyan">
              Contact
            </h3>
            <ul className="space-y-2 font-mono text-sm">
              <li className="flex items-center gap-2 text-foreground/70">
                <LuMail className="text-secondary" />
                <a
                  href="mailto:fikrisidqis55@gmail.com"
                  className="transition-colors hover:text-secondary"
                >
                  fikrisidqis55@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-foreground/70">
                <LuLinkedin className="text-secondary" />
                <a
                  href="https://www.linkedin.com/in/fikrisidqi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-secondary"
                >
                  linkedin.com/in/fikrisidqi
                </a>
              </li>
              <li className="flex items-center gap-2 text-foreground/70">
                <LuGithub className="text-secondary" />
                <a
                  href="https://github.com/fikrisidqis55"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-secondary"
                >
                  github.com/fikrisidqis55
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t-2 border-secondary/30 my-8"></div>

        <div className="flex flex-col md:flex-row justify-between items-center font-mono text-foreground/60">
          <p>© {new Date().getFullYear()} Fikri Sidqi. All rights reserved.</p>

          <motion.button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 flex items-center gap-2 transition-colors hover:text-secondary uppercase tracking-wider"
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
