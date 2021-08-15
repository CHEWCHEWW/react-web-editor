import React from "react";
import styled from "styled-components";

import { ComponentStyle } from "../../types/ui";
import { calculateCenter, isLocatedCenter } from "../../utils/ui";

interface LineProps {
  left?: number;
  top?: number;
  height?: number;
  width?: number;
  unit: string;
}

interface GuideLine extends ComponentStyle {
  boardWidth?: number;
  boardHeight?: number;
  unit: string;
}

const GuideLine: React.FC<GuideLine> = ({
  left,
  top,
  width,
  height,
  boardWidth = window.screen.width,
  boardHeight = window.screen.height,
  unit,
}): React.ReactElement => {
  const { centerX, centerY } = calculateCenter(width, height);
  const { isCenterX, isCenterY } = isLocatedCenter(width, height, top, left, boardWidth, boardHeight);

  console.log(left, top);
  return (
    <Wrapper>
      {isCenterX &&
        <VerticalLine
          top={top}
          left={centerX}
          height={boardHeight}
          unit={unit}
        />
      }
      {isCenterY &&
        <HorizontalLine
          top={centerY}
          left={left}
          width={boardWidth}
          unit={unit}
        />
      }
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
`;

const HorizontalLine = styled.span<LineProps>`
  top: ${({ top, unit }) => top ? `${top}${unit}` : 0};
  left: ${({ left, unit }) => left ? `${-left}${unit}` : 0};
  width: ${({ width, unit }) => width ? `${width}${unit}` : 0};
  border-top: 1px solid red;
  position: absolute;
  opacity: 0.5;
  z-index: 10;
`;

const VerticalLine = styled.span<LineProps>`
  top: ${({ top, unit }) => top ? `${-top}${unit}` : 0};
  left: ${({ left, unit }) => left ? `${left}${unit}` : 0};
  height: ${({ height, unit }) => height ? `${height}${unit}` : 0};
  border-left: 1px solid red;
  position: absolute;
  opacity: 0.5;
  z-index: 10;
`;

export default GuideLine;
