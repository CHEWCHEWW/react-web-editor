import React from "react";
import { BsImages } from "react-icons/bs";

import CustomInput from "../CustomInput";
import { TypedCustomInputProps } from "../../types/handler";

const ImageUploader: React.FC<TypedCustomInputProps> = ({ 
  onChange,
  left, 
  top, 
  bottom, 
  right,
}): React.ReactElement => {
  return (
    <CustomInput 
      type="file" 
      accept="image/*"
      onChange={onChange}
      top={top}
      right={right}
      left={left}
      bottom={bottom}
    >
      <BsImages />
    </CustomInput>
  );
};

export default ImageUploader;
