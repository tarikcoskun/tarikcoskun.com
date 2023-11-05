import type { AppProps } from "next/app";

import clsx from "clsx";
import { DefaultSeo } from "next-seo";
import localFont from "next/font/local";

import "@/styles/globals.css";

const bodyFont = localFont({
  src: "../public/fonts/GeneralSans-Variable.woff2",
  display: "swap",
  variable: "--font-body",
});

const headingFont = localFont({
  src: "../public/fonts/Lora-Variable.woff2",
  display: "swap",
  variable: "--font-serif",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        title="Tarık Coşkun"
        description="Front-end developer passionate about crafting experiences with polished interfaces."
        canonical="https://tarikcoskun.com"
      />

      <div
        className={clsx(
          bodyFont.variable,
          headingFont.variable,
          "bg-theme-background font-body font-[450] leading-7 text-theme-foreground",
        )}
      >
        <Component {...pageProps} />
      </div>
    </>
  );
}
