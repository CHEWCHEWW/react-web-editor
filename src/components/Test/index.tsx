import React from "react";
import styled from "styled-components";

import Editor from "../Editor";

const Test = () => {
  return (
    <Wrapper>
      <EditorWrapper>
        <Editor 
          width={100} 
          height={100} 
          top={200} 
          left={200} 
          minWidth={1} 
          minHeight={1}
          parentStyle={{width: 500, height: 300, left: 200, top: 200}}
        >
          happy
        </Editor>
      </EditorWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

const EditorWrapper = styled.div`
  width: 500px; 
  height: 300px; 
  left: 200px; 
  top: 200px; 
  background: yellow; 
  position: fixed;
`;

export default Test;