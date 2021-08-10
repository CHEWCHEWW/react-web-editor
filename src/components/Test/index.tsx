import React from "react";
import styled from "styled-components";

import StyleEditorBlock from "../StyleEditorBlock";
import TextEditorBlock from "../TextEditorBlock";

const Test: React.FC = (): React.ReactElement => {
  return (
    <Wrapper>
      <TwoColorText>
      </TwoColorText>
      <EditorWrapper />
      <TextEditorBlock 
        width={5} 
        height={5} 
        top={12} 
        left={12}
        unit={"rem"}
        parentStyle={{ width: 10, height: 10, left: 10, top: 10 }}
      >
        {/* <TestDiv>happy</TestDiv> */}
      </TextEditorBlock>
      <TextEditorBlock top={50} left={50} width={20} height={10} unit={"rem"} />
      <StyleEditorBlock 
        width={30} 
        height={10} 
        top={50} 
        left={80} 
        unit={"rem"}
        initialColor={"#00ff0000"}
      >
      </StyleEditorBlock>
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
  width: 10rem; 
  height: 10rem; 
  left: 10rem; 
  top: 10rem; 
  background: #84bdec; 
  position: absolute;
`;

const TestDiv = styled.div`
  width: 100%;
  height: 100%;
  background-color: skyblue;
  position: absolute;
`;

export default Test;
