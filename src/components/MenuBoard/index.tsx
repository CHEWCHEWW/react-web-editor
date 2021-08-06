import React from "react";
import styled from "styled-components";
import { AiOutlineAlignCenter, AiOutlineAlignLeft, AiOutlineAlignRight } from "react-icons/ai";
import { FaBold, FaItalic, FaUnderline } from "react-icons/fa";
import { IoIosColorPalette } from "react-icons/io";

import ColorPicker from "../ColorPicker";
import DropDown from "../DropDown";
import Icon from "../Icon";
import Slider from "../Slider";
import useColor from "../../hooks/useColor";

const data = [{ id: "0", label: "글꼴 1" }, { id: "1", label: "글꼴 2" }];

const MenuBoard: React.FC = (): React.ReactElement => {
  const { color, handleColorChange } = useColor();

  return (
    <Board>
      <MenuHeader>
        설정
      </MenuHeader>
      <MenuOption>
        글꼴
        <DropDown items={data} />
      </MenuOption>
      <MenuOption>
        크기
        <Slider />
      </MenuOption>
      <MenuOption>
        옵션
        <Button>
          <FaBold />
        </Button>
        <Button>
          <FaItalic />
        </Button>
        <Button>
          <IoIosColorPalette />
        </Button>
        <Button>
          <FaUnderline />
        </Button>
      </MenuOption>
      <MenuOption>
        정렬
        <Button>
          <AiOutlineAlignLeft />
        </Button>
        <Button>
          <AiOutlineAlignCenter />
        </Button>
        <Button>
          <AiOutlineAlignRight />
        </Button>
      </MenuOption>
      <MenuOption>
        효과
        <TwoColorText>
          A
        </TwoColorText>
        <BoxText>
          A
        </BoxText>
        <DownSideText>
          A
        </DownSideText>
        <OutLineText>
          A
        </OutLineText>
        <BubbleShadowText>
          A
        </BubbleShadowText>
      </MenuOption>
    </Board>
  );
};

const Board = styled.div`
  display: flex;
  flex-direction: column;
  width: 10rem;
  height: 15rem;
  top: -2rem;
  right: -12rem;
  background-color: #F8F8F6;
  position: absolute;
  font-family: "MaruBuri-Regular";
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  font-size: small;
  z-index: 10;
`;

const MenuHeader = styled.div`
  display: flex;
  width: 10rem;
  height: 2rem;
  align-items: center;
  border-radius: 5px 5px 0 0;
  background-color: #6c9eeb;
  color: white;
`;

const MenuOption = styled.div`
  display: flex;
  width: 10rem;
  max-height: 2rem;
  border-bottom: 1px solid #D8D8D6;
  color: #555550;
`;

const Button = styled.div`
  display: flex;
  width: 1.5rem;
  height: 1.5rem;
  margin: 0.2rem 0.1rem;
  color: #6c9eeb;
  align-items: center;
  justify-content: center;

  :hover {
    background-color: black;
  }
`;

const TwoColorText = styled.div`
  color: #3899ec;
  font-size: 26px;
  font-weight: 600;
  text-shadow: rgb(10 189 240 / 30%) 3px 3px 0px, rgb(254 1 1 / 30%) -3px -3px 0px;
`;

const BoxText = styled.div`
  color: #3899ec;
  font-size: 26px;
  border-radius: 8px;
  text-shadow: rgb(238, 235, 84) 3px 3px 0px, rgba(0, 0, 0, 0.2) 6px 6px 0px;  
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
  letter-spacing: -4px;
  color: #5fb4e6;
`;

export default MenuBoard;
