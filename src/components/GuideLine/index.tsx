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

interface GuideLine extends ComponentStyle {
  boardWidth?: number
  boardHeight?: number
}

const GuideLine: React.FC<GuideLine> = ({
  left,
  top,
  width,
  height,
  boardWidth = window.screen.width,
  boardHeight = window.screen.height,
}): React.ReactElement => {
  const { centerX, centerY } = calculateCenter(width, height, top, left);
  const { isCenterX, isCenterY } = isLocatedCenter(width, height, top, left);
  
  return (
    <>
      {isCenterX && 
        <Line left={centerX} height={boardHeight} />
      }
      {isCenterY && 
        <Line top={centerY} width={boardWidth} />
      }
    </>
  );
};

const Line = styled.div<LineProps>`
  top: ${({ top }) => top ? top : 0}px;;
  left: ${({ left }) => left ? left : 0}px;
  width: ${({ width }) => width ? width : 0}px;
  height: ${({ height }) => height ? height: 0}px;
  position: fixed;
  border: 1px solid red;
  z-index: 100;
  opacity: 0.5;
`;

export default GuideLine;
