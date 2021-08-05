import React from "react";
import styled from "styled-components";

import Icon from "../Icon";

interface CustomInputProps {
  onChange: (ev: React.ChangeEvent<HTMLInputElement>) => void
  type: string
  accept?: string
  top: number
  right: number
}

const CustomInput: React.FC<CustomInputProps> = ({ 
  onChange,
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
        />
        <IconImageWrapper>
          {children}
        </IconImageWrapper>
      </Icon>
    </>
  );
};

const Input = styled.input`
  opacity: 0;
  position: absolute;
`;

const IconImageWrapper = styled.div`
  color: #9C9C9A;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  height: 70%;
`;

export default CustomInput;
