"use client";
import Link from "next/link";
import { RefObject } from "react";
import formatViewCount from "@/app/_utils/formViewCount";
import { ProjectData } from "@/app/_apis/schema/projectResponse";
import ProjectCardInfo from "./ProjectCardInfo";
import ProjectCard from "./ProjectCard/ProjectCard";
import EmptyCard from "./ProjectCard/EmptyCard";

interface ProjectListProp {
  projectList: ProjectData[];
  lastRef?: RefObject<HTMLDivElement>;
}

function ProjectList({ projectList, lastRef }: ProjectListProp) {
  return (
    <div className="relative grid grid-cols-4 gap-4">
      {projectList && projectList.length > 0 ? (
        projectList.map(project => (
          <Link
            href={`/project/${project.projectId}`}
            className="flex cursor-pointer flex-col gap-2.5"
            key={project.projectId}>
            <ProjectCard project={project} />
            <ProjectCardInfo
              projectTitle={project.projectTitle}
              projectSubDescription={project.introduction}
              viewCount={formatViewCount(project.viewCount, 9999)}
            />
          </Link>
        ))
      ) : (
        <EmptyCard />
      )}
      <div className="absolute bottom-0" ref={lastRef} />
    </div>
  );
}

export default ProjectList;
