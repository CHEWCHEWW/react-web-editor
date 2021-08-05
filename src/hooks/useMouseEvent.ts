import { useState } from "react";

import { Dispatcher } from "../types/ui";

interface UseMouseEventReturns {
  isClicked: boolean
  isMouseOver: boolean
  handleMouseClick: ()=> void
  handleMouseOver: ()=> void
  handleMouseLeave: ()=> void
  setIsClicked: Dispatcher<boolean>
}

const useMouseEvent = (): UseMouseEventReturns => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [isMouseOver, setIsMouseOver] = useState<boolean>(false);

  const handleMouseClick = (): void => {
    setIsClicked((prev) => !prev);
  };

  const handleMouseOver = (): void => {
    setIsMouseOver(true);
  };

  const handleMouseLeave = (): void => {
    setIsMouseOver(false);
  };

  return {
    isClicked,
    isMouseOver,
    handleMouseClick,
    handleMouseOver,
    handleMouseLeave,
    setIsClicked,
  };
};

export default useMouseEvent;
