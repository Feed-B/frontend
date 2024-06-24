import React from "react";
import DropDown from "@/app/_components/DropDown/DropDown";

interface Props {
  data: Record<string, string>;
  displayData: Record<string, string>;
  handleItemClick: (value: string) => void;
}

function DropDownList({ data, displayData, handleItemClick }: Props) {
  return Object.keys(data).map(key => (
    <div key={key}>
      <DropDown.TextItem className="font-normal" onClick={() => handleItemClick(key)}>
        {displayData[key]}
      </DropDown.TextItem>
    </div>
  ));
}

export default DropDownList;
