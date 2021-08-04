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
  width: 50px;
  height: 50px;
`;

export default Icon;
