const mockData = {
  nickName: "하늘을 나는 개발자",
  introduction: "반갑습니다~ 하늘을 날고 싶은 개발자입니다~!",
  imageUrl:
    "https://i.namu.wiki/i/PD4zDDZPkh_BR0CZzuLoan7V0MekaZCQ-5Ohb7ug1zrr3EiDuYjaF_0LOWBo9aX9_H53Ta3I76rF9M03oGI95sC8r8dYWjUD4z-7vFNfdhy8R1c43SVEOAhWgHFL6e-QKaxi-jvdaB88-CSR5Pbv5Q.webp",
};

function Profile() {
  return (
    <form className="flex items-start justify-start gap-7 rounded-lg border border-solid border-[#d9d9d9] p-10">
      <div className="relative">
        <img
          src={mockData.imageUrl ? mockData.imageUrl : "/icons/default-profile.svg"}
          alt={mockData.imageUrl ? mockData.imageUrl : "기본 프로필 이미지"}
          className="h-[10rem] w-[10rem] rounded-full"
        />
        <label htmlFor="profile-image">
          <img
            src="/icons/add-image.svg"
            alt="이미지 추가"
            className="absolute bottom-1 right-0 h-10 w-10 cursor-pointer"
          />
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
