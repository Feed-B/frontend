import Image from "next/image";
import { useState } from "react";
import JOB_CATEGORIES from "@/app/_constants/JobCategoryData";
import checkIcon from "@/public/icons/check.svg";
import secondStepBarIcon from "@/public/icons/secondStepBar.svg";
import backArrowIcon from "@/public/icons/backArrow.svg";

interface Step2Props {
  prevStep: () => void;
}

function Step2({ prevStep }: Step2Props) {
  const [checked, setChecked] = useState<{ [key: string]: boolean }>({});

  const handleClick = (key: string) => {
    setChecked({ [key]: !checked[key] });
  };

  return (
    <div className="mx-[auto] mt-[117px] flex max-w-[420px] flex-col items-center">
      <Image src={secondStepBarIcon} alt="두번째회원가입스텝바" />

      <div className="mb-[123px] mt-[48px] text-[#3A3A3A]">현재 직무를 선택해주세요</div>

      <div className="mb-[201px] grid grid-cols-2 gap-x-3 gap-y-2">
        {Object.entries(JOB_CATEGORIES).map(([key, value]) => (
          <button
            key={key}
            onClick={() => handleClick(key)}
            style={{
              border: `1px solid ${checked[key] ? "#0066DA" : "#d6d6d6"}`,
            }}
            className="flex w-[176px] justify-between rounded-lg border px-4 py-4 text-[#757575]">
            {value}
            {checked[key] && <Image src={checkIcon} alt="체크아이콘" />}
          </button>
        ))}
      </div>

      <div className="flex gap-32">
        <button onClick={prevStep} className="flex w-[118px] justify-center rounded-lg bg-[#0066DA] py-3 text-white">
          <Image src={backArrowIcon} alt="뒤로가기아이콘" />
          <span>이전으로</span>
        </button>
        <button className="w-[118px] rounded-lg bg-[#0066DA] px-[29px] py-3 text-white">다음으로</button>
      </div>
    </div>
  );
}

export default Step2;
