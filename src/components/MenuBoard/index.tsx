import React from "react";
import styled from "styled-components";
import { AiOutlineAlignCenter, AiOutlineAlignLeft, AiOutlineAlignRight } from "react-icons/ai";
import { FaBold, FaItalic, FaUnderline } from "react-icons/fa";
import { IoIosColorPalette } from "react-icons/io";

import { FONT_STYLES, TEXT_STYLES } from "../../constants/ui";
import DropDown from "../DropDown";
import EditorButton from "../EditorButton";
import MenuOption from "../MenuOption";
import Slider from "../Slider";

interface MenuBoardProps {
  color?: string
  onColorChange: (ev: React.ChangeEvent<HTMLInputElement>) => void
  onSliderChange: () => void
  sliderRef: React.Ref<HTMLInputElement>
  sliderValue: number
  onClick: (ev: React.MouseEvent<HTMLButtonElement>) => void
  onFontClick: (ev: React.MouseEvent<HTMLDivElement>) => void
}

const MenuBoard: React.FC<MenuBoardProps> = ({
  sliderRef,
  onColorChange,
  onSliderChange,
  sliderValue,
  onClick,
  onFontClick,
}): React.ReactElement => {
  return (
    <Board>
      <MenuHeader>
        설정
      </MenuHeader>
      <MenuOption name={"글꼴"}>
        <DropDown items={FONT_STYLES} onClick={onFontClick} />
      </MenuOption>
      <MenuOption name={"크기"}>
        <Slider 
          onChange={onSliderChange} 
          sliderRef={sliderRef} 
          value={sliderValue} 
        />
      </MenuOption>
      <MenuOption name={"옵션"}>
        <EditorButton name={"bold"} isShowing={false}>
          <FaBold />
        </EditorButton>
        <EditorButton name={"italic"} isShowing={true}>
          <FaItalic />
        </EditorButton>
        <Button>
          <IoIosColorPalette />
          <Input type="color" onChange={onColorChange} />
        </Button>
        <EditorButton name={"underline"} isShowing={false}>
          <FaUnderline />
        </EditorButton>
      </MenuOption>
      <MenuOption name={"정렬"}>
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
      <MenuOption name={"효과"}>
        {TEXT_STYLES.map((item) => (
          <TextStyles key={item} name={item} onClick={onClick}>
            <div className={item}>
              A
            </div>
          </TextStyles>
        ))}
      </MenuOption>
    </Board>
  );
};

const Board = styled.div`
  display: flex;
  flex-direction: column;
  width: 11rem;
  top: -2rem;
  right: -15rem;
  padding: 0.5rem;
  background-color: #f8f8f6;
  position: absolute;
  font-family: "NanumBarunGothic";
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  font-size: small;
  z-index: 10;
`;

const MenuHeader = styled.div`
  display: flex;
  width: 100%;
  height: 1.2rem;
  align-items: center;
  border-radius: 2px;
  background-color: #e2e2da;
  color: #9c9393;
  font-weight: 600;
  font-size: 0.7rem;
`;

const Button = styled.button`
  display: flex;
  width: 1.5rem;
  height: 1.5rem;
  padding: 0.2rem 0.1rem;
  color: #6c9eeb;
  align-items: center;
  justify-content: center;
  background-color: white;
  border: 0px;

  :hover {
    background-color: #f3f0f0;
  }
`;

const Input = styled.input`
  position: absolute;
  width: 20px;
  opacity: 0;
`;

const TextStyles = styled.button`
  display: flex;
  width: 1.5rem;
  height: 1.5rem;
  padding: 0.2rem 0.1rem;
  color: #6c9eeb;
  align-items: center;
  justify-content: center;
  background-color: white;
  border: 0px;
  color: #3899ec;
  font-size: 26px;

  :hover {
    background-color: #f3f0f0;
  }

  .twin-color-text {
    font-weight: 600;
    text-shadow: rgb(10 189 240 / 30%) 3px 3px 0px, rgb(254 1 1 / 30%) -2px -2px 0px;
  }

  .box-text {
    border-radius: 8px;
    text-shadow: rgb(238, 235, 84) 3px 3px 0px, rgba(0, 0, 0, 0.2) 3px 3px 0px;  
    border: none;
    outline: none;
    font-weight: 600;
  }

  .down-side-text {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    text-shadow: 
      0px 4px 3px rgba(0,0,0,0.4),
      0px 8px 13px rgba(0,0,0,0.1),
      0px 18px 23px rgba(0,0,0,0.1);
  }

  .out-line-text {
    font-weight: 600;
    -webkit-text-stroke: 1px white;
    text-shadow: 0px 1px 4px #3899ec;
  }

  .bubble-shadow-text {
    font-weight: 600;
    text-shadow: 0 4px 8.896px #247aca, 0 -2px 1px #6499fd;
    color: #5fb4e6;
  }
`;

export default MenuBoard;
