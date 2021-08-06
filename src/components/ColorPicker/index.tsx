import React from "react";
import { IoIosColorPalette } from "react-icons/io";

import CustomInput from "../CustomInput";
import { TypedCustomInputProps } from "../../types/handler";
// top 22 right -21
const ColorPicker = ({ 
  onChange, 
  left, 
  top, 
  bottom, 
  right,
}: TypedCustomInputProps): React.ReactElement => {
  return (
    <CustomInput 
      type="color" 
      onChange={onChange}
      top={top}
      right={right}
      left={left}
      bottom={bottom}
    >
      <IoIosColorPalette />
    </CustomInput>
  );
};

export default ColorPicker;
