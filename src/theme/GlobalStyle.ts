import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "MaruBuri-Regular";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-10-21@1.0/MaruBuri-Regular.woff") format("woff");
    font-weight: normal;
    font-style: normal;
  }

  body {
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;
