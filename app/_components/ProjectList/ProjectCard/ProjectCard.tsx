import Image from "next/image";
import { ProjectData } from "@/app/_apis/schema/projectResponse";
import HoverCard from "./HoverCard";

function ProjectCard({ project }: { project: ProjectData }) {
  return (
    <div className="group relative aspect-square overflow-hidden rounded-md">
      <HoverCard isWishProject={project.isLiked} wishCount={project.likeCount} stackList={project.stackList} />
      <Image fill src={project.thumbnailUrl} alt={project.introduction} sizes="(max-width: 240px)" />
    </div>
  );
}

export default ProjectCard;
