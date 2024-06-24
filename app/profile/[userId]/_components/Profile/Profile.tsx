"use client";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import ProfileImage from "@/app/_components/ProfileImage/ProfileImage";
import useToggleHook from "@/app/_hooks/useToggleHook";
import JobBadge from "@/app/_components/JobBadge/JobBadge";
import Button from "@/app/_components/Button/Button";
import { profileAPI } from "@/app/_apis/ProfileAPI";
import ProfileSkeleton from "../skeletonUI/ProfileSkeleton";
import EditProfileModal from "../EditProfileModal/EditProfileModal";
import { MY_PAGE_TEXT } from "../constant";

function Profile({ isMyPage }: { isMyPage: boolean }) {
  const { userId } = useParams();
  const { data: userProfileData } = useQuery({
    queryKey: ["profile", userId],
    queryFn: async () => {
      return await profileAPI.getUserData(Number(userId));
    },
  });
  const { isOpen, toggleState } = useToggleHook();

  if (!userProfileData) {
    return <ProfileSkeleton />;
  }

  return (
    <>
      {isOpen && <EditProfileModal profileData={userProfileData} openModal={isOpen} handleModalClose={toggleState} />}
      <form className="relative flex items-start justify-start gap-8 rounded-lg border border-solid border-gray-200 p-8">
        <div className="relative">
          <ProfileImage
            imageUrl={userProfileData?.imageUrl ? userProfileData.imageUrl : "default"}
            className="h-[120px] w-[120px]"
          />
        </div>
        <div className="mt-2.5 flex flex-col gap-3">
          <div className="flex items-center gap-4">
            <div className="text-lg font-semibold text-gray-900">{userProfileData?.nickName}</div>
            <JobBadge job={userProfileData?.job} />
          </div>
          <div className="text-sm text-gray-700">{userProfileData?.aboutMe}</div>
        </div>
        {isMyPage && (
          <Button
            onClick={toggleState}
            type="button"
            bgColor="stroke"
            buttonSize="normal"
            className="absolute bottom-8 right-8 w-28">
            {MY_PAGE_TEXT.EDIT_PROFILE}
          </Button>
        )}
      </form>
    </>
  );
}

export default Profile;
