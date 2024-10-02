import { Html, Head, Main, NextScript } from 'next/document';

const MyDocument = () => (
  <Html>
    <Head>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        integrity="sha384-DyZvYc5sLd1+I4be9OWF26CqUeLgx1eSfj3EEh8OH8hO0m6OqFs5mTLu4H0OBGso"
        crossOrigin="anonymous"
      />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default MyDocument;
