import React, { InputHTMLAttributes } from "react";

interface RadioButtonProps extends InputHTMLAttributes<HTMLInputElement> {
  text: string;
}

function RadioButton({ value, checked, onChange, text }: RadioButtonProps) {
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
      <span className="ml-1 text-xs font-medium text-[#4D5256]">{text}</span>
    </label>
  );
}

export default RadioButton;
