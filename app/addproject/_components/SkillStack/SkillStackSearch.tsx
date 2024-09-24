"use client";

import Image from "next/image";
import React, { ChangeEventHandler, FocusEventHandler, MouseEventHandler, useCallback, useRef, useState } from "react";
import crossLineIcon from "@/public/icons/crossLine.svg";
import searchIcon from "@/public/icons/search.svg";
import { FULL_STACK_DATA } from "@/app/_constants/StackData";
import useOutsideClick from "@/app/_hooks/useOutsideClick";
import { useGetSkillStack } from "../../_context/SkillStackProvider";

interface SkillStackSearchProps {
  setTouchedStack?: (isTouch: boolean) => void;
  error?: string;
}

function SkillStackSearch({ setTouchedStack, error }: SkillStackSearchProps) {
  const stackData = FULL_STACK_DATA;
  const [isHidden, setIsHidden] = useState(true);
  const [liOver, setLiOver] = useState(false);
  const [search, setSearch] = useState("");

  const dropdownRef = useRef<HTMLDivElement>(null);
  const exceptionRef = useRef<HTMLDivElement>(null);

  const { isAddStack } = useGetSkillStack();

  const borderClass = error ? "border-red-300" : "border-gray-200";

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = useCallback(event => {
    const { value } = event.currentTarget;
    setSearch(value);
  }, []);

  const handleInputFocusIn: FocusEventHandler<HTMLInputElement> = useCallback(() => {
    setIsHidden(false);
  }, []);

  const handleInputFocusOut: FocusEventHandler<HTMLInputElement> = useCallback(() => {
    if (liOver) return;
    setIsHidden(true);
    if (setTouchedStack) {
      setTouchedStack(true);
    }
  }, [liOver, setTouchedStack]);

  const handleMouseOver: MouseEventHandler<HTMLLIElement> = useCallback(() => {
    setLiOver(true);
  }, []);

  const handleMouseLeave: MouseEventHandler<HTMLLIElement> = useCallback(() => {
    setLiOver(false);
  }, []);

  const handleAddStack = useCallback(
    (stack: string) => {
      isAddStack(stack);
      setSearch("");
      setIsHidden(true);
      if (setTouchedStack) {
        setTouchedStack(true);
      }
    },
    [isAddStack, setTouchedStack]
  );

  useOutsideClick(dropdownRef, () => setIsHidden(true), exceptionRef);

  return (
    <div className="relative">
      <div
        className={`mb-1 flex flex-row items-center gap-3 rounded-lg border border-solid ${borderClass} p-3`}
        ref={exceptionRef}>
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
        {search && (
          <Image
            src={crossLineIcon}
            width={20}
            alt="기술스택 삭제"
            className="cursor-pointer"
            onClick={() => setSearch("")}
            priority
          />
        )}
      </div>
      {!isHidden && (
        <div ref={dropdownRef}>
          <ul className="absolute z-20 flex h-32 w-full flex-col items-start gap-1 overflow-y-auto rounded border border-solid border-gray-200 bg-white">
            {stackData
              .filter(data => data.name.toLowerCase().includes(search.toLowerCase()))
              .map(data => (
                <li
                  key={data.id}
                  onMouseOver={handleMouseOver}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleAddStack(data.name)}
                  className="w-full cursor-pointer p-2 text-base font-medium text-gray-900 hover:bg-gray-100">
                  {data.name}
                </li>
              ))}
          </ul>
        </div>
      )}
      <div className="h-4">{error && <p className="text-sm text-red-500">{error}</p>}</div>
    </div>
  );
}

export default SkillStackSearch;
