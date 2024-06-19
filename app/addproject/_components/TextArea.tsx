import React, { TextareaHTMLAttributes } from "react";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  inputRef?: React.LegacyRef<HTMLTextAreaElement>;
}

function TextArea({ placeholder, name, maxLength, inputRef, onChange }: TextAreaProps) {
  return (
    <textarea
      className="h-52 w-full resize-none rounded-lg border border-solid border-gray-200 px-4 py-3"
      placeholder={placeholder}
      name={name}
      id={name}
      maxLength={maxLength}
      ref={inputRef}
      onChange={onChange}
    />
  );
}

export default TextArea;
