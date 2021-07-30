import { DragListContent } from "../types/ui";

export const generateDraggedList = (items: DragListContent[], startPoint: number, endPoint: number): DragListContent[] => {
  const draggedItem = items[startPoint];
  const remainingItems = items.filter((_, index) => index !== startPoint);

  return [
    ...remainingItems.slice(0, endPoint),
    draggedItem,
    ...remainingItems.slice(endPoint)
  ];
};
