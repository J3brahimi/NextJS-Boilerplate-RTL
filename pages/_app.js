import { useEffect } from "react";
import Head from "next/head";

// MUI & StyledComponent Core
import { ThemeProvider as MaterialThemeProvider } from "@material-ui/core/styles";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import theme from "Utils/theme";

// styles
import CssBaseline from "@material-ui/core/CssBaseline";
import { Normalize } from "styled-normalize";
import "Assets/styles/index.scss";

// Context
import { UserProvider } from "Context/User";

// Layout
import Layout from "Components/Layout";

function MyApp({ Component, pageProps }) {
  // useEffect config material-ui
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles && jssStyles.parentNode)
      jssStyles.parentNode.removeChild(jssStyles);
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <StyledThemeProvider theme={theme}>
        <MaterialThemeProvider theme={theme}>
          <CssBaseline />
          <Normalize />
          <UserProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </UserProvider>
        </MaterialThemeProvider>
      </StyledThemeProvider>
    </>
  );
}

export default MyApp;
