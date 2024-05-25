import React from "react";
import SideBar from "./_components/SideBar/SideBar";

function page() {
  return (
    <main className="m-0 mx-auto flex w-[1440px] flex-row">
      <SideBar />
      <div>
        <h1>프로젝트</h1>
        <div>정렬 필터 & 검색바</div>
        <div>프로젝트 리스트</div>
      </div>
    </main>
  );
}

export default page;
