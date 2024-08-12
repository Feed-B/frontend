"use client";
import { useParams } from "next/navigation";
import { MouseEvent, useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getToken } from "@/app/_utils/handleToken";
import { profileAPI } from "@/app/_apis/ProfileAPI";
import MypageProjectSection, { MyPageProjectListType } from "./MypageProjectSection";
import MyPageCategory from "./MyPageCategory/MyPageCategory";
import Profile from "./Profile/Profile";

function MyPageContent() {
  const { userId } = useParams();
  const [selectCategory, setSelectCategory] = useState<MyPageProjectListType>("myProject");
  const [loading, setLoading] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const headers = {
    Authorization: "Bearer ",
  };

  useEffect(() => {
    const accessToken = getToken();
    if (accessToken && accessToken.accessToken) {
      Object.assign(headers, {
        Authorization: "Bearer " + accessToken.accessToken,
      });
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [headers]);

  const { data: currentUserId } = useQuery({
    queryKey: ["id"],
    queryFn: async () => await profileAPI.getUserId(headers),
    enabled: loading && !!headers?.Authorization,
  });

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
