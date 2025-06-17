import { useThemeStore as themeStore } from "@/store/useThemeStore";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import Head from "next/head";
import PixelPage from "@/components/pixel-theme/PixelPage";
import ModernPage from "@/components/modern-theme/ModernPage";

export default function index() {
  const { theme } = themeStore();
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
      </Head>

      <ThemeSwitcher />

      {theme === "modern" ? (
        <ModernPage />
      ) : theme === "pixel" ? (
        <PixelPage />
      ) : null}
    </>
  );
}
