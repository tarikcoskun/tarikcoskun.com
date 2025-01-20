import type { AppProps } from "next/app";

import clsx from "clsx";
import Head from "next/head";
import localFont from "next/font/local";

import "@/styles/globals.css";

const GeneralSans = localFont({
  src: "../public/fonts/GeneralSans-Variable.woff2",
  display: "swap",
  variable: "--font-body",
});

const Lora = localFont({
  src: "../public/fonts/Lora-Variable.woff2",
  display: "swap",
  variable: "--font-serif",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Tarık Coşkun</title>
      </Head>

      <div
        className={clsx(
          GeneralSans.variable,
          Lora.variable,
          "bg-theme-background font-body font-[450] text-theme-foreground lg:leading-7",
        )}
      >
        <Component {...pageProps} />
      </div>
    </>
  );
}
