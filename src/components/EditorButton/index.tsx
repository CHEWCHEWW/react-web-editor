import React from "react";

import MenuButton from "../shared/MenuButton";

interface EditorButtonProps {
  name: string;
  isShowing: boolean;
  value?: string;
  onChange?: (ev: React.ChangeEvent<HTMLInputElement>) => void;
}

const EditorButton: React.FC<EditorButtonProps> = ({
  name,
  isShowing,
  value,
  children,
}): React.ReactElement => {
  const handleTextStyleChange = (ev: React.MouseEvent<HTMLDivElement>) => {
    ev.preventDefault();

    document.execCommand(name, isShowing, value);
  };

  return (
    <MenuButton onMouseDown={handleTextStyleChange}>
      {children}
    </MenuButton>
  );
};

export default EditorButton;
