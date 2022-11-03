import "../../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@emotion/react";
import { createTheme, CssBaseline } from "@mui/material";

// NOTE: カラーなどをセットする
const theme = createTheme({
  palette: {
    background: {
      default: "#fff",
    },
    primary: {
      main: "#C1A14E",
      contrastText: "#fff",
    },
    text: {
      primary: "#424242",
      secondary: "#fff",
    },
    // secondary: {
    //   main: "#fff",
    // },
    action: {
      active: "#C1A14E",
    },
    divider: "#C1A14E"
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
