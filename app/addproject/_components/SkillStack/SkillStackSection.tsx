"use client";

import React, { ChangeEventHandler, FocusEventHandler, MouseEventHandler, useEffect, useState } from "react";
import Image from "next/image";
import searchIcon from "@/public/icons/search.svg";
import { FULL_STACK_DATA } from "@/app/_constants/StackData";
import crossLineIcon from "@/public/icons/crossLine.svg";

function SkillStackSection() {
  const stackData = FULL_STACK_DATA;
  const [isHidden, setIsHidden] = useState(true);
  const [liOver, setLiOver] = useState(false);
  const [result, setResult] = useState<Set<string>>(new Set());
  const [selectedStacks, setSelectedStacks] = useState<string[]>([]);
  const [search, setSearch] = useState("");

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = e => {
    const { value } = e.currentTarget;
    setSearch(value);
  };

  const handleInputFocusIn: FocusEventHandler<HTMLInputElement> = () => {
    setIsHidden(false);
  };
  const handleInputFocusOut: FocusEventHandler<HTMLInputElement> = () => {
    if (liOver) return;
    setIsHidden(true);
  };

  const handleMouseOver: MouseEventHandler<HTMLLIElement> = () => {
    setLiOver(true);
  };
  const handleMouseLeave: MouseEventHandler<HTMLLIElement> = () => {
    setLiOver(false);
  };

  const handleAddStack = (stack: string) => {
    setResult(prev => {
      const newSelectedStacks = new Set(prev);
      if (newSelectedStacks.has(stack)) {
        return newSelectedStacks;
      } else {
        newSelectedStacks.add(stack);
      }
      return newSelectedStacks;
    });
    setSearch("");
    setIsHidden(true);
  };

  const handleDeleteStack = (stack: string) => {
    setResult(prev => {
      const newSelectedStacks = new Set(prev);
      newSelectedStacks.delete(stack);
      return newSelectedStacks;
    });
  };

  useEffect(() => {
    setSelectedStacks(Array.from(result));
  }, [result]);

  return (
    <>
      <div className="relative">
        <div className="mb-1 flex flex-row items-center gap-3 rounded-lg border border-solid border-gray-200 p-3">
          <Image src={searchIcon} alt="검색 아이콘" width={16} priority />
          <input
            className="w-full text-sm font-normal outline-none"
            name="search"
            id="search"
            placeholder="활용한 스킬을 검색해 주세요"
            onChange={handleInputChange}
            value={search}
            onFocus={handleInputFocusIn}
            onBlur={handleInputFocusOut}
            autoComplete="off"
          />
          <Image
            src={crossLineIcon}
            width={20}
            alt="기술스택 삭제"
            className="cursor-pointer"
            onClick={() => setSearch("")}
            priority
          />
        </div>
        {!isHidden ? (
          <ul className="absolute z-20 flex h-32 w-full flex-col items-start gap-1 overflow-y-auto rounded border border-solid border-gray-200 bg-white">
            {stackData.map(data => (
              <li
                key={data.id}
                onMouseOver={handleMouseOver}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleAddStack(data.name)}
                hidden={!data.name.includes(search)}
                className="w-full cursor-pointer p-2 text-base font-medium text-gray-900 hover:bg-gray-100">
                {data.name}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
      <div className="flex min-h-10 flex-wrap gap-2">
        {selectedStacks.length === 0 ? (
          <div className="flex items-center rounded-[44px] bg-gray-100 p-2 text-sm font-normal text-gray-900">
            선택된 스킬이 없습니다.
          </div>
        ) : (
          selectedStacks.map(stack => {
            const stackItem = stackData.find(item => item.name === stack);
            return (
              <div
                key={stackItem?.id}
                className="flex items-center rounded-[44px] bg-gray-100 p-2 text-sm font-normal text-gray-900">
                <Image src={stackItem?.image || ""} alt="기술 스택 이미지" width={20} className="mr-1" />
                <p className="mr-1.5">{stack}</p>
                <Image
                  src={crossLineIcon}
                  width={20}
                  alt="기술스택 삭제"
                  className="cursor-pointer"
                  onClick={() => handleDeleteStack(stack)}
                  priority
                />
              </div>
            );
          })
        )}
      </div>
    </>
  );
}

export default SkillStackSection;
