import React from "react";
import InputSection from "./_components/Section/InputSection";
import DropDownSection from "./_components/Section/DropDownSection";

function page() {
  return (
    <main className="grid place-items-center">
      <div className="w-[960px]">
        <h1 className="mb-4 mt-6 text-[28px] font-bold text-[#4D5256]">글 작성</h1>
        <hr />
        <InputSection
          title="제목(프로젝트 이름)"
          inputType="text"
          placeholder="프로젝트 이름을 작성해 주세요"
          inputWidth="w-full"
        />
        <InputSection
          title="소개"
          inputType="text"
          placeholder="프로젝트에 대한 소개를 작성 주세요"
          inputWidth="w-full"
        />
        <InputSection title="본문" placeholder="본문을 작성해 주세요" textArea />
        {/* 이미지는 승훈님이 제작하신 컴포넌트로 변경 예정 */}
        <h2 className="mb-4 mt-6 text-base font-bold text-[#4D5256]">이미지</h2>
        <div className="flex gap-3">
          <label>
            <input type="radio" name="size" value="웹" />웹
          </label>
          <label>
            <input type="radio" name="size" value="모바일" />
            모바일
          </label>
        </div>
        <div className="mb-4 mt-4">
          <div className="border-black-700 h-64 w-[360px] rounded-xl border-4 border-solid bg-slate-100" />
          <p className="mt-3 text-xs font-medium text-[#C4C4C4]">1440 X 1024 사이즈로 업로드</p>
        </div>
        <div className="mb-4 mt-4">
          <div className="border-black-700 h-[203px] w-[93.75px] rounded-xl border-4 border-solid bg-slate-100" />
          <p className="mt-3 text-xs font-medium text-[#C4C4C4]">375 X 812 사이즈로 업로드</p>
        </div>
        <button className="rounded-md border border-solid border-[#1852FD] bg-[#1852FD] px-4 py-2 text-white">
          업로드
        </button>
        <InputSection title="서비스 링크" inputType="text" placeholder="URL" inputWidth="w-[420px]" />
        <DropDownSection
          title="추가 링크"
          inputType="text"
          placeholder="URL"
          inputWidth="w-96"
          dropDownType="tool"
          dropDownWidth="w-28"
        />
        <DropDownSection
          title="팀원"
          inputType="text"
          placeholder="이름"
          inputWidth="w-48"
          dropDownType="job"
          dropDownWidth="w-44"
        />
        <DropDownSection title="기술스택" dropDownType="stack" dropDownWidth="w-44" />
        <div className="flex justify-end">
          <button className="mt-6 rounded-md border border-solid border-[#1852FD] bg-[#1852FD] px-4 py-2 text-white">
            등록하기
          </button>
        </div>
      </div>
    </main>
  );
}

export default page;
