import React from "react";

const App = (): React.ReactElement => {
  return (
    <div>
      happy
      {new Date().toLocaleDateString()}
    </div>
  );
};

export default App;
