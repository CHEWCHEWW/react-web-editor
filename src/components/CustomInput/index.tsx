import React from "react";
import styled from "styled-components";

import Icon from "../Icon";

import { TypedCustomInputProps } from "../../types/handler";

interface CustomInputProps extends TypedCustomInputProps {
  onChange: (ev: React.ChangeEvent<HTMLInputElement>) => void
  type: string
  accept?: string
}

const CustomInput: React.FC<CustomInputProps> = ({ 
  onChange,
  value,
  type,
  accept,
  children,
  top,
  right,
  left,
  bottom,
}): React.ReactElement => {  
  return (
    <>
      <Icon 
        top={top}
        right={right}
        left={left}
        bottom={bottom}
      >
        <Input 
          type={type}
          onChange={onChange}
          accept={accept}
          value={value && value}
        />
        {children}
      </Icon>
    </>
  );
};

const Input = styled.input`
  width: 20px;
  opacity: 0;
  position: absolute;
`;

export default CustomInput;
