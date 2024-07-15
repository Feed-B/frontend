"use client";

import React, { useEffect, useState, useCallback } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { notFound, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import Button from "@/app/_components/Button/Button";
import { addProjectApi } from "@/app/_apis/addProjectApi";
import { getToken } from "@/app/_utils/handleToken";
import Input from "@/app/_components/Input/Input";
import { AddProjectFormData, ProjectLinkListType, TeammateType } from "@/app/_types/AddProjectFormDataType";
import AddSection from "../_components/AddSection/AddSection";
import SkillStackSection from "../_components/SkillStack/SkillStackSection";
import ThumbnailBox from "../_components/ThumbnailBox";
import ProjectImageBox from "../_components/ProjectImageBox/ProjectImageBox";
import Title from "../_components/Title";
import SkillStackProvider from "../_context/SkillStackProvider";

const TITLE_MAX_LENGTH = 50;
const DESCRIPTION_MAX_LENGTH = 150;
const THUMBNAIL_INDEX = 1;

type AddSectionDataType = TeammateType | ProjectLinkListType;

const ErrorMessage = ({ error }: any) => {
  return (
    <div className="h-4">
      <p className="text-sm text-red-500">{error.message}</p>
    </div>
  );
};

function AddProjectContainer() {
  const queryClient = useQueryClient();
  const router = useRouter();
  const accessToken = getToken()?.accessToken;

  const [formValues, setFormValues] = useState({
    imageType: "웹",
    imageList: [] as any[],
  });
  const imageIndexList = formValues.imageList.map((_, index) => index + 1);

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    setError,
    clearErrors,
    formState: { errors },
    watch,
  } = useForm<AddProjectFormData>({
    mode: "onBlur",
    reValidateMode: "onBlur",
  });

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
      const filteredTeammateList = updatedTeammateList.map(item => {
        const { name, job, url } = item as TeammateType;
        return { name, job, url };
      });
      setValue("teammateList", filteredTeammateList);
    },
    [setValue]
  );

  const handleProjectLinkChange = useCallback(
    (updatedLinkList: AddSectionDataType[]) => {
      const filteredLinkList = updatedLinkList.map(item => {
        const { siteType, url } = item as ProjectLinkListType;
        return { siteType, url };
      });
      setValue("projectLinkList", filteredLinkList);
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

  const postMutation = useMutation({
    mutationFn: (projectData: FormData) => addProjectApi.postProject(projectData),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["project", "list", "projectList"],
      });
      console.log("Add Project Successful");
      router.push("/main");
    },
    onError: () => {
      console.error("Add Project failed");
    },
  });

  const handleFormSubmit = async (data: AddProjectFormData) => {
    const formData = new FormData();
    const thumbnailData = getValues("thumbnail");

    const projectRequestDto = {
      title: data.title,
      introduction: data.introduction,
      content: data.content,
      serviceUrl: data.serviceUrl,
      imageType: formValues.imageType === "웹" ? "WEB" : "MOBILE",
      projectTechStacks: data.projectTechStackList,
      projectTeammates: data.teammateList,
      projectLinks: data.projectLinkList,
    };

    formData.append("projectRequestDto", new Blob([JSON.stringify(projectRequestDto)], { type: "application/json" }));
    formValues.imageList.forEach(imageData => formData.append("images", imageData.file));
    formData.append("imageIndexes", JSON.stringify(imageIndexList));
    formData.append("thumbnail", thumbnailData);
    formData.append("thumbnailIndex", new Blob([JSON.stringify(THUMBNAIL_INDEX)], { type: "application/json" }));

    try {
      await postMutation.mutateAsync(formData);
      console.log("Project uploaded successfully");
    } catch (error) {
      console.error("Error occurred during mutation", error);
    }
  };

  const handleCancelClick = () => {
    router.push("/main");
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (!accessToken) {
        notFound();
      }
    }
  }, [router, accessToken]);

  if (!accessToken) return null;

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} encType="multipart/form-data">
      <div className="mt-8 flex w-full flex-col gap-8">
        <section className="flex w-fit flex-col gap-4">
          <Title title="썸네일" />
          <div>
            <ThumbnailBox
              register={register("thumbnail", {
                required: "썸네일을 추가해주세요",
              })}
              setThumbnail={handleThumbnailFile}
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
            />
            {errors.imageList && <ErrorMessage error={errors.imageList} />}
          </div>
        </section>
        <section className="flex w-[690px] flex-col gap-4">
          <SkillStackProvider>
            <SkillStackSection handleTechStackInput={handleTechStackInput} />
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
