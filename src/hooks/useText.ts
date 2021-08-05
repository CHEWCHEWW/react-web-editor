import React, { useEffect, useState } from "react";

import { ClickState } from "../types/handler";

interface UseTextReturns {
  text: string
  handleIconClick: () => void
  handleTextChange: (ev: React.ChangeEvent<HTMLTextAreaElement>) => void
  isEditing: boolean
}

const useText = ({ onClicked, isClicked }: ClickState): UseTextReturns => {
  const [text, setText] = useState<string>("");
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [isEdited, setIsEdited] = useState<boolean>(false);
  
  useEffect(() => {
    if (isClicked && isEdited) {
      onClicked(false);
    }
  }, [isClicked, onClicked, isEdited]);

  useEffect(() => {
    if (isEditing) {
      onClicked(false);
      setIsEdited(true);
    } else {
      setIsEdited(false);
    }
  }, [isEditing, onClicked]);

  const handleIconClick = () => {
    setIsEditing(prev => !prev);
  };

  const handleTextChange = (ev: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(ev.target.value);
  };

  return {
    text,
    handleIconClick,
    handleTextChange,
    isEditing,
  };
};

export default useText;
