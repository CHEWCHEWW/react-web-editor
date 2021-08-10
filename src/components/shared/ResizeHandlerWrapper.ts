import styled from "styled-components";

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
    width: 3px;
    height: 3px;
    border: 1px solid gray;
    position: absolute;
    z-index: 10;
  }
`;

export default ResizeHandlersWrapper;
