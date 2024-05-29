import React from "react";
import Image from "next/image";
import searchIcon from "@/public/icons/search.svg";

function SearchBar() {
  // const SearchProject = async (formData: any) => {
  //   "use server";

  //   console.log(formData.get("search"));
  // };

  return (
    <div className="flex w-80 flex-row items-center gap-2 rounded-lg border border-solid border-blue-600 p-3">
      <Image src={searchIcon} alt="검색 기능입니다." width={20} height={20} priority />
      <form>
        <input
          className="w-60 text-sm font-normal outline-none"
          name="search"
          placeholder="Search..."
          autoComplete="off"
        />
      </form>
    </div>
  );
}

export default SearchBar;
