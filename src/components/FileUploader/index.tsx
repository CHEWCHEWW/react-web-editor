import React, { useState } from "react";
import styled from "styled-components";

import Icon from "../Icon";

const FileUploader: React.FC = (): React.ReactElement => {
  const [file, setFile] = useState({});
  const [preview, setPreview] = useState({});
  
  const handleFileChange = (ev: React.ChangeEvent<HTMLInputElement>): void => {
    ev.preventDefault();

    const { files } = ev.target;

    if (!files) {
      return;
    }
    
    Object.values(files).forEach((file) => {
      const reader = new FileReader();
      
      reader.readAsDataURL(file);

      reader.addEventListener("load", () => {
        setFile({ file });
        setPreview(reader);
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
      {preview && <img src={preview.result}></img>}
    </>
  );
};

const Input = styled.input`
`;

export default FileUploader;
