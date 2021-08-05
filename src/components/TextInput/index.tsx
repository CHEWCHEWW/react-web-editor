import React, { useState } from "react";
import styled from "styled-components";
import { BiText } from "react-icons/bi";

import Icon from "../Icon";

interface TextInpuProps {
  onClick: () => void
  onChange: (ev: React.ChangeEvent<HTMLTextAreaElement>) => void
  isEditing: boolean
  text: string
}

const TextInput: React.FC<TextInpuProps> = ({
  onChange,
  onClick,
  isEditing,
  text,
}): React.ReactElement => {
  return (
    <>
      <Icon
        top={0}
        right={-21}
        onClick={onClick}
      >
        <BiText />
      </Icon>
      {isEditing && <Input onChange={onChange} value={text} autoFocus />}
      <TextArea>{text}</TextArea>
    </>
  );
};

const Input = styled.textarea`
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
  overflow-x: auto;
  font-size: 20px;
  color: pink;
  cursor: text
`;

export default TextInput;
