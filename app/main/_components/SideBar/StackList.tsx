"use client";
import React from "react";
import Image from "next/image";
import { StackListType } from "@/app/_types/StackType";
import topArrowIcon from "@/public/icons/topArrow.svg";
import bottomArrowIcon from "@/public/icons/bottomArrow.svg";
import useToggleHook from "@/app/_hooks/useToggleHook";
import StackItem from "./StackItem";

interface StackListProps {
  stackDatas: StackListType[];
  title: string;
}

function StackList({ stackDatas, title }: StackListProps) {
  const { isOpen, toggleState } = useToggleHook();

  return (
    <div className="mb-6 w-full">
      <div className="flex w-full cursor-pointer flex-row items-center gap-1 py-2" onClick={toggleState}>
        <h2 className="text-base font-semibold">{title}</h2>
        <button>
          {isOpen ? (
            <Image src={topArrowIcon} alt="위로 향한 화살표 버튼." width={20} height={20} />
          ) : (
            <Image src={bottomArrowIcon} alt="아래로 향한 화살표 버튼." width={20} height={20} priority />
          )}
        </button>
      </div>
      <div className={`overflow-hidden duration-500 ease-in-out ${isOpen ? "max-h-screen" : "max-h-0"}`}>
        <ul className="mt-2 flex flex-col gap-2">
          {stackDatas.map((data, i) => (
            <StackItem key={i} image={data.iamge}>
              {data.name}
            </StackItem>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default StackList;
