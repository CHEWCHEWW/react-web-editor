import React, { useState } from "react";
import styled from "styled-components";
import { BiText } from "react-icons/bi";
import { GiMove } from "react-icons/gi";
import { MdExitToApp } from "react-icons/md";

import { ComponentStyle } from "../../types/ui";
import { DIRECTIIONS } from "../../constants/location";
import { EDITOR_ICON_RIGHT, FIRST_EDITOR_ICON_TOP, SECOND_EDITOR_ICON_TOP } from "../../constants/ui";
import Icon from "../Icon";
import { SLIDER_MAX, INITIAL_TEXT } from "../../constants/ui";
import useColor from "../../hooks/useColor";
import useDraggable from "../../hooks/useDraggable";
import useMouseEvent from "../../hooks/useMouseEvent";
import useSlider from "../../hooks/useSlider";
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
    isMouseOver,
    handleMouseLeave,
    handleMouseOver,
  } = useMouseEvent();

  const {
    textRef,
    handleInputChange,
    innerHTML,
    handleEditingMode,
    isEditing,
    fontStyle,
    handleStyleChange,
    handleFontStyleClick,
    fontName,
  } = useText({ html, onChange: setHtml });

  const {
    handleDragStart,
    handleDragEnd,
  } = useDraggable({    
    ...componentStyle,
    onDrag: setComponentStyle,
  });

  const { handleFontColorChange } = useColor();
  
  const {
    sliderRef,
    value,
    handleValueChange,
  } = useSlider(SLIDER_MAX);

  return (
    <Wrapper
      top={componentStyle.top}
      left={componentStyle.left}
      width={componentStyle.width}
      height={componentStyle.height}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      {isMouseOver && 
        <>
          <ButtonHandler />
          {!isEditing && (
            <Icon 
              top={FIRST_EDITOR_ICON_TOP}
              right={EDITOR_ICON_RIGHT}
              onMouseDown={handleDragStart}
              onMouseUp={handleDragEnd}
            >
              <GiMove />
            </Icon>
          )}
          <Icon 
            top={isEditing ? FIRST_EDITOR_ICON_TOP : SECOND_EDITOR_ICON_TOP}
            right={EDITOR_ICON_RIGHT}
            onClick={handleEditingMode}
          >
            {isEditing ? <MdExitToApp /> : <BiText />}
          </Icon>
          <ResizeHandlersWrapper>
            {DIRECTIIONS.map((item) => (
              <div key={item} className={item} onMouseDown={handleMouseDown} />
            ))}
          </ResizeHandlersWrapper>
        </>
      }
      <TextEditor 
        html={innerHTML} 
        fontStyle={fontStyle}
        onChange={handleInputChange}
        componentRef={textRef}
        isEditing={isEditing}
        onColorChange={handleFontColorChange}
        sliderRef={sliderRef}
        sliderValue={value}
        onSliderChange={handleValueChange}
        onClick={handleStyleChange}
        onFontClick={handleFontStyleClick}
        fontName={fontName}
      />
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

const ButtonHandler = styled.span`
  top: 0;
  right: -20px;
  width: 30px;
  height: 100%;
  position: absolute;
`;

export default TextEditorBlock;
