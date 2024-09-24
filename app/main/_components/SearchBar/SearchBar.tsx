import React, { ChangeEvent, FormEvent, useState } from "react";
import Image from "next/image";
import searchIcon from "@/public/icons/search.svg";
import closeIcon from "@/public/icons/crossLine.svg";
import { useGetStack } from "../../_context/StackProvider";

function SearchBar() {
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

  return (
    <div className="flex h-8 w-48 items-center gap-2 rounded-[20px] border border-solid border-[#D6D6D6] p-2 mb:hidden tbc:hidden tbr:hidden">
      <Image src={searchIcon} alt="검색 기능입니다." width={16} priority />
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
      {inputValue.length > 0 && <Image src={closeIcon} alt="검색 초기화" width={16} onClick={handleReset} />}
    </div>
  );
}

export default SearchBar;
