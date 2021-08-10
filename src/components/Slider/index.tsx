import React from "react";
import styled from "styled-components";

import { SLIDER_MAX, SLIDER_MIN } from "../../constants/ui";

interface SliderProps {
  min?: number
  max?: number
  value: number
  onChange: () => void
  sliderRef: React.Ref<HTMLInputElement>
}

const Slider: React.FC<SliderProps> = ({ 
  min = SLIDER_MIN, 
  max = SLIDER_MAX, 
  sliderRef,
  value,
  onChange,
}): React.ReactElement => {
  return (
    <SliderBar>
      <Range 
        ref={sliderRef} 
        type="range" 
        onChange={onChange} 
        value={value} 
        min={min} 
        max={max} 
        step={max / 100} 
      />
      <ProgressBar value={value} />
    </SliderBar>
  );
};

const SliderBar = styled.div`
  position: relative;
  width: 7rem;
  height: 2rem;
`;

const Range = styled.input`
  -webkit-appearance: none;
  appearance: none;
  position: absolute;
  margin: 0.4rem 0 0 0;
  padding: 0;
  width: 7rem;
  background-color: transparent;

  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    height: 1rem;
    width: 1rem;
    border: none;
    border-radius: 50%;
    background-color: white;
    z-index: 2;
    box-shadow: 0 3px 8px rgba(0, 0, 0, -.15), 0 1px 1px rgba(0, 0, 0, 0.16), 0 3px 1px rgba(0, 0, 0, 0.1)
  }
`;

const ProgressBar = styled.progress`
  -webkit-appearance: none;
  appearance: none;
  position: absolute;
  display: block;
  margin: 0;
  top: 0.8rem;
  left: 0.5rem;
  width: 6rem;
  height: 0.2rem;
  z-index: -1;
  background-color: #d7d7d7;

  ::-webkit-progress-value { 
    background-color: #007aff; 
  }

  ::-webkit-progress-bar {
    background-color: #b6b6b6;
    border-radius: 1.5px;
    overflow: hidden
  }
`;

export default Slider;
