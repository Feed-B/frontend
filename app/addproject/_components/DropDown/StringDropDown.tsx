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
        <button
          type="button"
          key={index}
          className="block w-full cursor-pointer p-2 text-left hover:bg-gray-100"
          onClick={() => handleItemClick(value)}>
          <p>{value}</p>
        </button>
      ))}
    </div>
  );
}

export default StringDropDown;
