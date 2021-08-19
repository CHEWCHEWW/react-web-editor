import React, { useState } from "react";

import { ColorProps } from "../types/ui";

interface UseColorProps {
  initialColor?: string;
}

interface UseColorReturns extends ColorProps {
  color: string;
  handleColorChange: (ev: React.ChangeEvent<HTMLInputElement>) => void;
  handleFontColorChange: (ev: React.ChangeEvent<HTMLInputElement>) => void;
}

const useColor = ({ initialColor }: UseColorProps): UseColorReturns => {
  const [color, setColor] = useState(initialColor || "#00ff0000");

  const handleColorChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setColor(ev.target.value);
  };

  const handleFontColorChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    ev.preventDefault();

    handleColorChange(ev);
    document.execCommand("foreColor", false, color);
  };

  return {
    color,
    handleColorChange,
    handleFontColorChange,
  };
};

export default useColor;
