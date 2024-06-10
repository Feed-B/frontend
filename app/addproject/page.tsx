import React from "react";
import Button from "../_components/Button/Button";
import InputSection from "./_components/Section/InputSection";
import DropDownSection from "./_components/Section/DropDownSection";
import StackSection from "./_components/Section/SkillStackSection";
import ThumbnailBox from "./_components/ImageBox/ThumbnailBox";
import ImageBox from "./_components/ImageBox/ImageBox";

function page() {
  return (
    <main className="grid place-items-center">
      <div className="w-[960px]">
        <h1 className="mb-4 mt-6 text-[28px] font-bold text-gray-900">프로젝트 업로드</h1>
        <hr />
        <div className="mt-8 flex flex-col gap-8">
          <ThumbnailBox />
          <InputSection
            title="프로젝트 이름"
            type="text"
            placeholder="제목을 입력해주세요"
            inputWidth="w-full"
            name="projectTitle"
            textSize={50}
          />
          <InputSection
            title="소개"
            type="text"
            placeholder="소개를 입력해주세요"
            inputWidth="w-full"
            name="projectIntroduction"
            textSize={50}
          />
          <InputSection
            title="본문"
            placeholder="텍스트를 입력해주세요"
            name="projectDescription"
            textArea
            textSize={150}
          />
          <InputSection
            title="프로젝트 링크"
            type="text"
            placeholder="http://"
            inputWidth="w-[420px]"
            name="serviceLink"
          />
          <ImageBox />
          <StackSection />
          <DropDownSection
            title="팀원"
            type="text"
            placeholder="이름"
            name="member"
            inputWidth="w-48"
            dropDownType="job"
            dropDownWidth="w-44"
          />
          <DropDownSection
            title="추가 링크"
            type="text"
            placeholder="http://"
            name="addLink"
            inputWidth="w-96"
            dropDownType="tool"
            dropDownWidth="w-28"
          />
        </div>

        <div className="flex justify-center">
          <Button buttonSize="small" bgColor="mainBlue" className="mt-6">
            <p>등록하기</p>
          </Button>
        </div>
      </div>
    </main>
  );
}

export default page;
