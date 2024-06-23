import React from "react";
import DropDown from "@/app/_components/DropDown/DropDown";

interface Props {
  data: Record<string, string>;
  handleItemClick: (value: string) => void;
}

function DropDownList({ data, handleItemClick }: Props) {
  return Object.entries(data).map(([index, value]) => (
    <div key={index}>
      <DropDown.TextItem onClick={() => handleItemClick(value)}>{value}</DropDown.TextItem>
    </div>
  ));
}

export default DropDownList;
