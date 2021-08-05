import React from "react";
import styled from "styled-components";
import { BsImages } from "react-icons/bs";

import Icon from "../Icon";

interface ImageUploaderProps {
  onChange: (ev: React.ChangeEvent<HTMLInputElement>) => void
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ 
  onChange, 
}): React.ReactElement => {  
  return (
    <>
      <Icon>
        <Input 
          type="file" 
          onChange={onChange}
          accept="image/*"
        />
        <IconImageWrapper>
          <BsImages />
        </IconImageWrapper>
      </Icon>
    </>
  );
};

const Input = styled.input`
  opacity: 0;
  position: absolute;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 8;
`;

const IconImageWrapper = styled.div`
  color: #9C9C9A;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  height: 70%;
`;

export default ImageUploader;
