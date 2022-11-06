import "../../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@emotion/react";
import { createTheme, CssBaseline } from "@mui/material";
import { Web3AutProvider } from "../hooks/web3Auth/Provider";

// NOTE: カラーなどをセットする
const theme = createTheme({
  palette: {
    primary: {
      main: "#3f51b5",
    },
    secondary: {
      main: "#f50057",
    },
    divider: "#3f51b5",
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Web3AutProvider>
        <CssBaseline />
        <Component {...pageProps} />
      </Web3AutProvider>
    </ThemeProvider>
  );
}

export default MyApp;
