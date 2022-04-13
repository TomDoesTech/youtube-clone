// A custom Document can update the <html> and <body> tags used to render a Page. This file is only rendered on the server, so event handlers like onClick cannot be used in _document.
import { Html, Head, Main, NextScript } from "next/document";
import { createGetInitialProps } from "@mantine/next";

function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

Document.getInitialProps = createGetInitialProps();

export default Document;
