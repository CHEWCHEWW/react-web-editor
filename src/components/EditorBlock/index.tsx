import React, { useState } from "react";
import styled from "styled-components";

import CoordinatesTag from "../CoordinatesTag";
import { ComponentStyle, EditorProps, EditorBlockProps } from "../../types/ui";
import { DIRECTIIONS } from "../../constants/location";
import GuideLine from "../GuideLine";
import useDraggable from "../../hooks/useDraggable";
import useResize from "../../hooks/useResize";

const Editor: React.FC<EditorBlockProps> = ({ 
  width,
  height,
  top,
  left,
  minWidth,
  minHeight,
  parentStyle,
  children,
  onMouseClick,
  onMouseOver,
  onMouseLeave,
  isMouseOver,
  isClicked,
  componentRef,
}): React.ReactElement => {
  const [componentStyle, setComponentStyle] = useState<EditorProps>({
    width,
    height,
    top,
    left,
    minWidth,
    minHeight,
  });

  const { handleMouseDown } = useResize({ 
    componentStyle, 
    onResize: setComponentStyle,
    resizeBoardOption: parentStyle,
  });

  const {
    handleDragStart,
    handleDragEnd,
  } = useDraggable({ 
    ...componentStyle,
    onDrag: setComponentStyle,
    dragBoardOption: parentStyle,
  });

  return (
    <Wrapper
      width={componentStyle.width}
      height={componentStyle.height}
      top={componentStyle.top}
      left={componentStyle.left}
      onClick={onMouseClick}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
      ref={componentRef}
    >
      {isClicked && 
        <>
          <DraggableHandler
            onMouseDown={handleDragStart}
            onMouseUp={handleDragEnd}
          />
          <ResizeHandlersWrapper>
            {DIRECTIIONS.map((item) => (
              <div key={item} className={item} onMouseDown={handleMouseDown} />
            ))}
          </ResizeHandlersWrapper>
          <GuideLine
            width={componentStyle.width}
            height={componentStyle.height}
            top={componentStyle.top}
            left={componentStyle.left}
          />
        </>
      }
      {isMouseOver &&
        <CoordinatesTag top={componentStyle.top} left={componentStyle.left} />
      }
      {children}
    </Wrapper>
  );
};

const DraggableHandler = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid gray;
  position: absolute;
  cursor: move;
  z-index: 9;
`;

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
  position: fixed;
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
    width: 3px;
    height: 3px;
    border: 1px solid gray;
    position: absolute;
    z-index: 10;
  }
`;

export default Editor;
