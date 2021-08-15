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
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background-color: #FFFFFF;
    position: absolute;
    box-shadow: 0 3px 8px rgba(0, 0, 0, -.15), 0 1px 1px rgba(0, 0, 0, 0.16), 0 3px 1px rgba(0, 0, 0, 0.1);
    z-index: 10;
  }
`;

export default ResizeHandlersWrapper;
