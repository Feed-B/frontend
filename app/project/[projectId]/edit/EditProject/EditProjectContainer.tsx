"use client";

import React, { useCallback, useEffect, useState } from "react";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import Button from "@/app/_components/Button/Button";
import { editProjectQueryKeys } from "@/app/_queryFactory/editProjectQuery";
import { EditProjectResponse } from "@/app/_apis/schema/editProjectResponse";
import Input from "@/app/addproject/_components/Input";
import TextArea from "@/app/addproject/_components/TextArea";
import Title from "@/app/addproject/_components/Title";
import ThumbnailBox from "@/app/addproject/_components/ThumbnailBox";
import ProjectImageBox from "@/app/addproject/_components/ProjectImageBox/ProjectImageBox";
import SkillStackProvider from "@/app/addproject/_context/SkillStackProvider";
import AddSection from "../_components/AddSection/AddSection";
import SkillStackSection from "../_components/SkillStack/SkillStackSection";

const TITLE_MAX_LENGTH = 50;
const DESCRIPTION_MAX_LENGTH = 150;
// const THUMBNAIL_INDEX = 1;

interface Props {
  projectId: number;
}

interface TeammateType {
  name: string;
  job: string;
  url: string;
}

interface ProjectLinkListType {
  siteType: string;
  url: string;
}
type AddSectionDataType = TeammateType | ProjectLinkListType;

function AddProjectContainer({ projectId }: Props) {
  const { data: project }: UseQueryResult<EditProjectResponse, Error> = useQuery(
    editProjectQueryKeys.detail(projectId)
  );

  const router = useRouter();

  const [formValues, setFormValues] = useState({
    title: "",
    introduction: "",
    content: "",
    serviceUrl: "",
    projectTechStackList: [] as string[],
    teammateList: [] as TeammateType[],
    projectLinkList: [] as ProjectLinkListType[],
    imageType: "",
    imageList: [] as File[],
    thumbnail: new File([], ""),
    thumbnailUrl: "",
    imageUrlList: [] as string[],
  });

  useEffect(() => {
    if (project) {
      const techStackList = project.techStacks?.map(stack => stack.techStack) || [];

      setFormValues({
        title: project.title || "",
        introduction: project.introduction || "",
        content: project.content || "",
        serviceUrl: project.serviceUrl || "",
        projectTechStackList: techStackList || [],
        teammateList:
          project.projectTeammates?.map(teammate => ({
            name: teammate.teammateName,
            job: teammate.job,
            url: teammate.url,
          })) || [],
        projectLinkList:
          project.projectLinks?.map(link => ({
            siteType: link.siteType,
            url: link.url,
          })) || [],
        imageType: project.imageType || "",
        imageList: [],
        thumbnail: new File([], ""),
        thumbnailUrl: project.thumbnailUrl || "",
        imageUrlList: project.imageUrlList || [],
      });
    }
  }, [project]);

  useEffect(() => {
    console.log("formValues.projectTechStackList", formValues.projectTechStackList);
  }, [formValues.projectTechStackList]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues(prevState => ({ ...prevState, [name]: value }));
  };

  const handleTechStackInput = useCallback((stackList: string[]) => {
    setFormValues(prevState => ({ ...prevState, projectTechStackList: stackList }));
  }, []);

  const handleTeammateChange = useCallback((updatedTeammateList: AddSectionDataType[]) => {
    setFormValues(prevState => ({ ...prevState, teammateList: updatedTeammateList as TeammateType[] }));
  }, []);

  const handleProjectLinkChange = useCallback((updatedLinkList: AddSectionDataType[]) => {
    setFormValues(prevState => ({ ...prevState, projectLinkList: updatedLinkList as ProjectLinkListType[] }));
  }, []);

  const handleImageFile = useCallback((fileList: File[]) => {
    setFormValues(prevState => ({ ...prevState, imageList: fileList }));
  }, []);

  const setThumbnail = (file: File) => {
    setFormValues(prevState => ({ ...prevState, thumbnail: file }));
  };

  const handleCancelClick = () => {
    router.push(`/project/${projectId}`);
  };

  if (!project) return <div>Loading...</div>;

  return (
    <form
      // onSubmit={handleFormSubmit}
      encType="multipart/form-data">
      <div className="mt-8 flex w-full flex-col gap-8">
        <section className="flex w-fit flex-col gap-4">
          <Title title="썸네일" />
          <ThumbnailBox setThumbnail={setThumbnail} initialUrl={formValues.thumbnailUrl} />
        </section>
        <section className="flex w-[690px] flex-col gap-4">
          <Title title="프로젝트 이름" name="title" label />
          <Input
            type="text"
            placeholder="제목을 입력해주세요"
            name="title"
            maxLength={TITLE_MAX_LENGTH}
            value={formValues.title}
            onChange={handleInputChange}
          />
        </section>
        <section className="flex w-[690px] flex-col gap-4">
          <Title title="소개" name="introduction" label />
          <Input
            type="text"
            placeholder={`소개를 입력해주세요 (최대 ${TITLE_MAX_LENGTH}자)`}
            name="introduction"
            maxLength={TITLE_MAX_LENGTH}
            value={formValues.introduction}
            onChange={handleInputChange}
          />
        </section>
        <section className="flex w-[690px] flex-col gap-4">
          <Title title="본문" name="content" label />
          <TextArea
            placeholder={`텍스트를 입력해주세요 (최대 ${DESCRIPTION_MAX_LENGTH}자)`}
            name="content"
            maxLength={DESCRIPTION_MAX_LENGTH}
            value={formValues.content}
            onChange={handleInputChange}
          />
        </section>
        <section className="flex w-[690px] flex-col gap-4">
          <Title title="프로젝트 링크" name="serviceUrl" label />
          <Input
            type="text"
            placeholder="http://"
            name="serviceUrl"
            value={formValues.serviceUrl}
            onChange={handleInputChange}
          />
        </section>
        <section className="flex flex-col gap-4">
          <Title title="이미지" />
          <ProjectImageBox
            setImageType={imageType => setFormValues(prevState => ({ ...prevState, imageType }))}
            handleImageFile={handleImageFile}
            initialImageType={formValues.imageType === "MOBILE" ? "모바일" : "웹"}
            initialUrlList={formValues.imageUrlList}
          />
        </section>
        <section className="flex w-[690px] flex-col gap-4">
          <SkillStackProvider>
            <SkillStackSection
              handleTechStackInput={handleTechStackInput}
              // initialStackList={formValues.projectTechStackList}
            />
          </SkillStackProvider>
        </section>
        <section className="flex w-[690px] flex-col gap-4">
          <AddSection
            title="팀원"
            placeholder="이름"
            name="projectTeammates"
            inputWidth="w-[114px]"
            dropDownType="job"
            onInputChange={handleTeammateChange}
          />
        </section>
        <section className="flex w-[690px] flex-col gap-4">
          <AddSection
            title="추가 링크"
            placeholder="http://"
            name="projectLinks"
            dropDownType="tool"
            onInputChange={handleProjectLinkChange}
          />
        </section>
      </div>
      <div className="mb-16 mt-8 flex justify-end gap-2">
        <Button buttonSize="normal" bgColor="gray" className="border-none" onClick={handleCancelClick}>
          취소
        </Button>
        <Button type="submit" buttonSize="normal" bgColor="yellow">
          등록
        </Button>
      </div>
    </form>
  );
}

export default AddProjectContainer;
