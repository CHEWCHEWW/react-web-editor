import React from "react";

import EditorBlock from "../EditorBlock";
import { EditorProps } from "../../types/ui";
import useMouseEvent from "../../hooks/useMouseEvent";
import useText from "../../hooks/useText";
import TextInput from "../TextInput";

const TextEditorBlock: React.FC<EditorProps> = ({
  width,
  height,
  top,
  left,
  parentStyle,
}): React.ReactElement => {
  const {
    isClicked,
    isMouseOver,
    handleMouseClick,
    handleMouseOver,
    handleMouseLeave,
    onClicked,
    componentRef
  } = useMouseEvent();

  const {
    text,
    handleIconClick,
    handleTextChange,
    isEditing,
  } = useText({ isClicked, onClicked });

  return (
    <EditorBlock 
      width={width}
      height={height}
      top={top}
      componentRef={componentRef}
      left={left}
      parentStyle={parentStyle}
      onMouseClick={handleMouseClick}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      isMouseOver={isMouseOver}
      isClicked={isClicked}
    > 
      <TextInput 
        isEditing={isEditing} 
        onClick={handleIconClick} 
        onChange={handleTextChange}
        text={text}
        isMouseOver={isMouseOver}
      />
    </EditorBlock>    
  );
};

export default TextEditorBlock;
