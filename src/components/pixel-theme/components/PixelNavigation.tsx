"use client";

import { useCallback } from "react";
import PixelButton from "./PixelButton";

interface PixelNavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export default function PixelNavigation({
  activeSection,
  onSectionChange,
}: PixelNavigationProps) {
  const handleSectionChange = useCallback(
    (section: string) => {
      onSectionChange(section);
    },
    [onSectionChange]
  );

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-indigo-900 border-t-4 border-indigo-700 p-2 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-1 md:space-x-4">
          <PixelButton
            active={activeSection === "home"}
            onClick={() => handleSectionChange("home")}
            keyHint="1"
          >
            Home
          </PixelButton>
          <PixelButton
            active={activeSection === "projects"}
            onClick={() => handleSectionChange("projects")}
            keyHint="2"
          >
            Projects
          </PixelButton>
          <PixelButton
            active={activeSection === "about"}
            onClick={() => handleSectionChange("about")}
            keyHint="3"
          >
            About
          </PixelButton>
          <PixelButton
            active={activeSection === "contact"}
            onClick={() => handleSectionChange("contact")}
            keyHint="4"
          >
            Contact
          </PixelButton>
        </div>
        <div className="hidden md:flex items-center text-xs font-mono">
          <span className="mr-2">PRESS KEYS [1-4] TO NAVIGATE</span>
          <div className="flex space-x-1">
            {[1, 2, 3, 4].map((num) => (
              <div
                key={num}
                className="w-6 h-6 flex items-center justify-center border-2 border-white"
              >
                {num}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
