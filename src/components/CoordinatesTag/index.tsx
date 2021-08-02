import React from "react";
import styled from "styled-components";

interface CoordinatesTagProps {
  left: number
  top: number
}

const CoordinatesTag: React.FC<CoordinatesTagProps> = ({
  left,
  top,
}): React.ReactElement => {
  return <Tag>{`x: ${left} y: ${top}`}</Tag>;
};

const Tag = styled.div`
  width: 90px;
  height: 20px;
  top: -30px;
  left: -30px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  background-color: ${({ theme }) => theme.gray};
  color: white;
  font-size: 0.8rem;
  font-weight: bold;
  border-radius: 5px;
  opacity: 0.8;
`;

export default CoordinatesTag;
