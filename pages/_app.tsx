import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";
import { useScrollReveal } from "@/hooks/useScrollReveal";

function AppWrapper({ Component, pageProps }: AppProps) {
  useScrollReveal();
  return (
    <>
      <div className="grain-overlay" aria-hidden="true" />
      <Component {...pageProps} />
      <Script src="//embed.typeform.com/next/embed.js" strategy="lazyOnload" />
    </>
  );
}

export default AppWrapper;
