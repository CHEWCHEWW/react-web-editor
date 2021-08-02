import React from "react";
import styled from "styled-components";

import { ComponentStyle } from "../../types/ui";

const EditorBoard: React.FC<ComponentStyle> = ({ 
  children, 
  width, 
  height, 
  left, 
  top, 
}): React.ReactElement => {
  return (
    <Board 
      width={width} 
      height={height} 
      left={left} 
      top={top}
    >
      {children}
    </Board>
  );
};

const Board = styled.div<ComponentStyle>`
  top: ${({ top }) => top ? top : 0}px;;
  left: ${({ left }) => left ? left : 0}px;
  width: ${({ width }) => width ? width : 0}px;
  height: ${({ height }) => height ? height: 0}px;
  position: fixed;
`;

export default EditorBoard;