import React, { useState } from "react";
import styled from "styled-components";

import { DragListContent } from "../../types/ui";
import useDragAndDrop from "../..//hooks/useDragAndDrop";

const items: DragListContent[] = [
  { number: "1", title: "happy" },
  { number: "2", title: "dummy" },
  { number: "3", title: "dum" },
  { number: "4", title: "dumdumdum" },
  { number: "5", title: "happyppy" }
];

const DnDDummy = (): React.ReactElement => {
  const { 
    handleDragStart, 
    handleDragOver, 
    handleDropDown, 
    handleDragLeave, 
    dragList,
    endPoint,
  } = useDragAndDrop({ items });

  return (
    <section>
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
    </section>
  );
};

const Wrapper = styled.div`
  display: flex;
`;

const Block = styled.div`
  display: flex;
  align-items: center;
  cursor: move;
  width: 100px;
  height: 100px;
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

export default DnDDummy;
