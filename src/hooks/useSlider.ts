import React, { useRef, useState } from "react";

import { DEFAULT_SLIDER_VALUE } from "../constants/ui";

interface UseSliderProps {
  max: number
  initialValue?: number
}

interface UseSliderReturns {
  value: number
  handleValueChange: () => void
  sliderRef: React.Ref<HTMLInputElement>
}

const useSlider = ({ 
  max, 
  initialValue 
}: UseSliderProps): UseSliderReturns => {
  const [value, setValue] = useState<number>(initialValue || DEFAULT_SLIDER_VALUE);
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
