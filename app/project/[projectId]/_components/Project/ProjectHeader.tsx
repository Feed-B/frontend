"use client";

import React from "react";
import Image from "next/image";
import shareIcon from "@/public/icons/share.svg";
import kebabIcon from "@/public/icons/kebab.svg";
import useToggleHook from "@/app/_hooks/useToggleHook";
import WishButtonAndCount from "@/app/_components/WishButtonAndCount/WishButtonAndCount";
import KebabDropDown from "./KebabDropDown";

//임시 ID
const projectId = 1;

function ProjectHeader() {
  const { isOpen, toggleState } = useToggleHook();

  return (
    <header className="relative px-4 py-3">
      <div className="flex justify-between gap-2">
        <h1 className="text-2xl font-bold text-[#454545]">프로젝트_제목</h1>
        <div className="flex gap-2">
          {/* <Image src={favoriteIcon} alt="프로젝트 찜하기." width={24} height={32} priority /> */}
          <div className="w-10">
            <WishButtonAndCount isFavorite={true} wishCount={3} />
          </div>
          <Image src={shareIcon} alt="프로젝트 공유하기." width={24} height={32} priority />
          <Image src={kebabIcon} alt="프로젝트 메뉴." width={24} height={32} priority onClick={toggleState} />
          {isOpen && <KebabDropDown projectId={projectId} />}
        </div>
      </div>
      <div className="flex w-full items-center gap-5">
        <p className="text-base font-bold text-[#454545]">작성자</p>
        <p className="text-sm text-[#6f6f6f]">20XX.XX.XX</p>
      </div>
    </header>
  );
}

export default ProjectHeader;
