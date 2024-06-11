"use client";

import Image from "next/image";
import React, { useRef, useState } from "react";
import smallArrowIcon from "@/public/icons/smallArrow.svg";
import smallTopArrowIcon from "@/public/icons/smallTopArrow.svg";
import useToggleHook from "@/app/_hooks/useToggleHook";
import JOB_CATEGORIES from "@/app/_constants/JobCategoryData";
import TOOL_DATA from "@/app/_constants/ToolData";
import useOutsideClick from "@/app/_hooks/useOutsideClick";
import DropDown from "@/app/_components/DropDown/DropDown";
import DropDownList from "./DropDownList";

interface DropDownProps {
  dataType: string;
}

function DropDownBox({ dataType }: DropDownProps) {
  const dataMap: Record<string, Record<string, string>> = {
    job: JOB_CATEGORIES,
    tool: TOOL_DATA,
  };

  const data = dataMap[dataType];

  const { isOpen, toggleState } = useToggleHook();

  const [item, setItem] = useState(dataType === "job" ? "직무" : "플랫폼");

  const itemRef = useRef<HTMLDivElement>(null);
  const exceptionRef = useRef<HTMLDivElement>(null);

  useOutsideClick(itemRef, toggleState, exceptionRef);

  const handleItemClick = (value: string) => {
    setItem(value);
    toggleState();
  };

  return (
    <div className="relative">
      <div
        className={
          "flex h-11 w-[118px] items-center justify-between gap-2 rounded-lg border border-solid border-gray-200 p-2 text-sm font-normal text-gray-900"
        }>
        {item}
        <div className="h-5 w-5 cursor-pointer" onClick={toggleState} ref={exceptionRef}>
          {isOpen ? (
            <Image src={smallTopArrowIcon} alt="드롭다운 열기" width={20} height={20} priority />
          ) : (
            <Image src={smallArrowIcon} alt="드롭다운 닫기" width={20} height={20} priority />
          )}
        </div>
      </div>
      {isOpen && (
        <DropDown className="absolute w-auto" itemRef={itemRef}>
          <DropDownList data={data} handleItemClick={handleItemClick} />
        </DropDown>
      )}
    </div>
  );
}

export default DropDownBox;
