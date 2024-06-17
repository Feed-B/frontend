"use client";

import { ButtonHTMLAttributes, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, PropsWithChildren {
  buttonSize: ButtonSize;
  bgColor: BgColor;
}

type ButtonSize = "normal" | "small";

type BgColor = "black" | "mainBlue" | "secondBlue" | "white" | "stroke" | "green" | "yellow" | "kakao";

const buttonClasses = {
  normal: "w-20 h-11 rounded-lg py-3 text-sm",
  small: "w-[50px] h-11 rounded-lg py-3 text-sm",
};

const bgColorClasses: Record<BgColor, string> = {
  black: "bg-[#333] text-white",
  mainBlue: "bg-blue-500 text-white hover:bg-blue-600",
  secondBlue: "bg-blue-100 text-blue-500",
  white: "border border-gray-200 bg-white",
  stroke: "text-blue-500",
  green: "bg-[#03C75A] text-white",
  yellow: "bg-yellow",
  kakao: "bg-[#FEE500]",
};

function Button({ children, type = "button", buttonSize, bgColor, onClick, className, disabled }: ButtonProps) {
  const buttonClass = twMerge(buttonClasses[buttonSize], className);
  const bgColorClass = bgColorClasses[bgColor];

  return (
    <button className={`${buttonClass} ${bgColorClass}`} type={type} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
