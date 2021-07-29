import React from "react";
import ReactDom from "react-dom";
import { ThemeProvider } from "styled-components";

import App from "../src/components/App";
import GlobalStyle from "./theme/GlobalStyle";
import { theme } from "./theme/theme";

ReactDom.render(
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </>,
  document.getElementById("root")
);
