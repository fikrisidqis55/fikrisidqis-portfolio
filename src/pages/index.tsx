import { useThemeStore as themeStore } from "@/store/useThemeStore";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import Head from "next/head";
import PixelPage from "@/components/pixel-theme/PixelPage";
import ModernPage from "@/components/modern-theme/ModernPage";
import LoadingScreen from "@/components/modern-theme/components/LoadingScreen";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

export default function index() {
  const { theme } = themeStore();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Head>
        <title>ufeek | Software Engineer</title>
        <meta
          name="description"
          content="Personal portfolio of Fikri Sidqi, Software Engineer specializing in web development"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Fikri Sidqi - Software Engineer" />
        <meta property="og:description" content="Software Engineer specializing in creating exceptional digital experiences with modern web technologies." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://fikrisidqis-portfolio.vercel.app/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Fikri Sidqi - Software Engineer" />
        <meta name="twitter:description" content="Software Engineer specializing in creating exceptional digital experiences with modern web technologies." />
      </Head>

      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loading" onComplete={() => setIsLoading(false)} />
        ) : (
          <>
            <ThemeSwitcher />
            {theme === "modern" ? (
              <ModernPage key="modern" />
            ) : theme === "pixel" ? (
              <PixelPage key="pixel" />
            ) : null}
          </>
        )}
      </AnimatePresence>
    </>
  );
}