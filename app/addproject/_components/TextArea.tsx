import React, { InputHTMLAttributes } from "react";

interface TextAreaProps extends InputHTMLAttributes<HTMLInputElement> {
  inputWidth?: string;
  textArea?: boolean;
}

function TextArea({ placeholder, name }: TextAreaProps) {
  return (
    <textarea
      className="h-52 w-full resize-none rounded-sm border border-solid border-gray-200 px-4 py-3"
      placeholder={placeholder}
      name={name}
      id={name}
    />
  );
}

export default TextArea;
