"use client";

import React from "react";
import Link from "next/link";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import Button from "@/app/_components/Button/Button";
import { ProjectResponse } from "@/app/_apis/schema/projectResponse";
import { projectQueryKeys } from "@/app/_queryFactory/projectQuery";
import useBrowserSize from "@/app/_hooks/useBrowserSize";
import { WINDOW_BOUNDARY } from "@/app/_constants/WindowSize";
import { IMAGE_TYPE } from "@/app/_constants/ProjectData";
import LinkSection from "../ProjectSection/LinkSection";
import ButtonSlide from "../ImageSlide/ButtonSlide";
import ScrollSlide from "../ImageSlide/ScrollSlide";

interface Props {
  projectId: number;
}

function ProjectArticle({ projectId }: Props) {
  const { data: project }: UseQueryResult<ProjectResponse, Error> = useQuery(projectQueryKeys.detail(projectId));
  const { windowWidth } = useBrowserSize();
  const { TBC } = WINDOW_BOUNDARY.MAX;

  if (!project) return null;

  const { article: articleWidthStyle } = IMAGE_TYPE[project.imageType];

  return (
    <article className="flex flex-row py-7 mb:flex-col mb:gap-4 mb:py-0 tbc:flex-col tbc:gap-4 tbc:py-0 tbr:justify-between tbr:gap-5 pc:gap-24">
      {/* 이미지 */}
      {windowWidth > TBC ? <ButtonSlide project={project} /> : <ScrollSlide project={project} />}

      {/* 프로젝트 본문 */}
      <section className={`flex flex-col justify-between gap-6 pc:${articleWidthStyle} tbr:${articleWidthStyle}`}>
        <div className="flex flex-col gap-4">
          <h2 className="text-base font-bold text-gray-700">{project.introductions}</h2>
          <p className="text-overflow-12 whitespace-pre-wrap text-sm text-gray-700">{project.content}</p>
          <Link href={project.serviceUrl} target="_blank">
            <Button bgColor="stroke" buttonSize="normal">
              <p>서비스 바로가기</p>
            </Button>
          </Link>
        </div>
        {project.projectLinks[0]?.siteType && <LinkSection linkList={project.projectLinks} />}
      </section>
    </article>
  );
}

export default ProjectArticle;
