import { DIRECTION } from "../constants/location";
import { ComponentLocation ,ComponentStyle, DragListContent } from "../types/ui";

interface NewComponentStyle {
  newLeft: number
  newTop: number
  newWidth: number
  newHeight: number
}

interface ComponentCenter {
  centerX: number
  centerY: number
}

interface ComponentLocatedCenter {
  isCenterX: boolean
  isCenterY: boolean
}

interface ComponentPosition extends ComponentLocation {
  bottom: number
  right: number
}

const getBoundingZone = ({ 
  left = 0, 
  top = 0, 
  width = 0, 
  height = 0, 
}: ComponentStyle): ComponentPosition => {
  const right = left + width;
  const bottom = top + height;
  
  return { left, top, right, bottom };
};

export const getBoundPosition = (
  clientX: number, 
  clientY: number, 
  x: number, 
  y: number,
  width?: number,
  height?: number,
  parentLocation?: ComponentStyle, 
): ComponentLocation => {
  let currentX: number = clientX - x;
  let currentY: number = clientY - y;

  if (!parentLocation || !width || !height) {
    return { left: currentX, top: currentY };
  }

  const { left, top, right, bottom } = getBoundingZone(parentLocation);
  const { 
    right: currentRight, 
    bottom: currentBottom,
  } = getBoundingZone({ left: currentX, top: currentY, width, height});

  if (currentX < left) {
    currentX = left;
  }

  if (currentY < top) {
    currentY = top;
  }

  if (currentRight > right) {
    currentX = right - width;
  }

  if (currentBottom > bottom) {
    currentY = bottom - height;
  }

  return { left: currentX, top: currentY };
};

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
  differenceY: number,
  parentLocation?: ComponentStyle,
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

  if (!parentLocation) {
    return {
      newLeft,
      newTop,
      newWidth,
      newHeight,
    };
  }
  
  const { right, bottom } = getBoundingZone(parentLocation);

  if (newLeft < parentLocation.left) {
    newLeft = parentLocation.left;
    newWidth -= parentLocation.left;
  }

  if (newTop < parentLocation.top) {
    newTop = parentLocation.top;
    newHeight -= parentLocation.top;
  }

  if (newLeft + newWidth > right) {
    newWidth = right - newLeft;
  }

  if (newTop + newHeight > bottom) {
    newHeight = bottom - newTop;
  }

  return {
    newLeft,
    newTop,
    newWidth,
    newHeight,
  };
};

export const calculateCenter = (
  width: number, 
  height: number, 
  top: number, 
  left: number,
): ComponentCenter => {
  const centerX = left + (width / 2);
  const centerY = top + (height / 2);

  return {
    centerX,
    centerY,
  };
};

export const isLocatedCenter = (
  width: number, 
  height: number, 
  top: number, 
  left: number,
): ComponentLocatedCenter => {
  const screenWidth = window.screen.width;
  const screenHeight = window.screen.height;

  const { centerX, centerY } = calculateCenter(width, height, top, left);

  let isCenterX = false;
  let isCenterY = false;

  if (screenWidth / 2 === centerX) {
    isCenterX = true;
  }

  if (screenHeight / 2 === centerY) {
    isCenterY = true;
  }

  return {
    isCenterX,
    isCenterY,
  };
};
