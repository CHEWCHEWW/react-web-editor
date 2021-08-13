import React from "react";
import styled from "styled-components";

import DragAndDropTable from "../DragAndDropTable";
import StyleEditorBlock from "../StyleEditorBlock";

const Test: React.FC = (): React.ReactElement => {
  return (
    <Wrapper>
      <DragAndDropTable isVertical={true}>
        <button>ha</button>
      </DragAndDropTable>
      <TwoColorText>
      </TwoColorText>
      <EditorWrapper>
        <StyleEditorBlock
          width={100}
          height={100}
          top={1}
          left={1}
          parentStyle={{ width: 500, height: 300 }}
          unit={"px"}
        >
          <div style={{ zIndex: 3, backgroundColor: "pink", position: "absolute" }}>happy</div>
        </StyleEditorBlock>
        <StyleEditorBlock
          width={100}
          height={100}
          top={1}
          left={1}
          parentStyle={{ width: 500, height: 300 }}
          unit={"px"}
        >
        </StyleEditorBlock>
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

export default Test;
