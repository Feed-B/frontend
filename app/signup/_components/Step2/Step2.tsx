import Image from "next/image";
import { useState } from "react";
import checkIcon from "@/public/icons/check.svg";
import signUpBar2Icon from "@/public/icons/signUpBar2.svg";
import backArrowIcon from "@/public/icons/backArrow.svg";

interface Step2Props {
  prevStep: () => void;
}

const JOB_CATEGORIES = {
  ALL: "전체",
  FRONTEND: "프론트엔드",
  BACKEND: "백엔드",
  DESIGNER: "디자이너",
  IOS: "IOS",
  ANDROID: "안드로이드",
  DEVOPS: "데브옵스",
  PLANNER: "기획자",
  FULLSTACK: "풀스택",
  ETC: "기타",
};

function Step2({ prevStep }: Step2Props) {
  const [checked, setChecked] = useState<{ [key: string]: boolean }>({});

  const handleClick = (key: string) => {
    setChecked({ [key]: !checked[key] });
  };

  return (
    <div className="mx-[auto] mt-[117px] flex max-w-[420px] flex-col items-center">
      <Image src={signUpBar2Icon} alt="signUpBar" />

      <div className="mb-[123px] mt-[48px] text-[#3A3A3A]">현재 직무를 선택해주세요</div>

      <div className="mb-[201px] grid grid-cols-2 gap-x-[12px] gap-y-[8px]">
        {Object.entries(JOB_CATEGORIES).map(([key, value]) => (
          <button
            key={key}
            onClick={() => handleClick(key)}
            style={{
              border: `1px solid ${checked[key] ? "#0066DA" : "#d6d6d6"}`,
            }}
            className="b flex w-[176px] justify-between rounded-[8px] border-[1px] px-[16px] py-[16px] text-[#757575]">
            {value}
            {checked[key] && <Image src={checkIcon} alt="checkIcon" />}
          </button>
        ))}
      </div>

      <div className="flex gap-[128px]">
        <button
          onClick={prevStep}
          className="flex w-[118px] justify-center rounded-[8px] bg-[#0066DA] py-[12px] text-white">
          <Image src={backArrowIcon} alt="backArrowIcon" />
          <span>이전으로</span>
        </button>
        <button className="w-[118px] rounded-[8px] bg-[#0066DA] px-[29px] py-[12px] text-white">다음으로</button>
      </div>
    </div>
  );
}

export default Step2;
