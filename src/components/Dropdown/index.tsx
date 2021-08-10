import React from "react";
import styled from "styled-components";
import { BiChevronRight } from "react-icons/bi";

import { DEFAULT_DROP_DOWN_MESSAGE } from "../../constants/ui";
import { DropDownProps } from "../../types/ui";
import useDropDown from "../../hooks/useDropDown";

interface DropDownStyleProps {
  isDropDownOpen: boolean
}

interface DropDownMarkProps {
  isSelected: boolean
}

const DropDown: React.FC<DropDownProps> = ({ 
  items,
  onClick,
}): React.ReactElement => {
  const {
    handleItemClick,
    handleDropDownClick,
    isDropDownOpen,
    selectedItem,
  } = useDropDown({ items });

  const handleDropDownListClick = (ev: React.MouseEvent<HTMLDivElement>): void => {
    handleItemClick(ev);

    onClick && onClick(ev);
  };

  return (
    <DropDownBoard>
      <DropDownHeader onClick={handleDropDownClick}>
        {selectedItem.label.length === 0 ? DEFAULT_DROP_DOWN_MESSAGE : selectedItem.label}
        <DropDownIcon isDropDownOpen={isDropDownOpen}>
          <BiChevronRight />
        </DropDownIcon>
      </DropDownHeader>
      <DropDownList isDropDownOpen={isDropDownOpen}>
        {items.map((item) => (
          <DropDownItem 
            onClick={handleDropDownListClick} 
            id={item.id} 
            key={item.id} 
            className={item.id}
          >
            <DropDownItemDot isSelected={item.id === selectedItem.id}>•</DropDownItemDot>
            {item.label}
          </DropDownItem>
        ))}
      </DropDownList>
    </DropDownBoard>
  );
};

const DropDownBoard = styled.div`
  width: 8rem;
  border-radius: 5px;
  background-color: #f8f8f6;
  font-size: 0.8rem;
  z-index: 10;
`;

const DropDownHeader = styled.div`
  display: flex;
  height: 2rem;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const DropDownList = styled.div<DropDownStyleProps>`
  width: 12rem;
  display: ${({ isDropDownOpen }) => isDropDownOpen ? "block" : "none"};
  padding: 5px;
  background-color: #fdfdfd;
  box-shadow: 0 10px 10px -5px rgba(0, 0, 0, 0.1);  
  border-radius: 5px;
`;

const DropDownIcon = styled.div<DropDownStyleProps>`
  color: #91A5BE;
  transform: ${({ isDropDownOpen }) => isDropDownOpen ? "rotate(90deg)" : "rotate(0deg)"};
  transition: all .2s ease-in-out;
`;

const DropDownItem = styled.div`
  padding: 10px;
  font-weight: 1000;
  font-size: 25px;

  :hover {
    cursor: pointer;
  }
`;

const DropDownItemDot = styled.span<DropDownMarkProps>`
  padding-right: 5px;
  opacity: ${({ isSelected }) => isSelected ? 1 : 0};
  color: #91A5BE;
  transition: all .2s ease-in-out;
`;

export default DropDown;
