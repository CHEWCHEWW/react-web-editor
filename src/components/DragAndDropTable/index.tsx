import React, { Children } from "react";
import styled from "styled-components";

import useDragAndDrop from "../../hooks/useDragAndDrop";

interface DragAndDropTableProps {
  // items: DragAndDropItems[]
  color?: string
  isVertical: boolean
}

interface DragAndDropTableStyle {
  backgroundColor?: string
  color?: string
  isVertical?: boolean
}

const DragAndDropTable: React.FC<DragAndDropTableProps> = ({
  color,
  isVertical,
  children,
}): React.ReactElement => {
  console.log(typeof Children.toArray(children));
  const {
    handleDragStart,
    handleDragOver,
    handleDropDown,
    handleDragLeave,
    dragList,
    endPoint,
  } = useDragAndDrop({ items: Children.toArray(children) });

  return (
    <Wrapper backgroundColor={color} isVertical={isVertical}>
      {dragList.map((item, index) => (
        <Block
          key={index}
          id={String(index)}
          draggable
          onDragStart={handleDragStart}
          onDragOver={handleDragOver}
          onDrop={handleDropDown}
          onDragLeave={handleDragLeave}
          className={endPoint === index ? "isDropDown" : ""}
        >
          {item}
        </Block>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div<DragAndDropTableStyle>`
  display: flex;
  flex-direction: ${({ isVertical }) => isVertical && "column"};
  background-color: ${({ backgroundColor }) => backgroundColor && backgroundColor};
`;

const Block = styled.div<DragAndDropTableStyle>`
  display: flex;
  align-items: center;
  cursor: move;
  width: 100%;
  height: 100%;
  background-color: ${({ color }) => color && color};
  margin: 0 auto;

  &.isDropDown {
    color: white;
    background: white;
    position: relative;
    opacity: 0.1;
    margin-left: 1em;
/*
    span {
      display: none;
    }

    p {
      margin-left: 1em;
    } */
  }
`;

export default DragAndDropTable;
