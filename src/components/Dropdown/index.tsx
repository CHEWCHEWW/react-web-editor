import React, { useState } from "react";
import styled from "styled-components";
import { BiChevronRight } from "react-icons/bi";

import { DEFAULT_DROP_DOWN_MESSAGE } from "../../constants/ui";

interface DropDownContent {
  id: string
  label: string
}

interface DropDownProps {
  items: DropDownContent[]
}

interface DropDownStyleProps {
  isDropDownOpen: boolean
}

interface DropDownMarkProps {
  isSelected: boolean
}

const DropDown: React.FC<DropDownProps> = ({ items }): React.ReactElement => {
  const [isDropDownOpen, setIsDropDownOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<DropDownContent>({
    id: "",
    label: "",
  });

  const handleDropDownClick = () => {
    setIsDropDownOpen((prev) => !prev);
  };

  const handleItemClick = (ev: React.MouseEvent<HTMLDivElement>) => {
    const id = ev.currentTarget.id;
    const item = items.find((item) => item.id === id);
    
    if (item) {
      setSelectedItem(item);
    }
  };

  return (
    <DropDownWrapper>
      <DropDownHeader onClick={handleDropDownClick}>
        {selectedItem.label.length === 0 ? DEFAULT_DROP_DOWN_MESSAGE : selectedItem.label}
        <DropDownIcon isDropDownOpen={isDropDownOpen}>
          <BiChevronRight />
        </DropDownIcon>
      </DropDownHeader>
      <DropDownList isDropDownOpen={isDropDownOpen}>
        {items.map((item) => (
          <DropDownItem onClick={handleItemClick} id={item.id} key={item.id}>
            <DropDownItemDot isSelected={item.id == selectedItem.id}>•</DropDownItemDot>
            {item.label}
          </DropDownItem>
        ))}
      </DropDownList>
    </DropDownWrapper>
  );
};

const DropDownHeader = styled.div`
  padding: 15px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DropDownIcon = styled.div<DropDownStyleProps>`
  font-size: 13px;
  color: #91A5BE;
  transform: ${({ isDropDownOpen }) => isDropDownOpen ? "rotate(90deg)" : "rotate(0deg)"};;
  transition: all .2s ease-in-out;
`;

const DropDownList = styled.div<DropDownStyleProps>`
  padding: 5px;
  border-top: 1px solid #E5E8EC;
  display: ${({ isDropDownOpen }) => isDropDownOpen ? "block" : "none"};
`;

const DropDownItem = styled.div`
  padding: 10px;

  :hover {
    cursor: pointer;
  }
`;

const DropDownItemDot = styled.span<DropDownMarkProps>`
  opacity: ${({ isSelected }) => isSelected ? 1 : 0};
  color: #91A5BE;
  transition: all .2s ease-in-out;
`;

const DropDownWrapper = styled.div`
  width: 300px;
  border-radius: 10px;
  box-shadow: 0 10px 25px rgba(0,0,0,.1);
  background-color: white;
`;

export default DropDown;
