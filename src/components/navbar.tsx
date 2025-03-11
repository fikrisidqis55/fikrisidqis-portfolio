import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "projects", "contact"];
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

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 w-full bg-[rgba(13,13,13,0.1)] backdrop-blur-sm shadow-lg text-[#EDEDED] z-50"
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <h1
          className="text-2xl font-bold text-[#FF5700] cursor-pointer"
          onClick={() => (window.location.href = "/")}
        >
          ufeek.dev
        </h1>
        <ul className="flex space-x-6">
          {["about", "projects", "contact"].map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                className={`transition ${
                  activeSection === section
                    ? "text-[#FF5700] font-bold"
                    : "hover:text-[#FF9100]"
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}
