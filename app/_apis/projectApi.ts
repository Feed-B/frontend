import { getHeaders } from "../_constants/HeaderToken";
import httpClient from "./httpClient";
import { EditProjectResponse } from "./schema/projectResponse";
import { ProjectResponse, TeamMemberResponse, TotalRatingResponse } from "./schema/projectResponse";

export const projectApi = {
  getProject: async (projectId: number) => {
    const HEADER = getHeaders();
    return await httpClient().get<ProjectResponse>(`/projects/${projectId}`, {}, HEADER.headers, ["projectDetail"]);
  },
  deleteProject: async (projectId: number) => {
    const HEADER = getHeaders();
    return await httpClient().delete(`/projects/${projectId}`, HEADER.headers);
  },

  getTeamMember: async (projectId: number) => {
    return await httpClient().get<TeamMemberResponse>(`/projects/${projectId}/teammates`, {}, {}, [
      "projectTeamMember",
    ]);
  },
  getTotalRating: async (projectId: number) => {
    return await httpClient().get<TotalRatingResponse>(`/projects/${projectId}/average-rating`);
  },
  postProjectView: async (projectId: number) => {
    const HEADER = getHeaders();
    return await httpClient().postData(`/${projectId}/views`, {}, HEADER.headers);
  },
};

export const addProjectApi = {
  postProject: async (projectData: FormData) => {
    const HEADER = getHeaders();
    return await httpClient().postFormData("/projects", projectData, HEADER.headers);
  },
};

export const editProjectApi = {
  getProject: async (projectId: number) => {
    const HEADER = getHeaders();
    return await httpClient().get<EditProjectResponse>(`/projects/${projectId}/edits`, {}, HEADER.headers);
  },
  putProject: async (projectId: number, projectData: FormData) => {
    const HEADER = getHeaders();
    return await httpClient().putFormData(`/projects/${projectId}`, projectData, HEADER.headers);
  },
};

export const likeProjectApi = {
  postLikeProject: async ({ projectId }: { projectId: number }) => {
    const HEADER = getHeaders();
    return await httpClient().post(`/projects/${projectId}/like`, { "": "" }, HEADER.headers);
  },
  deleteLikeProject: async ({ projectId }: { projectId: number }) => {
    const HEADER = getHeaders();
    return await httpClient().delete(`/projects/${projectId}/unlike`, HEADER.headers);
  },
};
