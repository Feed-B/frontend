import Image from "next/image";
import signUpBar1Icon from "@/public/icons/signUpBar1.svg";

interface Step1Props {
  nextStep: () => void;
}

function Step1({ nextStep }: Step1Props) {
  return (
    <div className="mx-[auto] mt-[117px] flex max-w-[420px] flex-col items-center">
      <Image src={signUpBar1Icon} alt="signUpBar" />

      <div className="mb-[90px] mt-[48px] text-[#3A3A3A]">닉네임과 소개를 작성해 주세요</div>

      <div className="flex flex-col">
        <label htmlFor="nickName">닉네임*</label>
        <input
          type="text"
          id="nickName"
          className="mb-[69px] h-[48px] w-[420px] rounded-[8px] border-[1px] border-[#d6d6d6] px-[14px] py-[16px] focus:border-[#0066DA] focus:outline-none"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="introduction">소개</label>
        <textarea
          placeholder="자기를 어필할 수 있는 소개글을 작성해주세요 (150자)"
          id="introduction"
          className="mb-[200px] h-[160px] w-[420px] rounded-[8px] border-[1px] border-[#d6d6d6] px-[14px] py-[16px] focus:border-[#0066DA] focus:outline-none"
        />
      </div>

      <button onClick={nextStep} className="w-[118px] rounded-[8px] bg-[#0066DA] px-[29px] py-[12px] text-white">
        다음으로
      </button>
    </div>
  );
}

export default Step1;
