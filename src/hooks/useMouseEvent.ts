import { useState } from "react";

import { ClickState } from "../types/handler";

interface UseMouseEventReturns extends ClickState {
  isMouseOver: boolean
  handleMouseClick: ()=> void
  handleMouseOver: ()=> void
  handleMouseLeave: ()=> void
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
    onClicked: setIsClicked,
  };
};

export default useMouseEvent;
