import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Experience from "@/components/Experience";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import GlitchingBackground from "@/components/GlitchingBackground";
import Head from "next/head";

export default function index() {
  return (
    <>
      <Head>
        <title>(still on development) ufeek | Software Engineer</title>
        <meta
          name="description"
          content="Personal portfolio of Fikri Sidqi, Software Engineer specializing in web development"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="relative z-10">
        {/* <AboutMe /> */}
        {/* <Experience /> */}
        <GlitchingBackground />
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
