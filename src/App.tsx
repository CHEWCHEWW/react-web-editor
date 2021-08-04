import React from "react";

import Editor from "./components/Editor";

const App = () => {
  return (
    <div style={{ width: "500px", height: "300px", left: "200px", top: "200px", backgroundColor: "yellow" }}>
      <Editor 
        width={100} 
        height={100} 
        top={200} 
        left={200} 
        minWidth={1} 
        minHeight={1} 
        parentStyle={{ left: 200, top: 200, width: 500, height: 300}}
      >
        happy
      </Editor>
    </div>
  );
};

export default App;
