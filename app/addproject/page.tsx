import React from "react";
import Input from "./_components/Section/Input";
import DropDownSection from "./_components/DropDown/DropDownSection";
import SkillStackSection from "./_components/SkillStack/SkillStackSection";
import ThumbnailBox from "./_components/ImageBox/ThumbnailBox";
import ProjectImageBox from "./_components/ImageBox/ProjectImageBox";
import Title from "./_components/Section/Title";
import TextArea from "./_components/Section/TextArea";

function page() {
  return (
    <main className="grid place-items-center">
      <div className="w-[1200px]">
        <h1 className="mb-4 mt-6 text-start text-[28px] font-bold text-gray-900">프로젝트 업로드</h1>
        <hr />
        <div className="mt-8 flex flex-col gap-8">
          <section className="flex w-fit flex-col gap-4">
            <Title title="썸네일" additionalSize="(232 x 232px)" />
            <ThumbnailBox />
          </section>
          <section className="flex flex-col gap-4">
            <Title title="프로젝트 이름" name="projectTitle" additionalSize="(최대 50자)" label />
            <Input type="text" placeholder="제목을 입력해주세요" inputWidth="w-full" name="projectTitle" />
          </section>
          <section className="flex flex-col gap-4">
            <Title title="소개" name="projectIntroduction" additionalSize="(최대 50자)" label />
            <Input type="text" placeholder="소개를 입력해주세요" inputWidth="w-full" name="projectIntroduction" />
          </section>
          <section className="flex flex-col gap-4">
            <Title title="본문" name="projectDescription" additionalSize="(최대 150자)" label />
            <TextArea placeholder="텍스트를 입력해주세요" name="projectDescription" />
          </section>
          <section className="flex flex-col gap-4">
            <Title title="프로젝트 링크" name="projectLink" label />
            <Input type="text" placeholder="http://" inputWidth="w-[420px]" name="projectLink" />
          </section>
          <section className="flex flex-col gap-4">
            <Title title="이미지" />
            <ProjectImageBox />
          </section>
          <section className="flex flex-col gap-4">
            <Title title="기술스택" name="search" label />
            <SkillStackSection /> {/** 수정필요 */}
          </section>
          <DropDownSection
            title="팀원"
            type="text"
            placeholder="이름"
            name="member"
            inputWidth="w-48"
            dropDownType="job"
            dropDownWidth="w-44"
          />{" "}
          {/** 수정필요 */}
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
      </div>
    </main>
  );
}

export default page;
