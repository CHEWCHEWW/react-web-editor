import React, { useEffect, useState } from "react";

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
  const [text, setText] = useState<string>("");
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [isEdited, setIsEdited] = useState<boolean>(false);
  
  const {
    isClicked,
    isMouseOver,
    handleMouseClick,
    handleMouseOver,
    handleMouseLeave,
    setIsClicked,
  } = useMouseEvent();

  useEffect(() => {
    if (isClicked && isEdited) {
      setIsClicked(false);
    }
  }, [isClicked, setIsClicked, isEdited]);

  useEffect(() => {
    if (isEditing) {
      setIsClicked(false);
      setIsEdited(true);
    } else {
      setIsEdited(false);
    }
  }, [isEditing, setIsClicked]);

  const handleIconClick = () => {
    setIsEditing(prev => !prev);
  };

  const handleTextChange = (ev: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(ev.target.value);
  };

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
      <TextInput 
        isEditing={isEditing} 
        onClick={handleIconClick} 
        onChange={handleTextChange}
        text={text}
      />
    </EditorBlock>    
  );
};

export default TextEditorBlock;
