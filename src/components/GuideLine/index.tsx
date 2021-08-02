import React from "react";
import styled from "styled-components";

import { ComponentStyle } from "../../types/ui";
import { calculateCenter ,isLocatedCenter } from "../../utils/ui";

interface LineProps {
  left?: number
  top?: number
  height?: number
  width?: number
}

const GuideLine: React.FC<ComponentStyle> = ({
  left,
  top,
  width,
  height,
}): React.ReactElement => {
  const screenWidth = window.screen.width;
  const screenHeight = window.screen.height;

  const { centerX, centerY } = calculateCenter(width, height, top, left);
  const { isCenterX, isCenterY } = isLocatedCenter(width, height, top, left);
  console.log(isCenterX, isCenterY, centerX, centerY, left, top);
  return (
    <>
      {!isCenterX && 
        <Line left={centerX} height={screenHeight} />
      }
      {!isCenterY && 
        <Line top={centerY} width={screenWidth} />
      }
    </>
  );
};

const Line = styled.div<LineProps>`
  left: ${({ left }) => left ? left : 0}px;
  top: ${({ top }) => top ? top : 0}px;;
  width: ${({ width }) => width ? width : 0}px;
  height: ${({ height }) => height ? height: 0}px;
  border: 1px solid black;
  position: fixed;
  z-index: 100;
`;

export default GuideLine;
