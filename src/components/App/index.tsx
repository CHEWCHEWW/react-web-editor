import React from "react";

import DnDDummy from "../DnDDummy";
import Editor from "../Editor";

const App = (): React.ReactElement => {
  return (
    <>
      <DnDDummy />
      <Editor top={30} left={30} width={30} height={30} minWidth={1} minHeight={1}>
        <div>happy</div>
      </Editor>
    </>
  );
};

export default App;
