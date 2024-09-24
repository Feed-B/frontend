"use client";

import Image from "next/image";
import React from "react";
import bottomArrowIcon from "@/public/icons/blackArrowBottom.svg";
import filterListIcon from "@/public/icons/filterList.svg";

interface StackBarProps {
  handleModalOpen: () => void;
  isToggle: boolean;
  toggleAction: () => void;
}

function StackBar({ handleModalOpen, isToggle, toggleAction }: StackBarProps) {
  return (
    <>
      {isToggle && (
        <button
          onClick={toggleAction}
          type="button"
          className="flex w-12 items-center justify-center rounded-xl border border-solid border-gray-400 bg-[#F9F9F9] p-1 pc:hidden">
          <Image src={filterListIcon} alt="검색 기능입니다." width={20} priority />
        </button>
      )}
      {!isToggle && (
        <div
          className="flex w-full max-w-[740px] items-center justify-between rounded-xl border border-solid border-[#D6D6D6] bg-[#F9F9F9] px-5 mb:max-w-[320px] tbc:max-w-[420px] pc:hidden"
          onClick={handleModalOpen}>
          <p>관심 기술스택</p>
          <Image src={bottomArrowIcon} alt="아래로 향한 화살표 버튼." width={20} height={20} priority />
        </div>
      )}
    </>
  );
}

export default StackBar;
