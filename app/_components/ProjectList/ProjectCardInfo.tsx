interface ProjectCardInfoProps {
  projectTitle: string;
  projectSubDescription: string;
}

function ProjectCardInfo({ projectTitle, projectSubDescription }: ProjectCardInfoProps) {
  return (
    <div className="flex w-[21rem] flex-col gap-1">
      <h6 className="overflow-hidden text-ellipsis whitespace-nowrap font-bold">{projectTitle}</h6>
      <p className="overflow-hidden text-ellipsis whitespace-nowrap">{projectSubDescription}</p>
    </div>
  );
}

export default ProjectCardInfo;
