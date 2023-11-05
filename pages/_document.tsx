// Components
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
      </Head>
      <body className="overflow-x-hidden" vocab="http://schema.org/">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
