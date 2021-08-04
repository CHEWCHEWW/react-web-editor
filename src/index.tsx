import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

export { default as useDragAndDrop } from "./hooks/useDragAndDrop";
export { default as useDraggable } from "./hooks/useDraggable";
export { default as useResize } from "./hooks/useResize";

export { default as Editor } from "./components/Editor";
export { default as DragAndDropTable } from "./components/DragAndDropTable";
