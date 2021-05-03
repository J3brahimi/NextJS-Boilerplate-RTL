import { useEffect } from "react";
import Head from "next/head";

// jss
import { create } from "jss";
import rtl from "jss-rtl";

// MUI & StyledComponent Core
import {
  ThemeProvider as MaterialThemeProvider,
  StylesProvider,
  jssPreset,
  createGenerateClassName,
} from "@material-ui/core/styles";
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

// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

// Custom Material-UI class name generator.
const generateClassName = createGenerateClassName();

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
        <StylesProvider jss={jss} generateClassName={generateClassName}>
          <MaterialThemeProvider theme={theme}>
            <CssBaseline />
            <Normalize />
            <UserProvider>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </UserProvider>
          </MaterialThemeProvider>
        </StylesProvider>
      </StyledThemeProvider>
    </>
  );
}

export default MyApp;
