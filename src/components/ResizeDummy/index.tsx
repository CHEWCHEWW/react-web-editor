import React, { useState } from "react";
import styled from "styled-components";

import { ComponentStyle } from "../../types/ui";
import { DIRECTIIONS, DIRECTION } from "../../constants/location";

interface ComponentInformation {
  style: ComponentStyle
  isResizing: boolean
  direction: string
  isClicked: boolean
  currentX: number
  currentY: number
}

interface UseResizeProps extends ComponentStyle {
  minWidth: number
  minHeight: number
  children?: React.ReactElement
}

const ResizeDummy: React.FC<UseResizeProps> = ({
  width,
  height,
  top,
  left,
  minWidth = 1,
  minHeight = 1,
}): React.ReactElement => {
  const [componentInformation, setComponentInformation] = useState<ComponentInformation>({
    isClicked: false,
    isResizing: false,
    direction: "",
    currentX: 0,
    currentY: 0,
    style: {
      width,
      height,
      left,
      top,
    },
  });

  const handleMouseDown = (ev: React.MouseEvent<HTMLDivElement>): void => {
    ev.preventDefault();
    
    const { 
      currentTarget: {
        className,
      },
      clientX, 
      clientY,
    } = ev;
  
    setComponentInformation((prev) => ({
      ...prev,
      isResizing: true,
      direction: className,
      style: {
        ...prev.style,
      },
      currentX: clientX,
      currentY: clientY, 
    }));
  };

  const handleMouseMove = (ev: React.MouseEvent<HTMLDivElement>): void => {
    ev.stopPropagation();
    
    const { clientX, clientY } = ev;
    const {
      style: {
        width, 
        height, 
        top, 
        left, 
      },
      currentX, 
      currentY,
      direction,
    } = componentInformation;
    
    const deltaX = clientX - currentX;
    const deltaY = clientY - currentY;

    let newLeft: number = left;
    let newTop: number = top;
    let newWidth: number = width;
    let newHeight: number = height;

    switch (direction) {
      case DIRECTION.TOP_LEFT:
        newLeft += deltaX;
        newTop += deltaY;
        newWidth -= deltaX;
        newHeight -= deltaY;

        break;
      case DIRECTION.TOP_RIGHT:
        newTop += deltaY;
        newWidth += deltaX;
        newHeight -= deltaY;

        break;
      case DIRECTION.BOTTOM_LEFT: 
        newLeft += deltaX;
        newWidth -= deltaX;
        newHeight += deltaY;

        break;
      case DIRECTION.BOTTOM_RIGHT:
        newWidth += deltaX;
        newHeight += deltaY;

        break;
      default:
        break;
    }
    console.log(newWidth, newHeight);
    if (newWidth < minWidth || newHeight < minHeight) {
      return;
    }

    setComponentInformation((prev) => ({
      ...prev,
      style: {
        width: newWidth,
        height: newHeight,
        left: newLeft,
        top: newTop,
      },
      currentX: clientX,
      currentY: clientY,
    }));
  };

  const handleMouseUp = (): void => {
    setComponentInformation((prev) => ({
      ...prev,
      style: {
        ...prev.style,
      },
      direction: "",
      isResizing: false,
      isClicked: true,
    }));
  };

  return (
    <Wrapper
      width={width}
      height={height}
      top={top}
      left={left}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      <ResizeHandlersWrapper>
        {DIRECTIIONS.map((item) => (
          <div key={item} className={item} onMouseDown={handleMouseDown} />
        ))}
      </ResizeHandlersWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div.attrs<ComponentStyle>(
  ({ width, height, left, top }) => ({
    style: {
      top: `${top}px`,
      left: `${left}px`,
      width: `${width}px`,
      height: `${height}px`,
    },
  })
)<ComponentStyle>`
  position: absolute;
`;

const ResizeHandlersWrapper = styled.div`
  .top-left {
    top: -3px;
    left: -3px;
    cursor: nw-resize;
  }

  .top-right {
    top: -3px;
    right: -3px;
    cursor: ne-resize;
  }

  .bottom-left {
    bottom: -3px;
    left: -3px;
    cursor: sw-resize;
  }

  .bottom-right {
    bottom: -3px;
    right: -3px;
    cursor: se-resize;
  }

  > * {
    width: 7px;
    height: 7px;
    background-color: red;
    position: absolute;
    z-index: 1;
  }
`;

export default ResizeDummy;
