import React from "react";
import styled from "styled-components";

import StyleEditorBlock from "../StyleEditorBlock";
import TextEditorBlock from "../TextEditorBlock";

const Test: React.FC = (): React.ReactElement => {
  return (
    <Wrapper>
      <TwoColorText>
      </TwoColorText>
      <EditorWrapper>
        <StyleEditorBlock 
          width={100} 
          height={100} 
          top={200} 
          left={200} 
          parentStyle={{width: 500, height: 300, left: 200, top: 200}}
        >
          <TestDiv>happy</TestDiv>
        </StyleEditorBlock>
        <TextEditorBlock top={500} left={500} width={200} height={100} />
      </EditorWrapper>
    </Wrapper>
  );
};

const TwoColorText = styled.div`
  color: #3899ec;
  font-size: 26px;
  font-weight: 600;
  text-shadow: rgb(10 189 240 / 30%) 3px 3px 0px, rgb(254 1 1 / 30%) -2px -2px 0px;
`;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

const EditorWrapper = styled.div`
  width: 500px; 
  height: 300px; 
  left: 200px; 
  top: 200px; 
  background: #84bdec; 
  position: fixed;
`;

const TestDiv = styled.div`
  width: 100%;
  height: 100%;
  background-color: skyblue;
  position: absolute;
`;

export default Test;
