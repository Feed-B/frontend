import Image from "next/image";
import { ProjectData } from "@/app/_types/ProjectListType";
import { getToken } from "@/app/_utils/handleToken";
import { revalidatePathAction } from "@/app/_utils/revalidationAction";
import useProjectMutation from "@/app/_hooks/mutations/useProjectMutation";
import HoverCard from "./HoverCard";

function ProjectCard({ project }: { project: ProjectData }) {
  const { projectPostViewMutation } = useProjectMutation(project.projectId);

  const handlePostView = () => {
    const token = getToken();
    if (token) {
      projectPostViewMutation.mutate();
      revalidatePathAction("/main");
    }
  };

  return (
    <div
      className="group relative aspect-square overflow-hidden rounded-md mb:w-[150px] tbc:w-[200px] tbr:w-[232px]"
      onClick={handlePostView}>
      <HoverCard project={project} />
      <Image fill src={project.thumbnailUrl} alt={project.introduction} sizes="(max-width: 240px)" priority />
    </div>
  );
}

export default ProjectCard;
