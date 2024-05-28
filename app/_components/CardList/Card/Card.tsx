import Image, { StaticImageData } from "next/image";
import HoverCard from "./HoverCard";

interface CardProp {
  projectTitle: string;
  subDescription: string;
  titleImage: StaticImageData;
  stackList: string[];
  key: number;
}

function Card({ projectTitle, subDescription, titleImage, stackList, key }: CardProp) {
  return (
    <div key={key} className="flex flex-col gap-2.5">
      <div className="group relative min-h-[320px] min-w-[320px] overflow-hidden rounded-md">
        <div className="absolute inset-0 z-30 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          <HoverCard stackList={stackList} />
        </div>
        <Image fill src={titleImage} alt={subDescription} />
      </div>
      <div className="flex w-[21rem] flex-col gap-1">
        <h6 className="overflow-hidden text-ellipsis whitespace-nowrap font-bold">{projectTitle}</h6>
        <p className="overflow-hidden text-ellipsis whitespace-nowrap">{subDescription}</p>
      </div>
    </div>
  );
}

export default Card;
