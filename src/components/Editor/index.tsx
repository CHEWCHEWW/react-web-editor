import React, { useEffect, useState } from "react";
import styled from "styled-components";

import ColorPicker from "../ColorPicker";
import CoordinatesTag from "../CoordinatesTag";
import { ColorProps ,ComponentStyle, EditorProps } from "../../types/ui";
import { DIRECTIIONS } from "../../constants/location";
import GuideLine from "../GuideLine";
import ImageUploader from "../ImageUploader";
import useColor from "../../hooks/useColor";
import useDraggable from "../../hooks/useDraggable";
import useImage from "../../hooks/useImage";
import useMouseEvent from "../../hooks/useMouseEvent";
import useResize from "../../hooks/useResize";

const Editor: React.FC<EditorProps> = ({ 
  width,
  height,
  top,
  left,
  minWidth,
  minHeight,
  parentStyle,
  children,
}): React.ReactElement => {
  const [componentStyle, setComponentStyle] = useState<EditorProps>({
    width,
    height,
    top,
    left,
    minWidth,
    minHeight,
  });

  const { imageSrc, handleFileChange } = useImage();
  const { color, handleColorChange } = useColor();

  const {
    handleMouseMove,
    handleMouseDown,
    handleMouseUp,
    isResizing,
  } = useResize({ 
    componentStyle, 
    onResize: setComponentStyle,
    resizeBoardOption: parentStyle,
  });

  const {
    handleDragStart,
    handleDragEnd,
    handleDragMove,
    isDragging,
  } = useDraggable({ 
    ...componentStyle,
    onDrag: setComponentStyle,
    dragBoardOption: parentStyle,
  });

  const {
    isClicked,
    isMouseOver,
    handleMouseClick,
    handleMouseOver,
    handleMouseLeave,
  } = useMouseEvent();

  useEffect(() => {
    if (!isDragging) {
      return;
    }

    document.addEventListener("mousemove", handleDragMove);

    return () => document.removeEventListener("mousemove", handleDragMove);
  }, [handleDragMove, isDragging]);

  useEffect(() => {
    if (!isResizing) {
      return;
    }

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [handleMouseMove, isResizing, handleMouseUp]);

  return (
    <Wrapper
      width={componentStyle.width}
      height={componentStyle.height}
      top={componentStyle.top}
      left={componentStyle.left}
      onMouseUp={handleMouseUp}
      onClick={handleMouseClick}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
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
        <>
          <ImageUploader onChange={handleFileChange} />
          <ColorPicker onChange={handleColorChange} />
          <CoordinatesTag top={componentStyle.top} left={componentStyle.left} />
        </>
      }
      {imageSrc && <UploadedImage src={imageSrc} />}
      {color && <CustomBlock color={color} />}
      {children}
    </Wrapper>
  );
};

const CustomBlock = styled.div<ColorProps>`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: ${({ color }) => color};
`;

const DraggableHandler = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid gray;
  position: absolute;
  cursor: move;
  z-index: 9;
`;

const UploadedImage = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 8;
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
