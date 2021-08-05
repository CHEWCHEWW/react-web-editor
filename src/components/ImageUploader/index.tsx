import React from "react";
import styled from "styled-components";

import Icon from "../Icon";
import useImage from "../../hooks/useImage";

const ImageUploader: React.FC = (): React.ReactElement => {
  const { imageSrc, handleFileChange } = useImage();
  
  return (
    <>
      <Icon>
        <Input 
          type="file" 
          onChange={handleFileChange}
          accept="image/*"
        />
      </Icon>
      {imageSrc && <Image src={imageSrc} />}
    </>
  );
};

const Input = styled.input`
  display: block;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 8;
`;

export default ImageUploader;
