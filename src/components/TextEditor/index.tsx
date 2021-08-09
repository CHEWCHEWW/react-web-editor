import React from "react";
import styled from "styled-components";

import { InnerHTML } from "../../types/ui";
import MenuBoard from "../MenuBoard";

interface TextEditorProps {
  html: InnerHTML
  isEditing: boolean
  onChange: () => void
  componentRef: React.Ref<HTMLDivElement>
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
        onBlur={onChange}
      />
      {isEditing && <MenuBoard />}
    </>
  );
};

const TextBoard = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
`;

export default TextEditor;
