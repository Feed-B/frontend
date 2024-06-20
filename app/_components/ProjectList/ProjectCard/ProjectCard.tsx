import Image from "next/image";
import { ProjectResponse } from "@/app/_types/ProjectListDataType";
import HoverCard from "./HoverCard";

function ProjectCard({ project }: { project: ProjectResponse }) {
  return (
    <div className="group relative aspect-square overflow-hidden rounded-md">
      <HoverCard isWishProject={project.isLiked} wishCount={project.likeCount} stackList={project.stackList} />
      <Image fill src={project.thumbnailUrl} alt={project.introduction} />
    </div>
  );
}

export default ProjectCard;
