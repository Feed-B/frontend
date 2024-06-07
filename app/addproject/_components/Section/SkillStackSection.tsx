"use client";

import React, { ChangeEventHandler, FocusEventHandler, MouseEventHandler, useState } from "react";
import Image from "next/image";
import searchIcon from "@/public/icons/search.svg";
import { FULL_STACK_DATA } from "@/app/_constants/StackData";

function SkillStackSection() {
  const stackData = FULL_STACK_DATA;
  const [isHidden, setIsHidden] = useState(true);
  const [liOver, setLiOver] = useState(false);
  const [result, setResult] = useState<Set<string>>(new Set());
  const [search, setSearch] = useState("");

  const onChange: ChangeEventHandler<HTMLInputElement> = e => {
    const { value } = e.currentTarget;
    setSearch(value);
  };

  const onFocusIn: FocusEventHandler<HTMLInputElement> = () => {
    setIsHidden(false);
  };
  const onFocusOut: FocusEventHandler<HTMLInputElement> = () => {
    if (liOver) return;
    setIsHidden(true);
  };

  const onMouseOver: MouseEventHandler<HTMLLIElement> = () => {
    setLiOver(true);
  };
  const onMouseLeave: MouseEventHandler<HTMLLIElement> = () => {
    setLiOver(false);
  };

  const onAddResultClick = (stack: string) => {
    setResult(prev => {
      const newSelectedStacks = new Set(prev);
      if (newSelectedStacks.has(stack)) {
        newSelectedStacks.delete(stack);
      } else {
        newSelectedStacks.add(stack);
      }
      return newSelectedStacks;
    });
    setIsHidden(true);
  };

  return (
    <section className="flex flex-col">
      <label htmlFor="search" className="mb-4 mt-6 flex text-base font-bold text-gray-900">
        기술스택 *
      </label>
      <div>{result}</div>
      <div className="flex flex-row items-center gap-3 rounded-lg border border-solid border-gray-400 p-3">
        <Image src={searchIcon} alt="검색 아이콘" width={16} priority />
        <input
          className="w-full text-sm font-normal outline-none"
          name="search"
          id="search"
          placeholder="활용한 스킬을 검색해 주세요"
          onChange={onChange}
          value={search}
          onFocus={onFocusIn}
          onBlur={onFocusOut}
        />
      </div>
      {!isHidden ? (
        <ul className="flex flex-col items-start gap-1 rounded border border-solid border-gray-200">
          {stackData.map(data => (
            <li
              key={data.id}
              onMouseOver={onMouseOver}
              onMouseLeave={onMouseLeave}
              onClick={() => onAddResultClick(data.name)}
              hidden={!data.name.includes(search)}
              className="cursor-pointer p-2 text-base font-medium text-gray-900">
              {data.name}
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  );
}

export default SkillStackSection;
