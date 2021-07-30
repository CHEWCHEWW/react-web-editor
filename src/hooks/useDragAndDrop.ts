import React, { useState } from "react";

import { DragListContent } from "../types/ui";

interface DragListInformation {
  startPoint?: number
  endPoint?: number
  isDragging: boolean
  originalOrder: DragListContent[]
  updatedOrder: DragListContent[]
}

interface UseDragAndDropProps {
  items: DragListContent[]
}

interface UseDragAndDropReturns {
  handleDragStart: (ev: React.MouseEvent<HTMLDivElement>) => void 
  handleDragOver: (ev: React.MouseEvent<HTMLDivElement>) => void  
  handleDropDown: () => void 
  handleDragLeave: () => void  
  dragList: DragListContent[]
  endPoint: number
}

const useDragAndDrop = ({ items }: UseDragAndDropProps): UseDragAndDropReturns => {
  const [dragList, setDragList] = useState<DragListContent[]>(items);
  const [dragListInformation, setDragListInformation] = useState<DragListInformation>({
    startPoint: null,
    endPoint: null,
    isDragging: false,
    originalOrder: [],
    updatedOrder: [],
  });

  const handleDragStart = (ev: React.MouseEvent<HTMLDivElement>): void => {
    const initialPosition = Number(ev.currentTarget.id);

    setDragListInformation((prev) => ({
      ...prev,
      startPoint: initialPosition,
      isDragging: true,
      originalOrder: dragList,
    }));
  };

  const handleDragOver = (ev: React.MouseEvent<HTMLDivElement>): void => {
    ev.preventDefault();

    const oldList = dragListInformation.originalOrder;
    const draggedFrom = dragListInformation.startPoint;
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
    
    if (draggedTo !== dragListInformation.endPoint) {
      setDragListInformation((prev) => ({
        ...prev,
        updatedOrder: newList,
        endPoint: draggedTo,
      }));
    }
  };

  const handleDropDown = (): void => {
    setDragList(dragListInformation.updatedOrder);

    setDragListInformation((prev) => ({
      ...prev,
      startPoint: null,
      endPoint: null,
    }));
  };

  const handleDragLeave = (): void => {
    setDragListInformation((prev) => ({
      ...prev,
      endPoint: null,
    }));
  };

  return { 
    handleDragStart, 
    handleDragOver, 
    handleDropDown, 
    handleDragLeave, 
    dragList,
    endPoint: dragListInformation.endPoint,
  };
};

export default useDragAndDrop;
