import React from "react";
import styled from "styled-components";

import { DragListContent } from "../../types/ui";
import useDragAndDrop from "../../hooks/useDragAndDrop";

interface DragAndDropTableProps {
  items: DragListContent[]
  color?: string
}

interface DragAndDropTableStyle {
  backgroundColor?: string
  color?: string
}

const DragAndDropTable: React.FC<DragAndDropTableProps> = ({ 
  items,
  color,
}): React.ReactElement => {
  const { 
    handleDragStart, 
    handleDragOver, 
    handleDropDown, 
    handleDragLeave, 
    dragList,
    endPoint,
  } = useDragAndDrop({ items });

  return (
    <Wrapper>
      {dragList.map((item, index) => (
        <Block 
          key={index}
          id={String(index)}
          draggable
          color={color}
          onDragStart={handleDragStart}
          onDragOver={handleDragOver}
          onDrop={handleDropDown}
          onDragLeave={handleDragLeave}
          className={endPoint === index ? "isDropDown" : ""}
        >
          {item.type === "image" && <Image src={item.content} alt={item.title} />}
          <span>{item.number}</span>
          <p>{item.title}</p>
        </Block>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div<DragAndDropTableStyle>`
  display: flex;
  background-color: ${({ backgroundColor }) => backgroundColor && backgroundColor};
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
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

    span {
      display: none;
    }

    p {
      margin-left: 1em;
    }
  }
`;

export default DragAndDropTable;
