import React, { useState } from "react";
import styled from "styled-components";
import { BiText } from "react-icons/bi";

import Icon from "../Icon";

const TextInput: React.FC = (): React.ReactElement => {
  const [text, setText] = useState<string>("");
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const handleIconClick = () => {
    setIsEditing(prev => !prev);
  };

  const handleTextChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setText(ev.target.value);
  };

  return (
    <>
      <Icon
        top={0}
        right={-21}
        onClick={handleIconClick}
      >
        <BiText />
      </Icon>
      {isEditing && <Input onChange={handleTextChange} value={text} autoFocus/>}
      <TextArea>{text}</TextArea>
    </>
  );
};

const Input = styled.input`
  width: 90%;
  height: 90%;
  position: absolute;
  font-size: 100px;
  opacity: 0;
  z-index: 8;
`;

const TextArea = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  font-size: 100px;
  color: pink;
  z-index: 8;
`;

export default TextInput;
