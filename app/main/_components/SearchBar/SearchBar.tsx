import React from "react";
import Image from "next/image";
import searchIcon from "@/public/icons/search.svg";
import { SearchProject } from "./SearchAction";

function SearchBar() {
  return (
    <div className="flex h-8 w-48 flex-row items-center gap-2 rounded-[20px] border border-solid border-[#D6D6D6] p-2">
      <Image src={searchIcon} alt="검색 기능입니다." width={16} priority />
      <form action={SearchProject}>
        <input
          className="mb-1 w-36 text-xs font-normal outline-none"
          name="search"
          placeholder="프로젝트 이름 검색하기"
          autoComplete="off"
        />
      </form>
    </div>
  );
}

export default SearchBar;
