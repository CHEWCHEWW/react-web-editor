import React, { useState } from "react";
import styled from "styled-components";
import { BiText } from "react-icons/bi";
import { GiMove } from "react-icons/gi";
import { MdExitToApp } from "react-icons/md";

import CoordinatesTag from "../CoordinatesTag";
import { ComponentStyle, EditorProps } from "../../types/ui";
import { DIRECTIIONS } from "../../constants/location";
import EditorBlockWrapper from "../shared/EditorBlockWrapper";
import { EDITOR_ICON_RIGHT, FIRST_EDITOR_ICON_TOP, SECOND_EDITOR_ICON_TOP } from "../../constants/ui";
import { generateHtml } from "../../utils/ui";
import GuideLine from "../GuideLine";
import Icon from "../Icon";
import ResizeHandlersWrapper from "../shared/ResizeHandlerWrapper";
import { SLIDER_MAX, INITIAL_TEXT } from "../../constants/ui";
import useColor from "../../hooks/useColor";
import useDraggable from "../../hooks/useDraggable";
import useMouseEvent from "../../hooks/useMouseEvent";
import useSlider from "../../hooks/useSlider";
import useResize from "../../hooks/useResize";
import useText from "../../hooks/useText";
import TextEditor from "../TextEditor";

interface TextEditorBlockProps extends EditorProps {
  initialFontSize?: number;
  initialFontColor?: string;
  initialFontStyle?: string;
  initialText?: string;
  initialFontName?: string;
}

const TextEditorBlock: React.FC<TextEditorBlockProps> = ({
  left,
  top,
  width,
  height,
  parentStyle,
  unit,
  initialFontSize,
  initialFontColor,
  initialFontStyle,
  initialText,
  initialFontName,
}): React.ReactElement => {
  const innerHtml = initialText && generateHtml(initialText);
  const [html, setHtml] = useState(innerHtml || INITIAL_TEXT);
  const [componentStyle, setComponentStyle] = useState<ComponentStyle>({
    top,
    left,
    width,
    height,
  });

  const { handleMouseDown } = useResize({
    ...componentStyle,
    unit,
    onResize: setComponentStyle,
    resizeBoardOption: parentStyle,
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
    handleStyleButtonClick,
    handleFontButtonClick,
    fontName,
  } = useText({
    html,
    onChange: setHtml,
    initialFontName,
    initialFontStyle,
    initialText,
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

  const {
    handleFontColorChange,
    color,
  } = useColor(initialFontColor);

  const {
    sliderRef,
    value,
    handleValueChange,
  } = useSlider({ max: SLIDER_MAX, initialValue: initialFontSize });

  return (
    <EditorBlockWrapper
      top={componentStyle.top}
      left={componentStyle.left}
      width={componentStyle.width}
      height={componentStyle.height}
      unit={unit}
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
          <CoordinatesTag
            top={componentStyle.top}
            left={componentStyle.left}
            unit={unit}
          />
          <GuideLine
            width={componentStyle.width}
            height={componentStyle.height}
            top={componentStyle.top}
            left={componentStyle.left}
            boardWidth={parentStyle && parentStyle.width}
            boardHeight={parentStyle && parentStyle.height}
            unit={unit}
          />
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
        onStyleButtonClick={handleStyleButtonClick}
        onFontButtonClick={handleFontButtonClick}
        fontName={fontName}
        color={color}
      />
    </EditorBlockWrapper>
  );
};

const ButtonHandler = styled.span`
  top: 0;
  right: -20px;
  width: 50px;
  height: 100%;
  position: absolute;
`;

export default TextEditorBlock;
