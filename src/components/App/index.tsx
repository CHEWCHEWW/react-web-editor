import React from "react";

import DnDDummy from "../DnDDummy";
import Dummy from "../Dummy";
import ResizeDummy from "../ResizeDummy";

const App = (): React.ReactElement => {
  return (
    <>
      <Dummy left={20} top={20} />
      <DnDDummy />
      <ResizeDummy top={30} left={30} width={30} height={30} minWidth={1} minHeight={1} />
    </>
  );
};

export default App;
