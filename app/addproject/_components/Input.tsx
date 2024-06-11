import React, { InputHTMLAttributes } from "react";

interface InputSectionProps extends InputHTMLAttributes<HTMLInputElement> {
  inputWidth?: string;
}

// 임시 input 컴포넌트입니다
function Input({ type, placeholder, name, id, inputWidth }: InputSectionProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`${inputWidth ? inputWidth : "w-full"} h-11 rounded-lg border border-solid border-gray-200 px-4 py-3`}
      name={name}
      id={id ? id : name}
      autoComplete="off"
    />
  );
}

export default Input;
