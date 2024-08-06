import React, { InputHTMLAttributes } from "react";

interface InputSectionProps extends InputHTMLAttributes<HTMLInputElement> {
  inputWidth?: string;
}

function Input({ type, placeholder, name, id, value, inputWidth, onChange, onBlur }: InputSectionProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`${inputWidth ? inputWidth : "w-full"} h-11 rounded-lg border border-solid border-gray-200 px-4 py-3 text-sm font-normal text-gray-900 focus:border-gray-900 focus:outline-none`}
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
