import React, { useRef, useState } from "react";

interface UseSliderReturns {
  value: number
  handleValueChange: () => void
  sliderRef: React.Ref<HTMLInputElement>
}

const useSlider = (max: number): UseSliderReturns => {
  const [value, setValue] = useState<number>(0.2);
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
