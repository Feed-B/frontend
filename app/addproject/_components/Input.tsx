import React, { InputHTMLAttributes } from "react";

interface InputSectionProps extends InputHTMLAttributes<HTMLInputElement> {
  inputWidth?: string;
}

function Input({ type, placeholder, name, id, maxLength, inputWidth }: InputSectionProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`${inputWidth ? inputWidth : "w-full"} h-11 rounded-lg border border-solid border-gray-200 px-4 py-3`}
      name={name}
      id={id ? id : name}
      autoComplete="off"
      maxLength={maxLength}
    />
  );
}

export default Input;
