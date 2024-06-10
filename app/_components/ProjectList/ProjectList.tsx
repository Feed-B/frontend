import Link from "next/link";
import formatViewCount from "@/app/_utils/formViewCount";
import { ProjectListResponse } from "@/app/_types/ProjectListDataType";
import ProjectCardInfo from "./ProjectCardInfo";
import ProjectCard from "./ProjectCard/ProjectCard";
import EmptyCard from "./ProjectCard/EmptyCard";

function ProjectList({ projectList }: { projectList: ProjectListResponse[] }) {
  return (
    <div className="relative grid grid-cols-4 gap-4">
      {projectList.length > 0 ? (
        projectList.map(project => (
          <Link href={`/project/${project.id}`} className="flex cursor-pointer flex-col gap-2.5" key={project.id}>
            <ProjectCard project={project} />
            <ProjectCardInfo
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
