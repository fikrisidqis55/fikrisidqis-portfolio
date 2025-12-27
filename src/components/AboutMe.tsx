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

        <div className="w-full md:w-2/3 text-center md:text-left relative z-2 bg-gradient-to-br from-[#100b20]/80 to-[#23113c]/80 rounded-2xl shadow-[0_6px_32px_0_rgba(43,0,100,0.34)] p-8 border border-[#ff10f0]/40 backdrop-blur-xl">
          <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tight glitch-text text-transparent bg-clip-text bg-gradient-to-r from-[#ff10f0] via-[#ff40e2] to-[#00ffff] drop-shadow-[0_4px_22px_#ff10f084] select-none">
            About Me
          </h2>
          <div className="space-y-7 text-[1.15rem] md:text-lg text-justify leading-relaxed text-[#ececff] font-medium">
            <p>
              My name is Fikri. I go by the moniker{" "}
              <span className="font-extrabold text-primary text-shadow-[0_2px_8px_#ff10f088]">
                Ufeek
              </span>{" "}
              &mdash; a play on words for &quot;
              <span className="font-bold text-[#00ffff] tracking-wide drop-shadow-[0_0px_4px_#00ffffd7]">
                You
              </span>
              &quot; &amp; &quot;
              <span className="font-black text-primary tracking-wider drop-shadow-[0_0_8px_#ff10f08c]">
                Fik
              </span>
              &quot;.
              <br className="hidden md:inline" />
              <span className="block md:inline text-[#b399f4]/80">
                {" "}
                It represents the synergy between{" "}
                <span className="font-bold text-[#00ffff]">You</span> and{" "}
                <span className="font-bold text-primary">Fikri</span>, because I
                believe the best digital solutions are built through{" "}
                <span className="font-bold text-[#00ffff] bg-[#1d1935]/40 rounded shadow-[0_1px_7px_#00ffff56]">
                  strong collaboration
                </span>
                .
              </span>
            </p>
            <p>
              As a dedicated{" "}
              <span className="font-bold text-[#ff10f0] tracking-tight">
                Software Engineer
              </span>
              , I channel this mindset into crafting{" "}
              <span className="text-[#00ffff] font-semibold">intuitive</span>
              and{" "}
              <span className="text-[#ff4500] font-semibold tracking-tight">
                high-performance
              </span>{" "}
              applications.
              <br className="hidden md:inline" />
              My expertise spans various modern technologies, enabling me to
              develop{" "}
              <span className="text-[#00ffff]/90 font-bold tracking-wider">
                seamless
              </span>{" "}
              and <span className="text-primary font-bold">scalable</span>{" "}
              digital solutions that truly enhance user experiences.
            </p>
            <p>
              Constantly exploring the evolving tech landscape,{" "}
              <span className="text-[#00ffff] font-semibold">
                I enjoy designing interactive interfaces
              </span>
              , optimizing web performance, and implementing{" "}
              <span className="text-primary font-extrabold">innovative</span>{" "}
              development techniques to create impactful digital products.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
