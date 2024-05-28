import Image, { StaticImageData } from "next/image";

interface CardProp {
  projectTitle: string;
  subDescription: string;
  titleImage: StaticImageData;
  key: number;
}

function Card({ projectTitle, subDescription, titleImage, key }: CardProp) {
  return (
    <div key={key} className="flex flex-col gap-2.5">
      <Image width={320} height={320} src={titleImage} alt={subDescription} className="relative rounded-md" />
      <div className="flex w-[21rem] flex-col gap-1">
        <h6 className="overflow-hidden text-ellipsis whitespace-nowrap font-bold">{projectTitle}</h6>
        <p className="overflow-hidden text-ellipsis whitespace-nowrap">{subDescription}</p>
      </div>
    </div>
  );
}

export default Card;
