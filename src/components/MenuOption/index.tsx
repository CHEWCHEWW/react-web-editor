import React from "react";
import styled from "styled-components";

interface MenuOptionProps {
  name: string
}

const MenuOption: React.FC<MenuOptionProps> = ({ 
  name, 
  children 
}): React.ReactElement => {
  return (
    <MenuRow>
      <ManuNameTag>
        {name}
      </ManuNameTag>
      <ManuRowContent>
        {children}
      </ManuRowContent>
    </MenuRow>
  );
};

const MenuRow = styled.div`
  display: flex;
  width: 100%;
  max-height: 2rem;
  border-bottom: 1px solid #D8D8D6;
  color: #555550;
`;

const ManuNameTag = styled.div`
  display: flex;
  align-items: center;
  margin: auto 0.5rem;
  color: #9c9393;
  font-weight: 600;
  font-size: 0.7rem;
`;

const ManuRowContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
`;

export default MenuOption;
