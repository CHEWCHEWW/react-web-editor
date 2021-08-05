import React from "react";
import styled from "styled-components";

const Icon: React.FC = ({ children }): React.ReactElement => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  top: 0px;
  right: -21px;
  background-color: #F8F8F6;
  position: absolute;
  border-radius: 1px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
`;

export default Icon;
