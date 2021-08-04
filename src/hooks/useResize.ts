import React, { useCallback, useState } from "react";

import { changeComponentLocationByHandler } from "../utils/ui";
import { ComponentStyle ,Dispatcher, ResizeProps } from "../types/ui";

interface ComponentInformation {
  isResizing: boolean
  direction: string
  isClicked: boolean
  currentX: number
  currentY: number
}

interface UseResizeProps {
  componentStyle: ResizeProps
  onResize: Dispatcher<ResizeProps>
  resizeBoardOption?: ComponentStyle
}

interface UseResizeReturns {
  handleMouseMove: (ev: MouseEvent) => void
  handleMouseDown: (ev: React.MouseEvent<HTMLDivElement>) => void
  handleMouseUp: () => void
  isResizing: boolean
}

const useResize = ({ 
  componentStyle, 
  onResize, 
  resizeBoardOption, 
}: UseResizeProps): UseResizeReturns => {
  const [componentInformation, setComponentInformation] = useState<ComponentInformation>({
    isClicked: false,
    isResizing: false,
    direction: "",
    currentX: 0,
    currentY: 0,
  });

  const handleMouseMove = useCallback((ev: MouseEvent): void => {
    ev.stopPropagation();
    
    const { clientX, clientY } = ev;
    const { currentX, currentY, direction } = componentInformation;
    const { left, top, width, height, minWidth, minHeight } = componentStyle;
    
    const deltaX = clientX - currentX;
    const deltaY = clientY - currentY;
    
    const { newWidth, newHeight, newLeft, newTop } =
      changeComponentLocationByHandler(
        direction,
        left,
        top,
        width,
        height,
        deltaX,
        deltaY,
        resizeBoardOption,
      );
    
    if (newWidth < minWidth || newHeight < minHeight) {
      return;
    }

    onResize((prev) => ({
      ...prev,
      width: newWidth,
      height: newHeight,
      left: newLeft,
      top: newTop,
    }));

    setComponentInformation((prev) => ({
      ...prev,
      currentX: clientX,
      currentY: clientY,
    }));
  }, [componentInformation, onResize, componentStyle]);

  const handleMouseDown = (ev: React.MouseEvent<HTMLDivElement>): void => {
    ev.preventDefault();
    
    const { 
      currentTarget: {
        className,
      },
      clientX, 
      clientY,
    } = ev;
  
    setComponentInformation((prev) => ({
      ...prev,
      isResizing: true,
      direction: className,
      currentX: clientX,
      currentY: clientY, 
    }));
  };

  const handleMouseUp = (): void => {
    setComponentInformation((prev) => ({
      ...prev,
      direction: "",
      isResizing: false,
      isClicked: true,
    }));
  };

  return {
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    isResizing: componentInformation.isResizing,
  };
};

export default useResize;
