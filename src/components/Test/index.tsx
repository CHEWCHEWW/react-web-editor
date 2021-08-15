import React from "react";
import styled from "styled-components";

import DragAndDropTable from "../DragAndDropTable";
import EditableBoard from "../EditableBoard";
import StyleEditorBlock from "../StyleEditorBlock";
import TextEditorBlock from "../TextEditorBlock";

const Test: React.FC = (): React.ReactElement => {
  return (
    <Wrapper>
      <DragAndDropTable isVertical={true}>
        <button>ha</button>
      </DragAndDropTable>
      <TwoColorText>
      </TwoColorText>
      <EditableBoard
        width={20}
        height={20}
        unit={"rem"}
        backgroundColor={"#FFFFFF"}
      >
        <TextEditorBlock
          width={5}
          height={5}
          top={2}
          left={2}
          parentStyle={{ width: 20, height: 20 }}
          unit={"rem"}
          initialText={"sad"}
          initialFontColor={"black"}
        />
        <StyleEditorBlock
          width={10}
          height={10}
          top={1}
          left={1}
          parentStyle={{ width: 20, height: 20 }}
          unit={"rem"}
        >
          <div style={{ zIndex: 3, backgroundColor: "pink", position: "absolute" }}>happy</div>
        </StyleEditorBlock>
        <StyleEditorBlock
          width={5}
          height={5}
          top={15}
          left={15}
          parentStyle={{ width: 20, height: 20 }}
          unit={"rem"}
        >
        </StyleEditorBlock>
      </EditableBoard>
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

export default Test;
