import React from "react";
import styled from "styled-components";
import { BoxInnerShadow } from "../../theme/BoxInnerShadow";

import { convertPointsToPixel } from "../../utils/ui";

interface CoordinatesTagProps {
  left: number;
  top: number;
  unit: string;
}

const CoordinatesTag: React.FC<CoordinatesTagProps> = ({
  left,
  top,
  unit,
}): React.ReactElement => {
  const { clientX, clientY } = convertPointsToPixel(unit, left, top);

  return <Tag>{`x: ${clientX.toFixed(1)} y: ${clientY.toFixed(1)}`}</Tag>;
};

const Tag = styled.div`
  min-width: 110px;
  max-height: 20px;
  top: -25px;
  left: -25px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  background-color: #ffffff;
  color: #c2b5b5;
  font-size: 0.8rem;
  font-weight: bold;
  border-radius: 5px;
  z-index: 5;
  ${BoxInnerShadow};
`;

export default CoordinatesTag;
