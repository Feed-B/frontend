import { MouseEvent, useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "next/navigation";
import { projectListAPI } from "@/app/_apis/projectListAPI";
import { profileAPI } from "@/app/_apis/ProfileAPI";
import MypageProjectSection, { MyPageProjectListType } from "./MypageProjectSection";
import MyPageCategory from "./MyPageCategory";
import Profile from "./Profile";

function MyPageContent() {
  const [selectCategory, setSelectCategory] = useState<MyPageProjectListType>("myProject");
  const { userId } = useParams();
  const { data: currentUserId } = useQuery({
    queryKey: [`profile-${userId}`],
    queryFn: async () => {
      return await profileAPI.getCurrentUserId();
    },
  });
  const { data } = useQuery({
    queryKey: [`projectList-${selectCategory}`],
    queryFn: async () => {
      return await projectListAPI.getMyProjectList({ page: 1, size: 8 }, selectCategory);
    },
  });

  console.log("currentUserId", currentUserId);

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
        <MypageProjectSection projectList={data?.content} projectType={selectCategory} />
      </div>
    </main>
  );
}

export default MyPageContent;
