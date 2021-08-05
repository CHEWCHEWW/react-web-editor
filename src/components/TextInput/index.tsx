import React, { useState } from "react";
import { BiText } from "react-icons/bi";

import CustomInput from "../CustomInput";

const TextInput = (): React.ReactElement => {
  const [text, setText] = useState<string>("");

  const handleTextChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setText(ev.target.value);
    console.log(text);
  };

  return (
    <CustomInput
      type="text"
      onChange={handleTextChange}
      top={44}
      value={text}
      right={-21}
    >
      <BiText />
    </CustomInput>
  );
};

export default TextInput;
