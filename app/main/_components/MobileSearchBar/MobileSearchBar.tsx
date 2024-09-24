import Image from "next/image";
import React, { ChangeEvent, FormEvent, useState } from "react";
import searchIcon from "@/public/icons/search.svg";
import closeIcon from "@/public/icons/crossLine.svg";

import { useGetStack } from "../../_context/StackProvider";

interface MobileSearchBarProps {
  isToggle: boolean;
  toggleAction: () => void;
}

function MobileSearchBar({ isToggle, toggleAction }: MobileSearchBarProps) {
  const { projectState, isChangeSearchString, resetSearchString } = useGetStack();
  const [inputValue, setInputValue] = useState(projectState.searchString);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    setInputValue(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    isChangeSearchString(inputValue);
  };

  const handleReset = () => {
    setInputValue("");
    resetSearchString();
  };

  const handleClickSubmit = () => {
    isChangeSearchString(inputValue);
  };

  return (
    <>
      {!isToggle && (
        <button
          onClick={toggleAction}
          type="button"
          className="flex w-12 items-center justify-center rounded-xl border border-solid border-gray-400 bg-[#F9F9F9] p-1 pc:hidden">
          <Image src={searchIcon} alt="검색 기능입니다." width={16} priority />
        </button>
      )}
      {isToggle && (
        <div className="flex w-full max-w-[740px] items-center justify-between gap-5 rounded-xl border border-solid border-[#D6D6D6] p-2 px-4 mb:max-w-[320px] tbc:max-w-[420px] pc:hidden">
          <form onSubmit={handleSubmit}>
            <input
              className="mb-1 w-[125px] text-xs font-normal outline-none"
              name="search"
              placeholder="프로젝트 이름 검색하기"
              autoComplete="off"
              value={inputValue}
              onChange={onChange}
            />
          </form>
          {inputValue.length > 0 && (
            <div className="flex gap-2">
              <Image src={searchIcon} alt="검색 기능입니다." width={16} priority onClick={handleClickSubmit} />
              <Image src={closeIcon} alt="검색 초기화" width={16} onClick={handleReset} />
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default MobileSearchBar;
