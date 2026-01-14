import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Experience from "@/components/Experience";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import GlitchingBackground from "@/components/GlitchingBackground";
import CursorFollower from "@/components/CursorFollower";
import Head from "next/head";

export default function index() {
  return (
    <>
      <Head>
        <title>ufeek | Software Engineer</title>
        <meta
          name="description"
          content="Personal portfolio of Fikri Sidqi, Software Engineer specializing in web development"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="relative z-10">
        <GlitchingBackground />
        <CursorFollower />
        <Navbar />
        <Hero />
        <div className="flex flex-col items-center justify-center">
          <AboutMe />
          <Experience />
          <TechStack />
          <Projects />
          <Contact />
        </div>
        <Footer />
      </div>
    </>
  );
}
