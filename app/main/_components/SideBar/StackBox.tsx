"use client";

import React from "react";
import Image from "next/image";
import { useGetStack } from "@/app/main/_context/StackProvider";
import resetIcon from "@/public/icons/reset.svg";
import { StackListType } from "@/app/_types/StackType";

interface StackBoxProps {
  stackDatas: StackListType[];
}

function StackBox({ stackDatas }: StackBoxProps) {
  const { stackState, setStackState, isDeleteStack } = useGetStack();
  return (
    <div className="min-h-44 w-full rounded-2xl bg-[#F8FAFB] p-3">
      <ul className="flex flex-row flex-wrap gap-2">
        {stackState.map((data, i) => {
          const stackItem = stackDatas.find(item => item.name === data);
          return (
            <li className="flex cursor-pointer flex-row items-center gap-1" onClick={() => isDeleteStack(data)} key={i}>
              <Image src={stackItem?.iamge || ""} alt="기술스택 이미지입니다." />
              <p className=" text-xs font-normal">{data}</p>
            </li>
          );
        })}
      </ul>
      {stackState.length > 0 && (
        <div
          className="mt-3 flex h-7 w-20 cursor-pointer flex-row items-center gap-2 rounded-2xl border border-solid border-[#5177FF] bg-white px-2 py-1"
          onClick={() => setStackState([])}>
          <p className="  text-sm font-normal text-[#5177FF]">초기화</p>
          <Image src={resetIcon} alt="기술스택 초기화 버튼입니다." width={16} />
        </div>
      )}
    </div>
  );
}

export default StackBox;
