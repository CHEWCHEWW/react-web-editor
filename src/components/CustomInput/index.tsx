import React from "react";
import styled from "styled-components";

import Icon from "../Icon";

interface CustomInputProps {
  onChange: (ev: React.ChangeEvent<HTMLInputElement>) => void
  type: string
  accept?: string
  top: number
  right: number
  value?: string 
}

const CustomInput: React.FC<CustomInputProps> = ({ 
  onChange,
  value,
  type,
  accept,
  children,
  top,
  right,
}): React.ReactElement => {  
  return (
    <>
      <Icon top={top} right={right}>
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
  opacity: 0;
  position: absolute;
`;

export default CustomInput;
