import Button from "@/app/_components/Button/Button";
import Modal from "@/app/_components/Modal/Modal";
import ProfileImage from "@/app/_components/ProfileImage/ProfileImage";
import profileMock from "@/public/images/mock_profileImage.jpg";

interface EditProfileModalProps {
  openModal: boolean;
  handleModalClose: () => void;
}

function EditProfileModal({ openModal, handleModalClose }: EditProfileModalProps) {
  return (
    <Modal openModal={openModal} handleModalClose={handleModalClose}>
      <div className="flex flex-col items-center justify-center gap-8">
        <div className="flex gap-24">
          <div className="flex flex-col gap-5">
            <ProfileImage imageUrl={profileMock} className="h-[124px] w-[124px]" />
            <label
              htmlFor="profile-image"
              className="rounded-md py-3 text-center text-sm text-blue-500 active:bg-gray-200">
              이미지 수정
            </label>
            <input type="file" id="profile-image" className="hidden" />
          </div>
          <div className="flex flex-col gap-2.5">
            <label htmlFor="nickName" className="flex flex-col gap-2.5">
              <p>닉네임</p>
              <input id="nickName" type="text" className="rounded-md border border-solid border-gray-300" />
            </label>
            <label htmlFor="job" className="flex flex-col gap-2.5">
              <p>직무</p>
              <input id="job" type="text" className="rounded-md border border-solid border-gray-300" />
            </label>
            <label htmlFor="introduction" className="flex flex-col gap-2.5">
              <p>소개</p>
              <textarea
                id="introduction"
                className="h-[384px] w-[384px] resize-none rounded-md border border-solid border-gray-300 px-2 py-3"
                placeholder={"자신을 표현할 간단한 소개를 적어주세요(최대 150자)"}
              />
            </label>
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
      </div>
    </Modal>
  );
}

export default EditProfileModal;
