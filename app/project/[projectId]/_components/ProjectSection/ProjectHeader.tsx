"use client";
import React from "react";
import { UseQueryResult } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import WishButtonAndCount from "@/app/_components/Button/WishButton";
import { ProjectResponse } from "@/app/_apis/schema/projectResponse";
import { createDate } from "@/app/_utils/createDate";
import { JOB_CATEGORIES_KR } from "@/app/_constants/JobCategoryData";
import useModal from "@/app/_hooks/useModal";
import WarningModal from "@/app/_components/Modal/WarningModal";
import { revalidateTagAction } from "@/app/_utils/revalidationAction";
import { WINDOW_BOUNDARY } from "@/app/_constants/WindowSize";
import useBrowserSize from "@/app/_hooks/useBrowserSize";
import { useProjectDetail } from "@/app/_hooks/reactQuery/useProjectQuery";
import useProjectMutation from "@/app/_hooks/mutations/useProjectMutation";
import MenuDropBox from "../Project/DropBox/MenuDropBox";
import SocialDropBox from "../Project/DropBox/SocialDropBox";

interface Props {
  projectId: number;
}

type JobCategory = keyof typeof JOB_CATEGORIES_KR;

function ProjectHeader({ projectId }: Props) {
  const { openModal: deleteModal, handleModalOpen: openDeleteModal, handleModalClose: closeDeleteModal } = useModal();
  const router = useRouter();

  const { windowWidth } = useBrowserSize();
  const { MB } = WINDOW_BOUNDARY.MAX;
  const { TBC } = WINDOW_BOUNDARY.MIN;

  const { projectDeleteMutation } = useProjectMutation(projectId);

  const { data: project }: UseQueryResult<ProjectResponse, Error> = useProjectDetail(projectId);

  if (!project) return null;

  const handleDeleteModal = () => {
    openDeleteModal();
  };

  const handleDeleteProject = () => {
    revalidateTagAction("projectList");
    projectDeleteMutation.mutate();
    router.push("/main");
    closeDeleteModal();
  };

  const handleProfileClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    event.preventDefault();
    router.push(`/profile/${project.memberId}`);
  };

  return (
    <>
      {deleteModal && (
        <WarningModal mode="delete" handleDeleteClick={handleDeleteProject} closeModal={closeDeleteModal} />
      )}
      <header className="tbr:py-3 pc:-mx-4 pc:py-3">
        <div className="flex justify-between gap-2">
          <h1 className="overflow-hidden text-ellipsis whitespace-nowrap text-lg font-bold text-gray-900">
            {project.title}
          </h1>
          {windowWidth > MB && (
            <section className="flex gap-2">
              <WishButtonAndCount
                projectId={projectId}
                isFavorite={project.isLiked}
                wishCount={project.likeCount}
                colorMode="bright"
              />
              <SocialDropBox projectId={projectId} />
              {project.isMine && <MenuDropBox projectId={projectId} handleDelete={handleDeleteModal} />}
            </section>
          )}
        </div>
        <div className="flex">
          <section className="flex h-6 w-full items-center gap-3">
            <p className="cursor-pointer text-nowrap text-sm font-semibold text-gray-900" onClick={handleProfileClick}>
              {project.authorName}
            </p>
            <p className="text-nowrap text-xs text-blue-500">{JOB_CATEGORIES_KR[project.authorJob as JobCategory]}</p>
            <p className="text-sm text-gray-500">{createDate(project.createdAt)}</p>
          </section>
          {windowWidth < TBC && (
            <section className="flex gap-2">
              <SocialDropBox projectId={projectId} />
              {project.isMine && <MenuDropBox projectId={projectId} handleDelete={handleDeleteModal} />}
            </section>
          )}
        </div>
      </header>
    </>
  );
}

export default ProjectHeader;
