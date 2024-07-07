"use client";

import React, { useCallback, useEffect, useState } from "react";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import Button from "@/app/_components/Button/Button";
import { editProjectQueryKeys } from "@/app/_queryFactory/editProjectQuery";
import { EditProjectResponse } from "@/app/_apis/schema/editProjectResponse";
import Title from "@/app/addproject/_components/Title";
import ThumbnailBox from "@/app/addproject/_components/ThumbnailBox";
import ProjectImageBox from "@/app/addproject/_components/ProjectImageBox/ProjectImageBox";
import SkillStackProvider from "@/app/addproject/_context/SkillStackProvider";
import { ProjectLinkListType, TeammateType } from "@/app/_types/AddProjectFormDataType";
import { EditProjectFormData } from "@/app/_types/EditProjectFormDataType";
import Input from "@/app/_components/Input/Input";
import AddSection from "@/app/addproject/_components/AddSection/AddSection";
import SkillStackSection from "@/app/addproject/_components/SkillStack/SkillStackSection";

const TITLE_MAX_LENGTH = 50;
const DESCRIPTION_MAX_LENGTH = 150;
// const THUMBNAIL_INDEX = 1;

interface Props {
  projectId: number;
}

type AddSectionDataType = TeammateType | ProjectLinkListType;

const ErrorMessage = ({ error }: any) => {
  return (
    <div className="h-4">
      <p className="text-sm text-red-500">{error.message}</p>
    </div>
  );
};

function AddProjectContainer({ projectId }: Props) {
  const { data: project }: UseQueryResult<EditProjectResponse, Error> = useQuery(
    editProjectQueryKeys.detail(projectId)
  );

  const router = useRouter();

  const [formValues, setFormValues] = useState({
    // imageType: "웹",
    imageList: [] as File[],
  });

  console.log("formValues", formValues);

  const {
    register,
    // handleSubmit,
    setValue,
    // getValues,
    setError,
    clearErrors,
    formState: { errors },
    watch,
  } = useForm<EditProjectFormData>({
    mode: "onBlur",
    reValidateMode: "onBlur",
  });

  useEffect(() => {
    if (project) {
      setValue("title", project.title || "");
      setValue("introduction", project.introduction || "");
      setValue("content", project.content || "");
      setValue("serviceUrl", project.serviceUrl || "");
    }
  }, [project, setValue]);

  const handleTechStackInput = useCallback(
    (stackList: string[]) => {
      setValue("projectTechStackList", stackList);
      if (stackList.length > 0) clearErrors("projectTechStackList");
      else if (setError && stackList.length === 0) {
        setError("projectTechStackList", {
          type: "manual",
          message: "최소 한 개 이상의 기술 스택을 추가해주세요",
        });
      }
    },
    [clearErrors, setValue, setError]
  );

  const handleTeammateChange = useCallback(
    (updatedTeammateList: AddSectionDataType[]) => {
      setValue("teammateList", updatedTeammateList as TeammateType[]);
    },
    [setValue]
  );

  const handleProjectLinkChange = useCallback(
    (updatedLinkList: AddSectionDataType[]) => {
      setValue("projectLinkList", updatedLinkList as ProjectLinkListType[]);
    },
    [setValue]
  );

  const handleImageFile = useCallback(
    (fileList: File[]) => {
      setFormValues(prevState => ({ ...prevState, imageList: fileList }));
      setValue("imageList", fileList);
      if (fileList.length > 0) {
        clearErrors("imageList");
      }
    },
    [clearErrors, setValue]
  );

  const handleThumbnailFile = useCallback(
    (file: File) => {
      setValue("thumbnail", file);
      if (file.name) {
        clearErrors("thumbnail");
      }
    },
    [clearErrors, setValue]
  );

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
          <div>
            <ThumbnailBox
              register={register("thumbnail", {
                required: "썸네일을 추가해주세요",
              })}
              setThumbnail={handleThumbnailFile}
              initialUrl={project?.thumbnailUrl || ""}
            />
            {errors.thumbnail && <ErrorMessage error={errors.thumbnail} />}
          </div>
        </section>
        <Input
          register={register("title", {
            required: "프로젝트 이름을 입력해주세요",
            maxLength: {
              value: TITLE_MAX_LENGTH,
              message: `제목은 ${TITLE_MAX_LENGTH}자를 초과할 수 없습니다`,
            },
          })}
          title="프로젝트 이름 *"
          type="text"
          name="title"
          placeholder="제목을 입력해주세요"
          inputSize="large"
          error={errors.title}
        />
        <Input
          register={register("introduction", {
            required: "소개를 입력해주세요",
            maxLength: {
              value: TITLE_MAX_LENGTH,
              message: `소개는 ${TITLE_MAX_LENGTH}자를 초과할 수 없습니다`,
            },
          })}
          title="소개 *"
          type="text"
          name="introduction"
          placeholder={`소개를 입력해주세요 (최대 ${TITLE_MAX_LENGTH}자)`}
          inputSize="large"
          error={errors.introduction}
        />
        <section className="flex flex-col gap-4">
          <Title title="본문" name="content" label />
          <div>
            <textarea
              {...register("content", {
                required: "내용을 입력해주세요",
                maxLength: {
                  value: DESCRIPTION_MAX_LENGTH,
                  message: `내용은 ${DESCRIPTION_MAX_LENGTH}자를 초과할 수 없습니다`,
                },
              })}
              className="h-52 w-[690px] resize-none rounded-lg border border-solid border-gray-200 px-2 py-3 text-sm font-normal focus:border-gray-900 focus:outline-none"
              placeholder={`텍스트를 입력해주세요 (최대 ${DESCRIPTION_MAX_LENGTH}자)`}
              name="content"
              id="content"
              value={watch("content")}
              onChange={e => setValue("content", e.target.value)}
            />
            {errors.content && <ErrorMessage error={errors.content} />}
          </div>
        </section>
        <Input
          register={register("serviceUrl", {
            required: "프로젝트 링크를 입력해주세요",
            pattern: {
              value: /^(ftp|http|https):\/\/[^ "]+$/,
              message: "유효한 URL을 입력해주세요",
            },
          })}
          title="프로젝트 링크 *"
          type="text"
          name="serviceUrl"
          placeholder="http://"
          inputSize="large"
          error={errors.serviceUrl}
        />
        <section className="flex flex-col gap-4">
          <Title title="이미지" />
          <div>
            <ProjectImageBox
              register={register("imageList", {
                required: "최소 한 개 이상의 이미지를 추가해주세요",
              })}
              setImageType={imageType => setFormValues(prevState => ({ ...prevState, imageType }))}
              handleImageFile={handleImageFile}
              initialImageType={project?.imageType === "MOBILE" ? "모바일" : "웹"}
              initialUrlList={project?.imageUrlList}
            />
            {errors.imageList && <ErrorMessage error={errors.imageList} />}
          </div>
        </section>
        <section className="flex w-[690px] flex-col gap-4">
          <SkillStackProvider>
            <SkillStackSection
              handleTechStackInput={handleTechStackInput}
              initialStackList={project?.techStacks?.map(stack => stack.techStack)}
            />
            {errors.projectTechStackList && <ErrorMessage error={errors.projectTechStackList} />}
          </SkillStackProvider>
        </section>
        <section className="flex w-[690px] flex-col gap-4">
          <AddSection
            setError={setError}
            clearErrors={clearErrors}
            title="팀원"
            placeholder="이름"
            name="projectTeammates"
            inputWidth="w-[114px]"
            dropDownType="job"
            onInputChange={handleTeammateChange}
            initialTeammateList={project?.projectTeammates}
          />
          {errors.teammateList && <ErrorMessage error={errors.teammateList} />}
        </section>
        <section className="flex w-[690px] flex-col gap-4">
          <AddSection
            title="추가 링크"
            placeholder="http://"
            name="projectLinks"
            dropDownType="tool"
            onInputChange={handleProjectLinkChange}
            initialProjectLink={project?.projectLinks}
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
