"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { LuMenu, LuX } from "react-icons/lu";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const sections = [
        "hero",
        "about",
        "experience",
        "tech-stack",
        "projects",
        "contact",
      ];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 100) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#tech-stack" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-card/90 backdrop-blur-md shadow-neon-cyan border-b-2 border-secondary/30 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center px-6">
          <Link
            href="/"
            className="text-2xl font-heading font-bold font-mono text-tertiary hover:text-tertiary/80 transition-colors glitch-text-orange-small vaporwave-glow-orange uppercase tracking-wider"
          >
            ufeek.is-a.dev
          </Link>

          <ul className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={`font-mono uppercase tracking-wider glitch-text-orange-pink-small transition-colors relative ${
                    activeSection === link.href.substring(1)
                      ? "text-secondary font-medium vaporwave-glow-cyan"
                      : "text-foreground/70 hover:text-secondary"
                  }`}
                >
                  {link.name}
                  {activeSection === link.href.substring(1) && (
                    <motion.span
                      className="absolute -bottom-1 left-0 w-full h-0.5 bg-secondary shadow-[0_0_10px_#00FFFF]"
                      layoutId="activeSection"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          <button
            className="md:hidden text-secondary hover:text-secondary/80 transition-colors"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <LuX size={24} /> : <LuMenu size={24} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-card/95 backdrop-blur-md z-40 md:hidden flex flex-col pt-24 px-6 border-r-2 border-secondary/30"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="flex flex-col space-y-6 items-center">
              {navLinks.map((link) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <Link
                    href={link.href}
                    className={`text-xl font-mono uppercase tracking-wider transition-colors ${
                      activeSection === link.href.substring(1)
                        ? "text-secondary font-medium vaporwave-glow-cyan"
                        : "text-foreground/70"
                    }`}
                    onClick={closeMobileMenu}
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
