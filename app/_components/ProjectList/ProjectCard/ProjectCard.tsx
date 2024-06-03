import Image, { StaticImageData } from "next/image";
import HoverCard from "./HoverCard";

interface CardProp {
  id: number;
  titleImage: StaticImageData | string;
  stackList: string[];
  wishCount: number;
  isWish: boolean;
  projectName: string;
  subDescription: string;
  description: string;
}

function ProjectCard({ project }: { project: CardProp }) {
  return (
    <div className="group relative aspect-square min-h-[220px] min-w-[220px] overflow-hidden rounded-md">
      <HoverCard isWishProject={project.isWish} wishCount={project.wishCount} stackList={project.stackList} />
      <Image fill src={project.titleImage} alt={project.subDescription} />
    </div>
  );
}

export default ProjectCard;
