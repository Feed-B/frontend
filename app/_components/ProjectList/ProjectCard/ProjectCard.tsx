import Image from "next/image";
import { ProjectData } from "@/app/_apis/schema/projectResponse";
import HoverCard from "./HoverCard";

function ProjectCard({ project }: { project: ProjectData }) {
  return (
    <div className="group relative aspect-square overflow-hidden rounded-md">
      <HoverCard project={project} />
      <Image fill src={project.thumbnailUrl} alt={project.introduction} sizes="(max-width: 240px)" priority />
    </div>
  );
}

export default ProjectCard;
