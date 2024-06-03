"use client";

import Image from "next/image";
import React, { useState } from "react";
import smallArrowIcon from "@/public/icons/smallArrow.svg";
import smallTopArrowIcon from "@/public/icons/smallTopArrow.svg";
import useToggleHook from "@/app/_hooks/useToggleHook";
import JOB_CATEGORIES from "@/app/_constants/JobCategoryData";
import TOOL_DATA from "@/app/_constants/ToolData";
import { FULL_STACK_DATA } from "@/app/_constants/StackData";
import StackDropDown from "./StackDropDown";
import StringDropDown from "./StringDropDown";

interface DropDownProps {
  dataType: string;
  dropDownWidth?: string;
}

function DropDown({ dataType, dropDownWidth }: DropDownProps) {
  const { isOpen, toggleState } = useToggleHook();

  const dataMap: Record<string, Record<string, string>> = {
    job: JOB_CATEGORIES,
    tool: TOOL_DATA,
  };

  const data = dataMap[dataType];
  const stackData = FULL_STACK_DATA;

  const [item, setItem] = useState(data && Object.values(data)[0]);
  const [checkStacks, setCheckStacks] = useState<Set<number>>(new Set());

  const handleItemClick = (value: string) => {
    setItem(value);
    toggleState();
  };

  const handleCheckboxChange = (id: number) => {
    setCheckStacks(prev => {
      const newSelectedStacks = new Set(prev);
      if (newSelectedStacks.has(id)) {
        newSelectedStacks.delete(id);
      } else {
        newSelectedStacks.add(id);
      }
      return newSelectedStacks;
    });
  };

  // 체크박스 확인용
  Array.from(checkStacks).map(id => {
    const stack = stackData.find(stack => stack.id === id);
    console.log(stack && stack.name);
  });

  return (
    <div
      className={`relative flex h-12 ${dropDownWidth} items-center justify-between gap-2 border border-solid border-[#EBEBEB] p-2 text-sm font-normal text-[#4D5256]`}>
      {dataType === "stack" ? "사용한 기술스택" : item}
      <button className="h-5 w-5" onClick={toggleState}>
        {isOpen ? (
          <Image src={smallTopArrowIcon} alt="드롭다운 열기" width={20} height={20} priority />
        ) : (
          <Image src={smallArrowIcon} alt="드롭다운 닫기" width={20} height={20} priority />
        )}
      </button>
      {isOpen && (
        <div
          className={`absolute left-0 top-12 z-10 ${dataType !== "stack" ? dropDownWidth : ""} rounded-lg border border-solid border-gray-300 bg-white px-4 py-3 text-sm text-black`}>
          {dataType === "stack" ? (
            <StackDropDown stackData={stackData} handleCheckboxChange={handleCheckboxChange} />
          ) : (
            <StringDropDown data={data} handleItemClick={handleItemClick} />
          )}
        </div>
      )}
    </div>
  );
}

export default DropDown;
