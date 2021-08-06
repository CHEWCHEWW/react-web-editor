import React from "react";
import styled from "styled-components";
import { FaBold, FaItalic } from "react-icons/fa";

import DropDown from "../DropDown";
import Slider from "../Slider";

const data = [{ id: "0", label: "글꼴 1" }, { id: "1", label: "글꼴 2" }];

const MenuBoard: React.FC = (): React.ReactElement => {
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
        옵션(컬러, bold, 이탤릭)
        <FaBold />
        <FaItalic />
      </MenuOption>
      <MenuOption>
        정렬
      </MenuOption>
      <MenuOption>
        효과
      </MenuOption>
    </Board>
  );
};

const Board = styled.div`
  display: flex;
  flex-direction: column;
  width: 10rem;
  height: 15rem;
  top: 0rem;
  right: -15rem;
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

export default MenuBoard;
