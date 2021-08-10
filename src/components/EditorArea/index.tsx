import React from "react";
import styled from "styled-components";

import useEditorBoard from "../../hooks/useEditorBoard";

const EditorBoard: React.FC = ({ children }): React.ReactElement => {
  const {
    measuredRef,
    editorBoardStyle,
  } = useEditorBoard();
  console.log(editorBoardStyle);
  return (
    <EditorBoardWrapper ref={measuredRef}>
      {children}
    </EditorBoardWrapper>
  );
};

const EditorBoardWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
`;

export default EditorBoard;
