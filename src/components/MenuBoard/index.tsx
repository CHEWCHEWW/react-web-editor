import React from "react";
import styled from "styled-components";
import { AiOutlineAlignCenter, AiOutlineAlignLeft, AiOutlineAlignRight } from "react-icons/ai";
import { FaBold, FaItalic, FaUnderline } from "react-icons/fa";
import { IoIosColorPalette } from "react-icons/io";

import { FONT_STYLES, TEXT_STYLES } from "../../constants/ui";
import DropDown from "../Dropdown";
import EditorButton from "../EditorButton";
import MenuButton from "../shared/MenuButton";
import MenuOption from "../MenuOption";
import Slider from "../Slider";
import { BoxShadow } from "../../theme/BoxShadow";
import { BoxInnerShadow } from "../../theme/BoxInnerShadow";

interface TextButtonProps {
  isClicked: boolean;
}

interface MenuBoardProps {
  color?: string;
  onColorChange: (ev: React.ChangeEvent<HTMLInputElement>) => void;
  onSliderChange: () => void;
  sliderRef: React.Ref<HTMLInputElement>;
  sliderValue: number;
  fontStyle: string;
  onStyleButtonClick: (ev: React.MouseEvent<HTMLButtonElement>) => void;
  onFontButtonClick: (ev: React.MouseEvent<HTMLDivElement>) => void;
}

const MenuBoard: React.FC<MenuBoardProps> = ({
  sliderRef,
  fontStyle,
  onColorChange,
  onSliderChange,
  sliderValue,
  onStyleButtonClick,
  onFontButtonClick,
}): React.ReactElement => {
  return (
    <Board>
      <MenuOption name={"Font"}>
        <DropDown items={FONT_STYLES} onClick={onFontButtonClick} />
      </MenuOption>
      <MenuOption name={"Size"}>
        <Slider
          onChange={onSliderChange}
          sliderRef={sliderRef}
          value={sliderValue}
        />
      </MenuOption>
      <MenuOption name={"Option"}>
        <EditorButton name={"bold"} isShowing={false}>
          <FaBold />
        </EditorButton>
        <EditorButton name={"italic"} isShowing={true}>
          <FaItalic />
        </EditorButton>
        <MenuButton>
          <IoIosColorPalette />
          <Input type="Color" onChange={onColorChange} />
        </MenuButton>
        <EditorButton name={"underline"} isShowing={false}>
          <FaUnderline />
        </EditorButton>
      </MenuOption>
      <MenuOption name={"Sort"}>
        <EditorButton name={"justifyLeft"} isShowing={false}>
          <AiOutlineAlignLeft />
        </EditorButton>
        <EditorButton name={"justifyCenter"} isShowing={false}>
          <AiOutlineAlignCenter />
        </EditorButton>
        <EditorButton name={"justifyRight"} isShowing={false}>
          <AiOutlineAlignRight />
        </EditorButton>
      </MenuOption>
      <MenuOption name={"Effect"}>
        {TEXT_STYLES.map((item) => (
          <TextButton
            key={item}
            className={item}
            name={item}
            isClicked={item === fontStyle ? true : false}
            onClick={onStyleButtonClick}
          >
            A
          </TextButton>
        ))}
      </MenuOption>
    </Board>
  );
};

const Board = styled.div`
  display: flex;
  flex-direction: column;
  width: 12rem;
  height: 16.5rem;
  top: -2rem;
  right: -15rem;
  padding: 0.5rem;
  background-color: #ffffff;
  position: absolute;
  font-family: "Roboto", sans-serif;
  border-radius: 5px;
  box-shadow: 1px 1px 7px #E0D9DC, -2px -2px 1px #FFFFFF;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  font-size: small;
  z-index: 13;
`;

const Input = styled.input`
  position: absolute;
  width: 20px;
  opacity: 0;
`;

const TextButton = styled.button<TextButtonProps>`
  display: flex;
  width: 2rem;
  height: 2rem;
  margin: 0 auto;
  padding: 0.2rem 0.1rem;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: #FB99BC;
  cursor: pointer;
  transition: all 0.5s ease;
  font-size: 21px;
  border: 0px;
  background-color: transparent;
  ${({ isClicked }) => isClicked ? BoxInnerShadow : BoxShadow};

  :hover {
    background-color: #f3f0f0;
  }

  :active {
    ${BoxInnerShadow};
    color: #FC70A3;
  }
`;

export default MenuBoard;
