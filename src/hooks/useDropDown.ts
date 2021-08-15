import React, { useState } from "react";

import { DropDownContent, DropDownProps } from "../types/ui";

interface UseDropDownReturns {
  handleDropDownClick: () => void;
  handleItemClick: (ev: React.MouseEvent<HTMLDivElement>) => void;
  isDropDownOpen: boolean;
  selectedItem: DropDownContent;
}

const useDropDown = ({ items }: DropDownProps): UseDropDownReturns => {
  const [isDropDownOpen, setIsDropDownOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<DropDownContent>({
    id: "",
    label: "",
  });

  const handleDropDownClick = () => {
    setIsDropDownOpen((prev) => !prev);
  };

  const handleItemClick = (ev: React.MouseEvent<HTMLDivElement>) => {
    const id = ev.currentTarget.id;
    const item = items.find((item) => item.id === id);

    if (item) {
      setSelectedItem(item);
    }
  };

  return {
    handleItemClick,
    handleDropDownClick,
    isDropDownOpen,
    selectedItem,
  };
};

export default useDropDown;
