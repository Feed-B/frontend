"use client";

import Link from "next/link";
import { RefObject } from "react";
import { ProjectListResponse } from "@/app/_apis/schema/projectListResponse";
import formatViewCount from "@/app/_utils/formViewCount";
import ProjectCardInfo from "./ProjectCardInfo";
import ProjectCard from "./ProjectCard/ProjectCard";
import EmptyCard from "./ProjectCard/EmptyCard";

interface ProjectListProp {
  projectList: ProjectListResponse[] | undefined;
  lastRef?: RefObject<HTMLDivElement>;
}

function ProjectList({ projectList, lastRef }: ProjectListProp) {
  return (
    <div className="relative grid grid-cols-4 gap-4 mb:grid-cols-2 mb:gap-5 tbc:grid-cols-2 tbc:gap-5 tbr:grid-cols-3 tbr:gap-5">
      {projectList && projectList[0].content.length > 0 ? (
        projectList.map(project =>
          project.content.map(project => (
            <Link
              href={`/project/${project.projectId}`}
              className="flex cursor-pointer flex-col gap-2.5 tbc:mb-5 tbr:mb-7"
              key={project.projectId}>
              <ProjectCard project={project} />
              <ProjectCardInfo
                projectTitle={project.projectTitle}
                projectSubDescription={project.introduction}
                viewCount={formatViewCount(project.viewCount, 9999)}
              />
            </Link>
          ))
        )
      ) : (
        <EmptyCard />
      )}
      <div className="absolute bottom-0" ref={lastRef} />
    </div>
  );
}

export default ProjectList;
