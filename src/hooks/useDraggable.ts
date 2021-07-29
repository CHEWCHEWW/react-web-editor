import React, { useState } from "react";

interface UseDraggableProps {
  left: number
  top: number
}

interface ComponentInfomation {
  currentX: number
  currentY: number
  isDragging: boolean
  location: UseDraggableProps
}

const useDraggable = ({ left, top }: UseDraggableProps) => {
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

    const currentX: number = clientX - left;
    const currentY: number = clientY - top;
    
    setComponentInformation((prev) => ({
      ...prev,
      isDragging: true,
      currentX,
      currentY,
    }));
  };

  const handleDragMove = (ev: React.MouseEvent<HTMLDivElement>): void => {
    const { currentX, currentY, isDragging } = componentInfomation;

    if (!isDragging || !currentX || !currentY) {
      return;
    }

    const { clientX, clientY } = ev;

    const left: number = clientX - currentX;
    const top: number = clientY - currentY;
    
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
