import React from "react";

interface InputSectionProps {
  title: string;
  inputType?: string;
  placeholder: string;
  inputName?: string;
  inputWidth?: string;
  textArea?: boolean;
}

function InputSection({ title, inputType, placeholder, inputName, inputWidth, textArea }: InputSectionProps) {
  return (
    <section>
      <h2 className="mb-4 mt-6 text-base font-bold text-[#4D5256]">{title}</h2>
      {!textArea ? (
        <input
          type={inputType}
          placeholder={placeholder}
          className={`${inputWidth} h-12 rounded-sm border border-solid border-[#EBEBEB] px-4 py-3`}
          name={inputName}
        />
      ) : (
        <textarea
          className="h-52 w-full resize-none rounded-sm border border-solid border-[#EBEBEB] px-4 py-3"
          placeholder={placeholder}
        />
      )}
    </section>
  );
}

export default InputSection;
