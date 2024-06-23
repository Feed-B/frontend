"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { useMutation, useQuery, UseQueryResult, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import shareIcon from "@/public/icons/share.svg";
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

interface Props {
  projectId: number;
}

type JobCategory = keyof typeof JOB_CATEGORIES_KR;

function ProjectHeader({ projectId }: Props) {
  const { isOpen, toggleState } = useToggleHook();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const queryClient = useQueryClient();
  const router = useRouter();
  useOutsideClick(dropdownRef, toggleState);

  const mutation = useMutation({
    mutationFn: () => {
      return projectApi.deleteProject(projectId);
    },
    onSuccess: () => {
      queryClient.removeQueries({
        queryKey: ["project", "detail", "projectDetail", projectId],
      });
    },
  });

  const { data: project }: UseQueryResult<ProjectResponse, Error> = useQuery(projectQueryKeys.detail(projectId));
  if (!project) return null;

  const handleDeleteProject = () => {
    mutation.mutate();
    router.push("/main");
  };

  return (
    <header className="px-4 py-3">
      <div className="flex justify-between gap-2">
        <h1 className="overflow-hidden text-ellipsis whitespace-nowrap text-2xl font-bold text-gray-900">
          {project.title}
        </h1>
        <div className="flex gap-2">
          <WishButtonAndCount projectId={projectId} isFavorite={true} wishCount={3} colorMode="bright" />
          <Image src={shareIcon} alt="프로젝트 공유하기." width={24} height={32} priority />
          {project.isMine && (
            <>
              <Image
                className="relative"
                src={kebabIcon}
                alt="프로젝트 메뉴."
                width={24}
                height={32}
                priority
                onClick={toggleState}
              />
              {isOpen && (
                <DropDown className="w-fit translate-x-10 translate-y-10" itemRef={dropdownRef}>
                  <DropDown.LinkItem href={`/project/${projectId}/edit`}>수정</DropDown.LinkItem>
                  <DropDown.TextItem onClick={handleDeleteProject}>삭제</DropDown.TextItem>
                </DropDown>
              )}
            </>
          )}
        </div>
      </div>
      <div className="flex w-full items-center gap-3">
        <p className="text-sm font-semibold text-gray-900">{project.authorName}</p>
        <p className="text-xs text-blue-500">{JOB_CATEGORIES_KR[project.authorJob as JobCategory]}</p>
        <p className="text-sm text-gray-500">{createDate(project.createdAt)}</p>
      </div>
    </header>
  );
}

export default ProjectHeader;
