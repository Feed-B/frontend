import React, { InputHTMLAttributes } from "react";

function RadioButton({ value, checked, onChange }: InputHTMLAttributes<HTMLInputElement>) {
  const RadioButtonStyle =
    "shadow-default-radio-border checked:shadow-check-radio-border h-3 w-3 appearance-none rounded-full bg-gray-200 checked:border-2 checked:border-white checked:bg-gray-800 hover:cursor-pointer";

  return (
    <label className="flex items-center">
      <input
        type="radio"
        name="size"
        value={value}
        checked={checked}
        onChange={onChange}
        className={RadioButtonStyle}
      />
      <span className="ml-1 text-sm font-normal text-gray-900">{value}</span>
    </label>
  );
}

export default RadioButton;
