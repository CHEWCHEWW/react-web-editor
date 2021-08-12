import React from "react";
import { IoIosColorPalette } from "react-icons/io";

import CustomInput from "../CustomInput";
import { TypedCustomInputProps } from "../../types/handler";

const ColorPicker: React.FC<TypedCustomInputProps> = ({
  onChange,
  left,
  top,
  bottom,
  right,
  value,
}): React.ReactElement => {
  return (
    <CustomInput
      type="color"
      onChange={onChange}
      top={top}
      right={right}
      left={left}
      bottom={bottom}
      value={value !== "#00ff0000" ? value : "#ffffff"}
    >
      <IoIosColorPalette />
    </CustomInput>
  );
};

export default ColorPicker;
