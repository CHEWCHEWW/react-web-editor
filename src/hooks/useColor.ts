import React, { useState } from "react";

import { ColorProps } from "../types/ui";

interface UseColorReturns extends ColorProps {
  color: string
  handleColorChange: (ev: React.ChangeEvent<HTMLInputElement>) => void
}

const useColor = (): UseColorReturns => {
  const [color, setColor] = useState("");

  const handleColorChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setColor(ev.target.value);
  };

  return { color, handleColorChange };
};

export default useColor;
