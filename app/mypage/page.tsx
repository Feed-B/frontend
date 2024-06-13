"use client";
import { MouseEvent, useState } from "react";
import { myProjectList, wishProjectList } from "../_components/ProjectList/mockDataCardList";
import ProjectList from "../_components/ProjectList/ProjectList";
import { ProjectListResponse } from "../_types/ProjectListDataType";
import MyPageCategory from "./_components/MyPageCategory";
import Profile from "./_components/Profile";

function MyPage() {
  const [selectCategory, setSelectCategory] = useState("myProject");
  let projectListData: ProjectListResponse[] = [];

  const handleSelectCategory = (event: MouseEvent<HTMLButtonElement>) => {
    setSelectCategory(event.currentTarget.id);
  };

  switch (selectCategory) {
    case "myProject": {
      projectListData = myProjectList.data;
      break;
    }
    case "wishProject": {
      projectListData = wishProjectList.data;
    }
  }
  return (
    <main className="mb-20 ml-[50%] mt-10 flex w-[1200px] -translate-x-1/2 gap-11 gap-y-16">
      <div className="w-[180px]">
        <MyPageCategory selectCategory={selectCategory} handleSelectCategory={handleSelectCategory} />
      </div>
      <div className="flex w-[976px] flex-col gap-8">
        <Profile />
        <ProjectList projectList={projectListData} />
      </div>
    </main>
  );
}

export default MyPage;
