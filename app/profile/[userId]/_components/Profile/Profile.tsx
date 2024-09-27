"use client";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import ProfileImage from "@/app/_components/Profile/ProfileImage";
import useToggleHook from "@/app/_hooks/useToggleHook";
import JobBadge from "@/app/_components/JobBadge/JobBadge";
import Button from "@/app/_components/Button/Button";
import { JOB_CATEGORIES_KR, JobCategoriesType } from "@/app/_constants/JobCategoryData";
import { userQueryKey } from "@/app/_queryFactory/userQuery";
import { profileApi } from "@/app/_apis/userApi";
import ProfileSkeleton from "../skeletonUI/ProfileSkeleton";
import EditProfileModal from "../EditProfileModal/EditProfileModal";
import { MY_PAGE_TEXT } from "../constant";

function Profile({ isMyPage }: { isMyPage: boolean }) {
  const { userId } = useParams();

  const {
    data: userProfileData,
    isPending,
    isError,
  } = useQuery({
    queryKey: userQueryKey.profile(Number(userId)).queryKey,
    queryFn: () => profileApi.getUserData(Number(userId)),
  });
  const { isOpen, toggleState } = useToggleHook();

  if (isError) {
    throw new Error("유저 정보를 불러오는데 실패했습니다.");
  }

  if (isPending) {
    return <ProfileSkeleton />;
  }

  return (
    <>
      {isOpen && <EditProfileModal profileData={userProfileData} openModal={isOpen} handleModalClose={toggleState} />}
      <form
        className="relative flex items-center justify-start gap-8 rounded-lg border border-solid border-gray-200 p-8 
      mb:gap-2 mb:pt-3">
        <ProfileImage
          imageUrl={userProfileData?.imageUrl ? userProfileData.imageUrl : "default"}
          className="relative h-[120px] w-[120px] flex-shrink-0 
          mb:h-[66px] mb:w-[66px]"
        />
        <div className="mt-2.5 flex flex-col gap-3">
          <div
            className="flex items-center gap-4 
          mb:gap-1">
            <div className="text-lg font-semibold text-gray-900">{userProfileData?.nickName}</div>
            <JobBadge job={JOB_CATEGORIES_KR[userProfileData.job] as JobCategoriesType} />
          </div>
          <p
            className="w-[81%] text-sm text-gray-700 
          mb:w-auto 
          tbc:w-auto 
          tbr:w-auto">
            {userProfileData?.aboutMe}
          </p>
        </div>
        {isMyPage && (
          <Button
            onClick={toggleState}
            type="button"
            bgColor="stroke"
            buttonSize="normal"
            className="tbc:p-x-1 absolute bottom-8 right-8 w-28 border-none text-blue-500 
            mb:-right-1.5 mb:top-3.5 mb:bg-transparent 
            tbc:right-9 tbc:top-8 tbc:w-[84px] tbc:px-1
            tbr:right-9 tbr:top-8 tbr:w-[84px] tbr:px-1">
            {MY_PAGE_TEXT.EDIT_PROFILE}
          </Button>
        )}
      </form>
    </>
  );
}

export default Profile;
