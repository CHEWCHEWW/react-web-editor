import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";

import App from "./App";
import GlobalStyle from "./theme/GlobalStyle";
import { theme } from "./theme/theme";

ReactDOM.render(
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </>,
  document.getElementById("root")
);

export { default as useDragAndDrop } from "./hooks/useDragAndDrop";
export { default as useDraggable } from "./hooks/useDraggable";
export { default as useResize } from "./hooks/useResize";

export { default as EditorBlock } from "./components/EditorBlock";
export { default as DragAndDropTable } from "./components/DragAndDropTable";
