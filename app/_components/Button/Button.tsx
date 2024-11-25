"use client";

import { ButtonHTMLAttributes, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, PropsWithChildren {
  buttonSize: ButtonSize;
  bgColor: BgColor;
}

type ButtonSize = "large" | "normal" | "small";

type BgColor = "yellow" | "white" | "gray" | "blue" | "stroke" | "naver" | "kakao";

const buttonClasses = {
  large: "h-48 px-6 py-4 rounded-lg text-base font-bold",
  normal: "h-10 rounded-lg px-4 py-3 text-sm",
  small: "h-9 rounded-lg px-3 py-2 text-sm",
};

const bgColorClasses: Record<BgColor, string> = {
  yellow:
    "bg-yellow-500 text-gray-900 font-bold hover:bg-yellow-600 disabled:bg-gray-300 disabled:text-gray-500 disabled:font-normal",
  gray: "bg-gray-100 text-gray-900",
  white: "bg-white border border-gray-200",

  blue: "bg-white text-blue-500 hover:bg-blue-50",
  stroke: "bg-white text-blue-500 border border-blue-500",

  naver: "bg-[#03C75A] text-white",
  kakao: "bg-[#FEE500]",
};

function Button({ children, type = "button", buttonSize, bgColor, onClick, className, disabled }: ButtonProps) {
  const buttonClass = twMerge(buttonClasses[buttonSize], className);
  const bgColorClass = bgColorClasses[bgColor];

  return (
    <button
      className={`${buttonClass} ${bgColorClass} flex min-w-20 items-center justify-center whitespace-nowrap`}
      type={type}
      onClick={onClick}
      disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
