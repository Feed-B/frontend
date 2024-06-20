"use client";
import { MouseEvent, useState } from "react";
import { useQuery } from "react-query";
import { ProjectListResponse } from "../_types/ProjectListDataType";
import { myProjectList, wishProjectList } from "../_components/ProjectList/mockDataCardList";
import { ProjectResponseType } from "../_apis/projectListAPI";
import MyPageCategory from "./_components/MyPageCategory";
import MyPageProvider from "./MyPageProvider";
import Profile from "./_components/Profile";
import MypageProjectList, { MyPageProjectListType } from "./_components/MypageProjectList";

function MyPageContent() {
  const [selectCategory, setSelectCategory] = useState<MyPageProjectListType>("myProject");
  let projectListData: ProjectListResponse[] = [];
  const data = useQuery({
    queryKey: [`projectList-${selectCategory}`],
    queryFn: async (): Promise<ProjectResponseType> => {
      const response = await fetch(
        `http://3.37.64.186/projects/mine${selectCategory === "wishProject" ? "/likes" : ""}?page=0&size=5`,
        {
          headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZTJlZDAyMyIsImlhdCI6MTcxODg3NDQ2NywiZXhwIjoxNzE4ODk2MDY3fQ.j2HKDVPZkRLVJ9uH7JwBVEg1InSe7nbuKniR3z00wvI",
          },
        }
      );
      const result = response.json();
      return result;
    },
  });

  console.log("data", data.data?.content);

  const handleSelectCategory = (event: MouseEvent<HTMLButtonElement>) => {
    setSelectCategory(event.currentTarget.id as MyPageProjectListType);
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
    <MyPageProvider>
      <main className="mb-20 ml-[50%] mt-10 flex w-[1200px] -translate-x-1/2 gap-11 gap-y-16">
        <div className="w-[180px]">
          <MyPageCategory selectCategory={selectCategory} handleSelectCategory={handleSelectCategory} />
        </div>
        <div className="flex w-[976px] flex-col gap-8">
          <Profile />
          <MypageProjectList projectList={projectListData} projectType={selectCategory} />
        </div>
      </main>
    </MyPageProvider>
  );
}

export default MyPageContent;
