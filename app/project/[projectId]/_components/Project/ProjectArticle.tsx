"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import Button from "@/app/_components/Button/Button";
import DirectionButton from "@/app/_components/Button/DirectionButton";
import { ProjectResponse } from "@/app/_apis/schema/projectResponse";
import { projectQueryKeys } from "@/app/_queryFactory/projectQuery";
import useImageIndex from "@/app/_hooks/useImageIndex";
import LinkSection from "../ProjectSection/LinkSection";

interface Props {
  projectId: number;
}

interface Image {
  width: number;
  style: string;
}

function ProjectArticle({ projectId }: Props) {
  const { index, translate, handlePrev, handleNext } = useImageIndex();
  const { data: project }: UseQueryResult<ProjectResponse, Error> = useQuery(projectQueryKeys.detail(projectId));
  if (!project) return null;

  const IMAGE_TYPE: Record<string, Image> = {
    WEB: { width: 572, style: "w-[572px]" },
    MOBILE: { width: 188, style: "w-[188px]" },
  };

  const { width: imageWidth, style: imageWidthStyle } = IMAGE_TYPE[project.imageType];

  return (
    <article className="flex flex-col gap-4 pc:flex-row pc:gap-24 pc:py-7">
      {/* 이미지 */}
      <div className="flex flex-col justify-between">
        <div className="relative flex">
          {index > 0 && (
            <DirectionButton
              direction="left"
              className="absolute -left-5 top-1/2 z-10 -translate-y-1/2 transition-transform"
              onClick={() => handlePrev(imageWidth)}
            />
          )}
          {index < project.imageUrlList.length - 1 && (
            <DirectionButton
              direction="right"
              className="absolute -right-5 top-1/2 z-10 -translate-y-1/2 transition-transform"
              onClick={() => handleNext(imageWidth, project.imageUrlList.length)}
            />
          )}

          <div
            className={`h-[406px] ${imageWidthStyle} overflow-hidden rounded-xl border border-solid border-gray-300`}>
            <div
              className="flex h-fit w-fit gap-0 duration-500 ease-in-out"
              style={{ transform: `translateX(-${translate}px)` }}>
              {project.imageUrlList.map(image => (
                <div className={`flex h-[406px] ${imageWidthStyle}`} key={image.id}>
                  <Image src={image.url} alt="서비스 프로젝트." width={imageWidth} height={406} priority />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 프로젝트 본문 */}
      <div className="flex flex-col gap-6 pc:justify-between">
        <div className="flex flex-col gap-4">
          <h2 className="text-base font-bold text-gray-600">{project.introductions}</h2>
          <p className="text-overflow-12 whitespace-pre-wrap text-sm text-gray-600">{project.content}</p>
          <Link href={project.serviceUrl} target="_blank">
            <Button bgColor="stroke" buttonSize="normal">
              <p>서비스 바로가기</p>
            </Button>
          </Link>
        </div>
        {project.projectLinks[0]?.siteType && <LinkSection linkList={project.projectLinks} />}
      </div>
    </article>
  );
}

export default ProjectArticle;
