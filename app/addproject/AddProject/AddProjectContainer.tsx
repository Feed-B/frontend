import React from "react";
import Button from "@/app/_components/Button/Button";
import AddSection from "../_components/AddSection/AddSection";
import SkillStackSection from "../_components/SkillStack/SkillStackSection";
import ThumbnailBox from "../_components/ThumbnailBox";
import ProjectImageBox from "../_components/ProjectImageBox/ProjectImageBox";
import Title from "../_components/Title";
import TextArea from "../_components/TextArea";
import Input from "../_components/Input";

function AddProjectContainer() {
  return (
    <>
      <div className="mt-8 flex w-full flex-col gap-8">
        <section className="flex w-fit flex-col gap-4">
          <Title title="썸네일" additionalSize="(232 x 232px)" />
          <ThumbnailBox />
        </section>
        <section className="flex w-[690px] flex-col gap-4">
          <Title title="프로젝트 이름" name="projectTitle" additionalSize="(최대 50자)" label />
          <Input type="text" placeholder="제목을 입력해주세요" name="projectTitle" maxLength={50} />
        </section>
        <section className="flex w-[690px] flex-col gap-4">
          <Title title="소개" name="projectIntroduction" additionalSize="(최대 50자)" label />
          <Input type="text" placeholder="소개를 입력해주세요" name="projectIntroduction" maxLength={50} />
        </section>
        <section className="flex w-[690px] flex-col gap-4">
          <Title title="본문" name="projectDescription" additionalSize="(최대 150자)" label />
          <TextArea placeholder="텍스트를 입력해주세요" name="projectDescription" maxLength={150} />
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
