import { createQueryKeys } from "@lukemorales/query-key-factory";
import { projectApi } from "../_apis/project";
import { ProjectListParams } from "../_types/ProjectListDataType";

export const projectQueryKeys = createQueryKeys("project", {
  list: (props: ProjectListParams) => ({
    queryKey: ["projectList"],
    queryFn: () => projectApi.getProjectList({ ...props }),
  }),
  detail: (projectId: number) => ({
    queryKey: ["projectDetail"],
    queryFn: () => projectApi.getProject(projectId),
  }),
  teamMember: (projectId: number) => ({
    queryKey: ["teamMember"],
    queryFn: () => projectApi.getTeamMember(projectId),
  }),
  ratings: (projectId: number, userId: number) => ({
    queryKey: ["teamMember"],
    queryFn: () => projectApi.getRatings(projectId, userId),
  }),
  totalRating: (projectId: number) => ({
    queryKey: ["totalRating"],
    queryFn: () => projectApi.getTotalRating(projectId),
  }),
});
