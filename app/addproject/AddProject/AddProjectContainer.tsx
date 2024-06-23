"use client";

import React, { FormEvent, useCallback, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import Button from "@/app/_components/Button/Button";
import { addProjectApi } from "@/app/_apis/addProjectApi";
import AddSection from "../_components/AddSection/AddSection";
import SkillStackSection from "../_components/SkillStack/SkillStackSection";
import ThumbnailBox from "../_components/ThumbnailBox";
import ProjectImageBox from "../_components/ProjectImageBox/ProjectImageBox";
import Title from "../_components/Title";
import TextArea from "../_components/TextArea";
import Input from "../_components/Input";
import SkillStackProvider from "../_context/SkillStackProvider";

const TITLE_MAX_LENGTH = 50;
const DESCRIPTION_MAX_LENGTH = 150;
const THUMBNAIL_INDEX = 1;

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

function AddProjectContainer() {
  const [formValues, setFormValues] = useState({
    title: "",
    introduction: "",
    content: "",
    serviceUrl: "",
    projectTechStackList: [] as string[],
    teammateList: [] as TeammateType[],
    projectLinkList: [] as ProjectLinkListType[],
    imageType: "웹",
    imageList: [] as File[],
    thumbnail: new File([], ""),
  });
  const imageIndexList = formValues.imageList.map((_, index) => index + 1);
  const router = useRouter();

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

  const postMutation = useMutation({
    mutationFn: (projectData: FormData) => {
      return addProjectApi.postProject(projectData);
    },
    onSuccess: data => {
      console.log("Add Project Successful", data);
      router.push("/main");
    },
    onError: error => {
      console.error("Add Project failed", error);
    },
  });

  const handleFormSubmit = async (event: FormEvent<HTMLFormElement | HTMLButtonElement>) => {
    event.preventDefault();

    const formData = new FormData();

    const projectRequestDto = {
      title: formValues.title,
      introduction: formValues.introduction,
      content: formValues.content,
      serviceUrl: formValues.serviceUrl,
      imageType: formValues.imageType === "웹" ? "WEB" : "MOBILE",
      projectTechStacks: formValues.projectTechStackList,
      projectTeammates: formValues.teammateList,
      projectLinks: formValues.projectLinkList,
    };

    formData.append(
      "projectRequestDto",
      new Blob([JSON.stringify(projectRequestDto)], {
        type: "application/json",
      })
    );
    formValues.imageList.forEach(file => {
      formData.append("images", file);
    });
    formData.append("imageIndexes", JSON.stringify(imageIndexList));
    formData.append("thumbnail", formValues.thumbnail);
    formData.append(
      "thumbnailIndex",
      new Blob([JSON.stringify(THUMBNAIL_INDEX)], {
        type: "application/json",
      })
    );
    try {
      await postMutation.mutateAsync(formData);
      console.log("Project uploaded successfully");
    } catch (error) {
      console.error("Error occurred during mutation", error);
    }
  };

  return (
    <form onSubmit={handleFormSubmit} encType="multipart/form-data">
      <div className="mt-8 flex w-full flex-col gap-8">
        <section className="flex w-fit flex-col gap-4">
          <Title title="썸네일" />
          <ThumbnailBox setThumbnail={thumbnail => setFormValues(prevState => ({ ...prevState, thumbnail }))} />
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
          />
        </section>
        <section className="flex w-[690px] flex-col gap-4">
          <SkillStackProvider>
            <SkillStackSection handleTechStackInput={handleTechStackInput} />
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
        <Button buttonSize="normal" bgColor="gray" className="border-none">
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
