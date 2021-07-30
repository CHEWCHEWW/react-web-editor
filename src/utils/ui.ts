import { DIRECTION } from "../constants/location";
import { DragListContent } from "../types/ui";

interface NewComponentStyle {
  newLeft: number
  newTop: number
  newWidth: number
  newHeight: number
}

export const generateDraggedList = (items: DragListContent[], startPoint: number, endPoint: number): DragListContent[] => {
  const draggedItem = items[startPoint];
  const remainingItems = items.filter((_, index) => index !== startPoint);

  return [
    ...remainingItems.slice(0, endPoint),
    draggedItem,
    ...remainingItems.slice(endPoint)
  ];
};

export const changeComponentLocationByHandler = (
  handlerType: string, 
  left: number, 
  top: number,
  width: number,
  height: number,
  differenceX: number,
  differenceY: number
): NewComponentStyle => {
  let newLeft: number = left;
  let newTop: number = top;
  let newWidth: number = width;
  let newHeight: number = height;

  switch (handlerType) {
    case DIRECTION.TOP_LEFT:
      newLeft += differenceX;
      newTop += differenceY;
      newWidth -= differenceX;
      newHeight -= differenceY;

      break;
    case DIRECTION.TOP_RIGHT:
      newTop += differenceY;
      newWidth += differenceX;
      newHeight -= differenceY;

      break;
    case DIRECTION.BOTTOM_LEFT: 
      newLeft += differenceX;
      newWidth -= differenceX;
      newHeight += differenceY;

      break;
    case DIRECTION.BOTTOM_RIGHT:
      newWidth += differenceX;
      newHeight += differenceY;

      break;
    default:
      break;
  }

  return {
    newLeft,
    newTop,
    newWidth,
    newHeight,
  };
};
