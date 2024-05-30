"use client";

import Image from "next/image";
import React, { useState } from "react";
import SmallArrowIcon from "@/public/icons/smallArrow.svg";
import useToggleHook from "@/app/_hooks/useToggleHook";
import JOB_CATEGORIES from "@/app/_constants/JobCategoryData";
import TOOL_DATA from "@/app/_constants/ToolData";

interface DropDownProps {
  dataType: string;
}

function DropDown({ dataType }: DropDownProps) {
  const { isOpen, toggleState } = useToggleHook();

  const dataMap: Record<string, Record<string, string>> = {
    job: JOB_CATEGORIES,
    tool: TOOL_DATA,
    //TODO: 다른 데이터 객체도 추가될 예정
  };

  const data = dataMap[dataType];

  const [item, setItem] = useState(Object.values(data)[0]);

  const handleItemClick = (value: string) => {
    setItem(value);
    toggleState();
  };

  return (
    <div className="flex w-full items-center justify-between">
      {item}
      <button className="h-5 w-5" onClick={toggleState}>
        {isOpen ? (
          <>
            <Image src={SmallArrowIcon} alt="open_dropbox" width={20} height={20} priority />
          </> //TODO: 위쪽 화살표 이미지로 변경
        ) : (
          <>
            <Image src={SmallArrowIcon} alt="open_dropbox" width={20} height={20} priority />
          </>
        )}
      </button>
      {isOpen && (
        <div className="absolute left-0 top-12 w-28 rounded-lg border border-solid border-gray-300 bg-white px-4 py-3 text-sm text-black">
          {Object.entries(data).map(([key, value]) => (
            <button key={key} className="block cursor-pointer p-2" onClick={() => handleItemClick(value)}>
              {value}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default DropDown;
