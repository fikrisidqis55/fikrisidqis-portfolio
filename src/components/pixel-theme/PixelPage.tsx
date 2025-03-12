"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import PixelIntro from "./components/PixelIntro";
import PixelNavigation from "./components/PixelNavigation";
import PixelHome from "./components/PixelHome";
import PixelProjects from "./components/PixelProjects";
import PixelAbout from "./components/PixelAbout";
import PixelContact from "./components/PixelContact";

// Projects data
const projects = [
  {
    id: 1,
    title: "Pixel Weather App",
    description:
      "A weather application with pixel art visuals for different weather conditions",
    tags: ["React", "API", "Pixel Art"],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    title: "Retro Game Collection",
    description:
      "A collection of mini-games built with modern web technologies",
    tags: ["JavaScript", "Canvas", "Game Dev"],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    title: "Dev Portfolio Generator",
    description: "A tool that helps developers create pixel art portfolios",
    tags: ["Next.js", "Tailwind", "SaaS"],
    image: "/placeholder.svg?height=200&width=300",
  },
];

// Skills data
const skills = [
  { name: "JavaScript", level: 90 },
  { name: "React", level: 85 },
  { name: "Next.js", level: 80 },
  { name: "Node.js", level: 75 },
  { name: "Pixel Art", level: 70 },
  { name: "Game Design", level: 65 },
];

export default function PixelPage() {
  const [showIntro, setShowIntro] = useState(true);
  const [activeSection, setActiveSection] = useState("home");

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "1":
          setActiveSection("home");
          break;
        case "2":
          setActiveSection("projects");
          break;
        case "3":
          setActiveSection("about");
          break;
        case "4":
          setActiveSection("contact");
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  const handleSectionChange = (section: string) => {
    setActiveSection(section);
  };

  if (showIntro) {
    return <PixelIntro onComplete={handleIntroComplete} />;
  }

  return (
    <main className="min-h-screen bg-indigo-950 text-white pixel-bg">
      {/* Navigation */}
      <PixelNavigation
        activeSection={activeSection}
        onSectionChange={handleSectionChange}
      />

      {/* Content Sections */}
      <AnimatePresence mode="wait">
        {activeSection === "home" && (
          <PixelHome onNavigate={handleSectionChange} />
        )}

        {activeSection === "projects" && <PixelProjects projects={projects} />}

        {activeSection === "about" && <PixelAbout skills={skills} />}

        {activeSection === "contact" && <PixelContact />}
      </AnimatePresence>
    </main>
  );
}
