import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

// MUI & StyleComponent Core
import { ServerStyleSheet } from "styled-components";
import { ServerStyleSheets as MaterialUiServerStyleSheets } from "@material-ui/core/styles";

// Utils
import theme from "Utils/theme";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="UTF-8" />
          {/* PWA primary color */}
          <meta name="theme-color" content={theme.palette.primary.main} />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          {/*Content-Security-Policy type three if not worked search for problem*/}
          <meta
            httpEquiv="Content-Security-Policy"
            content="
            default-src * self blob: data: gap:;
            style-src * self 'unsafe-inline' blob: data: gap:;
            script-src * 'self' 'unsafe-eval' 'unsafe-inline' blob: data: gap:;
            object-src * 'self' blob: data: gap:;
            img-src * self 'unsafe-inline' blob: data: gap:;
            connect-src self * 'unsafe-inline' blob: data: gap:;
            frame-src * self blob: data: gap:;
            worker-src 'self' blob:;"
          />
          {/*  cdn */}
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            rel="preload"
            as="style"
            href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap"
          />
          <link
            rel="preload"
            as="style"
            href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700;800;900&display=swap"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with server-side generation (SSG).
MyDocument.getInitialProps = async ctx => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  // Render app and page and get the context of the page with collected side effects.
  const styledComponentsSheet = new ServerStyleSheet();
  const materialSheets = new MaterialUiServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  try {
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: App => props =>
          styledComponentsSheet.collectStyles(
            materialSheets.collect(<App {...props} />),
          ),
      });
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      // Styles fragment is rendered after the app and page rendering finish.
      styles: (
        <React.Fragment>
          {initialProps.styles}
          {materialSheets.getStyleElement()}
          {styledComponentsSheet.getStyleElement()}
        </React.Fragment>
      ),
    };
  } finally {
    styledComponentsSheet.seal();
  }
};

export default MyDocument;
