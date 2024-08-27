import React, { InputHTMLAttributes } from "react";

interface TitleProps extends InputHTMLAttributes<HTMLInputElement> {
  title: string;
  label?: boolean;
}

function Title({ title, name, label }: TitleProps) {
  return (
    <div className="flex items-center justify-between">
      {label ? (
        <label htmlFor={name} className="text-base text-gray-900 mb:font-medium">
          {title === "추가 링크" ? (
            <div className="flex">
              {title}
              <p className="ml-1 text-blue-500">(선택)</p>
            </div>
          ) : (
            title
          )}
        </label>
      ) : (
        <h2 className="text-base text-gray-900 mb:font-medium">{title}</h2>
      )}
    </div>
  );
}

export default Title;
