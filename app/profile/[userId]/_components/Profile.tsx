"use client";
import { useQuery } from "react-query";
import { StaticImageData } from "next/image";
import { useParams } from "next/navigation";
import profileMock from "@/public/images/mock_profileImage.jpg";
import ProfileImage from "@/app/_components/ProfileImage/ProfileImage";
import useToggleHook from "@/app/_hooks/useToggleHook";
import JobBadge, { Job } from "@/app/_components/JobBadge/JobBadge";
import Button from "@/app/_components/Button/Button";
import { profileAPI } from "@/app/_apis/ProfileAPI";
import EditProfileModal from "./EditProfileModal/EditProfileModal";
import { MY_PAGE_TEXT } from "./constant";

const mockData: ProfileDataType = {
  userId: 1,
  nickName: "하늘을 나는 개발자",
  introduction: "반갑습니다~ 하늘을 날고 싶은 개발자입니다~!",
  imageUrl: profileMock,
  job: "프론트엔드",
};

export interface ProfileDataType {
  userId: number;
  nickName: string;
  introduction: string;
  imageUrl: StaticImageData | string;
  job: Job;
}

function Profile() {
  const { userId } = useParams();
  const { data } = useQuery({
    queryKey: [`profile-${userId}`],
    queryFn: async () => {
      return await profileAPI.getUserProfile({ userId: Number(userId) });
    },
  });

  console.log("data", data);
  const { isOpen, toggleState } = useToggleHook();
  return (
    <>
      {isOpen && <EditProfileModal profileData={mockData} openModal={isOpen} handleModalClose={toggleState} />}
      <form className="relative flex items-start justify-start gap-8 rounded-lg border border-solid border-gray-200 p-8">
        <div className="relative">
          <ProfileImage imageUrl={mockData.imageUrl} className="h-[120px] w-[120px]" />
        </div>
        <div className="mt-2.5 flex flex-col gap-3">
          <div className="flex items-center gap-4">
            <div className="text-lg font-semibold text-gray-900">{mockData.nickName}</div>
            <JobBadge job={mockData.job} />
          </div>
          <div className="text-sm text-gray-700">{mockData.introduction}</div>
        </div>
        <Button
          onClick={toggleState}
          type="button"
          bgColor="stroke"
          buttonSize="normal"
          className="absolute bottom-8 right-8 w-28">
          {MY_PAGE_TEXT.EDIT_PROFILE}
        </Button>
      </form>
    </>
  );
}

export default Profile;
