"use client";
import { FormEvent, useEffect } from "react";
import Button from "@/app/_components/Button/Button";
import Modal from "@/app/_components/Modal/Modal";
import ProfileImage from "@/app/_components/Profile/ProfileImage";
import Input from "@/app/_components/Input/Input";
import DropDownBox from "@/app/addproject/_components/DropDown/DropDownBox";
import useFileInput from "@/app/_hooks/useFileInput";
import useTextInput from "@/app/_hooks/useTextInput";
import { JobType, UserDataParams } from "@/app/_types/UserType";
import { UserResponse } from "@/app/_apis/schema/userResponse";
import useUserMutation from "@/app/_hooks/mutations/useUserMutation";
import { MY_PAGE_TEXT } from "../constant";
import DeleteImageButton from "./DeleteImageButton";
import { isChangeAboutMe, isImageChange, isValidNickName } from "./profileValidation";

interface EditProfileModalProps {
  openModal: boolean;
  handleModalClose: () => void;
  profileData: UserResponse;
}

const REFLY_ABOUT_ME_LENGTH = 150;

function EditProfileModal({ openModal, handleModalClose, profileData }: EditProfileModalProps) {

  const {
    inputRef: profileImageInputRef,
    image,
    handleImageChange,
    handleRemoveImage,
    handleSelectImageClick,
    handleSetImage,
    imageFile,
  } = useFileInput();
  const nickNameValue = useTextInput();
  const aboutMeValue = useTextInput();
  const { value: jobValue, handleSetValue } = useTextInput();

  const { changeProfileMutation } = useUserMutation(profileData, handleModalClose);

  const handleCompletedProfile = (event: FormEvent<HTMLFormElement | HTMLButtonElement>) => {
    event.preventDefault();

    const submitData: UserDataParams = {
      image: isImageChange(profileData?.imageUrl, image) === 2 ? imageFile : null,
      imageIdx: isImageChange(profileData.imageUrl, image),
      memberEditRequestDto: {
        id: profileData.id,
        nickName: isValidNickName(profileData.nickName, nickNameValue.value)
          ? nickNameValue.value
          : profileData.nickName,
        aboutMe: isChangeAboutMe(profileData.aboutMe, aboutMeValue.value) ? aboutMeValue.value : profileData?.aboutMe,
        job: jobValue === "" ? profileData.job : (jobValue as JobType),
      },
    };

    changeProfileMutation.mutate(submitData);
  };

  useEffect(() => {
    if (profileData?.imageUrl) {
      handleSetImage(profileData.imageUrl);
    }
    if (profileData?.nickName) {
      nickNameValue.handleSetValue(profileData.nickName);
    }
    if (profileData.aboutMe) {
      aboutMeValue.handleSetValue(profileData.aboutMe);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Modal
      openModal={openModal}
      handleModalClose={handleModalClose}
      className="overflow-y-scroll 
      mb:fixed mb:h-screen mb:w-screen mb:overflow-x-hidden mb:overflow-y-scroll mb:rounded-none 
      tbc:fixed tbc:h-screen tbc:w-screen tbc:overflow-x-hidden tbc:overflow-y-scroll tbc:rounded-none
      tbr:fixed tbr:h-screen tbr:w-screen tbr:overflow-x-hidden tbr:overflow-y-scroll tbr:rounded-none
      ">
      <form
        onSubmit={handleCompletedProfile}
        className="flex flex-col items-center gap-8 
        tbc:h-full tbc:justify-between
        tbr:h-full tbr:justify-between
        ">
        <div
          className="flex flex-col items-center justify-center gap-8 px-12 pt-[90px] 
        tbc:w-full
        tbr:w-full
        ">
          <div
            className="flex gap-16 
          mb:flex-col mb:gap-5 
          tbc:w-[95%] tbc:flex-col tbc:justify-start tbc:gap-5
          tbr:w-[95%] tbr:flex-col tbr:justify-start tbr:gap-5
          ">
            <div className="flex flex-col items-center">
              <div className="relative inline-block">
                <DeleteImageButton onClick={handleRemoveImage} className="absolute right-0" />
                <ProfileImage imageUrl={image ? image : "default"} className="h-[124px] w-[124px]" />
              </div>
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
              <Input
                inputSize="normal"
                name="nickName"
                value={nickNameValue.value}
                onChange={nickNameValue.handleChangeValue}
                type="text"
                placeholder={profileData?.nickName}
                title="닉네임"
                className="tbc:w-full tbr:w-full"
              />
              <p className="text-base font-bold text-gray-900">{MY_PAGE_TEXT.JOB}</p>
              <DropDownBox dataType="job" handleInputChange={handleSetValue} inputWidth={"w-full"} />
              <label htmlFor="introduction" className="text-base font-bold text-gray-900">
                {MY_PAGE_TEXT.INTRODUCTION}
              </label>
              <div className="relative">
                <textarea
                  value={aboutMeValue.value}
                  onChange={aboutMeValue.handleChangeValue}
                  id="introduction"
                  className="h-[150px] w-[384px] resize-none rounded-lg border border-gray-200 px-2 py-3 text-sm text-gray-800 placeholder:text-sm 
                tbc:w-full
                tbr:w-full
                "
                  placeholder={"자신을 표현할 간단한 소개를 적어주세요(최대 150자)"}
                  maxLength={REFLY_ABOUT_ME_LENGTH}
                />
                <p className="absolute bottom-3 right-3 text-sm text-gray-500">
                  {aboutMeValue.value.length} / {REFLY_ABOUT_ME_LENGTH}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-4 pb-10 mb:pb-0">
          <Button
            onClick={handleModalClose}
            type="button"
            buttonSize="normal"
            bgColor="white"
            className="flex items-center justify-center">
            {MY_PAGE_TEXT.CANCEL}
          </Button>
          <Button
            onClick={handleCompletedProfile}
            type="button"
            buttonSize="normal"
            bgColor="blue"
            className="flex items-center justify-center text-white">
            {MY_PAGE_TEXT.COMPLETE_EDIT}
          </Button>
        </div>
      </form>
    </Modal>
  );
}

export default EditProfileModal;
