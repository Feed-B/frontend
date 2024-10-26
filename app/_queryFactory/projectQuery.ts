import { createQueryKeys } from "@lukemorales/query-key-factory";

export const projectQueryKey = createQueryKeys("project", {
  list: () => ["projectList"],
  detail: (projectId: number) => ["projectDetail", projectId],
  edit: () => ["editProject"],
  myProject: () => ["myProjectList"],
  likeProject: () => ["likeProjectList"],
  teamMember: (projectId: number) => ["projectDetail", "teamMember", projectId],
  averageRating: (projectId: number) => ["projectDetail", "average-rating", projectId],
});
