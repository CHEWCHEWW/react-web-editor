import React, { useState } from "react";
import styled from "styled-components";

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

const Dummy: React.FC<UseDraggableProps> = ({ left = 20, top = 20 }): React.ReactElement => {
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
    console.log(left, top);
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

  return (
    <Div 
      onMouseDown={handleDragStart} 
      onMouseMove={handleDragMove} 
      onMouseUp={handleDragEnd}
      style={componentInfomation.location}
    >
    </Div>
  );
};

const Div = styled.div`
  width: 30px;
  height: 30px;
  background-color: blue;
`;

export default Dummy;
