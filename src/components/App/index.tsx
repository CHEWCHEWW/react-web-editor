import React from "react";

import DnDDummy from "../DnDDummy";
import Dummy from "../Dummy";

const App = (): React.ReactElement => {
  return (
    <>
      <Dummy left={20} top={20} />
      <DnDDummy />
    </>
  );
};

export default App;
