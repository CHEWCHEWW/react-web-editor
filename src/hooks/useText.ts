import React, { useRef, useState } from "react";
import sanitizeHtml from "sanitize-html";

import { INITIAL_TEXT, SANITIZE_CONFIGURATION } from "../constants/ui";
import { Dispatcher, InnerHTML } from "../types/ui";

interface UseTextProps {
  onChange: Dispatcher<string>
  html: string
}

interface UseTextReturns {
  textRef: React.Ref<HTMLDivElement>
  innerHTML: InnerHTML
  handleInputChange: () => void
  handleEditingMode: () => void
  isEditing: boolean
}

const useText = ({ 
  html, 
  onChange, 
}: UseTextProps): UseTextReturns => {
  const [savedHtml, setSavedHtml] = useState<string>(INITIAL_TEXT);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const textRef = useRef<HTMLDivElement>(null);

  const handleInputChange = () => {
    if (!textRef.current) {
      return;
    }
    
    const currentHtml = textRef.current.innerHTML;
    
    if (!currentHtml || currentHtml === savedHtml) {
      return;
    }
    
    onChange(html);
    setSavedHtml(sanitizeHtml(currentHtml, SANITIZE_CONFIGURATION));
  };

  const handleEditingMode = () => {
    setIsEditing((prev) => !prev);
  };

  return {
    textRef,
    handleInputChange,
    innerHTML: { __html: html },
    handleEditingMode,
    isEditing,
  };
};

export default useText;
