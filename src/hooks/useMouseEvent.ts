import React, { useEffect ,useRef, useState } from "react";

import { ClickState } from "../types/handler";

interface UseMouseEventReturns extends ClickState {
  isMouseOver: boolean
  handleMouseClick: ()=> void
  handleMouseOver: ()=> void
  handleMouseLeave: ()=> void
  componentRef: React.Ref<HTMLDivElement>
}

const useMouseEvent = (): UseMouseEventReturns => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [isMouseOver, setIsMouseOver] = useState<boolean>(false);
  const componentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleComponentOutsideClick = (ev: MouseEvent): void => {
      const target = ev.target as HTMLElement;
  
      if (!componentRef.current?.contains(target)) {
        setIsClicked(false);
      }
    };

    document.addEventListener("click", handleComponentOutsideClick);

    return () => document.removeEventListener("click", handleComponentOutsideClick);
  }, []);

  const handleMouseClick = (): void => {
    setIsClicked(true);
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
    componentRef,
  };
};

export default useMouseEvent;
