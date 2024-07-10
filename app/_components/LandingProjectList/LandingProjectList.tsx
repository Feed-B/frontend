"use client";

import { useQuery } from "@tanstack/react-query";
import React from "react";
import Image from "next/image";
import { projectQueryKeys } from "@/app/_queryFactory/projectQuery";

function LandingProjectList() {
  const { data } = useQuery(projectQueryKeys.list({ page: 1, size: 12, sortCondition: "LIKES" }));

  if (!data) {
    return null;
  }
  return (
    <div className="overflow-hidde group absolute bottom-10 left-0">
      <div className="group-hover:paused flex animate-loop-scroll gap-6 pr-6">
        {[...data.content, ...data.content].map((project, index) => (
          <div
            key={`${project.projectId}-${index}`}
            className="relative h-[225px] w-[225px] overflow-hidden rounded-md">
            <Image src={project.thumbnailUrl} alt="프로젝트 썸네일" priority fill sizes="(max-width: 240px)" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default LandingProjectList;
