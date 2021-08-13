import React, { useState } from "react";
import styled from "styled-components";

import CoordinatesTag from "../CoordinatesTag";
import { DIRECTIIONS } from "../../constants/location";
import EditorBlockWrapper from "../shared/EditorBlockWrapper";
import { ComponentStyle, EditorBlockProps } from "../../types/ui";
import GuideLine from "../GuideLine";
import ResizeHandlersWrapper from "../shared/ResizeHandlerWrapper";
import useDraggable from "../../hooks/useDraggable";
import useResize from "../../hooks/useResize";

const Editor: React.FC<EditorBlockProps> = ({
  width,
  height,
  top,
  left,
  parentStyle,
  children,
  onMouseClick,
  onMouseOver,
  onMouseLeave,
  isMouseOver,
  isClicked,
  componentRef,
  unit,
}): React.ReactElement => {
  const [componentStyle, setComponentStyle] = useState<ComponentStyle>({
    width,
    height,
    top,
    left,
  });

  const { handleMouseDown } = useResize({
    unit,
    ...componentStyle,
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
    unit,
  });

  return (
    <EditorBlockWrapper
      width={componentStyle.width}
      height={componentStyle.height}
      top={componentStyle.top}
      left={componentStyle.left}
      onClick={onMouseClick}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
      ref={componentRef}
      unit={unit}
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
        </>
      }
      {isMouseOver && (
        <>
          <CoordinatesTag top={componentStyle.top} left={componentStyle.left} unit={unit} />
          <GuideLine
            width={componentStyle.width}
            height={componentStyle.height}
            top={componentStyle.top}
            left={componentStyle.left}
          />
        </>
      )}
      {children}
    </EditorBlockWrapper>
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

export default Editor;
