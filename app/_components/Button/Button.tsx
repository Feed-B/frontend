"use client";

import { ButtonHTMLAttributes, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, PropsWithChildren {
  buttonSize: ButtonSize;
  bgColor: BgColor;
}

type ButtonSize = "normal" | "small";

type BgColor = "yellow" | "white" | "gray" | "stroke" | "naver" | "kakao" | "mainBlue";

const buttonClasses = {
  normal: "min-w-20 h-11 rounded-lg px-4 py-3 text-sm",
  small: "min-w-[50px] h-11 rounded-lg px-2 py-3 text-sm",
};

const bgColorClasses: Record<BgColor, string> = {
  yellow: "bg-yellow-500 hover:bg-yellow-600 text-black",
  stroke: "border border-gray-200 bg-white",
  white: "border border-gray-200 bg-white",
  gray: "border border-gray-200 bg-gray-100 hover:bg-gray-200",
  naver: "bg-[#03C75A] text-white",
  kakao: "bg-[#FEE500]",
  mainBlue: "bg-blue-500",
};

function Button({ children, type = "button", buttonSize, bgColor, onClick, className, disabled }: ButtonProps) {
  const buttonClass = twMerge(buttonClasses[buttonSize], className);
  const bgColorClass = bgColorClasses[bgColor];

  return (
    <button
      className={`${buttonClass} ${bgColorClass} whitespace-nowrap font-semibold`}
      type={type}
      onClick={onClick}
      disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
