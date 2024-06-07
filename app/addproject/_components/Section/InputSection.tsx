import React, { InputHTMLAttributes } from "react";

interface InputSectionProps extends InputHTMLAttributes<HTMLInputElement> {
  title: string;
  inputWidth?: string;
  textArea?: boolean;
}

function InputSection({ title, type, placeholder, name, inputWidth, textArea }: InputSectionProps) {
  return (
    <section>
      <label htmlFor={name} className="mb-4 mt-6 flex text-base font-bold text-gray-900">
        {title} *
      </label>
      {!textArea ? (
        <input
          type={type}
          placeholder={placeholder}
          className={`${inputWidth} h-12 rounded-sm border border-solid border-gray-200 px-4 py-3`}
          name={name}
          id={name}
        />
      ) : (
        <textarea
          className="h-52 w-full resize-none rounded-sm border border-solid border-gray-200 px-4 py-3"
          placeholder={placeholder}
          name={name}
          id={name}
        />
      )}
    </section>
  );
}

export default InputSection;
