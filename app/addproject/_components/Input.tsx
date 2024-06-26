import React, { InputHTMLAttributes } from "react";

interface InputSectionProps extends InputHTMLAttributes<HTMLInputElement> {
  inputWidth?: string;
  inputRef?: React.LegacyRef<HTMLInputElement>;
}

function Input({ type, placeholder, name, id, maxLength, inputWidth, inputRef, value, onChange }: InputSectionProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`${inputWidth ? inputWidth : "w-full"} h-11 rounded-lg border border-solid border-gray-200 px-4 py-3 text-sm font-normal text-gray-900 focus:border-gray-900 focus:outline-none`}
      name={name}
      id={id ? id : name}
      autoComplete="off"
      maxLength={maxLength}
      ref={inputRef}
      value={value}
      onChange={onChange}
    />
  );
}

export default Input;
