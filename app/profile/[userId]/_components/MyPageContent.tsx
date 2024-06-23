"use client";
import { MouseEvent, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { projectListAPI } from "@/app/_apis/projectListAPI";
import { ProjectResponseType } from "@/app/_apis/schema/projectResponse";
import MypageProjectSection, { MyPageProjectListType } from "./MypageProjectSection";
import MyPageCategory from "./MyPageCategory";
import Profile from "./Profile";

function MyPageContent() {
  const [selectCategory, setSelectCategory] = useState<MyPageProjectListType>("myProject");
  const data = useQuery({
    queryKey: [`projectList-${selectCategory}`],
    queryFn: async () => {
      return await projectListAPI.getMyProjectList({ page: 1, size: 8 }, selectCategory);
    },
  });

  if (!data.data) {
    return <div>로딩중 ...</div>;
  }

  const handleSelectCategory = (event: MouseEvent<HTMLButtonElement>) => {
    setSelectCategory(event.currentTarget.id as MyPageProjectListType);
  };

  return (
    <main className="mb-20 ml-[50%] mt-10 flex w-[1200px] -translate-x-1/2 gap-11 gap-y-16">
      <div className="w-[180px]">
        <MyPageCategory selectCategory={selectCategory} handleSelectCategory={handleSelectCategory} />
      </div>
      <div className="flex w-[976px] flex-col gap-8">
        <Profile />
        <MypageProjectSection
          projectList={data.data as unknown as ProjectResponseType[]}
          projectType={selectCategory}
        />
      </div>
    </main>
  );
}

export default MyPageContent;
