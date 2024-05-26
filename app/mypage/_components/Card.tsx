interface CardProp {
  projectTitle: string;
  subDescription: string;
  titleImage: string;
  key: number;
}

function Card({ projectTitle, subDescription, titleImage, key }: CardProp) {
  return (
    <div key={key} className="flex flex-col gap-2.5">
      <div className="relative min-h-[20rem] min-w-[20rem] overflow-hidden rounded-md bg-cover bg-center">
        <img src={titleImage} alt={subDescription} className="absolute bottom-0 left-0 right-0 top-0" />
      </div>
      <div className="flex w-[21rem] flex-col gap-1">
        <h6 className="overflow-hidden text-ellipsis whitespace-nowrap font-bold">{projectTitle}</h6>
        <p className="overflow-hidden text-ellipsis whitespace-nowrap">{subDescription}</p>
      </div>
    </div>
  );
}

export default Card;
