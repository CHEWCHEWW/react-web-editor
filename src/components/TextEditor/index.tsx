import React from "react";
import styled from "styled-components";

import { InnerHTML } from "../../types/ui";

interface TextEditorProps {
  // onChange: (ev: React.FormEvent<HTMLDivElement>) => void
  // componentRef: React.Ref<HTMLDivElement>
  // html: InnerHTML
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
    <TextBoard 
      contentEditable={isEditing}
      ref={componentRef}
      dangerouslySetInnerHTML={html}
      onInput={onChange}
    />
  );
};

const TextBoard = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 10;
`;

export default TextEditor;
