import React  from "react";
import styled from "styled-components";
import { BiText } from "react-icons/bi";
import { IoMdExit } from "react-icons/io";

import Icon from "../Icon";
import MenuBoard from "../MenuBoard";
import { Location } from "../../types/ui";

interface TextInpuProps extends Location {
  onClick: () => void
  onChange: (ev: React.ChangeEvent<HTMLTextAreaElement>) => void
  text: string
  isEditing: boolean
  isMouseOver: boolean
}

interface TextInputStyleProps {
  isEditing: boolean
}

const TextInput: React.FC<TextInpuProps> = ({
  onChange,
  onClick,
  isEditing,
  text,
  isMouseOver,
  top,
  right,
  left,
  bottom,
}): React.ReactElement => {
  return (
    <>
      <MenuBoard />
      {isMouseOver && (
        <Icon
          top={top}
          right={right}
          left={left}
          bottom={bottom}
          onClick={onClick}
        >
          {isEditing ? <IoMdExit /> : <BiText />}
        </Icon>
      )}
      {isEditing && (
        <>
          <Input onChange={onChange} value={text} autoFocus />
        </>
      )}
      <TextArea isEditing={isEditing}>{text}</TextArea>
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

const TextArea = styled.div<TextInputStyleProps>`
  width: 100%;
  height: 100%;
  overflow-x: auto;
  font-size: 20px;
  color: pink;
  cursor: text;
  border: ${({ isEditing }) => isEditing && "1px solid red"};
`;

export default TextInput;
