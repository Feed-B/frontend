import React, { InputHTMLAttributes } from "react";

interface InputSectionProps extends InputHTMLAttributes<HTMLInputElement> {
  title: string;
  inputWidth?: string;
  textArea?: boolean;
  textSize?: number;
}

function InputSection({ title, type, placeholder, name, inputWidth, textArea, textSize }: InputSectionProps) {
  return (
    <section className="flex flex-col gap-4">
      <div className="flex w-[232px] items-center justify-between">
        <label htmlFor={name} className="text-base font-bold text-gray-900">
          {title} *
        </label>
        {textSize && <span className="text-sm font-normal text-gray-500">(최대 {textSize}자)</span>}
      </div>
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
