import React, { useCallback, useState } from "react";

import { ComponentLocation, Dispatcher, EditorProps } from "../types/ui";

interface UseDraggableProps extends ComponentLocation {
  onDrag: Dispatcher<EditorProps>
}

interface ComponentInfomation {
  currentX: number
  currentY: number
  isDragging: boolean
  // location: ComponentLocation
}

interface UseDraggableReturns {
  handleDragEnd: () => void
  handleDragMove: (ev: MouseEvent) => void 
  handleDragStart: (ev: React.MouseEvent<HTMLDivElement>) => void
  // componentLocation: ComponentLocation,
  isDragging: boolean,
}

const useDraggable = ({ left, top, onDrag }: UseDraggableProps): UseDraggableReturns => {
  const [componentInfomation, setComponentInformation] = useState<ComponentInfomation>({
    currentX: left,
    currentY: top,
    isDragging: false,
  });
  
  const handleDragStart = (ev: React.MouseEvent<HTMLDivElement>): void => {
    const { clientX, clientY } = ev;
    // const { 
    //   location: { 
    //     left, 
    //     top,
    //   },
    // } = componentInfomation;

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

    const left = clientX - currentX;
    const top = clientY - currentY;

    onDrag((prev) => ({
      ...prev,
      left,
      top,
    }));
  }, [onDrag, componentInfomation]);

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
