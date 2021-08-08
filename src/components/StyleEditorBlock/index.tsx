import React, { useState } from "react";
import styled from "styled-components";
import { BiText } from "react-icons/bi";
// import { IoMdExit } from "react-icons/io";

import ColorPicker from "../ColorPicker";
import EditorBlock from "../EditorBlock";
import { ColorProps, EditorProps } from "../../types/ui";
import Icon from "../Icon";
import ImageUploader from "../ImageUploader";
import { INITIAL_TEXT } from "../../constants/ui";
import MenuBoard from "../MenuBoard";
import TextEditor from "../TextEditor";
import useColor from "../../hooks/useColor";
import useImage from "../../hooks/useImage";
import useText from "../../hooks/useText";
import useMouseEvent from "../../hooks/useMouseEvent";

const StyleEditorBlock: React.FC<EditorProps> = ({
  width,
  height,
  top,
  left,
  parentStyle,
  children,
}): React.ReactElement => {
  const [html, setHtml] = useState(INITIAL_TEXT);

  const { imageSrc, handleFileChange } = useImage();
  const { color, handleColorChange } = useColor();
  const {
    ref,
    handleInputChange,
    innerHTML,
    handleEditingMode,
    isEditing,
  } = useText({ html, onChange: setHtml });

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
      parentStyle={parentStyle}
      onMouseClick={handleMouseClick}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      isMouseOver={isMouseOver}
      isClicked={isClicked}
    >
      {/* {isEditing && <MenuBoard />} */}
      {isMouseOver &&
        <>
          <ImageUploader onChange={handleFileChange} top={0} right={-21} />
          <ColorPicker onChange={handleColorChange} top={22} right={-21} />
          {/* <Icon top={44} right={-21} onClick={handleEditingMode}>
            <BiText />
          </Icon> */}
        </>
      }
      {imageSrc && <UploadedImage src={imageSrc} />}
      {color && <CustomBlock color={color} />}
      {children ? children : <CustomBlock color={color} />}
      {/* <TextEditor html={innerHTML} componentRef={ref} onChange={handleInputChange} isEditing={isEditing} /> */}
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
