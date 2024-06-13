"use client";

import React, { ButtonHTMLAttributes } from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import topArrowIcon from "@/public/icons/topArrow.svg";
import bottomArrowIcon from "@/public/icons/bottomArrow.svg";
import leftArrowIcon from "@/public/icons/blackArrowLeft.svg";
import rightArrowIcon from "@/public/icons/blackArrowRight.svg";

interface DirectionButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  direction: "top" | "bottom" | "left" | "right";
}

const DirectionButton: React.FC<DirectionButtonProps> = ({ direction, className, onClick, ...props }) => {
  const getIcon = () => {
    switch (direction) {
      case "top":
        return topArrowIcon;
      case "bottom":
        return bottomArrowIcon;
      case "left":
        return leftArrowIcon;
      case "right":
        return rightArrowIcon;
      default:
        return topArrowIcon;
    }
  };

  const topAutoScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const DefaultDirectionButtonClass =
    "fixed bottom-10 right-10 rounded-full bg-yellow shadow-lg focus:outline-none h-11 w-11 flex items-center justify-center";
  const DirectionButtonClass = twMerge(DefaultDirectionButtonClass, className);

  return (
    <button type="button" onClick={onClick || topAutoScroll} className={DirectionButtonClass} {...props}>
      <Image src={getIcon()} alt={`${direction} arrow`} width={24} />
    </button>
  );
};

export default DirectionButton;
