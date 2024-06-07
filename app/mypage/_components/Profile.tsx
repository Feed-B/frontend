"use client";
import Image from "next/image";
import profileMock from "@/public/images/mock_profileImage.jpg";
import ProfileImage from "@/app/_components/ProfileImage/ProfileImage";
import addImageIcon from "@/public/icons/addImage.svg";
import useToggleHook from "@/app/_hooks/useToggleHook";
import EditProfileButton from "./EditProfileButton";
import { MY_PAGE_TEXT } from "./constant";

const mockData = {
  userId: 1,
  nickName: "하늘을 나는 개발자",
  introduction: "반갑습니다~ 하늘을 날고 싶은 개발자입니다~!",
  imageUrl: profileMock,
};

function Profile() {
  const { isOpen, toggleState } = useToggleHook();
  return (
    <form className="relative flex items-start justify-start gap-8 rounded-lg border border-solid border-gray-200 p-8">
      <div className="relative">
        <ProfileImage imageUrl={mockData.imageUrl} />
        {isOpen && (
          <>
            <label htmlFor="profile-image">
              <div className="absolute bottom-1 right-0 h-10 w-10 cursor-pointer">
                <Image fill src={addImageIcon} alt="이미지 추가" />
              </div>
            </label>
            <input type="file" id="profile-image" className="hidden" />
          </>
        )}
      </div>
      {isOpen ? (
        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder={mockData.nickName}
            className="w-[250px] rounded-md border border-solid border-gray-200 p-2 text-sm"
          />
          <textarea
            placeholder={mockData.introduction}
            className="h-[80px] w-[604px] resize-none rounded-md border border-solid border-gray-200 p-2 text-sm"
          />
        </div>
      ) : (
        <div className="mt-2.5 flex flex-col gap-4">
          <div className="text-xl font-semibold text-gray-900">{mockData.nickName}</div>
          <div className="text-base text-gray-700">{mockData.introduction}</div>
        </div>
      )}

      <div className="absolute bottom-8 right-8">
        <EditProfileButton onClick={toggleState}>
          {isOpen ? MY_PAGE_TEXT.COMPLETE_EDIT_PROFILE : MY_PAGE_TEXT.EDIT_PROFILE}
        </EditProfileButton>
      </div>
    </form>
  );
}

export default Profile;
