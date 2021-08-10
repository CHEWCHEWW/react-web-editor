import React, { useState } from "react";

import { ColorProps } from "../types/ui";

interface UseColorReturns extends ColorProps {
  color: string
  handleColorChange: (ev: React.ChangeEvent<HTMLInputElement>) => void
  handleFontColorChange: (ev: React.ChangeEvent<HTMLInputElement>) => void
}

const useColor = (): UseColorReturns => {
  const [color, setColor] = useState("#ffffff");
  
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
