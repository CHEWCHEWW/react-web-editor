import React, { useState } from "react";

import EditorBlock from "../EditorBlock";
import { EditorProps } from "../../types/ui";
import { INITIAL_TEXT } from "../../constants/ui";
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
    componentRef
  } = useMouseEvent();

  const [html, setHtml] = useState(INITIAL_TEXT);

  const {
    ref,
    handleInputChange,
    // isEditing,
    innerHTML,
    // handleInputClick,
  } = useText({ html, onChange: setHtml });

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
        isEditing={true} 
        componentRef={ref}
        onChange={handleInputChange}
        // onClick={handleInputClick}
        html={innerHTML}
        isMouseOver={isMouseOver}
        top={0}
        right={-21}
      />
    </EditorBlock>    
  );
};

export default TextEditorBlock;
