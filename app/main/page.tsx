import React from "react";
import SideBar from "./_components/SideBar/SideBar";
import SortFilter from "./_components/SortFilter/SortFilter";
import SearchBar from "./_components/SearchBar/SearchBar";

function page() {
  return (
    <main className="m-0 mx-auto flex w-[960px] flex-row">
      <SideBar />
      <div className="w-[700px]">
        <h1 className="pb-2 text-2xl font-bold">프로젝트</h1>
        <div className="flex h-10  flex-row justify-between">
          <SortFilter />
          <SearchBar />
        </div>
        <div>프로젝트 리스트</div>
      </div>
    </main>
  );
}

export default page;
