import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Projects from "@/components/projects";
import React from "react";

export default function index() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <Hero />
      <Projects />
    </div>
  );
}
