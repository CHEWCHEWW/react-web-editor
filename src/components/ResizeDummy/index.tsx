import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { ComponentStyle, ResizeProps } from "../../types/ui";
import { DIRECTIIONS } from "../../constants/location";
import useResize from "../../hooks/useResize";

const ResizeDummy: React.FC<ResizeProps> = ({
  width,
  height,
  top,
  left,
  minWidth = 1,
  minHeight = 1,
}): React.ReactElement => {
  const [componentStyle, setComponentStyle] = useState<ResizeProps>({
    width,
    height,
    top,
    left,
    minWidth,
    minHeight,
  });
  const {
    handleMouseMove,
    handleMouseDown,
    handleMouseUp,
    isResizing,
  } = useResize({ componentStyle, onResize: setComponentStyle });

  useEffect(() => {
    if (!isResizing) {
      return;
    }

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [handleMouseMove, isResizing, handleMouseUp]);

  return (
    <Wrapper
      width={componentStyle.width}
      height={componentStyle.height}
      top={componentStyle.top}
      left={componentStyle.left}
      onMouseUp={handleMouseUp}
    >
      <ResizeHandlersWrapper>
        {DIRECTIIONS.map((item) => (
          <div key={item} className={item} onMouseDown={handleMouseDown} />
        ))}
      </ResizeHandlersWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div.attrs<ComponentStyle>(
  ({ width, height, left, top }) => ({
    style: {
      top: `${top}px`,
      left: `${left}px`,
      width: `${width}px`,
      height: `${height}px`,
    },
  })
)<ComponentStyle>`
  position: absolute;
  background-color: skyblue;
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
