"use client";

import Link from "next/link";
import { RefObject } from "react";
import formatViewCount from "@/app/_utils/formViewCount";
import { ProjectListResponse } from "@/app/_types/ProjectListDataType";
import ProjectCardInfo from "./ProjectCardInfo";
import ProjectCard from "./ProjectCard/ProjectCard";
import EmptyCard from "./ProjectCard/EmptyCard";

interface ProjectListProp {
  projectList: ProjectListResponse[];
  lastRef?: RefObject<HTMLDivElement>;
}

function ProjectList({ projectList, lastRef }: ProjectListProp) {
  return (
    <div className="relative grid grid-cols-4 gap-4">
      {projectList.length > 0 ? (
        projectList.map((project, index) => (
          <Link href={`/project/${project.id}`} className="flex cursor-pointer flex-col gap-2.5" key={project.id}>
            <ProjectCard project={project} />
            <ProjectCardInfo
              ref={projectList.length - 1 === index ? lastRef : null}
              projectTitle={project.projectTitle}
              projectSubDescription={project.subDescription}
              viewCount={formatViewCount(project.viewCount, 9999)}
            />
          </Link>
        ))
      ) : (
        <EmptyCard />
      )}
    </div>
  );
}

export default ProjectList;
