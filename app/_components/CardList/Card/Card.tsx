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

function Card({ project }: { project: CardProp }) {
  return (
    <div className="flex flex-col gap-2.5">
      <div className="group relative min-h-[320px] min-w-[320px] overflow-hidden rounded-md">
        <div className="absolute inset-0 z-30 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          <HoverCard isWishProject={project.isWish} wishCount={project.wishCount} stackList={project.stackList} />
        </div>
        <Image fill src={project.titleImage} alt={project.subDescription} />
      </div>
      <div className="flex w-[21rem] flex-col gap-1">
        <h6 className="overflow-hidden text-ellipsis whitespace-nowrap font-bold">{project.projectName}</h6>
        <p className="overflow-hidden text-ellipsis whitespace-nowrap">{project.subDescription}</p>
      </div>
    </div>
  );
}

export default Card;
