import React from "react";
import styled from "styled-components";

import ColorPicker from "../ColorPicker";
import { ColorProps, EditorProps } from "../../types/ui";
import EditorBlock from "../EditorBlock";
import { EDITOR_ICON_RIGHT, FIRST_EDITOR_ICON_TOP, SECOND_EDITOR_ICON_TOP } from "../../constants/ui";
import ImageUploader from "../ImageUploader";
import useColor from "../../hooks/useColor";
import useImage from "../../hooks/useImage";
import useMouseEvent from "../../hooks/useMouseEvent";

interface StyleEditorBlockProps extends EditorProps {
  initialColor?: string
  initialImage?: string
}

const StyleEditorBlock: React.FC<StyleEditorBlockProps> = ({
  width,
  height,
  top,
  left,
  parentStyle,
  unit,
  children,
  initialColor,
  initialImage,
}): React.ReactElement => {
  const { imageSrc, handleFileChange } = useImage(initialImage);
  const { color, handleColorChange } = useColor(initialColor);

  const {
    isClicked,
    isMouseOver,
    handleMouseClick,
    handleMouseOver,
    handleMouseLeave,
    componentRef,
  } = useMouseEvent();

  return (
    <EditorBlock
      componentRef={componentRef}
      width={width}
      height={height}
      top={top}
      left={left}
      unit={unit}
      parentStyle={parentStyle}
      onMouseClick={handleMouseClick}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      isMouseOver={isMouseOver}
      isClicked={isClicked}
    >
      {isMouseOver &&
        <>
          <ImageUploader
            onChange={handleFileChange}
            top={FIRST_EDITOR_ICON_TOP}
            right={EDITOR_ICON_RIGHT}
          />
          <ColorPicker
            onChange={handleColorChange}
            top={SECOND_EDITOR_ICON_TOP}
            right={EDITOR_ICON_RIGHT}
            value={color}
          />
        </>
      }
      {imageSrc && <UploadedImage src={imageSrc} />}
      <CustomBlock color={color}>
        {children && children}
      </CustomBlock>
    </EditorBlock>
  );
};

const CustomBlock = styled.div.attrs<ColorProps>(
  ({ color }) => ({
    style: {
      backgroundColor: color.length !== 0 && color,
    },
  })
)<ColorProps>`
  width: 100%;
  height: 100%;
  position: absolute;
`;

const UploadedImage = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 8;
`;

export default StyleEditorBlock;
