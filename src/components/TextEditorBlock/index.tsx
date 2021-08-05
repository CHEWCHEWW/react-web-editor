import React, { useEffect } from "react";

import EditorBlock from "../EditorBlock";
import { EditorProps } from "../../types/ui";
import useMouseEvent from "../../hooks/useMouseEvent";
import TextInput from "../TextInput";

const TextEditorBlock: React.FC<EditorProps> = ({
  width,
  height,
  top,
  left,
  minWidth,
  minHeight,
  parentStyle,
}): React.ReactElement => {
  const {
    isClicked,
    isMouseOver,
    handleMouseClick,
    handleMouseOver,
    handleMouseLeave,
  } = useMouseEvent();

  return (
    <EditorBlock 
      width={width}
      height={height}
      top={top}
      left={left}
      minWidth={minWidth}
      minHeight={minHeight}
      parentStyle={parentStyle}
      onMouseClick={handleMouseClick}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      isMouseOver={isMouseOver}
      isClicked={isClicked}
    > 
      <TextInput />
    </EditorBlock>    
  );
};

export default TextEditorBlock;
