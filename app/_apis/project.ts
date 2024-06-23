import { ProjectListParams } from "../_types/ProjectListDataType";
import httpClient from "./httpClient";
import { ProjectResponse, ProjectResponseType, RatingsResponse } from "./schema/projectResponse";

export const projectApi = {
  getProjectList: async ({
    page = 1,
    size = 12,
    limit = 0,
    searchString = "",
    projectTechStacks = [],
    sortCondition = "RECENT",
  }: ProjectListParams) => {
    return await httpClient().get<ProjectResponseType>("/projects", {
      sortCondition,
      projectTechStacks,
      searchString,
      page,
      size,
      limit,
    });
  },
  getProject: async (projectId: number) => {
    return await httpClient().get<ProjectResponse>(`/projects/${projectId}`);
  },
  getTeamMember: async (projectId: number) => {
    return await httpClient().get<ProjectResponse>(`/projects/${projectId}/teammates`);
  },
  getRatings: async (projectId: number, userId: number) => {
    return await httpClient().get<RatingsResponse>(`/projects/${projectId}/ratings/${userId}`);
  },
};
