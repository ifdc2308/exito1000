import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        <link rel="icon" href="/logoIcon.svg" />
        <title>Redação Êxito 1000</title>
        {/* meta tags e fontes indexaveis são add aqui */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
