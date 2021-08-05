import React from "react";
import { BsImages } from "react-icons/bs";

import CustomInput from "../CustomInput";
import { CustomInputProps } from "../../types/handler";

const ImageUploader: React.FC<CustomInputProps> = ({ 
  onChange 
}): React.ReactElement => {
  return (
    <CustomInput 
      type="file" 
      accept="image/*"
      onChange={onChange}
      top={0}
      right={-21}
    >
      <BsImages />
    </CustomInput>
  );
};

export default ImageUploader;
