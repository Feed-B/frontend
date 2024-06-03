import ViewCount from "@/app/mypage/_components/ViewCount";

interface ProjectCardInfoProps {
  projectTitle: string;
  projectSubDescription: string;
  viewCount: number | string;
}

function ProjectCardInfo({ projectTitle, projectSubDescription, viewCount }: ProjectCardInfoProps) {
  return (
    <div className="relative">
      <div className="flex flex-col gap-1">
        <div className="flex items-center justify-between">
          <h6 className="overflow-hidden text-ellipsis whitespace-nowrap font-bold">{projectTitle}</h6>
          <ViewCount viewCount={viewCount} />
        </div>
        <p className="overflow-hidden text-ellipsis whitespace-nowrap">{projectSubDescription}</p>
      </div>
    </div>
  );
}

export default ProjectCardInfo;
