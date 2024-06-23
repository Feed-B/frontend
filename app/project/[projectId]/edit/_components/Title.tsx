import React, { InputHTMLAttributes } from "react";

interface TitleProps extends InputHTMLAttributes<HTMLInputElement> {
  title: string;
  label?: boolean;
}

function Title({ title, name, label }: TitleProps) {
  return (
    <div className="flex items-center justify-between">
      {label ? (
        <label htmlFor={name} className="text-base font-bold text-gray-900">
          {title === "추가 링크" ? title : title + " *"}
        </label>
      ) : (
        <h2 className="text-base font-bold text-gray-900">{title} *</h2>
      )}
    </div>
  );
}

export default Title;
