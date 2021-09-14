import "@styles/global.scss";
import Head from "next/head";
import { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Tarık Coşkun</title>
        <meta name="theme-color" content="#c887d3" />
        <meta name="og:site_name" content="tarikcoskun.xyz" />
        <meta name="og:title" content="Tarık Coşkun" />
        <meta
          name="keywords"
          content="tarık, coşkun, portfolio, website, developer"
        />
        <meta
          name="og:description"
          content="My personal website, portfolio and playground!"
        />
      </Head>
      <ThemeProvider defaultTheme="dark">
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
