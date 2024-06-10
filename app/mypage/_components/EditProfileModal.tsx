import Image from "next/image";
import Button from "@/app/_components/Button/Button";
import Modal from "@/app/_components/Modal/Modal";
import ProfileImage from "@/app/_components/ProfileImage/ProfileImage";
import profileMock from "@/public/images/mock_profileImage.jpg";
import closeButton from "@/public/icons/crossLine.svg";
import Input from "@/app/_components/Input/Input";
import { ProfileDataType } from "./Profile";

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
      <button type="button" className="relative h-6 w-6 self-end rounded-full active:bg-gray-200">
        <Image fill src={closeButton} alt="프로필 수정 닫기" />
      </button>
      <div className="flex flex-col items-center justify-center gap-8">
        <div className="flex gap-24">
          <div className="flex flex-col gap-5">
            <ProfileImage imageUrl={profileMock} className="h-[124px] w-[124px]" />
            <label htmlFor="profile-image">
              <Button type="button" bgColor="stroke" buttonSize="normal">
                이미지 수정
              </Button>
            </label>
            <input type="file" id="profile-image" className="hidden" />
          </div>
          <div className="flex flex-col gap-4">
            <Input inputSize="normal" name="nickName" type="text" placeholder={profileData.nickName} title="닉네임" />
            <p className="text-base font-bold text-gray-900">직무</p>
            {/** 프로젝트 등록할 때 drop down이랑 동일해보여서, 그걸 가져다가 쓸 것 같습니다. */}
            <label htmlFor="introduction" className="flex flex-col gap-2.5">
              <p className="text-base font-bold text-gray-900">소개</p>
              <textarea
                id="introduction"
                className="h-[384px] w-[384px] resize-none rounded-lg border border-gray-200 px-2 py-3 text-gray-500 placeholder:text-sm"
                placeholder={"자신을 표현할 간단한 소개를 적어주세요(최대 150자)"}
              />
            </label>
          </div>
        </div>
      </div>
      <div className="flex gap-4">
        <Button type="button" buttonSize="normal" bgColor="white">
          취소
        </Button>
        <Button type="button" buttonSize="normal" bgColor="mainBlue">
          수정 완료
        </Button>
      </div>
    </Modal>
  );
}

export default EditProfileModal;
