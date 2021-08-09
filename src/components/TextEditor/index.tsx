import React from "react";
import styled from "styled-components";

import { InnerHTML } from "../../types/ui";
import MenuBoard from "../MenuBoard";
import useColor from "../../hooks/useColor";
import useSlider from "../../hooks/useSlider";
import { SLIDER_MAX } from "../../constants/ui";

interface TextEditorProps {
  html: InnerHTML
  isEditing: boolean
  onChange: () => void
  componentRef: React.Ref<HTMLDivElement>
}

interface TextBoardStyle {
  color: string
  fontSize: number
}

const TextEditor: React.FC<TextEditorProps> = ({
  html,
  onChange,
  componentRef,
  isEditing,
}): React.ReactElement => {
  return (
    <>
      <TextBoard 
        contentEditable
        ref={componentRef}
        dangerouslySetInnerHTML={html}
        onInput={onChange}
      />
      {isEditing && (
        <MenuBoard />
      )}
    </>
  );
};

const TextBoard = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  /* color: ${({ color }) => color ? color : "black"};
  font-size: ${({ fontSize }) => fontSize && `${fontSize}px`}; */
`;

export default TextEditor;
