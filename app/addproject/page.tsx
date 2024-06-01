import React from "react";
import InputSection from "./_components/Section/InputSection";
import DropDownSection from "./_components/Section/DropDownSection";
import ImageSection from "./_components/Section/ImageSection";

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
        <ImageSection title="썸네일" />
        <ImageSection title="이미지" />
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
        <div className="flex justify-center">
          <button className="mt-6 rounded-md border border-solid border-[#1852FD] bg-[#1852FD] px-4 py-2 text-white">
            등록하기
          </button>
        </div>
      </div>
    </main>
  );
}

export default page;
