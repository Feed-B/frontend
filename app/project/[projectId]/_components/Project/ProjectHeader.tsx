"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { useMutation, useQuery, UseQueryResult, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import kebabIcon from "@/public/icons/kebab.svg";
import useToggleHook from "@/app/_hooks/useToggleHook";
import WishButtonAndCount from "@/app/_components/WishButtonAndCount/WishButtonAndCount";
import DropDown from "@/app/_components/DropDown/DropDown";
import useOutsideClick from "@/app/_hooks/useOutsideClick";
import { ProjectResponse } from "@/app/_apis/schema/projectResponse";
import { projectQueryKeys } from "@/app/_queryFactory/projectQuery";
import { createDate } from "@/app/_utils/createDate";
import { JOB_CATEGORIES_KR } from "@/app/_constants/JobCategoryData";
import { projectApi } from "@/app/_apis/project";
import { useToast } from "@/app/_context/ToastContext";
import useModal from "@/app/_hooks/useModal";
import DeleteModal from "@/app/_components/WarningModal/DeleteModal";
import SocialDropBox from "../SocialDropBox/SocialDropBox";

interface Props {
  projectId: number;
}

type JobCategory = keyof typeof JOB_CATEGORIES_KR;

function ProjectHeader({ projectId }: Props) {
  const { isOpen, toggleState } = useToggleHook();
  const { addToast } = useToast();
  const { openModal: deleteModal, handleModalOpen: openDeleteModal, handleModalClose: closeDeleteModal } = useModal();

  const queryClient = useQueryClient();
  const router = useRouter();

  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useOutsideClick(dropdownRef, toggleState, buttonRef);

  const mutation = useMutation({
    mutationFn: () => {
      return projectApi.deleteProject(projectId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: projectQueryKeys.list({}).queryKey,
      });
      addToast("프로젝트가 삭제되었습니다", "success");
    },
    onError: error => {
      console.error("Error:", error);
      addToast("프로젝트 삭제 오류가 발생했습니다", "error");
    },
  });

  const { data: project }: UseQueryResult<ProjectResponse, Error> = useQuery(projectQueryKeys.detail(projectId));
  if (!project) return null;

  const handelDeleteModal = () => {
    openDeleteModal();
    toggleState();
  };

  const handleDeleteProject = () => {
    mutation.mutate();
    router.push("/main");
    closeDeleteModal();
  };

  return (
    <>
      {deleteModal && <DeleteModal handleDeleteClick={handleDeleteProject} closeModal={closeDeleteModal} />}
      <header className="px-4 py-3">
        <div className="flex justify-between gap-2">
          <h1 className="overflow-hidden text-ellipsis whitespace-nowrap text-2xl font-bold text-gray-900">
            {project.title}
          </h1>
          <div className="flex gap-2">
            <WishButtonAndCount
              projectId={projectId}
              isFavorite={project.isLiked}
              wishCount={project.likeCount}
              colorMode="bright"
            />
            <SocialDropBox projectId={projectId} />
            {project.isMine && (
              <>
                <button className="relative" type="button" onClick={toggleState} ref={buttonRef}>
                  <Image
                    className="cursor-pointer rounded-lg hover:bg-gray-100"
                    src={kebabIcon}
                    alt="프로젝트 메뉴."
                    width={24}
                    height={32}
                    priority
                  />
                </button>
                {isOpen && (
                  <DropDown className="w-fit translate-x-10 translate-y-10" itemRef={dropdownRef}>
                    <DropDown.LinkItem href={`/project/${projectId}/edit`}>수정</DropDown.LinkItem>
                    <DropDown.TextItem onClick={handelDeleteModal}>삭제</DropDown.TextItem>
                  </DropDown>
                )}
              </>
            )}
          </div>
        </div>
        <div className="flex h-6 w-full items-center gap-3">
          <p className="text-sm font-semibold text-gray-900">{project.authorName}</p>
          <p className="text-xs text-blue-500">{JOB_CATEGORIES_KR[project.authorJob as JobCategory]}</p>
          <p className="text-sm text-gray-500">{createDate(project.createdAt)}</p>
        </div>
      </header>
    </>
  );
}

export default ProjectHeader;
