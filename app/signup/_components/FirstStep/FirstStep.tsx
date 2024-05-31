import Image from "next/image";
import firstStepBar from "@/public/icons/firstStepBar.svg";
import ExampleButton from "../ExampleButton/ExampleButton";

interface FirstStepProps {
  nextStep: () => void;
}

function Step1({ nextStep }: FirstStepProps) {
  return (
    <div className="mx-[auto] mt-[117px] flex max-w-[420px] flex-col items-center">
      <Image src={firstStepBar} alt="첫번째회원가입스텝바" />

      <div className="mb-[90px] mt-12 text-[#3A3A3A]">닉네임과 소개를 작성해 주세요</div>

      <div className="flex flex-col">
        <label htmlFor="nickName">닉네임*</label>
        <input
          placeholder="사용하실 닉네임을 작성해주세요"
          type="text"
          id="nickName"
          className="mb-[69px] h-12 w-[420px] rounded-lg border border-[#d6d6d6] px-3.5 py-4 focus:border-[#0066DA] focus:outline-none"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="introduction">소개</label>
        <textarea
          placeholder="자기를 어필할 수 있는 소개글을 작성해주세요 (150자)"
          id="introduction"
          className="mb-[200px] h-40 w-[420px] rounded-lg border border-[#d6d6d6] px-3.5 py-4 focus:border-[#0066DA] focus:outline-none"
        />
      </div>

      <ExampleButton />

      <button onClick={nextStep} className="w-[118px] rounded-lg bg-[#0066DA] px-[29px] py-3 text-white">
        다음으로
      </button>
    </div>
  );
}

export default Step1;
