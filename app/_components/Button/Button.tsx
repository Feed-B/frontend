"use client";

import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends PropsWithChildren {
  type?: buttonType;
  buttonSize: ButtonSize;
  bgColor: BgColor;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

type buttonType = "button" | "submit" | "reset";

type ButtonSize = "large" | "small";

type BgColor = "white" | "mainBlue" | "secondBlue";

const buttonClasses = {
  large: "w-[557px] rounded py-3",
  small: "w-[124px] rounded-lg py-3",
};

const bgColorClasses: Record<BgColor, string> = {
  white: "border border-[#1852FD] bg-white text-[#1852FD]",
  mainBlue: "bg-[#0066DA] text-white",
  secondBlue: "bg-[#EBECFF] text-[#1852FD]",
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
