import React, { useState } from "react";
import styled from "styled-components";

import Icon from "../Icon";

const FileUploader: React.FC = (): React.ReactElement => {
  const [imageSrc, setImageSrc] = useState<string>("");
  
  const handleFileChange = async (ev: React.ChangeEvent<HTMLInputElement>) => {
    ev.preventDefault();

    const { files } = ev.target;

    if (!files) {
      return;
    }
    
    Object.values(files).forEach((file) => {
      const reader = new FileReader();
      
      reader.readAsDataURL(file);
      
      reader.addEventListener("load", () => {
        if (!(reader.result instanceof ArrayBuffer) && reader.result) {
          setImageSrc(reader.result);
        }
      });
    });
  };
  
  return (
    <>
      <Icon>
        <Input 
          type="file" 
          onChange={handleFileChange}
          accept="image/*"
        />
      </Icon>
      {imageSrc && <img src={imageSrc} />}
    </>
  );
};

const Input = styled.input`
`;

export default FileUploader;
