import { HEADER } from "../_constants/HeaderToken";
import { ProjectListParams } from "../_types/ProjectListDataType";
import httpClient from "./httpClient";
import {
  ProjectResponse,
  ProjectResponseType,
  TeamMemberResponse,
  TotalRatingResponse,
} from "./schema/projectResponse";

export const projectApi = {
  getProjectList: async ({
    page = 1,
    size = 12,
    limit = 0,
    searchString = "",
    projectTechStacks = [],
    sortCondition = "RECENT",
  }: ProjectListParams) => {
    return await httpClient().get<ProjectResponseType>(
      "/projects",
      {
        sortCondition,
        projectTechStacks,
        searchString,
        page,
        size,
        limit,
      },
      HEADER.applicationHeaders
    );
  },

  getProject: async (projectId: number) => {
    return await httpClient().get<ProjectResponse>(`/projects/${projectId}`, {}, HEADER.headers);
  },
  getTeamMember: async (projectId: number) => {
    return await httpClient().get<TeamMemberResponse>(`/projects/${projectId}/teammates`);
  },
  getTotalRating: async (projectId: number) => {
    return await httpClient().get<TotalRatingResponse>(`/projects/${projectId}/average-rating`);
  },
  deleteProject: async (projectId: number) => {
    return await httpClient().delete(`/projects/${projectId}`, HEADER.headers);
  },
  postProjectView: async (projectId: number) => {
    return await httpClient().post(`/${projectId}/views`, {}, HEADER.headers);
  },
};
