import React from "react";
import styled from "styled-components";

import EditorBlock from "../EditorBlock";

const Test: React.FC = (): React.ReactElement => {
  return (
    <Wrapper>
      <EditorWrapper>
        <EditorBlock 
          width={100} 
          height={100} 
          top={200} 
          left={200} 
          minWidth={1} 
          minHeight={1}
          parentStyle={{width: 500, height: 300, left: 200, top: 200}}
        >
        </EditorBlock>
        <EditorBlock 
          width={100} 
          height={100} 
          top={200} 
          left={200} 
          minWidth={1} 
          minHeight={1}
          parentStyle={{width: 500, height: 300, left: 200, top: 200}}
        >
          <TestDiv>happy</TestDiv>
        </EditorBlock>
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
  background: green; 
  position: fixed;
`;

const TestDiv = styled.div`
  width: 100%;
  height: 100%;
  background-color: skyblue;
  position: absolute;
`;

export default Test;