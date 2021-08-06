import React, { useRef, useState } from "react";

interface UseSliderReturns {
  value: number
  handleValueChange: () => void
  ref: React.Ref<HTMLInputElement>
}

const useSlider = (max: number): UseSliderReturns => {
  const [value, setValue] = useState<number>(0);
  const ref = useRef<HTMLInputElement>(null);

  const handleValueChange = (): void => {
    if (!ref.current) {
      return;
    }

    const currentValue = Number(ref.current.value);

    setValue(currentValue * max);
  };

  return {
    ref,
    value,
    handleValueChange,
  };
};

export default useSlider;
