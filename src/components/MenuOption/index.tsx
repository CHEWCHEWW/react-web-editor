import React from "react";
import styled from "styled-components";

interface MenuOptionProps {
  name: string;
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
  flex-direction: column;
  width: 100%;
  height: 2.5rem;
  /* max-width: 5rem; */
  /* max-height: 2.5rem; */
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
  width: 100%;
`;

export default MenuOption;
