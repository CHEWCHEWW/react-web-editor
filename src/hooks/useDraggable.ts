import React, { useEffect, useState } from "react";

import { getBoundPosition } from "../utils/ui";
import { ComponentStyle, Dispatcher, EditorProps } from "../types/ui";

interface UseDraggableProps extends ComponentStyle {
  onDrag: Dispatcher<EditorProps>
  dragBoardOption?: ComponentStyle
}

interface ComponentInfomation {
  currentX: number
  currentY: number
  isDragging: boolean
}

interface UseDraggableReturns {
  handleDragEnd: () => void
  handleDragStart: (ev: React.MouseEvent<HTMLDivElement>) => void
  isDragging: boolean,
}

const useDraggable = ({ 
  left, 
  top, 
  onDrag, 
  width,
  height,
  dragBoardOption,
}: UseDraggableProps): UseDraggableReturns => {
  const [componentInfomation, setComponentInformation] = useState<ComponentInfomation>({
    currentX: left || 0,
    currentY: top || 0,
    isDragging: false,
  });

  useEffect(() => {
    if (!componentInfomation.isDragging) {
      return;
    }

    const handleDragMove = (ev: MouseEvent) => {
      const { currentX, currentY, isDragging } = componentInfomation;
  
      if (!isDragging || !currentX || !currentY) {
        return;
      }
  
      const { clientX, clientY } = ev;
  
      const { left, top } = getBoundPosition(
        clientX,
        clientY,
        currentX,
        currentY,
        width,
        height,
        dragBoardOption,
      );
      
      onDrag((prev) => ({
        ...prev,
        left,
        top,
      }));
    };

    document.addEventListener("mousemove", handleDragMove);

    return () => document.removeEventListener("mousemove", handleDragMove);
  }, [componentInfomation, dragBoardOption, height, onDrag, width]);
  
  const handleDragStart = (ev: React.MouseEvent<HTMLDivElement>): void => {
    const { clientX, clientY } = ev;

    const currentX = clientX - left;
    const currentY = clientY - top;
    
    setComponentInformation((prev) => ({
      ...prev,
      isDragging: true,
      currentX,
      currentY,
    }));
  };

  const handleDragEnd = (): void => {
    setComponentInformation((prev) => ({
      ...prev,
      isDragging: false,
    }));
  };

  return {  
    handleDragEnd, 
    handleDragStart,
    isDragging: componentInfomation.isDragging,
  };
};

export default useDraggable;
