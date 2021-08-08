import React  from "react";
import styled from "styled-components";
import { BiText } from "react-icons/bi";
import { IoMdExit } from "react-icons/io";

import Icon from "../Icon";
import MenuBoard from "../MenuBoard";
import { Location, InnerHTML } from "../../types/ui";

interface TextInpuProps extends Location {
  // onClick: () => void
  onChange: (ev: React.FormEvent<HTMLDivElement>) => void
  componentRef: React.Ref<HTMLDivElement>
  html: InnerHTML
  isEditing: boolean
  isMouseOver: boolean
}

interface TextInputStyleProps {
  isEditing: boolean
}

const TextInput: React.FC<TextInpuProps> = ({
  onChange,
  // onClick,
  componentRef,
  isEditing,
  html,
  isMouseOver,
  top,
  right,
  left,
  bottom,
}): React.ReactElement => {
  return (
    <>
      <MenuBoard />
      {/* {isMouseOver && (
        <Icon
          top={top}
          right={right}
          left={left}
          bottom={bottom}
        >
          {isEditing ? <IoMdExit /> : <BiText />}
        </Icon>
      )} */}
      <div 
        contentEditable
        ref={componentRef}
        dangerouslySetInnerHTML={html}
        onInput={onChange}
      />
    </>
  );
};

const Input = styled.textarea`
  width: 100%;
  height: 100%;
  position: absolute;
  font-size: 20px;
  color: transparent;
  background-color: transparent;
  z-index: 8;
  border: transparent;
`;

const TextArea = styled.div<TextInputStyleProps>`
  width: 100%;
  height: 100%;
  overflow-x: auto;
  font-size: 20px;
  color: pink;
  cursor: text;
  border: ${({ isEditing }) => isEditing && "1px solid red"};
  white-space: pre-wrap;
`;

export default TextInput;
