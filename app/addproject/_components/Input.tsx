import React, { InputHTMLAttributes } from "react";

interface InputSectionProps extends InputHTMLAttributes<HTMLInputElement> {
  inputWidth?: string;
  error?: string;
}

function Input({ type, placeholder, name, id, value, inputWidth, onChange, onBlur, error }: InputSectionProps) {
  const borderClass = error ? "border-red-300" : "border-gray-200";
  const errorBorderClass = error ? "focus:border-red-500" : "focus:border-gray-900";

  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`${inputWidth ? inputWidth : "w-full"} h-11 rounded-lg border border-solid ${borderClass} px-4 py-3 text-sm font-normal text-gray-900 ${errorBorderClass} focus:outline-none`}
      name={name}
      id={id ? id : name}
      value={value}
      autoComplete="off"
      onChange={onChange}
      onBlur={onBlur}
    />
  );
}

export default Input;
