import Image from "next/image";
import { ProjectListResponse } from "@/app/_types/ProjectListDataType";
import HoverCard from "./HoverCard";

function ProjectCard({ project }: { project: ProjectListResponse }) {
  return (
    <div className="group relative aspect-square overflow-hidden rounded-md">
      <HoverCard isWishProject={project.isWish} wishCount={project.wishCount} stackList={project.stackList} />
      <Image sizes="fill" src={project.titleImage} alt={project.subDescription} />
    </div>
  );
}

export default ProjectCard;
