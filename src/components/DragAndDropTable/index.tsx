import React from "react";
import styled from "styled-components";

import { DragListContent } from "../../types/ui";
import useDragAndDrop from "../../hooks/useDragAndDrop";

interface DragAndDropTableProps {
  items: DragListContent[]
}

const DragAndDropTable: React.FC<DragAndDropTableProps> = ({ 
  items,
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
          onDragStart={handleDragStart}
          onDragOver={handleDragOver}
          onDrop={handleDropDown}
          onDragLeave={handleDragLeave}
          className={endPoint === index ? "isDropDown" : ""}
        >
          <span>{item.number}</span>
          <p>{item.title}</p>
        </Block>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
`;

const Block = styled.div`
  display: flex;
  align-items: center;
  cursor: move;
  width: 100%;
  height: 100%;
  background-color: pink;
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
