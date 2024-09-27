import Image from "next/image";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ProjectData } from "@/app/_types/ProjectListType";
import { projectQueryKey } from "@/app/_queryFactory/projectQuery";
import { getToken } from "@/app/_utils/handleToken";
import { revalidatePathAction } from "@/app/_utils/revalidationAction";
import { projectApi } from "@/app/_apis/projectApi";
import HoverCard from "./HoverCard";

function ProjectCard({ project }: { project: ProjectData }) {
  const queryClient = useQueryClient();

  const projectPostViewmutation = useMutation({
    mutationFn: () => {
      return projectApi.postProjectView(project.projectId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: projectQueryKey.list().queryKey,
      });
    },
    onError: error => {
      console.error("Error:", error);
    },
  });

  const handlePostView = () => {
    const token = getToken();
    if (token) {
      projectPostViewmutation.mutate();
      revalidatePathAction("/main");
    }
  };

  return (
    <div
      className="group relative aspect-square overflow-hidden rounded-md mb:w-[150px] tbc:w-[200px] tbr:w-[232px]"
      onClick={handlePostView}>
      <HoverCard project={project} />
      <Image fill src={project.thumbnailUrl} alt={project.introduction} sizes="(max-width: 240px)" priority />
    </div>
  );
}

export default ProjectCard;
