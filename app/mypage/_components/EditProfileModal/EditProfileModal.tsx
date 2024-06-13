import Image from "next/image";
import Button from "@/app/_components/Button/Button";
import Modal from "@/app/_components/Modal/Modal";
import ProfileImage from "@/app/_components/ProfileImage/ProfileImage";
import profileMock from "@/public/images/mock_profileImage.jpg";
import closeButton from "@/public/icons/crossLine.svg";
import Input from "@/app/_components/Input/Input";
import { ProfileDataType } from "../Profile";
import { MY_PAGE_TEXT } from "../constant";
import EditJobDropDown from "./EditProfileJob";

interface EditProfileModalProps {
  openModal: boolean;
  handleModalClose: () => void;
  profileData: ProfileDataType;
}

function EditProfileModal({ openModal, handleModalClose, profileData }: EditProfileModalProps) {
  return (
    <Modal
      openModal={openModal}
      handleModalClose={handleModalClose}
      className="flex flex-col items-center gap-8 px-10 py-8">
      <button type="button" onClick={handleModalClose} className="self-end rounded-full p-1 active:bg-gray-200">
        <Image width={20} height={20} src={closeButton} alt="프로필 수정 닫기" />
      </button>
      <div className="flex flex-col items-center justify-center gap-8">
        <div className="flex gap-24">
          <div className="flex flex-col gap-5">
            <ProfileImage imageUrl={profileMock} className="h-[124px] w-[124px]" />
            <label htmlFor="profile-image">
              <div className="h-11 w-28 cursor-pointer rounded-lg py-3 text-center text-sm text-blue-500">
                {MY_PAGE_TEXT.EDIT_IMAGE}
              </div>
            </label>
            <input type="file" id="profile-image" className="hidden" />
          </div>
          <div className="flex flex-col gap-4">
            <Input inputSize="normal" name="nickName" type="text" placeholder={profileData.nickName} title="닉네임" />
            <p className="text-base font-bold text-gray-900">{MY_PAGE_TEXT.JOB}</p>
            <EditJobDropDown currentJob="프론트엔드" />
            <label htmlFor="introduction" className="text-base font-bold text-gray-900">
              {MY_PAGE_TEXT.INTRODUCTION}
            </label>
            <textarea
              id="introduction"
              className="h-[384px] w-[384px] resize-none rounded-lg border border-gray-200 px-2 py-3 text-gray-500 placeholder:text-sm"
              placeholder={"자신을 표현할 간단한 소개를 적어주세요(최대 150자)"}
            />
          </div>
        </div>
      </div>
      <div className="flex gap-4">
        <Button onClick={handleModalClose} type="button" buttonSize="normal" bgColor="white">
          {MY_PAGE_TEXT.CANCEL}
        </Button>
        <Button type="button" buttonSize="normal" bgColor="mainBlue">
          {MY_PAGE_TEXT.COMPLETE_EDIT}
        </Button>
      </div>
    </Modal>
  );
}

export default EditProfileModal;
