import React from "react";

interface Props {
  handleItemClick: (value: string) => void;
  data: Record<string, string>;
}

function StringDropDown({ handleItemClick, data }: Props) {
  return (
    <>
      {Object.entries(data).map(([index, value]) => (
        <button key={index} className="block cursor-pointer p-2" onClick={() => handleItemClick(value)}>
          {value}
        </button>
      ))}
    </>
  );
}

export default StringDropDown;
