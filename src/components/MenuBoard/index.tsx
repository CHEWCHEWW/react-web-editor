import React from "react";
import styled from "styled-components";
import { AiOutlineAlignCenter, AiOutlineAlignLeft, AiOutlineAlignRight } from "react-icons/ai";
import { FaBold, FaItalic, FaUnderline } from "react-icons/fa";
import { IoIosColorPalette } from "react-icons/io";

import DropDown from "../DropDown";
import EditorButton from "../EditorButton";
import MenuOption from "../MenuOption";
import Slider from "../Slider";
import { SLIDER_MAX } from "../../constants/ui";
import useColor from "../../hooks/useColor";
import useSlider from "../../hooks/useSlider";
 
interface MenuBoardProps {
  color?: string
  onColorChange: (ev: React.ChangeEvent<HTMLInputElement>) => void
  onValueChange: () => void
  sliderRef: React.Ref<HTMLInputElement>
  value: number
}

const data = [{ id: "0", label: "글꼴 1" }, { id: "1", label: "글꼴 2" }];

const MenuBoard: React.FC = (): React.ReactElement => {
  const {
    color,
    handleColorChange,
  } = useColor();
  
  const {
    sliderRef,
    value,
    handleValueChange,
  } = useSlider(SLIDER_MAX);

  const handleInputChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    ev.preventDefault();

    handleColorChange(ev);

    document.execCommand("foreColor", false, color);
  };

  const handleSliderChange = () => {
    handleValueChange();

    document.execCommand("fontSize", false, String(value * 7));
  };

  return (
    <Board>
      <MenuHeader>
        설정
      </MenuHeader>
      <MenuOption name={"글꼴"}>
        <DropDown items={data} />
      </MenuOption>
      <MenuOption name={"크기"}>
        <Slider 
          onChange={handleSliderChange} 
          sliderRef={sliderRef} 
          value={value} 
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
          <Input type="color" onChange={handleInputChange} />
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
        <Button>
          <DownSideText>
            A
          </DownSideText>
        </Button>
        <Button>
          <TwoColorText>
            A
          </TwoColorText>
        </Button>
        <Button>
          <OutLineText>
            A
          </OutLineText>
        </Button>
        <Button>
          <BoxText>
            A
          </BoxText>
        </Button>
        <Button>
          <BubbleShadowText>
            A
          </BubbleShadowText>
        </Button>
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
  background-color: #F8F8F6;
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
  background-color: #E2E2DA;
  color: #9c9393;
  font-weight: 600;
  font-size: 0.7rem;
`;

const Button = styled.div`
  display: flex;
  width: 1.5rem;
  height: 1.5rem;
  padding: 0.2rem 0.1rem;
  color: #6c9eeb;
  align-items: center;
  justify-content: center;

  :hover {
    background-color: #f3f0f0;
  }
`;

const Input = styled.input`
  position: absolute;
  width: 20px;
  opacity: 0;
`;

const TwoColorText = styled.div`
  color: #3899ec;
  font-size: 26px;
  font-weight: 600;
  text-shadow: rgb(10 189 240 / 30%) 3px 3px 0px, rgb(254 1 1 / 30%) -2px -2px 0px;
`;

const BoxText = styled.div`
  color: #3899ec;
  font-size: 26px;
  border-radius: 8px;
  text-shadow: rgb(238, 235, 84) 3px 3px 0px, rgba(0, 0, 0, 0.2) 3px 3px 0px;  
  border: none;
  outline: none;
  font-weight: 600;
`;

const DownSideText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 26px;
  font-weight: 600;
  color: #2c6fbb;
  text-shadow: 
    0px 4px 3px rgba(0,0,0,0.4),
    0px 8px 13px rgba(0,0,0,0.1),
    0px 18px 23px rgba(0,0,0,0.1);
`;

const OutLineText = styled.div`
  font-size: 26px;
  font-weight: 600;
  -webkit-text-stroke: 1px white;
  text-shadow: 0px 1px 4px #3899ec;
  color: #2c6fbb;
`;

const BubbleShadowText = styled.div`
  font-size: 26px;
  font-weight: 600;
  text-shadow: 0 4px 8.896px #247aca, 0 -2px 1px #6499fd;
  /* letter-spacing: -4px; */
  color: #5fb4e6;
`;

export default MenuBoard;
