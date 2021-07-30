import React, { useState } from "react";
import styled from "styled-components";

interface ListContent {
  number: string
  title: string
}

interface MouseEventInfo {
  startPoint: number | null
  endPoint: number | null
  isDragging: boolean
  originalOrder: ListContent[]
  updatedOrder: ListContent[]
}

const items: ListContent[] = [
  { number: "1", title: "happy" },
  { number: "2", title: "dummy" },
  { number: "3", title: "dum" },
  { number: "4", title: "dumdumdum" },
  { number: "5", title: "happyppy" }
];

const DnDDummy = (): React.ReactElement => {
  const [list, setList] = useState<ListContent[]>(items);
  const [currentState, setCurrentState] = useState<MouseEventInfo>({
    startPoint: null,
    endPoint: null,
    isDragging: false,
    originalOrder: [],
    updatedOrder: [],
  });

  const handleDragStart = (ev: React.MouseEvent): void => {
    const initialPosition = Number(ev.currentTarget.id);

    setCurrentState((prev) => ({
      ...prev,
      startPoint: initialPosition,
      isDragging: true,
      originalOrder: list,
    }));
  };

  const handleDragOver = (ev: React.MouseEvent): void => {
    ev.preventDefault();
    // 컴포넌트로 전환 후 타입 지정 필요, enum 컨벤션 찾아보기
    const oldList = currentState.originalOrder;
    const draggedFrom = currentState.startPoint;
    const draggedTo = Number(ev.currentTarget.id);

    if (!draggedFrom && draggedFrom !== 0) {
      return;
    }
    
    const draggedItem = oldList[draggedFrom];
    const remainingItems = oldList.filter((_, index) => index !== draggedFrom);

    const newList = [
      ...remainingItems.slice(0, draggedTo),
      draggedItem,
      ...remainingItems.slice(draggedTo)
    ];
    
    if (draggedTo !== currentState.endPoint) {
      setCurrentState((prev) => ({
        ...prev,
        updatedOrder: newList,
        endPoint: draggedTo,
      }));
    }
  };

  const handleDropDown = (): void => {
    setList(currentState.updatedOrder);
    setCurrentState((prev) => ({
      ...prev,
      startPoint: null,
      endPoint: null,
    }));
  };

  const handleDragLeave = (): void => {
    setCurrentState((prev) => ({
      ...prev,
      endPoint: null,
    }));
  };

  return (
    <section>
      <ul>
        {list.map((item, index) => (
          <Block 
            key={index}
            id={String(index)}
            draggable
            onDragStart={handleDragStart}
            onDragOver={handleDragOver}
            onDrop={handleDropDown}
            onDragLeave={handleDragLeave}
            className={currentState.endPoint === index ? "isDropDown" : ""}
          >
            <span>{item.number}</span>
            <p>{item.title}</p>
          </Block>
        ))}
      </ul>
    </section>
  );
};

const Block = styled.li`
  display: flex;
  align-items: center;
  cursor: move;

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
