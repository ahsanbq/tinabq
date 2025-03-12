import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <script src='https://cdn.tailwindcss.com'></script>
      </Head>
      <body className='antialiased '>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
