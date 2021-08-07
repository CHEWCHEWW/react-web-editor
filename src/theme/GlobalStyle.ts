import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Andada+Pro&family=Bebas+Neue&family=MonteCarlo&family=Roboto:wght@100&family=STIX+Two+Text&family=Style+Script&display=swap');
  @import url(//fonts.googleapis.com/earlyaccess/nanummyeongjo.css);

  /* font-family: 'Andada Pro', serif;
  font-family: 'Bebas Neue', cursive;
  font-family: 'MonteCarlo', cursive;
  font-family: 'Roboto', sans-serif;
  font-family: 'STIX Two Text', serif;
  font-family: 'Style Script', cursive; */
  
  /* .nanummyeongjo * {
  font-family: 'Nanum Myeongjo', serif;
  } */
  @font-face {
    font-family: "MaruBuri-Regular";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-10-21@1.0/MaruBuri-Regular.woff") format("woff");
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "NanumBarunGothic";
    font-style: normal;
    font-weight: 400;
    src: url("//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWeb.eot");
    src: url("//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWeb.eot?#iefix") format("embedded-opentype"), url("//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWeb.woff") format("woff"), url("//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWeb.ttf") format("truetype");
  }

  body {
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;
