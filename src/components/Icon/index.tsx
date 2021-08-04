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
  width: 25px;
  height: 25px;
  top: 0px;
  right: -28px;
  background-color: #F8F8F6;
  position: absolute;
  border-radius: 6px;
`;

export default Icon;
