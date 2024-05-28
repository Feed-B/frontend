import Image from "next/image";
import profileMock from "@/public/images/mock_profileImage.jpg";
import defaultProfileImage from "@/public/icons/default-profile.svg";

const mockData = {
  nickName: "하늘을 나는 개발자",
  introduction: "반갑습니다~ 하늘을 날고 싶은 개발자입니다~!",
  imageUrl: profileMock,
};

function Profile() {
  return (
    <form className="flex items-start justify-start gap-7 rounded-lg border border-solid border-[#d9d9d9] p-10">
      <div className="relative">
        <div className="relative h-[160px] w-[160px] overflow-hidden rounded-full">
          <Image
            fill
            src={mockData.imageUrl ? mockData.imageUrl : defaultProfileImage}
            alt={mockData.imageUrl ? `${mockData.nickName}의 프로필 이미지` : "기본 프로필 이미지"}
          />
        </div>
        <label htmlFor="profile-image">
          <div className="absolute bottom-1 right-0 h-10 w-10 cursor-pointer">
            <Image fill src="/icons/add-image.svg" alt="이미지 추가" />
          </div>
        </label>
        <input type="file" id="profile-image" className="hidden" />
      </div>
      <div className="flex flex-col gap-1.5 pt-4">
        <div className="text-lg font-semibold">{mockData.nickName}</div>
        <div>{mockData.introduction}</div>
      </div>
    </form>
  );
}

export default Profile;
