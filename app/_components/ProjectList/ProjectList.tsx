import { StaticImageData } from "next/image";
import formatViewCount from "@/app/_utils/formViewCount";
import ProjectCardInfo from "./ProjectCardInfo";
import ProjectCard from "./ProjectCard/ProjectCard";
import EmptyCard from "./ProjectCard/EmptyCard";

interface ProjectListResponse {
  id: number;
  titleImage: string | StaticImageData;
  stackList: string[];
  wishCount: number;
  isWish: boolean;
  projectName: string;
  subDescription: string;
  description: string;
  viewCount: number;
}

interface ProjectListProps {
  projectList: ProjectListResponse[];
  gridCount?: number;
}

function ProjectList({ projectList, gridCount = 4 }: ProjectListProps) {
  return (
    <div className={`relative grid grid-cols-${gridCount} gap-10`}>
      {projectList.length !== 0 ? (
        projectList.map(project => {
          return (
            <div className="flex flex-col gap-2.5" key={project.id}>
              <ProjectCard project={project} />
              <ProjectCardInfo
                projectTitle={project.projectName}
                projectSubDescription={project.subDescription}
                viewCount={formatViewCount(project.viewCount)}
              />
            </div>
          );
        })
      ) : (
        <EmptyCard />
      )}
    </div>
  );
}

export default ProjectList;
