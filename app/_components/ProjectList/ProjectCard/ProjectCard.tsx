import Image from "next/image";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ProjectData } from "@/app/_apis/schema/projectResponse";
import { projectApi } from "@/app/_apis/project";
import { projectQueryKeys } from "@/app/_queryFactory/projectQuery";
import HoverCard from "./HoverCard";

function ProjectCard({ project }: { project: ProjectData }) {
  const queryClient = useQueryClient();

  const projectListQueryKey = projectQueryKeys.list({ page: 1, size: 16 });

  const projectPostViewmutation = useMutation({
    mutationFn: () => {
      return projectApi.postProjectView(project.projectId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: projectListQueryKey.queryKey,
      });
    },
    onError: error => {
      console.error("Error:", error);
    },
  });

  const handlePostView = () => {
    projectPostViewmutation.mutate();
  };

  return (
    <div className="group relative aspect-square overflow-hidden rounded-md" onClick={handlePostView}>
      <HoverCard project={project} />
      <Image fill src={project.thumbnailUrl} alt={project.introduction} sizes="(max-width: 240px)" priority />
    </div>
  );
}

export default ProjectCard;
