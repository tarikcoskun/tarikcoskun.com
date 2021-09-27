import "@/styles/global.scss";
import Head from "next/head";
import { AppProps } from "next/app";
import { config } from "@/web.config";
import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>{config.meta.title}</title>
        <meta name="theme-color" content="#f9f5f6" />
        <meta name="title" content={config.meta.title} />
        <meta name="og:title" content={config.meta.title} />
        <meta name="keywords" content={config.meta.keywords} />
        <meta name="description" content={config.meta.description} />
        <meta name="og:description" content={config.meta.description} />
      </Head>
      <ThemeProvider defaultTheme="light" attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
