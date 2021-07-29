import React from "react";
import styled from "styled-components";

import Dummy from "../Dummy";

const App = (): React.ReactElement => {
  return (
    <Test>
      <Dummy top={20} left={20} />
    </Test>
  );
};

const Test = styled.div`
  background-color: pink;
`;

export default App;
