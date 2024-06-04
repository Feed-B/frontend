import React from "react";

interface Props {
  data: Record<string, string>;
  dropdownRef: React.RefObject<HTMLDivElement>;
  handleItemClick: (value: string) => void;
}

function StringDropDown({ data, dropdownRef, handleItemClick }: Props) {
  return (
    <div ref={dropdownRef}>
      {Object.entries(data).map(([index, value]) => (
        <button type="button" key={index} className="block cursor-pointer p-2" onClick={() => handleItemClick(value)}>
          {value}
        </button>
      ))}
    </div>
  );
}

export default StringDropDown;
