import React, { useState } from "react";

interface UseImageReturns {
  imageSrc: string
  handleFileChange: (ev: React.ChangeEvent<HTMLInputElement>) => void
}

const useImage = (image?: string): UseImageReturns => {
  const [imageSrc, setImageSrc] = useState<string>(image || "");
  
  const handleFileChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
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
