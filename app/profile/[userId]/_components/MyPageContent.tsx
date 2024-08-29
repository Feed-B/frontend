"use client";
import { useParams } from "next/navigation";
import { MouseEvent, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { userQueryKeys } from "@/app/_queryFactory/userQuery";
import MypageProjectSection, { MyPageProjectListType } from "./MypageProjectSection";
import MyPageCategory from "./MyPageCategory/MyPageCategory";
import Profile from "./Profile/Profile";

function MyPageContent() {
  const { userId } = useParams();
  const [selectCategory, setSelectCategory] = useState<MyPageProjectListType>("myProject");

  const { data: currentUserId } = useQuery(userQueryKeys.userId());

  if (!currentUserId) {
    return;
  }
  const handleSelectCategory = (event: MouseEvent<HTMLButtonElement>) => {
    setSelectCategory(event.currentTarget.id as MyPageProjectListType);
  };

  const isMyPage = currentUserId.id === Number(userId) ? true : false;

  return (
    <main
      className="mx-auto mt-[64px] grid max-w-[1200px] grid-cols-[180px_1fr] grid-rows-[186px_1fr] gap-x-11 gap-y-8 
      mb:mt-4 mb:grid-cols-1 mb:grid-rows-[minmax(120px,_1fr)_88px_1fr] mb:gap-y-6 mb:p-5 
    tbc:mt-4 tbc:grid-cols-1 tbc:grid-rows-[180px_88px_1fr] tbc:gap-y-10 tbc:p-5
    tbr:mt-4 tbr:grid-cols-1 tbr:grid-rows-[180px_88px_1fr] tbr:gap-y-10 tbr:p-5">
      <div
        className="col-span-1 row-span-2 
        mb:row-start-2 mb:row-end-3 
        tbc:row-start-2 tbc:row-end-3
        tbr:row-start-2 tbr:row-end-3">
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
