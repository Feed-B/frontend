"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import shortcutIcon from "@/public/icons/doubleArrowRight.svg";
import Button from "@/app/_components/Button/Button";
import DirectionButton from "@/app/_components/Button/DirectionButton";
import { ProjectResponse } from "@/app/_apis/schema/projectResponse";
import { projectQueryKeys } from "@/app/_queryFactory/projectQuery";
import useImageIndex from "@/app/_hooks/useImageIndex";
import LinkSection from "../ProjectSection/LinkSection";

interface Props {
  projectId: number;
}

function ProjectArticle({ projectId }: Props) {
  const { index, handlePrev, handleNext } = useImageIndex();
  const { data: project }: UseQueryResult<ProjectResponse, Error> = useQuery(projectQueryKeys.detail(projectId));
  if (!project) return null;

  return (
    <article className="flex justify-between gap-24 px-8 py-7">
      <div className="flex flex-col justify-between">
        <div className="flex flex-col gap-4">
          <h2 className="text-base font-medium text-gray-900">{project.introductions}</h2>
          <p className="text-overflow-12 text-sm text-gray-600">{project.content}</p>
          <Link href={project.serviceUrl} target="_blank">
            <Button bgColor="yellow" className="flex items-center gap-1 p-3" buttonSize={"small"}>
              <p>서비스 바로가기</p>
              <Image src={shortcutIcon} alt="배포 사이트 바로가기." width={12} priority />
            </Button>
          </Link>
        </div>
        <LinkSection linkList={project.projectLinks} />
      </div>
      <div className="relative flex">
        {index > 0 && (
          <DirectionButton
            direction="left"
            className="absolute -left-5 top-1/2 z-10 -translate-y-1/2"
            onClick={() => handlePrev()}
          />
        )}
        {index < project.imageUrlList.length - 1 && (
          <DirectionButton
            direction="right"
            className="absolute -right-5 top-1/2 z-10 -translate-y-1/2"
            onClick={() => handleNext(project.imageUrlList.length)}
          />
        )}
        {project.imageType === "WEB" ? (
          <div className="relative h-[406px] w-[572px] border border-solid border-gray-300">
            <Image src={project.imageUrlList[index].url} alt="웹 서비스 프로젝트." fill sizes="max-width" priority />
          </div>
        ) : (
          <div className="relative h-[406px] w-[188px] border border-solid border-gray-300">
            <Image src={project.imageUrlList[index].url} alt="앱 서비스 프로젝트." fill sizes="max-width" priority />
          </div>
        )}
      </div>
    </article>
  );
}

export default ProjectArticle;
