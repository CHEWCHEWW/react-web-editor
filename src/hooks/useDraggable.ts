import React, { useState } from "react";

import { ComponentLocation } from "../types/ui";

interface ComponentInfomation {
  currentX: number
  currentY: number
  isDragging: boolean
  location: ComponentLocation
}

interface UseDraggableReturns {
  handleDragEnd: () => void
  handleDragMove: (ev: MouseEvent) => void 
  handleDragStart: (ev: React.MouseEvent<HTMLDivElement>) => void
  componentLocation: ComponentLocation,
  isDragging: boolean,
}

const useDraggable = ({ left, top }: ComponentLocation): UseDraggableReturns => {
  const [componentInfomation, setComponentInformation] = useState<ComponentInfomation>({
    currentX: left,
    currentY: top,
    isDragging: false,
    location: {
      left,
      top,
    }
  });
  
  const handleDragStart = (ev: React.MouseEvent<HTMLDivElement>): void => {
    const { clientX, clientY } = ev;
    const { 
      location: { 
        left, 
        top,
      },
    } = componentInfomation;

    const currentX = clientX - left;
    const currentY = clientY - top;
    
    setComponentInformation((prev) => ({
      ...prev,
      isDragging: true,
      currentX,
      currentY,
    }));
  };

  const handleDragMove = (ev: MouseEvent) => {
    const { currentX, currentY, isDragging } = componentInfomation;

    if (!isDragging || !currentX || !currentY) {
      return;
    }

    const { clientX, clientY } = ev;

    const left = clientX - currentX;
    const top = clientY - currentY;
    
    setComponentInformation((prev) => ({
      ...prev,
      location: {
        left,
        top,
      },
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
    handleDragMove, 
    handleDragStart,
    componentLocation: componentInfomation.location,
    isDragging: componentInfomation.isDragging,
  };
};

export default useDraggable;
