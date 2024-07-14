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
    <main className="mb-20 ml-[50%] mt-10 flex w-[1200px] -translate-x-1/2 gap-11 gap-y-16">
      <div className="w-[180px]">
        <MyPageCategory
          isMyPage={isMyPage}
          selectCategory={selectCategory}
          handleSelectCategory={handleSelectCategory}
        />
      </div>
      <div className="flex w-[976px] flex-col gap-8">
        <Profile isMyPage={isMyPage} />
        <MypageProjectSection isMyPage={isMyPage} projectType={selectCategory} userId={Number(userId)} />
      </div>
    </main>
  );
}

export default MyPageContent;
