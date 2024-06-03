import { StaticImageData } from "next/image";
import formatViewCount from "@/app/_utils/formViewCount";
import ProjectCardInfo from "./ProjectCardInfo";
import ProjectCard from "./ProjectCard/ProjectCard";
import EmptyCard from "./ProjectCard/EmptyCard";

interface ProjectListProps {
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

function ProjectList({ projectList }: { projectList: ProjectListProps[] }) {
  return (
    <div className="relative grid grid-cols-4 gap-10">
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
