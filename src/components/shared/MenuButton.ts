import styled from "styled-components";
import { BoxInnerShadow } from "../../theme/BoxInnerShadow";
import { BoxShadow } from "../../theme/BoxShadow";

const MenuButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
  padding: 0.2rem 0.1rem;
  margin: 0 0.3rem;
  color: #FB99BC;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.5s ease;
  ${BoxShadow};

  :hover {
    background-color: #f3f0f0;
  }

  :active {
    ${BoxInnerShadow};
    color: #FC70A3;
  }

  :hover {
    color: #FC70A3;
  }
`;

export default MenuButton;
