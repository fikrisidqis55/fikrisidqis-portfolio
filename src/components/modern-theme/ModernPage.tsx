"use client";

import { useEffect, useState, useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Stats from "./components/Stats";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

export default function ModernPage() {
  const [scrollY, setScrollY] = useState(0);
  const requestRef = useRef<number | null>(null);
  const previousTimeRef = useRef<number | null>(null);

  // Track scroll position with requestAnimationFrame for better performance
  const animate = (time: number) => {
    if (previousTimeRef.current !== null) {
      setScrollY(window.scrollY);
    }
    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
    // eslint-disable-next-line
  }, []);

  // Calculate dynamic values based on scroll position
  const calculateParallax = (factor: number) => {
    return scrollY * factor;
  };

  // Calculate opacity based on scroll position
  const calculateOpacity = (baseOpacity: number, scrollFactor: number) => {
    const opacityChange = (scrollY * scrollFactor) % 0.2;
    return Math.max(0.05, Math.min(baseOpacity, baseOpacity - opacityChange));
  };

  // Calculate hue rotation based on scroll
  const calculateHueRotation = () => {
    return (scrollY * 0.05) % 30;
  };

  return (
    <div className="relative bg-[#0D0D0D] text-white overflow-hidden">
      {/* Dynamic background elements that respond to scroll */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        {/* Top gradient orb */}
        <div
          className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[800px] h-[800px] bg-[#FF5700] rounded-full blur-[100px]"
          style={{
            opacity: calculateOpacity(0.1, 0.0001),
            transform: `translate(-50%, ${calculateParallax(-0.05)}px)`,
            filter: `hue-rotate(${calculateHueRotation()}deg)`,
          }}
        ></div>

        {/* Bottom right orb */}
        <div
          className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#FF9100] rounded-full blur-[80px]"
          style={{
            opacity: calculateOpacity(0.1, 0.0001),
            transform: `translate(${calculateParallax(
              0.03
            )}px, ${calculateParallax(0.02)}px)`,
            filter: `hue-rotate(${-calculateHueRotation()}deg)`,
          }}
        ></div>

        {/* Middle right orb */}
        <div
          className="absolute top-[30%] right-[20%] w-[400px] h-[400px] bg-[#FF5700] rounded-full blur-[90px]"
          style={{
            opacity: calculateOpacity(0.05, 0.0001),
            transform: `translate(${calculateParallax(
              -0.02
            )}px, ${calculateParallax(0.04)}px)`,
            filter: `hue-rotate(${calculateHueRotation() * 0.5}deg)`,
          }}
        ></div>

        {/* Bottom left orb */}
        <div
          className="absolute bottom-[40%] left-[10%] w-[500px] h-[500px] bg-[#FF9100] rounded-full blur-[70px]"
          style={{
            opacity: calculateOpacity(0.05, 0.0001),
            transform: `translate(${calculateParallax(
              0.01
            )}px, ${calculateParallax(-0.03)}px)`,
            filter: `hue-rotate(${-calculateHueRotation() * 0.7}deg)`,
          }}
        ></div>

        {/* Floating particles */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(255, 87, 0, 0.1) 1px, transparent 1px), 
                              radial-gradient(circle, rgba(255, 145, 0, 0.05) 1px, transparent 1px)`,
            backgroundSize: "40px 40px, 30px 30px",
            backgroundPosition: "0 0, 20px 20px",
            transform: `translateY(${calculateParallax(0.1)}px)`,
            opacity: calculateOpacity(0.3, 0.0002),
          }}
        ></div>
      </div>

      {/* Content with relative positioning to appear above the background */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <AboutMe />
        <Stats />
        <Experience />
        <Skills />
        <TechStack />
        <Projects />
        <Testimonials />
        <Blog />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}