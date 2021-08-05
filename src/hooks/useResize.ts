import React, { useEffect, useState } from "react";

import { changeComponentLocationByHandler } from "../utils/ui";
import { ComponentStyle ,Dispatcher, ResizeProps } from "../types/ui";
import { MIN_HEIGHT, MIN_WIDTH } from "../constants/ui";

interface ComponentInformation {
  isResizing: boolean
  direction: string
  currentX: number
  currentY: number
}

interface UseResizeProps {
  componentStyle: ResizeProps
  onResize: Dispatcher<ResizeProps>
  resizeBoardOption?: ComponentStyle
}

interface UseResizeReturns {
  handleMouseDown: (ev: React.MouseEvent<HTMLDivElement>) => void
  isResizing: boolean
}

const useResize = ({ 
  componentStyle, 
  onResize, 
  resizeBoardOption, 
}: UseResizeProps): UseResizeReturns => {
  const [componentInformation, setComponentInformation] = useState<ComponentInformation>({
    isResizing: false,
    direction: "",
    currentX: 0,
    currentY: 0,
  });

  useEffect(() => {
    if (!componentInformation.isResizing) {
      return;
    }

    const handleMouseMove = (ev: MouseEvent): void => {
      ev.stopPropagation();
      
      const { clientX, clientY } = ev;
      const { currentX, currentY, direction } = componentInformation;
      const { left, top, width, height } = componentStyle;
      
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
      
      if (newWidth < MIN_WIDTH || newHeight < MIN_HEIGHT) {
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
    };

    const handleMouseUp = (): void => {
      setComponentInformation((prev) => ({
        ...prev,
        direction: "",
        isResizing: false,
      }));
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [componentInformation, onResize, componentStyle, resizeBoardOption]);

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

  return {
    handleMouseDown,
    isResizing: componentInformation.isResizing,
  };
};

export default useResize;
