import React from "react";

import DnDDummy from "../DnDDummy";
import Editor from "../Editor";

const App = (): React.ReactElement => {
  return (
    <>
      <Editor top={30} left={30} width={400} height={500} minWidth={1} minHeight={1}>
        <DnDDummy />
      </Editor>
    </>
  );
};

export default App;
