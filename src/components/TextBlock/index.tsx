import React, { useState } from "react";
import styled from "styled-components";

const TextBlock = (): React.ReactElement => {
  const [text, setText] = useState("");

  const handleInputChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setText(ev.target.value);
  };

  return (
    <input onChange={handleInputChange} value={text} />
  );
};

export default TextBlock;
