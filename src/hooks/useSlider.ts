import React, { useRef, useState } from "react";

import { DEFAULT_SLIDER_VALUE } from "../constants/ui";

interface UseSliderReturns {
  value: number
  handleValueChange: () => void
  sliderRef: React.Ref<HTMLInputElement>
}

const useSlider = (max: number): UseSliderReturns => {
  const [value, setValue] = useState<number>(DEFAULT_SLIDER_VALUE);
  const sliderRef = useRef<HTMLInputElement>(null);

  const handleValueChange = (): void => {
    if (!sliderRef.current) {
      return;
    }

    const currentValue = Number(sliderRef.current.value);

    setValue(currentValue * max);
  };

  return {
    sliderRef,
    value,
    handleValueChange,
  };
};

export default useSlider;
