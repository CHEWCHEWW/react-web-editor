import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { ComponentLocation } from "../../types/ui";
import useDraggable from "../../hooks/useDraggable";

const Dummy: React.FC<ComponentLocation> = ({ left, top }): React.ReactElement => {
  const {
    handleDragStart,
    handleDragEnd,
    handleDragMove,
    componentLocation,
    isDragging,
  } = useDraggable({ left, top });

  const [componentInformation, setComponentInformation] = useState({
    style: {
      left,
      top,
    },
  });

  useEffect(() => {
    if (!isDragging) {
      return;
    }

    document.addEventListener("mousemove", handleDragMove);
    
    setComponentInformation((prev) => ({
      ...prev,
      style: {
        ...prev.style,
        ...componentLocation,
      },
    }));
    
    return () => document.removeEventListener("mousemove", handleDragMove);
  }, [handleDragMove]);
  
  return (
    <Div 
      onMouseDown={handleDragStart} 
      onMouseUp={handleDragEnd}
      style={componentInformation.style}
    >
    </Div>
  );
};

const Div = styled.div`
  width: 30px;
  height: 30px;
  background-color: blue;
  position: absolute;
`;

export default Dummy;
