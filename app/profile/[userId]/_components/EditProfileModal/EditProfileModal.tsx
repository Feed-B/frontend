"use client";
import Button from "@/app/_components/Button/Button";
import Modal from "@/app/_components/Modal/Modal";
import ProfileImage from "@/app/_components/ProfileImage/ProfileImage";
import Input from "@/app/_components/Input/Input";
import DropDownBox from "@/app/addproject/_components/DropDown/DropDownBox";
import useHandleInputFile from "@/app/_hooks/useFileInput";
import { UserProfileType } from "@/app/_apis/ProfileAPI";
import { MY_PAGE_TEXT } from "../constant";
import DeleteImageButton from "./DeleteImageButton";

interface EditProfileModalProps {
  openModal: boolean;
  handleModalClose: () => void;
  profileData: UserProfileType | undefined;
}

function EditProfileModal({ openModal, handleModalClose, profileData }: EditProfileModalProps) {
  const {
    inputRef: profileImageInputRef,
    image,
    handleImageChange,
    handleRemoveImage,
    handleSelectImageClick,
  } = useHandleInputFile();

  return (
    <Modal openModal={openModal} handleModalClose={handleModalClose} className="flex flex-col items-center gap-8">
      <div className="flex flex-col items-center justify-center gap-8 px-12 pt-[90px]">
        <div className="flex gap-16">
          <div className="relative flex flex-col items-center gap-5">
            <DeleteImageButton onClick={handleRemoveImage} className="absolute right-0" />
            <ProfileImage imageUrl={image ? image : "default"} className="h-[124px] w-[124px]" />
            <Button type="button" bgColor="stroke" buttonSize="normal" onClick={handleSelectImageClick}>
              {MY_PAGE_TEXT.EDIT_IMAGE}
            </Button>
            <input
              type="file"
              id="profile-image"
              className="hidden"
              onChange={handleImageChange}
              ref={profileImageInputRef}
            />
          </div>
          <div className="flex flex-col gap-4">
            <Input inputSize="normal" name="nickName" type="text" placeholder={profileData?.nickName} title="닉네임" />
            <p className="text-base font-bold text-gray-900">{MY_PAGE_TEXT.JOB}</p>
            <DropDownBox dataType="job" />
            <label htmlFor="introduction" className="text-base font-bold text-gray-900">
              {MY_PAGE_TEXT.INTRODUCTION}
            </label>
            <textarea
              id="introduction"
              className="h-[140px] w-[384px] resize-none rounded-lg border border-gray-200 px-2 py-3 text-gray-500 placeholder:text-sm"
              placeholder={"자신을 표현할 간단한 소개를 적어주세요(최대 150자)"}
            />
          </div>
        </div>
      </div>
      <div className="flex gap-4 pb-10">
        <Button onClick={handleModalClose} type="button" buttonSize="normal" bgColor="white">
          {MY_PAGE_TEXT.CANCEL}
        </Button>
        <Button type="button" buttonSize="normal" bgColor="yellow" className="bg-yellow-500 font-semibold">
          {MY_PAGE_TEXT.COMPLETE_EDIT}
        </Button>
      </div>
    </Modal>
  );
}

export default EditProfileModal;
