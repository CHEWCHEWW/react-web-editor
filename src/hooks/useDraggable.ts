import React, { useCallback, useState } from "react";

import { getBoundPosition } from "../utils/ui";
import { ComponentLocation, ComponentStyle, Dispatcher, EditorProps } from "../types/ui";

interface UseDraggableProps extends ComponentLocation {
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
  handleDragMove: (ev: MouseEvent) => void 
  handleDragStart: (ev: React.MouseEvent<HTMLDivElement>) => void
  isDragging: boolean,
}

const useDraggable = ({ 
  left, 
  top, 
  onDrag, 
  dragBoardOption,
}: UseDraggableProps): UseDraggableReturns => {
  const [componentInfomation, setComponentInformation] = useState<ComponentInfomation>({
    currentX: left,
    currentY: top,
    isDragging: false,
  });
  
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

  const handleDragMove = useCallback((ev: MouseEvent) => {
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
      dragBoardOption,
    );

    onDrag((prev) => ({
      ...prev,
      left,
      top,
    }));
  }, [onDrag, componentInfomation, dragBoardOption]);

  const handleDragEnd = (): void => {
    setComponentInformation((prev) => ({
      ...prev,
      isDragging: false,
    }));
  };

  return {  
    handleDragEnd, 
    handleDragMove, 
    handleDragStart,
    isDragging: componentInfomation.isDragging,
  };
};

export default useDraggable;
