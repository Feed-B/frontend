"use client";

import React from "react";
import Image from "next/image";
import { useTotalProjectList } from "@/app/_hooks/reactQuery/useProjectQuery";

function LandingProjectList() {
  const { data } = useTotalProjectList({ page: 1, size: 12, sortCondition: "LIKES" });

  if (!data) {
    return null;
  }
  return (
    <div className="overflow-hidde group absolute bottom-[300px] left-0 mb:bottom-[0px] tbc:bottom-[0px] tbr:bottom-[0px]">
      <div className="group-hover:paused flex animate-loop-scroll gap-6 pr-6">
        {[...data.content, ...data.content].map((project, index) => (
          <div
            key={`${project.projectId}-${index}`}
            className="relative h-[225px] w-[225px] overflow-hidden rounded-md mb:h-[125px] mb:w-[125px] tbc:h-[150px] tbc:w-[150px]">
            <Image src={project.thumbnailUrl} alt="프로젝트 썸네일" priority fill sizes="(max-width: 240px)" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default LandingProjectList;
