import React, { useEffect ,useRef, useState } from "react";

import { INITIAL_TEXT } from "../constants/ui";
import { Dispatcher ,InnerHTML } from "../types/ui";

interface UseTextProps {
  onChange: Dispatcher<string>
  html: string
}

interface UseTextReturns {
  ref: React.Ref<HTMLDivElement>
  innerHTML: InnerHTML
  // isEditing: boolean
  handleInputChange: () => void
  // handleInputClick: () => void
}

const useText = ({ 
  html, 
  onChange, 
}: UseTextProps): UseTextReturns => {
  const [savedHtml, setSavedHtml] = useState(INITIAL_TEXT);
  const ref = useRef<HTMLDivElement>(null);

  const handleInputChange = () => {
    if (!ref.current) {
      return;
    }
    
    const currentHtml = ref.current.innerHTML;
    
    if (!currentHtml || currentHtml === savedHtml) {
      return;
    }
    
    onChange(html);
    setSavedHtml(currentHtml);
  };

  return {
    ref,
    handleInputChange,
    // isEditing,
    innerHTML: { __html: html },

    // innerHTML: { __html: html },
    // handleInputClick,
  };
};

export default useText;
