import React from "react";
import styled from "styled-components";

interface EditableBoard {
  width: number
  height: number
  left?: number
  top?: number
  backgroundColor: string
  unit: string
}

const EditableBoard: React.FC<EditableBoard> = ({
  width,
  height,
  backgroundColor,
  left,
  top,
  children,
  unit,
}): React.ReactElement => {
  return (
    <>
      <Board
        width={width}
        height={height}
        backgroundColor={backgroundColor}
        unit={unit}
        left={left}
        top={top}
      >
        {children}
      </Board>
    </>
  );
};

const Board = styled.div<EditableBoard>`
  width: ${({ width, unit }) => `${width}${unit}`};
  height: ${({ height, unit }) => `${height}${unit}`};
  left: ${({ left, unit }) => `${left}${unit}`};
  top: ${({ top, unit }) => `${top}${unit}`};
  background-color: ${({ backgroundColor }) => backgroundColor};
  position: absolute;
`;

export default EditableBoard;
