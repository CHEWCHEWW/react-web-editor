import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
ReactDOM.render(
  <App />,
  document.getElementById("root")
);

export { default as useDraggable } from "./hooks/useDraggable";
export { default as useImage } from "./hooks/useImage";
export { default as useResize } from "./hooks/useResize";
export { default as useColor } from "./hooks/useColor";

export { default as EditableBoard } from "./components/EditableBoard";
export { default as DragAndDropTable } from "./components/DragAndDropTable";
export { default as StyleEditorBlock } from "./components/StyleEditorBlock";
export { default as TextEditorBlock } from "./components/TextEditorBlock";

export { default as EditorBlockWrapper } from "./components/shared/EditorBlockWrapper";
export { default as ResizeHandlerWrapper } from "./components/shared/ResizeHandlerWrapper";
export { default as DraggableHandler } from "./components/shared/DraggableHandler";
