import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import GlitchFavicon from "@/components/GlitchFavicon";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    if (window.location.hash) {
      router.replace("/");
    }
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <GlitchFavicon />
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
