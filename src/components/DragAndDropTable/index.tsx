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

interface DragAndDropItemStyle extends DragAndDropTableStyle {
  width: number
  height: number
}

const DragAndDropTable: React.FC<DragAndDropTableProps> = ({
  color,
  isVertical,
  children,
}): React.ReactElement => {
  const {
    handleDragStart,
    handleDragOver,
    handleDropDown,
    handleDragLeave,
    dragList,
    endPoint,
    componentSize,
  } = useDragAndDrop({ items: Children.toArray(children) });

  return (
    <Wrapper
      backgroundColor={color}
      isVertical={isVertical}
    >
      {dragList.map((item, index) => (
        <Block
          key={index}
          width={componentSize.width}
          height={componentSize.height}
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

const Block = styled.div<DragAndDropItemStyle>`
  display: flex;
  align-items: center;
  cursor: move;
  background-color: ${({ color }) => color && color};

  &.isDropDown {
    margin-top: ${({ height }) => `${height}px`};
    position: relative;
    opacity: 0.1;
    margin-top: 1em;
  }
`;

export default DragAndDropTable;
