"use client";

import React from "react";
import Image from "next/image";
import { useGetStack } from "@/app/main/_context/StackProvider";
import resetIcon from "@/public/icons/reset.svg";
import closeIcon from "@/public/icons/crossLine.svg";

function StackBox() {
  const { projectState, isDeleteStack, clearStack } = useGetStack();

  return (
    <div className="flex min-h-12 w-full items-center gap-3 rounded-xl border border-solid border-[#EBEBEB] bg-white p-3 mb:hidden tbc:hidden tbr:hidden">
      <div
        className="flex h-7 min-w-20 cursor-pointer items-center gap-1 border-r border-solid border-[#EBEBEB] bg-white px-2 py-1"
        onClick={clearStack}>
        <Image src={resetIcon} alt="기술스택 초기화 버튼입니다." width={16} />
        <p className="text-sm font-normal text-[#5177FF]">초기화</p>
      </div>
      <ul className="flex flex-wrap gap-2">
        {projectState.projectTechStacks.map(data => (
          <li
            className="flex cursor-pointer items-center gap-1 rounded bg-[#EBEBEB] p-1"
            onClick={() => isDeleteStack(data)}
            key={data}>
            <p className="text-xs font-normal">{data}</p>
            <Image src={closeIcon} alt="기술스택 지우기" width={16} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StackBox;
