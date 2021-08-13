import React, { useState } from "react";

import { DragAndDropItem } from "../types/ui";
import { generateDraggedList } from "../utils/ui";

interface DragListInformation {
  startPoint: number | null
  endPoint: number | null
  isDragging: boolean
  originalOrder: DragAndDropItem[]
  updatedOrder: DragAndDropItem[]
}

interface UseDragAndDropProps {
  items: DragAndDropItem[]
}

interface UseDragAndDropReturns {
  handleDragStart: (ev: React.MouseEvent<HTMLDivElement>) => void
  handleDragOver: (ev: React.MouseEvent<HTMLDivElement>) => void
  handleDropDown: () => void
  handleDragLeave: () => void
  dragList: DragAndDropItem[]
  endPoint: number | null
}

const useDragAndDrop = ({ items }: UseDragAndDropProps): UseDragAndDropReturns => {
  const [dragList, setDragList] = useState<DragAndDropItem[]>(items);
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

    const oldDragList = dragListInformation.originalOrder;
    const draggedFrom = dragListInformation.startPoint;
    const draggedTo = Number(ev.currentTarget.id);

    if (!draggedFrom && draggedFrom !== 0) {
      return;
    }

    const newDragList = generateDraggedList(oldDragList, draggedFrom, draggedTo);

    if (draggedTo !== dragListInformation.endPoint) {
      setDragListInformation((prev) => ({
        ...prev,
        updatedOrder: newDragList,
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
