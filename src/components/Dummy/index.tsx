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

  const [componentInformation, setComponentInformation] = useState<ComponentLocation>({
    left,
    top,
  });

  useEffect(() => {
    if (!isDragging) {
      return;
    }

    document.addEventListener("mousemove", handleDragMove);
    
    setComponentInformation((prev) => ({
      ...prev,
      ...componentLocation,
    }));
    
    return () => document.removeEventListener("mousemove", handleDragMove);
  }, [handleDragMove, componentLocation, isDragging]);
  
  return (
    <Div 
      onMouseDown={handleDragStart} 
      onMouseUp={handleDragEnd}
      style={componentInformation}
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
