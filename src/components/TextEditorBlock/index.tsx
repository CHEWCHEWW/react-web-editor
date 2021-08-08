import React, { useState } from "react";
import styled from "styled-components";
import { BiText } from "react-icons/bi";

import { ComponentLocation, ComponentStyle } from "../../types/ui";
import { DIRECTIIONS } from "../../constants/location";
import Icon from "../Icon";
import { INITIAL_TEXT } from "../../constants/ui";
import useDraggable from "../../hooks/useDraggable";
import useMouseEvent from "../../hooks/useMouseEvent";
import useResize from "../../hooks/useResize";
import useText from "../../hooks/useText";
import TextEditor from "../TextEditor";

const TextEditorBlock: React.FC<ComponentStyle> = ({ 
  left,
  top,
  width,
  height,
}): React.ReactElement => {
  const [html, setHtml] = useState(INITIAL_TEXT);
  const [componentStyle, setComponentStyle] = useState<ComponentStyle>({
    top,
    left,
    width,
    height,
  });

  const { handleMouseDown } = useResize({ 
    componentStyle, 
    onResize: setComponentStyle,
  });

  const {
    isClicked,
    isMouseOver,
    handleMouseClick,
    handleMouseOver,
    handleMouseLeave,
    componentRef,
  } = useMouseEvent();

  const {
    ref,
    handleInputChange,
    innerHTML,
    handleEditingMode,
    isEditing,
  } = useText({ html, onChange: setHtml });

  const {
    handleDragStart,
    handleDragEnd,
  } = useDraggable({    
    ...componentStyle,
    onDrag: setComponentStyle,
  });

  return (
    <Wrapper
      top={componentStyle.top}
      left={componentStyle.left}
      width={componentStyle.width}
      height={componentStyle.height}
      onDoubleClick={handleEditingMode}
      onMouseOver={handleMouseOver}
    >
      {isMouseOver && 
        <Icon 
          top={0}
          right={-21}
          onMouseDown={handleDragStart}
          onMouseUp={handleDragEnd}
        >
          <BiText />
        </Icon>}
      <TextEditor 
        html={innerHTML} 
        onChange={handleInputChange}
        componentRef={ref}
        isEditing={isEditing}
      />
      <ResizeHandlersWrapper>
        {DIRECTIIONS.map((item) => (
          <div key={item} className={item} onMouseDown={handleMouseDown} />
        ))}
      </ResizeHandlersWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div.attrs<ComponentStyle>(
  ({ left, top, width, height }) => ({
    style: {
      top: top && `${top}px`,
      left: left && `${left}px`,
      width: width && `${width}px`,
      height: left && `${height}px`,
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

export default TextEditorBlock;
