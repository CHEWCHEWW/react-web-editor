import React from "react";
import styled from "styled-components";

import ColorPicker from "../ColorPicker";
import EditorBlock from "../EditorBlock";
import { ColorProps, EditorProps } from "../../types/ui";
import ImageUploader from "../ImageUploader";
import useColor from "../../hooks/useColor";
import useImage from "../../hooks/useImage";
import useMouseEvent from "../../hooks/useMouseEvent";

const StyleEditorBlock: React.FC<EditorProps> = ({
  width,
  height,
  top,
  left,
  minWidth,
  minHeight,
  parentStyle,
  children,
}): React.ReactElement => {
  const { imageSrc, handleFileChange } = useImage();
  const { color, handleColorChange } = useColor();
  
  const {
    isClicked,
    isMouseOver,
    handleMouseClick,
    handleMouseOver,
    handleMouseLeave,
  } = useMouseEvent();

  return (
    <EditorBlock 
      width={width}
      height={height}
      top={top}
      left={left}
      minWidth={minWidth}
      minHeight={minHeight}
      parentStyle={parentStyle}
      onMouseClick={handleMouseClick}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      isMouseOver={isMouseOver}
      isClicked={isClicked}
    >
      {isMouseOver &&
        <>
          <ImageUploader onChange={handleFileChange} />
          <ColorPicker onChange={handleColorChange} />
        </>
      }
      {imageSrc && <UploadedImage src={imageSrc} />}
      {color && <CustomBlock color={color} />}
      {children ? children : <CustomBlock color={color} />}
    </EditorBlock>
  );
};

const CustomBlock = styled.div<ColorProps>`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: ${({ color }) => color ? color : "white"};
`;

const UploadedImage = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 8;
`;

export default StyleEditorBlock;
