import React, { useRef, useState } from "react";
import sanitizeHtml from "sanitize-html";

import { INITIAL_TEXT, SANITIZE_CONFIGURATION } from "../constants/ui";
import { Dispatcher, InnerHTML } from "../types/ui";

interface UseTextProps {
  onChange: Dispatcher<string>
  html: string
  initialFontName?: string
  initialFontStyle?: string
  initialFontText?: string
}

interface UseTextReturns {
  textRef: React.Ref<HTMLDivElement>
  innerHTML: InnerHTML
  handleInputChange: () => void
  handleEditingMode: () => void
  isEditing: boolean
  fontName: string
  handleStyleChange: (ev: React.MouseEvent<HTMLButtonElement>) => void
  fontStyle: string
  handleFontStyleClick: (ev: React.MouseEvent<HTMLDivElement>) => void
}

const useText = ({ 
  html, 
  onChange,
  initialFontStyle = "",
  initialFontName = "",
  initialFontText = INITIAL_TEXT,
}: UseTextProps): UseTextReturns => {
  const [savedHtml, setSavedHtml] = useState<string>(initialFontText);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [fontStyle, setFontStyle] = useState<string>(initialFontStyle);
  const [fontName, setFontName] = useState<string>(initialFontName);

  const textRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (): void => {
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

  const handleEditingMode = (): void => {
    setIsEditing((prev) => !prev);
  };

  const handleStyleChange = (ev: React.MouseEvent<HTMLButtonElement>): void => {
    const targetName = ev.currentTarget.name;
    
    setFontStyle(targetName);
  };

  const handleFontStyleClick = (ev: React.MouseEvent<HTMLDivElement>): void => {
    const targetName = ev.currentTarget.id;
    
    setFontName(targetName);
  };

  return {
    textRef,
    handleInputChange,
    innerHTML: { __html: html },
    handleEditingMode,
    isEditing,
    fontStyle,
    handleStyleChange,
    handleFontStyleClick,
    fontName,
  };
};

export default useText;
