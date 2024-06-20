import { MouseEvent, useState } from "react";
import { useQuery } from "react-query";
import { ProjectResponseType } from "@/app/_apis/projectListAPI";
import MypageProjectList, { MyPageProjectListType } from "./MypageProjectList";
import MyPageCategory from "./MyPageCategory";
import Profile from "./Profile";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

function MyPageContent() {
  const [selectCategory, setSelectCategory] = useState<MyPageProjectListType>("myProject");
  const data = useQuery({
    queryKey: [`projectList-${selectCategory}`],
    queryFn: async (): Promise<ProjectResponseType> => {
      const response = await fetch(`${BASE_URL}${selectCategory === "wishProject" ? "/likes" : ""}?page=0&size=5`, {
        headers: {
          Authorization: `Bearer ${true && "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkZmUwNzQ3MyIsImlhdCI6MTcxODg5NjM0MCwiZXhwIjoxNzE4OTE3OTQwfQ.airsCRbt4atE5Gd7NcLTfZd4C8CiG8Ha4A_LqbhNUx8"}`,
        },
      });
      const result = response.json();
      return result;
    },
  });

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
        <MypageProjectList projectList={data.data?.content} projectType={selectCategory} />
      </div>
    </main>
  );
}

export default MyPageContent;
