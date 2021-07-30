import React from "react";
import styled from "styled-components";

import { ComponentLocation } from "../../types/ui";
import { DIRECTIIONS } from "../../constants/location";

interface ComponentStyleInformation extends ComponentLocation {
  width: number
  height: number
}

const ResizeDummy: React.FC<ComponentStyleInformation> = ({
  width,
  height,
  top,
  left,
}): React.ReactElement => {
  return (
    <Wrapper
      width={width}
      height={height}
      top={top}
      left={left}
    >
      <ResizeHandlersWrapper>
        {DIRECTIIONS.map((item) => (
          <div key={item} className={item} />
        ))}
      </ResizeHandlersWrapper>
    </Wrapper>
  );
};

const Wrapper =
  styled.div.attrs <
  ComponentStyleInformation >
  (({ width, height, left, top }) => ({
    style: {
      top: `${top}px`,
      left: `${left}px`,
      width: `${width}px`,
      height: `${height}px`,
    },
  })) <
  ComponentStyleInformation >
  `
  position: absolute;
`;

const ResizeHandlersWrapper = styled.div`
  .top-left {
    top: -3px;
    left: -3px;
    cursor: nw-resize;
  }

  .top-right {
    top: -3px;
    right: -3px;
    cursor: ne-resize;
  }

  .bottom-left {
    bottom: -3px;
    left: -3px;
    cursor: sw-resize;
  }

  .bottom-right {
    bottom: -3px;
    right: -3px;
    cursor: se-resize;
  }

  > * {
    width: 7px;
    height: 7px;
    background-color: red;
    position: absolute;
    z-index: 1;
  }
`;

export default ResizeDummy;
