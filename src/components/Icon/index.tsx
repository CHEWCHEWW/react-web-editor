import React from "react";
import styled from "styled-components";

interface IconProps {
  top?: number
  right?: number
  left?: number
  bottom?: number
  onClick?: (ev: React.MouseEvent) => void
}

const Icon: React.FC<IconProps> = ({ 
  children, 
  top, 
  right,
  onClick,
}): React.ReactElement => {
  return (
    <IconBackground top={top} right={right} onClick={onClick}>
      <IconImage>
        {children}
      </IconImage>
    </IconBackground>
  );
};

const IconBackground = styled.div<IconProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  top: ${({ top }) => top && top}px;
  right: ${({ right }) => right && right}px;
  left: ${({ left }) => left && left}px;
  bottom: ${({ bottom }) => bottom && bottom}px;
  background-color: #F8F8F6;
  position: absolute;
  border-radius: 1px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
`;

const IconImage = styled.div`
  color: #9C9C9A;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  height: 70%;
`;

export default Icon;
