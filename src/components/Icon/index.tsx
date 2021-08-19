import React from "react";
import styled from "styled-components";

interface IconProps {
  top?: number;
  right?: number;
  left?: number;
  bottom?: number;
  onClick?: (ev: React.MouseEvent) => void;
  onMouseDown?: (ev: React.MouseEvent<HTMLDivElement>) => void;
  onMouseUp?: () => void;
}

const Icon: React.FC<IconProps> = ({
  children,
  top,
  right,
  onClick,
  onMouseDown,
  onMouseUp,
}): React.ReactElement => {
  return (
    <IconBackground
      top={top}
      right={right}
      onClick={onClick}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
    >
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
  top: ${({ top }) => top && `${top}px`};
  right: ${({ right }) => right && `${right}px`};
  left: ${({ left }) => left && `${left}px`};
  bottom: ${({ bottom }) => bottom && `${bottom}px`};
  background-color: #ffffff;
  position: absolute;
  border-radius: 2px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.082), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  z-index: 12;
`;

const IconImage = styled.div`
  color: #bdb3b3;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  height: 70%;
`;

export default Icon;
