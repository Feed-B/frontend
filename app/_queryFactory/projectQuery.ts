import { createQueryKeys } from "@lukemorales/query-key-factory";

export const projectQueryKey = createQueryKeys("project", {
  list: () => ["projectList"],
  detail: (projectId: number) => ["projectDetail", projectId],
  edit: () => ["eidtProject"],
  myProject: () => ["myProjectList"],
  likeProject: () => ["LikeProjectList"],
  teamMember: (projectId: number) => ["projectDetail", "teamMember", projectId],
  averageRating: (projectId: number) => ["projectDetail", "average-rating", projectId],
});
