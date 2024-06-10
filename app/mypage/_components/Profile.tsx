"use client";
import { StaticImageData } from "next/image";
import profileMock from "@/public/images/mock_profileImage.jpg";
import ProfileImage from "@/app/_components/ProfileImage/ProfileImage";
import useToggleHook from "@/app/_hooks/useToggleHook";
import EditProfileButton from "./EditProfileButton";
import { MY_PAGE_TEXT } from "./constant";
import EditProfileModal from "./EditProfileModal";

const mockData = {
  userId: 1,
  nickName: "하늘을 나는 개발자",
  introduction: "반갑습니다~ 하늘을 날고 싶은 개발자입니다~!",
  imageUrl: profileMock,
};

export interface ProfileDataType {
  userId: number;
  nickName: string;
  introduction: string;
  imageUrl: StaticImageData | string;
}

function Profile() {
  const { isOpen, toggleState } = useToggleHook();
  return (
    <form className="relative flex items-start justify-start gap-8 rounded-lg border border-solid border-gray-200 p-8">
      <div className="relative">
        <ProfileImage imageUrl={mockData.imageUrl} className="h-[120px] w-[120px]" />
        {isOpen && <EditProfileModal profileData={mockData} openModal={!isOpen} handleModalClose={toggleState} />}
      </div>
      <div className="mt-2.5 flex flex-col gap-4">
        <div className="text-xl font-semibold text-gray-900">{mockData.nickName}</div>
        <div className="text-base text-gray-700">{mockData.introduction}</div>
      </div>

      <div className="absolute bottom-8 right-8">
        <EditProfileButton onClick={toggleState}>{MY_PAGE_TEXT.EDIT_PROFILE}</EditProfileButton>
      </div>
    </form>
  );
}

export default Profile;
