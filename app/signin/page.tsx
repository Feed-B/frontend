import { RiKakaoTalkFill } from "react-icons/ri";

function LoginPage() {
  return (
    <div className="mx-[auto] mt-[165px] flex max-w-[360px] flex-col items-center">
      <div className="mb-[427px] text-[36px]">로그인</div>
      <button className="mb-1.5 h-[52px] w-[360px] rounded-lg bg-[#1CC32C] text-white">네이버로 이용하기</button>
      <button className="flex h-[52px] w-[360px] items-center justify-center gap-2.5 rounded-lg bg-[#f9e000]">
        <RiKakaoTalkFill className="text-[20px]" />
        카카오톡으로 이용하기
      </button>
    </div>
  );
}

export default LoginPage;
