import React, { InputHTMLAttributes } from "react";

function TextArea({ placeholder, name, maxLength }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <textarea
      className="h-52 w-full resize-none rounded-lg border border-solid border-gray-200 px-4 py-3"
      placeholder={placeholder}
      name={name}
      id={name}
      maxLength={maxLength}
    />
  );
}

export default TextArea;
