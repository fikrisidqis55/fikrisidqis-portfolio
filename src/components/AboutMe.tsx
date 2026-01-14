"use client";

import { useState, useEffect } from "react";

export default function AboutMe() {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // Preload the image and add imgloaded class when loaded
    const img = new window.Image();
    img.src = "/profile-picture-glitched.jpeg";
    img.onload = () => {
      setImageLoaded(true);
    };
    // If image is already cached, trigger load immediately
    if (img.complete) {
      setImageLoaded(true);
    }
  }, []);

  return (
    <section id="about" className="relative pt-24">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-6 gap-10 md:gap-16 relative">
        <div className="w-full md:w-1/3 flex justify-center mb-8 md:mb-0">
          <div className="relative">
            <div className="absolute -inset-1 blur-md opacity-70 animate-pulse z-0"></div>
            <div
              className={`glitch-container relative w-[220px] h-[220px] z-10 ${
                imageLoaded ? "imgloaded" : ""
              }`}
            >
              <div className="glitch__img"></div>
              <div className="glitch__img"></div>
              <div className="glitch__img"></div>
              <div className="glitch__img"></div>
              <div className="glitch__img"></div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-2/3 text-center md:text-left relative z-10 border border-primary/30 border-t-2 border-t-tertiary bg-card/80 backdrop-blur-md p-8 rounded-none">
          <h2 className="text-4xl md:text-5xl font-heading font-black mb-8 tracking-tight uppercase text-tertiary vaporwave-glow-orange">
            About Me
          </h2>
          <div className="space-y-7 text-[1.15rem] md:text-lg text-justify leading-relaxed font-mono text-foreground/90">
            <p>
              My name is Fikri. I go by the moniker{" "}
              <span className="font-extrabold">Ufeek</span> &mdash; a play on
              words for &quot;
              <span className="font-bold">You</span>
              &quot; &amp; &quot;
              <span className="font-black">Fik</span>
              &quot;.
              <br className="hidden md:inline" />
              <span className="block md:inline">
                {" "}
                It represents the synergy between{" "}
                <span className="font-bold">You</span> and{" "}
                <span className="font-bold">Fikri</span>, because I believe the
                best digital solutions are built through{" "}
                <span className="font-bold">strong collaboration</span>.
              </span>
            </p>
            <p>
              As a dedicated{" "}
              <span className="font-bold">Software Engineer</span>, I channel
              this mindset into crafting{" "}
              <span className="font-semibold">intuitive</span>
              and <span className="font-semibold">high-performance</span>{" "}
              applications.
              <br className="hidden md:inline" />
              My expertise spans various modern technologies, enabling me to
              develop <span className="font-bold">seamless</span> and{" "}
              <span className="font-bold">scalable</span> digital solutions that
              truly enhance user experiences.
            </p>
            <p>
              Constantly exploring the evolving tech landscape,{" "}
              <span className="font-semibold">
                I enjoy designing interactive interfaces
              </span>
              , optimizing web performance, and implementing{" "}
              <span className="font-extrabold">innovative</span> development
              techniques to create impactful digital products.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
