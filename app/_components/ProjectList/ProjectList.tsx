"use client";

import Link from "next/link";
import { useEffect } from "react";
import formatViewCount from "@/app/_utils/formViewCount";
import { ProjectListResponse } from "@/app/_types/ProjectListDataType";
import { useIntersectionObserver } from "@/app/_hooks/useIntersectionObserver";
import ProjectCardInfo from "./ProjectCardInfo";
import ProjectCard from "./ProjectCard/ProjectCard";
import EmptyCard from "./ProjectCard/EmptyCard";

function ProjectList({ projectList }: { projectList: ProjectListResponse }) {
  const { targetRef: lastCardInfo, isVisible } = useIntersectionObserver<HTMLDivElement>({ threshold: 1 });
  useEffect(() => {
    console.log(isVisible ? "더 보여줘" : "아직 더 있어");
  }, [isVisible]);
  return (
    <div className="relative grid grid-cols-4 gap-4">
      {projectList.content.length > 0 ? (
        projectList.content.map((project, index) => (
          <Link
            href={`/project/${project.projectId}`}
            className="flex cursor-pointer flex-col gap-2.5"
            key={project.projectId}>
            <ProjectCard project={project} />
            <ProjectCardInfo
              ref={projectList.content.length - 1 === index ? lastCardInfo : null}
              projectTitle={project.projectTitle}
              projectSubDescription={project.introduction}
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
