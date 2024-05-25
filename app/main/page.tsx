import React from "react";
import SideBar from "./_components/SideBar/SideBar";
import SortFilter from "./_components/\bSortFilter/SortFilter";

function page() {
  return (
    <main className="m-0 mx-auto flex w-[1440px] flex-row">
      <SideBar />
      <div>
        <h1 className="pb-7 text-2xl font-bold">프로젝트</h1>
        <div>
          <SortFilter />
        </div>
        <div>프로젝트 리스트</div>
      </div>
    </main>
  );
}

export default page;
