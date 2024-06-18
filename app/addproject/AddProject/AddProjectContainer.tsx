import React from "react";
import Button from "@/app/_components/Button/Button";
import AddSection from "../_components/AddSection/AddSection";
import SkillStackSection from "../_components/SkillStack/SkillStackSection";
import ThumbnailBox from "../_components/ThumbnailBox";
import ProjectImageBox from "../_components/ProjectImageBox/ProjectImageBox";
import Title from "../_components/Title";
import TextArea from "../_components/TextArea";
import Input from "../_components/Input";

const TITLE_MAX_LENGTH = 50;
const DESCRIPTION_MAX_LENGTH = 150;

function AddProjectContainer() {
  return (
    <>
      <div className="mt-8 flex w-full flex-col gap-8">
        <section className="flex w-fit flex-col gap-4">
          <Title title="썸네일" />
          <ThumbnailBox />
        </section>
        <section className="flex w-[690px] flex-col gap-4">
          <Title title="프로젝트 이름" name="projectTitle" label />
          <Input type="text" placeholder="제목을 입력해주세요" name="projectTitle" maxLength={TITLE_MAX_LENGTH} />
        </section>
        <section className="flex w-[690px] flex-col gap-4">
          <Title title="소개" name="projectIntroduction" label />
          <Input
            type="text"
            placeholder={`소개를 입력해주세요 (최대 ${TITLE_MAX_LENGTH}자)`}
            name="projectIntroduction"
            maxLength={TITLE_MAX_LENGTH}
          />
        </section>
        <section className="flex w-[690px] flex-col gap-4">
          <Title title="본문" name="projectDescription" label />
          <TextArea
            placeholder={`텍스트를 입력해주세요 (최대 ${DESCRIPTION_MAX_LENGTH}자)`}
            name="projectDescription"
            maxLength={DESCRIPTION_MAX_LENGTH}
          />
        </section>
        <section className="flex w-[690px] flex-col gap-4">
          <Title title="프로젝트 링크" name="projectLink" label />
          <Input type="text" placeholder="http://" name="projectLink" />
        </section>
        <section className="flex flex-col gap-4">
          <Title title="이미지" />
          <ProjectImageBox />
        </section>
        <section className="flex w-[690px] flex-col gap-4">
          <SkillStackSection />
        </section>
        <section className="flex w-[690px] flex-col gap-4">
          <AddSection title="팀원" placeholder="이름" name="member" inputWidth="w-[114px]" dropDownType="job" />
        </section>
        <section className="flex w-[690px] flex-col gap-4">
          <AddSection title="추가 링크" placeholder="http://" name="addLink" dropDownType="tool" />
        </section>
      </div>
      <div className="mt-56 flex w-full justify-end">
        <Button buttonSize="normal" bgColor="mainBlue">
          등록
        </Button>
      </div>
    </>
  );
}

export default AddProjectContainer;
