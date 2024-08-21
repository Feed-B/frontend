"use client";

import React, { useCallback, useEffect, useState } from "react";
import { UseQueryResult, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { notFound } from "next/navigation";
import { editProjectQueryKeys } from "@/app/_queryFactory/editProjectQuery";
import { EditProjectResponse } from "@/app/_apis/schema/editProjectResponse";
import Title from "@/app/addproject/_components/Title";
import ThumbnailBox from "@/app/addproject/_components/ThumbnailBox";
import ProjectImageBox from "@/app/addproject/_components/ProjectImageBox/ProjectImageBox";
import SkillStackProvider from "@/app/addproject/_context/SkillStackProvider";
import { ProjectLinkListType, TeammateType } from "@/app/_types/EditProjectFormDataType";
import { EditProjectFormData } from "@/app/_types/EditProjectFormDataType";
import Input from "@/app/_components/Input/Input";
import AddSection from "@/app/addproject/_components/AddSection/AddSection";
import SkillStackSection from "@/app/addproject/_components/SkillStack/SkillStackSection";
import { editProjectApi } from "@/app/_apis/editProjectApi";
import useModal from "@/app/_hooks/useModal";
import { getToken } from "@/app/_utils/handleToken";
import CancelModal from "@/app/_components/Modal/WarningModal";
import { useToast } from "@/app/_context/ToastContext";
import { projectQueryKeys } from "@/app/_queryFactory/projectQuery";
import { revalidateTagAction } from "@/app/_utils/revalidationAction";
import ProgressBox from "@/app/addproject/_components/ProgressBox";
import ErrorMessage from "@/app/addproject/_components/ErrorMessage";
import { DESCRIPTION_MAX_LENGTH, TITLE_MAX_LENGTH } from "@/app/_constants/MaxTextLength";

type EditSectionDataType = TeammateType | ProjectLinkListType;

function EditProjectContainer({ projectId }: { projectId: number }) {
  const [progress, setProgress] = useState(0);

  const queryClient = useQueryClient();
  const { data: project }: UseQueryResult<EditProjectResponse, Error> = useQuery(
    editProjectQueryKeys.detail(projectId)
  );

  const accessToken = getToken()?.accessToken;

  const router = useRouter();

  const [imageList, setImageList] = useState([] as any[]);
  const [imageType, setImageType] = useState("웹");
  const [touchedStack, setTouchedStack] = useState(false);
  const [touchedTeammate, setTouchedTeammate] = useState(false);

  const { addToast } = useToast();

  const {
    openModal: isCancelModalOpen,
    handleModalOpen: openCancelModal,
    handleModalClose: closeCancelModal,
  } = useModal();

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    setError,
    clearErrors,
    formState: { errors },
    watch,
  } = useForm<EditProjectFormData>({
    mode: "onBlur",
    reValidateMode: "onBlur",
  });

  useEffect(() => {
    const { title, introduction, content, serviceUrl, projectTechStackList, teammateList, projectLinkList } = watch();

    const filledFields = [
      project?.thumbnailUrl,
      title && title.trim() !== "",
      introduction && introduction.trim() !== "",
      content && content.trim() !== "",
      serviceUrl && serviceUrl.trim() !== "",
      imageList && imageList.length > 0,
      projectTechStackList && projectTechStackList.length > 0,
      teammateList && teammateList.some(item => item.name.trim() !== "" && item.job.trim() !== ""),
      projectLinkList && projectLinkList.some(item => item.siteType.trim() !== "" && item.url.trim() !== ""),
    ].filter(Boolean).length;

    const newProgress = (filledFields / 9) * 100;
    setProgress(newProgress);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watch()]);

  useEffect(() => {
    if (project) {
      setValue("title", project.title || "");
      setValue("introduction", project.introduction || "");
      setValue("content", project.content || "");
      setValue("serviceUrl", project.serviceUrl || "");
      setImageType((project.imageType === "WEB" ? "웹" : "모바일") || "웹");
    }
  }, [project, setValue]);

  useEffect(() => {
    if (imageList.length === 0) {
      setError && setError("imageList", { type: "manual", message: "최소 한 개 이상의 이미지를 추가해주세요" });
    } else if (imageList.length > 0) {
      clearErrors("imageList");
    }
  }, [clearErrors, imageList.length, setError]);

  const handleTechStackInput = useCallback(
    (stackList: any[]) => {
      const existingStackList =
        project?.techStacks?.reduce(
          (acc, stack) => {
            acc[stack.techStack] = stack.id;
            return acc;
          },
          {} as Record<string, number>
        ) || {};

      const updatedStackList = stackList.map(stack => {
        return { id: existingStackList[stack] || 0, techStack: stack };
      });

      setValue("projectTechStackList", updatedStackList);

      if (stackList.length > 0) clearErrors("projectTechStackList");
      else if (setError && touchedStack && stackList.length === 0) {
        setError("projectTechStackList", {
          type: "manual",
          message: "최소 한 개 이상의 기술 스택을 추가해주세요",
        });
      }
    },
    [project?.techStacks, setValue, clearErrors, setError, touchedStack]
  );

  const handleTeammateChange = useCallback(
    (updatedTeammateList: EditSectionDataType[]) => {
      const initialTeammateIdList = project?.projectTeammates?.map(teammate => teammate.id) || [];

      const filteredTeammateList = updatedTeammateList.map(item => {
        const { id, name, job, url } = item as TeammateType;
        const newId = id && initialTeammateIdList.includes(id) ? id : 0;
        return { id: newId, name, job, url };
      });

      setValue("teammateList", filteredTeammateList);
    },
    [project?.projectTeammates, setValue]
  );

  const handleProjectLinkChange = useCallback(
    (updatedLinkList: EditSectionDataType[]) => {
      const initialLinkIdList = project?.projectLinks?.map(link => link.id) || [];

      const filteredLinkList = updatedLinkList.map(item => {
        const { id, siteType, url } = item as ProjectLinkListType;
        const newId = id && initialLinkIdList.includes(id) ? id : 0;
        return { id: newId, siteType, url };
      });
      setValue("projectLinkList", filteredLinkList);
    },
    [project?.projectLinks, setValue]
  );

  const handleImageFile = useCallback((fileList: any[]) => {
    setImageList(fileList);
  }, []);

  const handleThumbnailFile = useCallback(
    (file: File) => {
      setValue("thumbnail", file);
      if (file.name) {
        clearErrors("thumbnail");
      }
    },
    [clearErrors, setValue]
  );

  const putMutation = useMutation({
    mutationFn: (projectData: FormData) => editProjectApi.putProject(projectId, projectData),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: projectQueryKeys.detail(projectId).queryKey,
      });
      queryClient.invalidateQueries({
        queryKey: projectQueryKeys.teamMember(projectId).queryKey,
      });
      revalidateTagAction("pojectDetail");
      revalidateTagAction("pojectTeamMember");
      router.push(`/project/${projectId}`);
      addToast("프로젝트가 수정되었습니다", "success");
    },
    onError: () => {
      addToast("프로젝트 수정에 실패했습니다", "error");
    },
  });

  const handleFormSubmit = async (data: EditProjectFormData) => {
    setTouchedStack(true);
    setTouchedTeammate(true);

    const hasError =
      data.teammateList.every(input => !input.name || !input.job) || data.projectTechStackList.length === 0;

    if (hasError) return;

    const formData = new FormData();
    const thumbnailData = getValues("thumbnail");
    const teammateData = data.teammateList.filter(item => item.name.trim() !== "" && item.job.trim() !== "");
    const projectLinkData = data.projectLinkList.filter(item => item.siteType.trim() !== "" && item.url.trim() !== "");

    const projectRequestDto = {
      title: data.title,
      introduction: data.introduction,
      content: data.content,
      serviceUrl: data.serviceUrl,
      imageType: imageType === "웹" ? "WEB" : "MOBILE",
      projectTechStacks: data.projectTechStackList,
      projectTeammates: teammateData,
      projectLinks: projectLinkData,
    };
    const initialImageUrlList = project?.imageUrlList || [];
    const imageIndexList: number[] = new Array(imageList.length).fill(0);
    const imageFiles: (File | "")[] = new Array(imageList.length).fill("");

    imageList.forEach((image, index) => {
      const initialIndex = initialImageUrlList.findIndex(url => url === image.url);
      if (initialIndex !== -1) {
        imageIndexList[index] = initialIndex + 1;
      } else {
        imageFiles[index] = image.file;
      }
    });

    formData.append("projectRequestDto", new Blob([JSON.stringify(projectRequestDto)], { type: "application/json" }));
    imageFiles.forEach(image => formData.append("images", image));
    formData.append("imageIndexes", JSON.stringify(imageIndexList));
    formData.append("thumbnail", thumbnailData || "");
    formData.append("thumbnailIndex", new Blob([JSON.stringify(thumbnailData ? 0 : 1)], { type: "application/json" }));
    try {
      await putMutation.mutateAsync(formData);
    } catch (error) {
      console.error("Error occurred during mutation", error);
    }
  };

  if (!accessToken) notFound();

  return (
    <>
      <form onSubmit={handleSubmit(handleFormSubmit)} encType="multipart/form-data">
        <div className="mt-8 flex w-full flex-col gap-8">
          <section className="flex w-fit flex-col gap-4">
            <Title title="썸네일" />
            <div>
              <ThumbnailBox setThumbnail={handleThumbnailFile} initialUrl={project?.thumbnailUrl || ""} />
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
            title="프로젝트 이름"
            type="text"
            name="title"
            placeholder="제목을 입력해주세요"
            inputSize="large"
            error={errors.title}
            onChange={e => setValue("title", e.target.value)}
          />
          <Input
            register={register("introduction", {
              required: "소개를 입력해주세요",
              maxLength: {
                value: TITLE_MAX_LENGTH,
                message: `소개는 ${TITLE_MAX_LENGTH}자를 초과할 수 없습니다`,
              },
            })}
            title="소개"
            type="text"
            name="introduction"
            placeholder={`소개를 입력해주세요 (최대 ${TITLE_MAX_LENGTH}자)`}
            inputSize="large"
            error={errors.introduction}
            onChange={e => setValue("introduction", e.target.value)}
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
                maxLength={DESCRIPTION_MAX_LENGTH}
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
            title="프로젝트 링크"
            type="text"
            name="serviceUrl"
            placeholder="http://"
            inputSize="large"
            error={errors.serviceUrl}
            onChange={e => setValue("serviceUrl", e.target.value)}
          />
          <section className="flex flex-col gap-4">
            <Title title="이미지" />
            <div>
              <ProjectImageBox
                setImageType={imageType => setImageType(imageType)}
                handleImageFile={handleImageFile}
                initialImageType={imageType}
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
                setTouchedStack={setTouchedStack}
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
              touchedTeammate={touchedTeammate}
              setTouchedTeammate={setTouchedTeammate}
            />
            {errors.teammateList && <ErrorMessage error={errors.teammateList} />}
          </section>
          <section className="mb-24 flex w-[690px] flex-col gap-4">
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
        <ProgressBox progress={progress} openCancelModal={openCancelModal} />
      </form>
      {isCancelModalOpen && <CancelModal closeModal={closeCancelModal} />}
    </>
  );
}

export default EditProjectContainer;
