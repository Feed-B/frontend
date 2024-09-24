"use client";

import React, { ButtonHTMLAttributes } from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import topArrowIcon from "@/public/icons/whiteArrowTop.svg";
import leftArrowIcon from "@/public/icons/whiteArrowLeft.svg";
import rightArrowIcon from "@/public/icons/whiteArrowRight.svg";
import bottomArrowIcon from "@/public/icons/whiteArrowBottom.svg";

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
    "rounded-full h-10 w-10 flex items-center justify-center bg-gray-800 hover:bg-gray-900";
  const DirectionButtonClass = twMerge(DefaultDirectionButtonClass, className);

  return (
    <button type="button" onClick={onClick || topAutoScroll} className={DirectionButtonClass} {...props}>
      <Image src={getIcon()} alt={`${direction} arrow`} width={28} />
    </button>
  );
};

export default DirectionButton;
