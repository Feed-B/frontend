import { getHeaders } from "../_constants/HeaderToken";
import httpClient from "./httpClient";
import { ProjectResponse, TeamMemberResponse, TotalRatingResponse } from "./schema/projectResponse";

export const projectApi = {
  getProject: async (projectId: number) => {
    const HEADER = getHeaders();
    return await httpClient().get<ProjectResponse>(`/projects/${projectId}`, {}, HEADER.headers, ["projectDetail"]);
  },
  getTeamMember: async (projectId: number) => {
    return await httpClient().get<TeamMemberResponse>(`/projects/${projectId}/teammates`, {}, {}, [
      "projectTeamMember",
    ]);
  },
  getTotalRating: async (projectId: number) => {
    return await httpClient().get<TotalRatingResponse>(`/projects/${projectId}/average-rating`);
  },
  deleteProject: async (projectId: number) => {
    const HEADER = getHeaders();
    return await httpClient().delete(`/projects/${projectId}`, HEADER.headers);
  },
  postProjectView: async (projectId: number) => {
    const HEADER = getHeaders();
    return await httpClient().postData(`/${projectId}/views`, {}, HEADER.headers);
  },
};
