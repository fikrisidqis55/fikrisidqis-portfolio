"use client";

import { useEffect, useState, useRef } from "react";
import { GiLadybug } from "react-icons/gi";

export default function CursorFollower() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(true); // Default to true to avoid hydration mismatch
  const [isInPort, setIsInPort] = useState(false); // Track if bug is close to cursor
  const requestRef = useRef<number | undefined>(undefined);
  const targetPosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Check if mobile view
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Check on mount
    checkMobile();

    // Listen for resize events
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  useEffect(() => {
    // Don't set up cursor follower on mobile
    if (isMobile) return;

    // Radius threshold in pixels - bug turns red when within this distance from cursor
    const PROXIMITY_THRESHOLD = 50;

    const handleMouseMove = (e: MouseEvent) => {
      targetPosition.current = { x: e.clientX, y: e.clientY };
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
      setIsInPort(false);
    };

    // Smooth animation using requestAnimationFrame
    const animate = () => {
      setPosition((prev) => {
        const dx = targetPosition.current.x - prev.x;
        const dy = targetPosition.current.y - prev.y;
        const newPosition = {
          x: prev.x + dx * 0.025, // Smoothing factor (0.15 = smooth, lower = smoother)
          y: prev.y + dy * 0.025,
        };

        // Calculate distance between bug position and cursor position
        const distance = Math.sqrt(
          Math.pow(targetPosition.current.x - newPosition.x, 2) +
            Math.pow(targetPosition.current.y - newPosition.y, 2)
        );

        // Update isInPort based on proximity threshold
        setIsInPort(distance <= PROXIMITY_THRESHOLD);

        return newPosition;
      });
      requestRef.current = requestAnimationFrame(animate);
    };

    // Add event listeners
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    // Start animation loop
    requestRef.current = requestAnimationFrame(animate);

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [isMobile]);

  // Don't render on mobile
  if (isMobile) return null;

  return (
    <div
      className="fixed pointer-events-none z-[0] transition-opacity duration-300"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: "translate(-50%, -50%)",
        opacity: isVisible ? 1 : 0,
        willChange: "transform",
      }}
    >
      {/* Bug Icon Follower */}
      <div className="relative">
        {/* Glow effect */}
        {/* <div className="absolute inset-0 blur-xl bg-secondary/30 rounded-full animate-pulse"></div> */}

        {/* Bug container */}
        <div
          className={`relative filter hover:scale-110 transition-all duration-200 ${
            isInPort
              ? "drop-shadow-[0_0_15px_rgba(255,0,0,0.8)]"
              : "drop-shadow-[0_0_15px_rgba(0,255,255,0.8)]"
          }`}
        >
          <GiLadybug
            className={`w-10 h-10 transition-colors duration-200 ${
              isInPort ? "text-red-500" : "text-secondary"
            }`}
          />
        </div>

        {/* Vaporwave glow rings */}
        {/* <div className="absolute inset-0 -z-10 pointer-events-none">
          <div
            className="absolute inset-0 border-2 border-secondary/50 rounded-full animate-ping"
            style={{ animationDuration: "2s" }}
          ></div>
          <div
            className="absolute inset-0 border border-primary/30 rounded-full animate-pulse"
            style={{ animationDuration: "3s" }}
          ></div>
        </div> */}
      </div>
    </div>
  );
}
