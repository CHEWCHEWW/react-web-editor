import React from "react";
import styled from "styled-components";

interface EditorButtonProps {
  name: string
  isShowing: boolean
  value?: string
  onChange?: (ev: React.ChangeEvent<HTMLInputElement>) => void
}

const EditorButton: React.FC<EditorButtonProps> = ({
  name,
  isShowing,
  value,
  children,
  // onChange,
}): React.ReactElement => {
  const handleTextStyleChange = (ev: React.MouseEvent<HTMLDivElement>) => {
    ev.preventDefault();
    
    // onChange && onChange(ev);
    document.execCommand(name, isShowing, value);
  };

  return (
    <Button onMouseDown={handleTextStyleChange}>
      {children}
    </Button>
  );
};

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

export default EditorButton;
