import React from "react";
import styled from "styled-components";

const App = (): React.ReactElement => {
  return (
    <Test>
      happy
      {new Date().toLocaleDateString()}
    </Test>
  );
};

const Test = styled.div`
  background-color: pink;
`;

export default App;
