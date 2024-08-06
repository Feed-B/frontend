"use client";

import Image from "next/image";
import React, { useRef, useState } from "react";
import smallArrowIcon from "@/public/icons/smallArrow.svg";
import smallTopArrowIcon from "@/public/icons/smallTopArrow.svg";
import useToggleHook from "@/app/_hooks/useToggleHook";
import { JOB_CATEGORIES_KR } from "@/app/_constants/JobCategoryData";
import useOutsideClick from "@/app/_hooks/useOutsideClick";
import DropDown from "@/app/_components/DropDown/DropDown";
import { TOOL_DATA } from "@/app/_constants/ToolData";
import DropDownList from "./DropDownList";

interface DropDownProps {
  dataType: string;
  inputWidth?: string;
  handleInputChange?: (value: string) => void;
  initialDropDownValue?: string;
}

function DropDownBox({ dataType, inputWidth, handleInputChange, initialDropDownValue }: DropDownProps) {
  const toolData = TOOL_DATA.reduce(
    (acc, { name }) => {
      acc[name] = name;
      return acc;
    },
    {} as Record<string, string>
  );

  const dataMap: Record<string, Record<string, string>> = {
    job: JOB_CATEGORIES_KR,
    tool: toolData,
  };

  const data = dataMap[dataType];

  const { isOpen, toggleState } = useToggleHook();

  const getInitialItem = () => {
    if (initialDropDownValue) {
      return dataType === "job" ? JOB_CATEGORIES_KR[initialDropDownValue] || "직무" : initialDropDownValue;
    }
    return dataType === "job" ? "직무" : "플랫폼";
  };

  const [item, setItem] = useState(getInitialItem());

  const itemRef = useRef<HTMLDivElement>(null);
  const exceptionRef = useRef<HTMLDivElement>(null);

  useOutsideClick(itemRef, toggleState, exceptionRef);

  const handleItemClick = (value: string) => {
    const englishValue = Object.keys(JOB_CATEGORIES_KR).find(key => JOB_CATEGORIES_KR[key] === value) || "";
    setItem(value);
    handleInputChange && handleInputChange(dataType === "job" ? englishValue : value);
    toggleState();
  };

  return (
    <div className="relative">
      <div
        className={`flex h-11 ${inputWidth ? inputWidth : "w-[118px]"} cursor-pointer items-center justify-between gap-2 rounded-lg border border-solid border-gray-200 p-2 text-sm font-normal text-gray-900`}
        onClick={toggleState}
        ref={exceptionRef}>
        {item}
        <div className="h-5 w-5 cursor-pointer">
          {isOpen ? (
            <Image src={smallTopArrowIcon} alt="드롭다운 열기" width={20} height={20} priority />
          ) : (
            <Image src={smallArrowIcon} alt="드롭다운 닫기" width={20} height={20} priority />
          )}
        </div>
      </div>
      {isOpen && (
        <DropDown className={`absolute ${inputWidth ? inputWidth : "w-[118px]"}`} itemRef={itemRef}>
          <DropDownList data={data} handleItemClick={handleItemClick} />
        </DropDown>
      )}
    </div>
  );
}

export default DropDownBox;
