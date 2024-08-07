"use client";
import { FormEvent, useEffect } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Button from "@/app/_components/Button/Button";
import Modal from "@/app/_components/Modal/Modal";
import ProfileImage from "@/app/_components/ProfileImage/ProfileImage";
import Input from "@/app/_components/Input/Input";
import DropDownBox from "@/app/addproject/_components/DropDown/DropDownBox";
import useFileInput from "@/app/_hooks/useFileInput";
import useTextInput from "@/app/_hooks/useTextInput";
import { PutUserDataType, profileAPI, UserDataType, JobType } from "@/app/_apis/ProfileAPI";
import { userQueryKeys } from "@/app/_queryFactory/userQuery";
import { MY_PAGE_TEXT } from "../constant";
import DeleteImageButton from "./DeleteImageButton";
import { isChangeAboutMe, isImageChange, isValidNickName } from "./profileValidation";

interface EditProfileModalProps {
  openModal: boolean;
  handleModalClose: () => void;
  profileData: UserDataType;
}

function EditProfileModal({ openModal, handleModalClose, profileData }: EditProfileModalProps) {
  const queryClient = useQueryClient();

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

  const changeProfileMutation = useMutation({
    mutationFn: (newProfileData: PutUserDataType) => {
      return profileAPI.putUserData({ userId: profileData.id, userData: newProfileData });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: userQueryKeys.detail(Number(profileData.id)).queryKey });
      handleModalClose();
    },
  });

  const handleCompletedProfile = (event: FormEvent<HTMLFormElement | HTMLButtonElement>) => {
    event.preventDefault();

    const submitData: PutUserDataType = {
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
    <Modal openModal={openModal} handleModalClose={handleModalClose}>
      <form onSubmit={handleCompletedProfile} className="flex flex-col items-center gap-8">
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
              <Input
                inputSize="normal"
                name="nickName"
                value={nickNameValue.value}
                onChange={nickNameValue.handleChangeValue}
                type="text"
                placeholder={profileData?.nickName}
                title="닉네임"
              />
              <p className="text-base font-bold text-gray-900">{MY_PAGE_TEXT.JOB}</p>
              <DropDownBox dataType="job" handleInputChange={handleSetValue} inputWidth={"w-full"} />
              <label htmlFor="introduction" className="text-base font-bold text-gray-900">
                {MY_PAGE_TEXT.INTRODUCTION}
              </label>
              <textarea
                value={aboutMeValue.value}
                onChange={aboutMeValue.handleChangeValue}
                id="introduction"
                className="h-[140px] w-[384px] resize-none rounded-lg border border-gray-200 px-2 py-3 text-sm text-gray-800 placeholder:text-sm"
                placeholder={"자신을 표현할 간단한 소개를 적어주세요(최대 150자)"}
              />
            </div>
          </div>
        </div>
        <div className="flex gap-4 pb-10">
          <Button onClick={handleModalClose} type="button" buttonSize="normal" bgColor="white">
            {MY_PAGE_TEXT.CANCEL}
          </Button>
          <Button
            onClick={handleCompletedProfile}
            type="button"
            buttonSize="normal"
            bgColor="yellow"
            className="bg-yellow-500 font-semibold">
            {MY_PAGE_TEXT.COMPLETE_EDIT}
          </Button>
        </div>
      </form>
    </Modal>
  );
}

export default EditProfileModal;
