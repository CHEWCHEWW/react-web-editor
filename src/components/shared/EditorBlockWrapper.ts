import styled from "styled-components";

import { ComponentStyle } from "../../types/ui";

const EditorBlockWrapper = styled.div.attrs<ComponentStyle>(
  ({ left, top, width, height }) => ({
    style: {
      top: top && `${top}px`,
      left: left && `${left}px`,
      width: width && `${width}px`,
      height: left && `${height}px`,
    },
  })
)<ComponentStyle>`
  position: fixed;
`;

export default EditorBlockWrapper;
