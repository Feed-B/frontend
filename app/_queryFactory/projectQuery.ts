import { createQueryKeys } from "@lukemorales/query-key-factory";
import { projectApi } from "../_apis/projectApi";
import { projectListApi } from "../_apis/projectListApi";
import { ProjectListParams } from "../_types/ProjectListType";

export const projectQueryKeys = createQueryKeys("project", {
  list: (props: ProjectListParams, token?: string) => ({
    queryKey: ["projectList"],
    queryFn: async () => await projectListApi.getProjectList({ ...props }, token),
  }),
  detail: (projectId: number) => ({
    queryKey: ["projectDetail"],
    queryFn: async () => await projectApi.getProject(projectId),
  }),
  teamMember: (projectId: number) => ({
    queryKey: ["teamMember"],
    queryFn: async () => await projectApi.getTeamMember(projectId),
  }),
  totalRating: (projectId: number) => ({
    queryKey: ["totalRating"],
    queryFn: async () => await projectApi.getTotalRating(projectId),
  }),
});

export const projectQueryKey = createQueryKeys("project", {
  list: () => ["projectList"],
  detail: (projectId: number) => ["projectDetail", projectId],
  edit: () => ["eidtProject"],
  myProject: () => ["myProjectList"],
  likeProject: () => ["LikeProjectList"],
});
