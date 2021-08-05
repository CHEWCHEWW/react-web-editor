import React from "react";
import { IoIosColorPalette } from "react-icons/io";

import CustomInput from "../CustomInput";
import { CustomInputProps } from "../../types/handler";

const ColorPicker = ({ onChange }: CustomInputProps): React.ReactElement => {
  return (
    <CustomInput 
      type="color" 
      onChange={onChange}
      top={22}
      right={-21}
    >
      <IoIosColorPalette />
    </CustomInput>
  );
};

export default ColorPicker;
