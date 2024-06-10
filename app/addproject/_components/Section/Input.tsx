import React, { InputHTMLAttributes } from "react";

interface InputSectionProps extends InputHTMLAttributes<HTMLInputElement> {
  inputWidth?: string;
}

// 임시 input 컴포넌트입니다
function Input({ type, placeholder, name, inputWidth }: InputSectionProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`${inputWidth} h-12 rounded-sm border border-solid border-gray-200 px-4 py-3`}
      name={name}
      id={name}
    />
  );
}

export default Input;
