import { useCallback, useState } from "react";

import { ComponentStyle } from "../types/ui";

interface UseEditorBoardReturns {
  measuredRef: (node: HTMLDivElement) => void
  editorBoardStyle: ComponentStyle
}

const useEditorBoard = (): UseEditorBoardReturns => {
  const [editorBoardStyle, setEditorBoardStyle] = useState<ComponentStyle>({
    width: 0,
    height: 0,
    left: 0,
    top: 0,
  });

  const measuredRef = useCallback((node: HTMLDivElement) => {
    if (node !== null) {
      const currentLocation = node.getBoundingClientRect();

      const currentOffsetY = window.pageYOffset;
      const currentOffsetX = window.pageXOffset;

      setEditorBoardStyle((prev) => ({
        ...prev,
        width: currentLocation.width,
        height: currentLocation.height,
        top: currentLocation.top + currentOffsetY,
        left: currentLocation.left + currentOffsetX,
      }));
    }
  }, []);
  
  return {
    measuredRef,
    editorBoardStyle,
  };
};

export default useEditorBoard;
