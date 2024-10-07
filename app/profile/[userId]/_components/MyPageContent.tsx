"use client";
import { useParams } from "next/navigation";
import { MouseEvent, useState } from "react";
import { useCurrentUser } from "@/app/_hooks/reactQuery/useUserQuery";
import MypageProjectSection, { MyPageProjectListType } from "./MypageProjectSection";
import MyPageCategory from "./MyPageCategory/MyPageCategory";
import Profile from "./Profile/Profile";

function MyPageContent() {
  const { userId } = useParams();
  const [selectCategory, setSelectCategory] = useState<MyPageProjectListType>("myProject");

  const { data: currentUserId } = useCurrentUser();

  if (!currentUserId) {
    return;
  }
  const handleSelectCategory = (event: MouseEvent<HTMLButtonElement>) => {
    setSelectCategory(event.currentTarget.id as MyPageProjectListType);
  };

  const isMyPage = currentUserId.id === Number(userId) ? true : false;

  return (
    <main
      className="mx-auto mb-12 mt-4 grid grid-cols-1 grid-rows-[fit-content_88px_1fr] gap-x-11 gap-y-10 px-8 
      mb:gap-y-6 mb:p-5
      tbr:p-5 
      pc:mt-[64px] pc:max-w-[1200px] pc:grid-cols-[180px_1fr] pc:grid-rows-[fit-content_1fr] pc:gap-y-8
    ">
      <div className="row-start-2 row-end-3 pc:col-span-1 pc:row-span-2">
        <MyPageCategory
          isMyPage={isMyPage}
          selectCategory={selectCategory}
          handleSelectCategory={handleSelectCategory}
        />
      </div>
      <div className="col-span-1">
        <Profile isMyPage={isMyPage} />
      </div>
      <div className="col-span-1">
        <MypageProjectSection isMyPage={isMyPage} projectType={selectCategory} userId={Number(userId)} />
      </div>
    </main>
  );
}

export default MyPageContent;
