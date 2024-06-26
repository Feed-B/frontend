import { createQueryKeys } from "@lukemorales/query-key-factory";
import { projectApi } from "../_apis/project";
import { ProjectListParams } from "../_types/ProjectListDataType";

export const projectQueryKeys = createQueryKeys("project", {
  list: (props: ProjectListParams) => ({
    queryKey: ["projectList"],
    queryFn: async () => await projectApi.getProjectList({ ...props }),
  }),
  detail: (projectId: number) => ({
    queryKey: ["projectDetail"],
    queryFn: async () => await projectApi.getProject(projectId),
  }),
  teamMember: (projectId: number) => ({
    queryKey: ["teamMember"],
    queryFn: async () => await projectApi.getTeamMember(projectId),
  }),
  ratings: (projectId: number, userId: number) => ({
    queryKey: ["rating"],
    queryFn: async () => await projectApi.getRatings(projectId, userId),
  }),
  totalRating: (projectId: number) => ({
    queryKey: ["totalRating"],
    queryFn: async () => await projectApi.getTotalRating(projectId),
  }),
});
