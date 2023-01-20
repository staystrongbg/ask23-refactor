import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="sr">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Alegreya+Sans:ital,wght@0,400;0,700;0,900;1,400&family=PT+Sans+Narrow&family=PT+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
