import React, { useState } from "react";

interface useImageReturns {
  imageSrc: string
  handleFileChange: (ev: React.ChangeEvent<HTMLInputElement>) => void
}

const useImage = (): useImageReturns => {
  const [imageSrc, setImageSrc] = useState<string>("");
  
  const handleFileChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
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

  return { imageSrc, handleFileChange };
};

export default useImage;
